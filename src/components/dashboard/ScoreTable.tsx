import Link from 'next/link';
import { Employee } from '@/lib/mock-data';

export function ScoreTable({ employees }: { employees: Employee[] }) {
  return (
    <div className="bg-surface border border-border rounded-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-background border-b border-border">
            <tr>
              <th className="px-4 py-3 font-medium text-label">Funcionário</th>
              <th className="px-4 py-3 font-medium text-label">Score</th>
              <th className="px-4 py-3 font-medium text-label">Status</th>
              <th className="px-4 py-3 font-medium text-label text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {employees.map((emp) => {
              const initials = emp.name.split(' ').map(n => n[0]).join('').substring(0, 2);
              
              let scoreColor = 'bg-accent';
              if (emp.score < 40) scoreColor = 'bg-red-500';
              else if (emp.score <= 70) scoreColor = 'bg-yellow-500';

              let textColor = 'text-accent';
              if (emp.score < 40) textColor = 'text-red-500';
              else if (emp.score <= 70) textColor = 'text-yellow-500';

              return (
                <tr key={emp.id} className="hover:bg-gray-50 dark:hover:bg-[#141414] transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs font-medium text-secondary">
                        {initials}
                      </div>
                      <div>
                        <div className="text-title font-medium">{emp.name}</div>
                        <div className="text-secondary text-xs">{emp.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 min-w-[200px]">
                    <div className="flex items-center gap-3">
                      <span className={`font-semibold w-6 text-right ${textColor}`}>{emp.score}</span>
                      <div className="flex-1 h-[3px] bg-border rounded-full overflow-hidden">
                        <div className={`h-full ${scoreColor}`} style={{ width: `${emp.score}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-background border border-border text-secondary text-xs rounded-md">
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/dashboard/funcionarios/${emp.id}`} className="text-sm font-medium text-title hover:text-accent transition-colors">
                      Ver detalhes
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
