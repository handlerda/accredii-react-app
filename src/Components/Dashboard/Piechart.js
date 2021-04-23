import React from "react";
import {
  PieChart,
  Cell,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Piechart({ formattedData, key }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey={key}
        isAnimationActive={false}
        data={formattedData.filter((status) => status.name !== "total")}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {formattedData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            letterSpacing="10"
          />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}

export default Piechart;
