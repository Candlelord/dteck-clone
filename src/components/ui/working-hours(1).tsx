"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

type WorkingHoursProps = {
  className?: string;
  variant?: "light" | "dark";
};

type DaySchedule = {
  day: string;
  hours: string;
  isToday: boolean;
};

export default function WorkingHours({ className = "", variant = "light" }: WorkingHoursProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  const workingHours = [
    { day: "Monday", hours: "8:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
    { day: "Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 8:00 PM" },
  ];

  const scheduleWithToday: DaySchedule[] = workingHours.map((item) => {
    const today = currentTime ? currentTime.toLocaleDateString('en-US', { weekday: 'long' }) : '';
    return {
      ...item,
      isToday: item.day === today,
    };
  });

  useEffect(() => {
    // Set current client-side time
    setCurrentTime(new Date());

    // Update status initially
    updateOpenStatus();

    // Set up interval to check status every minute
    const interval = setInterval(updateOpenStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  const updateOpenStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Convert to minutes since midnight for easier comparison
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    // Opening time: 8:00 AM = 8 * 60 = 480 minutes
    const openingTimeInMinutes = 8 * 60;

    // Closing time: 8:00 PM = 20 * 60 = 1200 minutes
    const closingTimeInMinutes = 20 * 60;

    // Check if current time is within opening hours
    setIsOpen(currentTimeInMinutes >= openingTimeInMinutes && currentTimeInMinutes < closingTimeInMinutes);

    // Update current time
    setCurrentTime(now);
  };

  // Color classes based on variant
  const bgColor = variant === 'dark' ? 'bg-transparent' : 'bg-white';
  const borderColor = variant === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-navy';
  const dayColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const hoursColor = variant === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const highlightBg = variant === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50';
  const todayColor = variant === 'dark' ? 'text-blue-300' : 'text-primary';
  const timeColor = variant === 'dark' ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} shadow-sm p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${titleColor} flex items-center`}>
          <Clock className="w-5 h-5 mr-2" />
          Working Hours
        </h3>

        <div className="flex items-center">
          <motion.div
            animate={{
              scale: isOpen ? [1, 1.1, 1] : 1,
              opacity: isOpen ? [0.8, 1, 0.8] : 0.8
            }}
            transition={{
              duration: 2,
              repeat: isOpen ? Number.POSITIVE_INFINITY : 0,
              repeatType: "loop"
            }}
            className={`w-3 h-3 rounded-full mr-2 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}
          />
          <span className={`text-sm font-medium ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
            {isOpen ? 'Open Now' : 'Closed'}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {scheduleWithToday.map((schedule) => (
          <div
            key={schedule.day}
            className={`flex justify-between items-center py-1 px-2 rounded ${schedule.isToday ? highlightBg : ''}`}
          >
            <span className={`text-sm ${schedule.isToday ? `font-semibold ${todayColor}` : dayColor}`}>
              {schedule.day}
              {schedule.isToday && <span className="ml-1 text-xs">(Today)</span>}
            </span>
            <span className={`text-sm ${hoursColor}`}>{schedule.hours}</span>
          </div>
        ))}
      </div>

      {currentTime && (
        <div className={`mt-4 text-xs ${timeColor} text-right`}>
          Last updated: {currentTime.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
