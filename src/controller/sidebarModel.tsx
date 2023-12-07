import { sidebarControllerModelProps } from 'sidebar';

export const sidebarControllerModel: Array<sidebarControllerModelProps> = [
  {
    title: 'Painel de Controle',
    items: [
      {
        selected: false,
        name: 'Consultar',
        path: '/dashboard/consultar',
        icon: 'consultar',
        subItems: [
          {
            selected: false,
            name: 'Agricultor',
            path: '/agricultor',
          },
          {
            selected: false,
            name: 'Dependente',
            path: '/dependente',
          },
          {
            selected: false,
            name: 'Maquina',
            path: '/maquina',
          },
          {
            selected: false,
            name: 'Implemento',
            path: '/implemento',
          },
        ],
      },
      {
        selected: false,
        name: 'Registrar',
        path: '/dashboard/registrar',
        icon: 'registrar',
        subItems: [
          {
            selected: false,
            name: 'Agricultor',
            path: '/agricultor',
          },
          {
            selected: false,
            name: 'Dependente',
            path: '/dependente',
          },
          {
            selected: false,
            name: 'Maquina',
            path: '/maquina',
          },
          {
            selected: false,
            name: 'Implemento',
            path: '/implemento',
          },
        ],
      },
    ],
  },
  {
    title: 'Ajuda',
    items: [
      {
        selected: false,
        name: '1234',
        path: '/dashboard/ajuda',
        icon: 'ajuda',
        subItems: [],
      },
    ],
  },
];

export default sidebarControllerModel;
