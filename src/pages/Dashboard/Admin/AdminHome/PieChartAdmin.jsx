import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";

const PieChartAdmin = ({ chartData }) => {
  const {
    revenue,
    totalBiodata,
    totalFemaleBiodata,
    totalMaleBiodata,
    totalPremiumBiodata,
  } = chartData;
  const data = [
    { name: "Revenue", value: revenue },
    { name: "Total Biodata", value: totalBiodata },
    { name: "Total Female Biodata", value: totalFemaleBiodata },
    { name: "Total Male Biodata", value: totalMaleBiodata },
    { name: "Total Premium Biodata", value: totalPremiumBiodata },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
    </div>
  );
};

export default PieChartAdmin;
