import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  message: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, message }) => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="p-4">
      {timeLeft.days !== undefined ? (
        <div>
          <p className="text-xl mb-2">{message}</p>
          <p className="text-lg">
            {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
          </p>
        </div>
      ) : (
        <p className="text-lg">Set your countdown date!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
