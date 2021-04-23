import React from "react";
import {
  PieChart,
  Cell,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Piechart({ documents, key }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const generalStats = [];
  if (documents !== false || document !== null) {
    console.log(`we made it`);
    generalStats.push({
      name: "awaiting_company",
      value: documents.stats.awaiting_company,
    });
    generalStats.push({
      name: "awaiting_investor",
      value: documents.stats.awaiting_investor,
    });
    generalStats.push({
      name: "awaiting_lawfirm",
      value: documents.stats.awaiting_lawfirm,
    });
    generalStats.push({
      name: "completed",
      value: documents.stats.completed,
    });
    generalStats.push({
      name: "total",
      value: documents.stats.total,
    });
  }

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey={key}
        isAnimationActive={false}
        data={generalStats.filter((status) => status.name !== "total")}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {generalStats.map((entry, index) => (
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
