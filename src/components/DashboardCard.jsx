import React, { useState, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

export const StatCards = () => {
  const cards = [
    {
      color: "text-green-400",
      bg: "bg-green-500",
      label: "Order in Request",
      value: "20.0",
      order: "Order Request",
    },
    {
      color: "text-red-500",
      bg: "bg-red-500",
      label: "Canceled Order",
      value: "2.0",
      order: "Canceled",
    },
    {
      color: "text-yellow-500",
      bg: "bg-yellow-500",
      label: "Processed Order",
      value: "50.0",
      order: "Processed ",
    },
    {
      color: "text-blue-400",
      bg: "bg-blue-500",
      label: "Total Order",
      value: "102",
      order: "Total",
    },
  ];

  const icons = [
    "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  ];

  return (
    <div className="grid grid-cols-12 gap-5  pt-20 w-[80vw] mx-auto ">
      {cards.map((card, index) => (
        <a
          key={index}
          href="#"
          className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 bg-white"
        >
          <div className="p-5">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-7 w-7 ${card.color}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={icons[index]}
                />
              </svg>
              <div
                className={`${card.bg} rounded-full h-6 px-2 flex items-center text-white font-semibold text-sm`}
              >
                <span>{card.order}</span>
              </div>
            </div>
            <div className="ml-2 w-full flex-1">
              <div className="mt-3 text-3xl font-bold leading-8">
                {card.value}
              </div>
              <div className="mt-1 text-base text-gray-600">{card.label}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
