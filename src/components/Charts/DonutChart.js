import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    series: [44, 55, 13, 33],
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 800,
        options: {
          chart: {
            width: 250,
            height: 250,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      offsetY: 0,
      height: 30,
    },
  };

  const series = [44, 55, 13, 33];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={390}
      />
    </div>
  );
};

export default DonutChart;
