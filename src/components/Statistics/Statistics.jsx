import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { chartData } from "../utils/ChartData/ChartData";

const Statistics = () => {
  const data = chartData;

  // Define colors for each data point
  const COLORS = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28", "#FF99C3"];

  return (
    <section className="h-screen flex justify-center items-center">
      <div style={{ width: "100%", height: "900px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius="70%"
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.label}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
