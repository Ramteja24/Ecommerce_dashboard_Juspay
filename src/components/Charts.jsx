import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = ["Jan","Feb","Mar","Apr","May","Jun"];
const current = [12000,18000,15000,21000,17000,23000];
const previous = [15000,20000,17000,19000,16000,20000];

export function RevenueLine() {
  const data = {
    labels: months,
    datasets: [
      { label: "Previous Week", data: previous, borderColor: "#A0AEC0", borderDash: [5,5], tension: 0.4, pointRadius: 0 },
      { label: "Current Week", data: current, borderColor: "#2B6CB0", borderWidth: 2, tension: 0.4, pointRadius: 0 },
    ],
  };
  const options = { responsive: true, plugins: { legend: { position: "top" } }, scales: { y: { ticks: { callback: v => v/1000 + "k" } } } };
  return <Line data={data} options={options} />;
}

export function ProjectionsBar() {
  const data = {
    labels: months,
    datasets: [
      { label: "Previous", data: previous, backgroundColor: "#BFD7FF" },
      { label: "Current", data: current, backgroundColor: "#9FB8FF" }
    ]
  };
  const options = { responsive: true, plugins: { legend: { display: false } } };
  return <Bar data={data} options={options} />;
}
