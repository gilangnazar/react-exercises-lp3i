import { Line } from "react-chartjs-2";
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function SalesChart() {
  const data = {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    datasets: [
      {
        label: "Penjualan",
        data: [120, 190, 300, 500, 380, 430, 510],
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
    ],
  };
  return <Line data={data} />;
}
