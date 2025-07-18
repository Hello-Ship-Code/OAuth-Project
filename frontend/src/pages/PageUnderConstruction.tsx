import React, { useEffect, useState } from 'react';

const PageUnderConstruction = () => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date('2025-12-31T23:59:59');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft('The wait is over! Happy New Year 2026!');
        return;
      }

      const days = Math.floor(difference / (1000 * 3600 * 24));
      const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center" style={{ color: '#120020' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="150"
        height="150"
        className="mb-4"
      >
        <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="2" fill="#4B0082" />
        <rect x="25" y="20" width="50" height="60" fill="#61536B" />
        <line x1="15" y1="80" x2="85" y2="80" stroke="#9785A5" strokeWidth="2" />
        <text x="50%" y="50%" textAnchor="middle" fill="#fff" fontSize="12">
          🚧
        </text>
      </svg>
      <h1 className="text-3xl font-bold text-[#4B0082]">Page Under Construction</h1>
      <p className="mt-2 text-lg text-[#61536B]">We're working hard to get this page ready!</p>
      <p className="mt-4 text-xl text-[#C5AFD6]">Countdown to launch: {timeLeft}</p>
    </div>
  );
};

export default PageUnderConstruction;