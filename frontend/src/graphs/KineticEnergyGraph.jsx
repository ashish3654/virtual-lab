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
            label: "Kinetic Energy",

            data: data.map(
            (point) =>
                point.kineticEnergy
            ),

            borderColor:
            "rgb(255,99,132)",

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
        text: "Kinetic Energy vs Time (Simulation Units) ",
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