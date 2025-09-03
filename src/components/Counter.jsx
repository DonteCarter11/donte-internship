import React, { useEffect, useState } from "react";

const Counter = ({ expiryDate }) => {
  const [countdown, setCountdown] = useState(null);

  const calculateTimeLeft = (expiryDate) => {
    const now = new Date().getTime();
    const targetTime = new Date(expiryDate).getTime();
    const difference = targetTime - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds, expired: false };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  };

  const formatCountdown = (timeLeft) => {
    if (timeLeft.expired) {
      return "EXPIRED";
    }

    const parts = [];
    if (timeLeft.days > 0) parts.push(`${timeLeft.days}d`);
    if (timeLeft.hours > 0) parts.push(`${timeLeft.hours}h`);
    if (timeLeft.minutes > 0) parts.push(`${timeLeft.minutes}m`);
    parts.push(`${timeLeft.seconds}s`);

    return parts.join(" ");
  };

  useEffect(() => {
    if (!expiryDate) return;

    setCountdown(calculateTimeLeft(expiryDate));

    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft(expiryDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  if (!expiryDate || !countdown) {
    return null;
  }

  if (countdown.expired) {
    return null;
  }

  return (
    <div className="">
      {formatCountdown(countdown)}
    </div>
  );
};

export default Counter;