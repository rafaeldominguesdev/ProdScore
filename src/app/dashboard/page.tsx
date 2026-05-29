import { MetricCard } from "@/components/dashboard/MetricCard";
import { AreaChart } from "@/components/dashboard/AreaChart";
import { DoughnutChart } from "@/components/dashboard/DoughnutChart";
import { ScoreTable } from "@/components/dashboard/ScoreTable";
import { mockEmployees, getTeamAverageHistory } from "@/lib/mock-data";

export default function DashboardPage() {
  const totalEmployees = mockEmployees.length;
  const avgScore = Math.round(mockEmployees.reduce((acc, emp) => acc + emp.score, 0) / totalEmployees);
  const onAlert = mockEmployees.filter(emp => emp.score < 50).length;
  const deliveredTasks = 124;

  const historyData = getTeamAverageHistory();

  const statusCount = {
    'Em dia': mockEmployees.filter(e => e.status === 'Em dia').length,
    'Atenção': mockEmployees.filter(e => e.status === 'Atenção').length,
    'Crítico': mockEmployees.filter(e => e.status === 'Crítico').length,
  };

  const statusData = [
    { name: 'Em dia', value: statusCount['Em dia'] },
    { name: 'Atenção', value: statusCount['Atenção'] },
    { name: 'Crítico', value: statusCount['Crítico'] },
  ];
  const doughnutColors = ["#10b981", "#eab308", "#ef4444"];

  return (
    <div className="flex flex-col gap-6 max-w-[1200px] mx-auto pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-syne font-bold tracking-tight text-title">Dashboard</h1>
        <p className="text-secondary text-sm">Você já sabe quem enrola. A gente só prova.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Funcionários" value={totalEmployees} />
        <MetricCard title="Score médio" value={avgScore} highlightColor="accent" />
        <MetricCard title="Em alerta" value={onAlert} highlightColor="danger" />
        <MetricCard title="Entregas no prazo" value={deliveredTasks} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-sm font-syne font-bold text-label px-1 uppercase tracking-wider">Evolução de Performance</h2>
          <AreaChart 
            data={historyData} 
            lines={[
              { key: "score", color: "#7c3aed", name: "Score Médio" },
              { key: "presence", color: "#06b6d4", name: "Presença" },
              { key: "onTime", color: "#f59e0b", name: "No Prazo" }
            ]} 
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-syne font-bold text-label px-1 uppercase tracking-wider">Distribuição de Status</h2>
          <DoughnutChart data={statusData} colors={doughnutColors} />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <h2 className="text-sm font-syne font-bold text-label px-1 uppercase tracking-wider">Visão por Funcionário</h2>
        <ScoreTable employees={mockEmployees} />
      </div>
    </div>
  );
}
