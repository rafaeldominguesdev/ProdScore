import { notFound } from "next/navigation";
import { mockEmployees } from "@/lib/mock-data";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { BarChart } from "@/components/dashboard/BarChart";

export default function FuncionarioPage({ params }: { params: { id: string } }) {
  const employee = mockEmployees.find(e => e.id === params.id);
  
  if (!employee) {
    notFound();
  }

  const { metrics, history, activities } = employee;

  return (
    <div className="flex flex-col gap-8 max-w-[1000px] mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface border border-border p-6 rounded-md">
        <div>
          <h1 className="text-3xl font-syne font-bold tracking-tight text-title">{employee.name}</h1>
          <p className="text-secondary text-sm mt-1">{employee.role}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-label text-xs uppercase tracking-wider mb-1">Score Geral</span>
          <span className="text-6xl font-syne font-bold text-accent tracking-tighter">{employee.score}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Presença" value={`${metrics.presence}%`} />
        <MetricCard title="Entregas no prazo" value={`${metrics.onTime}%`} />
        <MetricCard title="Metas batidas" value={`${metrics.goalsMet}%`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-sm font-syne font-bold text-label px-1 uppercase tracking-wider">Histórico Mensal (%)</h2>
          <BarChart 
            data={history} 
            dataKey="presence" 
            dataKeys={["presence", "onTime", "goalsMet"]} 
            colors={["var(--accent)", "#eab308", "#3b82f6"]} 
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-syne font-bold text-label px-1 uppercase tracking-wider">Atividades Recentes</h2>
          <div className="bg-surface border border-border rounded-md p-5 flex flex-col gap-0">
            {activities.length === 0 ? (
              <p className="text-secondary text-sm">Nenhuma atividade recente.</p>
            ) : (
              activities.map((act, idx) => (
                <div key={act.id} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                    {idx !== activities.length - 1 && (
                      <div className="w-[1px] h-full bg-border mt-1.5 mb-1.5"></div>
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="text-xs text-label mb-1">{act.date}</p>
                    <p className="text-sm text-title leading-snug">{act.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
