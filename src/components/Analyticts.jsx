import { useState, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const Analyticts = () => {
  const chartLineRef = useRef(null);
  const chartPieRef = useRef(null);

  useEffect(() => {
    const lineOptions = {
      series: [
        {
          name: "SALES",
          type: "area",
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
        },
        {
          name: "EXPENSE",
          type: "line",
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
        },
      ],
      chart: { height: 350, type: "line", zoom: { enabled: true } },
      stroke: { curve: "smooth" },
      fill: { type: "solid", opacity: [0.35, 1] },
      labels: [
        "Dec 01",
        "Dec 02",
        "Dec 03",
        "Dec 04",
        "Dec 05",
        "Dec 06",
        "Dec 07",
        "Dec 08",
        "Dec 09",
        "Dec 10",
        "Dec 11",
        "Dec 12",
      ],
      markers: { size: 0 },
      yaxis: [
        { title: { text: "SALES" } },
        { opposite: true, title: { text: "EXPENSE" } },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (y) => (y !== undefined ? `${y.toFixed(0)} N` : y),
        },
      },
    };
    const lineChart = new ApexCharts(chartLineRef.current, lineOptions);
    lineChart.render();

    const pieOptions = {
      series: [44, 55, 67, 83],
      chart: { height: 350, type: "radialBar" },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: { fontSize: "22px" },
            value: { fontSize: "16px" },
            total: { show: true, label: "Total", formatter: () => 249 },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    };
    const pieChart = new ApexCharts(chartPieRef.current, pieOptions);
    pieChart.render();

    return () => {
      lineChart.destroy();
      pieChart.destroy();
    };
  }, []);

  return (
    <div className=" bg-zinc-700 p-20 space-y-6">
      <div ref={chartLineRef} className="bg-white p-4 rounded shadow" />
      <div ref={chartPieRef} className="bg-white p-4 rounded shadow" />

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-bold mb-4">Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PRODUCT NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm">
                  <p>Apple MacBook Pro 13</p>
                  <p className="text-xs text-gray-400">PC & Laptop</p>
                </td>
                <td className="px-6 py-4 text-sm">77</td>
                <td className="px-6 py-4 text-sm text-green-500 flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Active
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex space-x-4">
                    <button className="text-blue-500 hover:text-blue-600 flex items-center">
                      <svg
                        className="w-5 h-5 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-600 flex items-center">
                      <svg
                        className="w-5 h-5 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analyticts;
