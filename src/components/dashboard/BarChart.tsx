"use client";

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  dataKey?: string;
  dataKeys?: string[];
  colors?: string[];
  xAxisKey?: string;
  height?: number;
}

export function BarChart({ data, dataKey, dataKeys, colors, xAxisKey = "month", height = 300 }: BarChartProps) {
  const keys = dataKeys || (dataKey ? [dataKey] : []);
  const barColors = colors || ['var(--border)'];

  return (
    <div className="bg-surface border border-border rounded-md p-5 w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
          <XAxis 
            dataKey={xAxisKey} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
          />
          <Tooltip 
            cursor={{ fill: 'var(--border)', opacity: 0.2 }}
            contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderRadius: '8px', boxShadow: 'none' }}
            itemStyle={{ color: 'var(--title)', fontWeight: 600 }}
            labelStyle={{ color: 'var(--text-secondary)', marginBottom: '4px', fontSize: '12px' }}
          />
          {keys.map((key, index) => (
            <Bar 
              key={key}
              dataKey={key} 
              fill={dataKeys ? barColors[index % barColors.length] : 'var(--border)'} 
              radius={[4, 4, 0, 0]} 
              activeBar={dataKeys ? undefined : { fill: 'var(--accent)' }} 
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
