"use client"
import React, { useState, useEffect } from 'react';

interface IRealTimeProfitDisplayProps {
  startTime: number;
  initialProfit: number;
  percentageProfit: number;
  numberOfDays: number;
}

const RealTimeProfitDisplay = ({ startTime, initialProfit, percentageProfit, numberOfDays }: IRealTimeProfitDisplayProps) => {

  console.log({
    startTime,
    initialProfit,
    percentageProfit,
    numberOfDays
  })
  const [currentProfit, setCurrentProfit] = useState(100000);
  const percentageProfitPerSecond = percentageProfit / (numberOfDays * 24 * 60 * 60); 

  useEffect(() => {
    const interval = setInterval(() => {
        const timeElapsedInSeconds = (Date.now() - startTime) / 1000;

        const newProfit = (initialProfit * (percentageProfitPerSecond / 100)) * timeElapsedInSeconds;
        
        setCurrentProfit(initialProfit + newProfit);
      }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [initialProfit, percentageProfitPerSecond, startTime]);

  return (
      <p>${currentProfit.toFixed(2)}</p>
  );
};


export default RealTimeProfitDisplay;

  // const [startDate, setStartDate] = useState(new Date("2023-08-20"));
  // const [initialProfit, setInitialProfit] = useState(100000);
  // const percentageProfit = 30;
  // const numberOfDays = 7;