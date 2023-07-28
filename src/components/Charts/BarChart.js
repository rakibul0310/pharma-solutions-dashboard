import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 0.5,
      colors: ["#D1EFEB", "#64C8BC"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 42, 60, 55, 40],
    },
    {
      name: "Series 2",
      data: [10, 20, 35, 30, 25, 45, 55, 40, 60, 50, 35, 15],
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
