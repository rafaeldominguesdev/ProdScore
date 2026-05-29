export interface MetricHistory {
  month: string;
  presence: number;
  onTime: number;
  goalsMet: number;
}

export interface Activity {
  id: string;
  date: string;
  description: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  score: number;
  status: 'Em dia' | 'Atenção' | 'Crítico';
  metrics: {
    presence: number;
    onTime: number;
    goalsMet: number;
  };
  history: MetricHistory[];
  activities: Activity[];
}

export const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Ana Silva",
    role: "Desenvolvedora Front-end",
    score: 85,
    status: 'Em dia',
    metrics: { presence: 98, onTime: 95, goalsMet: 80 },
    history: [
      { month: "Jan", presence: 40, onTime: 30, goalsMet: 20 },
      { month: "Fev", presence: 85, onTime: 65, goalsMet: 90 },
      { month: "Mar", presence: 30, onTime: 50, goalsMet: 40 },
      { month: "Abr", presence: 100, onTime: 95, goalsMet: 100 },
      { month: "Mai", presence: 50, onTime: 30, goalsMet: 25 },
      { month: "Jun", presence: 95, onTime: 80, goalsMet: 70 },
    ],
    activities: [
      { id: "a1", date: "Hoje, 10:30", description: "Entregou a task de refatoração do header." },
      { id: "a2", date: "Ontem, 16:45", description: "Bateu a meta da sprint atual." },
    ]
  },
  {
    id: "2",
    name: "Carlos Souza",
    role: "Designer UI/UX",
    score: 35,
    status: 'Crítico',
    metrics: { presence: 90, onTime: 70, goalsMet: 60 },
    history: [
      { month: "Jan", presence: 80, onTime: 90, goalsMet: 85 },
      { month: "Fev", presence: 40, onTime: 20, goalsMet: 10 },
      { month: "Mar", presence: 70, onTime: 60, goalsMet: 50 },
      { month: "Abr", presence: 20, onTime: 15, goalsMet: 5 },
      { month: "Mai", presence: 95, onTime: 85, goalsMet: 80 },
      { month: "Jun", presence: 35, onTime: 40, goalsMet: 30 },
    ],
    activities: [
      { id: "a1", date: "Ontem, 14:20", description: "Atrasou a entrega dos protótipos em 2 dias." },
      { id: "a2", date: "Segunda, 09:00", description: "Faltou na daily meeting." },
    ]
  },
  {
    id: "3",
    name: "Beatriz Lima",
    role: "Gerente de Produto",
    score: 92,
    status: 'Em dia',
    metrics: { presence: 100, onTime: 98, goalsMet: 90 },
    history: [
      { month: "Jan", presence: 100, onTime: 50, goalsMet: 40 },
      { month: "Fev", presence: 60, onTime: 80, goalsMet: 100 },
      { month: "Mar", presence: 20, onTime: 30, goalsMet: 10 },
      { month: "Abr", presence: 90, onTime: 95, goalsMet: 85 },
      { month: "Mai", presence: 40, onTime: 50, goalsMet: 60 },
      { month: "Jun", presence: 100, onTime: 100, goalsMet: 100 },
    ],
    activities: [
      { id: "a1", date: "Hoje, 11:00", description: "Fechou o planejamento do Q3." },
      { id: "a2", date: "Sexta, 17:30", description: "Apresentou resultados excepcionais na review." },
    ]
  },
  {
    id: "4",
    name: "Diego Fernandes",
    role: "Desenvolvedor Back-end",
    score: 38,
    status: 'Crítico',
    metrics: { presence: 75, onTime: 50, goalsMet: 30 },
    history: [
      { month: "Jan", presence: 20, onTime: 10, goalsMet: 5 },
      { month: "Fev", presence: 80, onTime: 70, goalsMet: 60 },
      { month: "Mar", presence: 30, onTime: 25, goalsMet: 15 },
      { month: "Abr", presence: 85, onTime: 90, goalsMet: 80 },
      { month: "Mai", presence: 10, onTime: 5, goalsMet: 0 },
      { month: "Jun", presence: 60, onTime: 50, goalsMet: 40 },
    ],
    activities: [
      { id: "a1", date: "Terça, 15:00", description: "Notificado sobre baixo desempenho contínuo." },
      { id: "a2", date: "Segunda, 10:15", description: "Entrega da API com bugs críticos." },
    ]
  },
  {
    id: "5",
    name: "Eduardo Ribeiro",
    role: "Analista de Dados",
    score: 52,
    status: 'Atenção',
    metrics: { presence: 95, onTime: 85, goalsMet: 75 },
    history: [
      { month: "Jan", presence: 90, onTime: 40, goalsMet: 30 },
      { month: "Fev", presence: 20, onTime: 10, goalsMet: 50 },
      { month: "Mar", presence: 100, onTime: 90, goalsMet: 80 },
      { month: "Abr", presence: 30, onTime: 40, goalsMet: 20 },
      { month: "Mai", presence: 85, onTime: 80, goalsMet: 95 },
      { month: "Jun", presence: 40, onTime: 50, goalsMet: 60 },
    ],
    activities: [
      { id: "a1", date: "Hoje, 09:30", description: "Finalizou relatório semanal no prazo." },
    ]
  },
  {
    id: "6",
    name: "Fernanda Costa",
    role: "Especialista de Marketing",
    score: 45,
    status: 'Atenção',
    metrics: { presence: 85, onTime: 60, goalsMet: 40 },
    history: [
      { month: "Jan", presence: 10, onTime: 20, goalsMet: 5 },
      { month: "Fev", presence: 90, onTime: 85, goalsMet: 90 },
      { month: "Mar", presence: 40, onTime: 30, goalsMet: 20 },
      { month: "Abr", presence: 100, onTime: 95, goalsMet: 100 },
      { month: "Mai", presence: 15, onTime: 10, goalsMet: 0 },
      { month: "Jun", presence: 70, onTime: 65, goalsMet: 60 },
    ],
    activities: [
      { id: "a1", date: "Ontem, 16:00", description: "Campanha lançada com atraso de 1 semana." },
    ]
  },
  {
    id: "7",
    name: "Gabriel Santos",
    role: "DevOps Engineer",
    score: 88,
    status: 'Em dia',
    metrics: { presence: 100, onTime: 95, goalsMet: 85 },
    history: [
      { month: "Jan", presence: 100, onTime: 90, goalsMet: 80 },
      { month: "Fev", presence: 10, onTime: 20, goalsMet: 5 },
      { month: "Mar", presence: 95, onTime: 85, goalsMet: 90 },
      { month: "Abr", presence: 30, onTime: 40, goalsMet: 25 },
      { month: "Mai", presence: 100, onTime: 95, goalsMet: 100 },
      { month: "Jun", presence: 50, onTime: 60, goalsMet: 45 },
    ],
    activities: [
      { id: "a1", date: "Quarta, 11:45", description: "Otimizou o pipeline de CI/CD reduzindo o tempo em 30%." },
    ]
  },
  {
    id: "8",
    name: "Helena Martins",
    role: "Atendimento ao Cliente",
    score: 68,
    status: 'Atenção',
    metrics: { presence: 96, onTime: 88, goalsMet: 80 },
    history: [
      { month: "Jan", presence: 40, onTime: 30, goalsMet: 20 },
      { month: "Fev", presence: 90, onTime: 80, goalsMet: 70 },
      { month: "Mar", presence: 15, onTime: 10, goalsMet: 5 },
      { month: "Abr", presence: 85, onTime: 90, goalsMet: 95 },
      { month: "Mai", presence: 30, onTime: 40, goalsMet: 20 },
      { month: "Jun", presence: 90, onTime: 85, goalsMet: 80 },
    ],
    activities: [
      { id: "a1", date: "Hoje, 14:10", description: "Atingiu 98% de CSAT na semana." },
    ]
  }
];

export const getTeamAverageHistory = () => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  return months.map((month) => {
    let presence = 0, onTime = 0, goalsMet = 0;
    mockEmployees.forEach(emp => {
      const h = emp.history.find(h => h.month === month);
      if (h) {
        presence += h.presence;
        onTime += h.onTime;
        goalsMet += h.goalsMet;
      }
    });
    const len = mockEmployees.length;
    return {
      month,
      presence: Math.round(presence / len),
      onTime: Math.round(onTime / len),
      goalsMet: Math.round(goalsMet / len),
      score: Math.round((presence + onTime + goalsMet) / (3 * len))
    };
  });
}
