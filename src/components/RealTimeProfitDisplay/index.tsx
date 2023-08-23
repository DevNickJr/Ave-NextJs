"use client"
import React, { useState, useEffect } from 'react';

interface IRealTimeProfitDisplayProps {
  startDate: Date;
  initialProfit: number;
  percentageProfit: number;
  numberOfDays: number;
}

const RealTimeProfitDisplay = ({ startDate, initialProfit, percentageProfit, numberOfDays }: IRealTimeProfitDisplayProps) => {

  const [currentProfit, setCurrentProfit] = useState(100000);
  const percentageProfitPerSecond = percentageProfit / (numberOfDays * 24 * 60 * 60); 

  useEffect(() => {
    const interval = setInterval(() => {
        const timeElapsedInSeconds = (Date.now() - startDate.getTime()) / 1000;

        const newProfit = (initialProfit * (percentageProfitPerSecond / 100)) * timeElapsedInSeconds;
        
        setCurrentProfit(initialProfit + newProfit);
      }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [initialProfit, percentageProfitPerSecond, startDate]);

  return (
    <div className='fixed flex flex-col gap-6 top-24 right-24'>
      <p>Initial Profit: ${initialProfit.toFixed(2)}</p>
      <p>Current Profit: ${currentProfit.toFixed(2)}</p>
    </div>
  );
};


export default RealTimeProfitDisplay;

  // const [startDate, setStartDate] = useState(new Date("2023-08-20"));
  // const [initialProfit, setInitialProfit] = useState(100000);
  // const percentageProfit = 30;
  // const numberOfDays = 7;