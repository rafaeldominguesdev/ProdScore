"use client";

import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface AreaChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  lines: { key: string; color: string; name?: string }[];
  xAxisKey?: string;
  height?: number;
}

export function AreaChart({ data, lines, xAxisKey = "month", height = 300 }: AreaChartProps) {
  return (
    <div className="bg-surface border border-border rounded-md p-5 w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data} margin={{ top: 15, right: 10, left: -20, bottom: 0 }}>
          <defs>
            {lines.map((line) => (
              <linearGradient key={line.key} id={`color-${line.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={line.color} stopOpacity={0.4}/>
                <stop offset="95%" stopColor={line.color} stopOpacity={0}/>
              </linearGradient>
            ))}
          </defs>
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
            contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderRadius: '8px', boxShadow: 'none' }}
            itemStyle={{ fontWeight: 600 }}
            labelStyle={{ color: 'var(--text-secondary)', marginBottom: '4px', fontSize: '12px' }}
          />
          {lines.map((line) => (
            <Area 
              key={line.key}
              type="monotone" 
              dataKey={line.key} 
              name={line.name || line.key}
              stroke={line.color} 
              strokeWidth={3}
              fillOpacity={1} 
              fill={`url(#color-${line.key})`} 
              dot={{ r: 4, fill: 'var(--surface)', stroke: line.color, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0, fill: line.color }}
            >
              <LabelList dataKey={line.key} position="top" fill={line.color} fontSize={11} fontWeight={600} offset={8} />
            </Area>
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
