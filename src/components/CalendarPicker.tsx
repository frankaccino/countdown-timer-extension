import React, { useState } from 'react';
import { Calendar } from './ui/calendar';

interface CalendarPickerProps {
  onDateSelect: (date: Date | null) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="p-4">
      <Calendar value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default CalendarPicker;
