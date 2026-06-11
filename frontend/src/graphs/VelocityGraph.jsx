import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VelocityGraph = ({
  data,
}) => {
  const chartData = {
    labels: data.map(
      (point) => point.time.toFixed(1)
    ),

    datasets: [
      {
        label: "Vx",

        data: data.map(
          (point) => point.vx
        ),

        borderColor:
          "rgb(255,99,132)",

        tension: 0.2,
      },

      {
        label: "Vy",

        data: data.map(
          (point) => point.vy
        ),

        borderColor:
          "rgb(54,162,235)",

        tension: 0.2,
      },

      {
        label: "Speed",

        data: data.map(
          (point) => point.speed
        ),

        borderColor:
          "rgb(75,192,192)",

        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,

    animation: false,

    plugins: {
      legend: {
        display: true,
      },

      title: {
        display: true,
        text: "Velocity vs Time",
      },
    },
  };

  return (
    <Line
      data={chartData}
      options={options}
    />
  );
};

export default VelocityGraph;