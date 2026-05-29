import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  highlightColor?: 'default' | 'accent' | 'danger';
}

export function MetricCard({ title, value, highlightColor = 'default' }: MetricCardProps) {
  let valueColor = 'text-title';
  if (highlightColor === 'accent') valueColor = 'text-accent';
  if (highlightColor === 'danger') valueColor = 'text-red-500';

  return (
    <div className="bg-surface border border-border rounded-md p-4 flex flex-col gap-2">
      <span className="text-secondary text-sm font-medium">{title}</span>
      <span className={`text-4xl font-syne font-bold tracking-tight ${valueColor}`}>{value}</span>
    </div>
  );
}
