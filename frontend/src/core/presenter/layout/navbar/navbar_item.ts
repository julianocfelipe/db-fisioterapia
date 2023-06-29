export interface NavItem {
  label: string;
  sublabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAVIGATION_ITEMS: Array<NavItem> = [
  {
    label: 'Agendamentos',
    children: [
      {
        label: 'Lista de Agendamentos',
        sublabel: 'Todos os agendamentos do mês',
        href: '/',
      },
      {
        label: 'Registrar agendamento',
        sublabel: 'Agendar um novo serviço',
        href: '#',
      },
    ],
  },
  {
    label: 'Relatórios',
    children: [
      {
        label: 'Agendamentos VS realizados',
        sublabel: 'Todos os agendamentos e serviços realizados',
        href: '/report',
      },
      {
        label: 'Relatório de Receita',
        sublabel: 'Todas as dívidas e entradas do seu controle de caixa',
        href: '#',
      },
    ],
  },
  //   {
  //     label: 'Exemplo sem subitem',
  //     href: '#',
  //   },
];

export default NAVIGATION_ITEMS;
