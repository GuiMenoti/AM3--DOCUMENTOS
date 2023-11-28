import { v4 } from 'uuid';
import { Version } from '..';

export const v2_0_0: Version = {
  id: v4(),
  title: 'Nota de Atualização v2.0.0 - O que há de novo?',
  dataTexts: [
    'Foi implementada a funcionalidade de modo escuro, proporcionando uma experiência visual mais agradável em ambientes com pouca luminosidade.',
    'Adicionamos dicas interativas (tooltips) à maioria dos botões, visando melhorar a usabilidade e acessibilidade, além de aprimorar a experiência do usuário.',
    'Implementamos um sistema de notificações para mantê-lo atualizado sobre eventos importantes e novidades.',
    'Melhoramos o desempenho do sistema através do uso de lazy loadings, que permite um carregamento mais eficiente e uma navegação mais fluida.',
    'Reestruturamos a tabela com métodos de ordenação, filtragem e pesquisa, facilitando a localização e organização das informações.',
    'Criamos uma página exclusiva para gerenciamento de arquivos de cada agricultor, proporcionando uma forma mais conveniente de acessar e organizar esses arquivos.',
    'Aprimoramos a validação dos formulários, tornando o processo de preenchimento mais intuitivo e garantindo a correção das informações inseridas.',
    'Realizamos uma reformulação completa do design, trazendo um visual moderno, atraente e intuitivo, que facilita o uso e a compreensão das funcionalidades.',
    'Refizemos a arquitetura do sistema e aprimoramos o tratamento dos dados, resultando em um sistema mais robusto, seguro e eficiente.',
    'Adicionamos uma API de CEP para facilitar o preenchimento do formulário de criação de agricultor, permitindo que você insira o CEP e o sistema preencha automaticamente os campos relacionados ao endereço.',
  ],
};
