import { Version } from '..';
import { v4 } from 'uuid';

export const v1_2: Version = {
  id: v4(),
  title: 'Nota de Atualização v1.2.0 - O que há de novo?',
  dataTexts: [
    'Paginação para o menu de consulta, facilitando o acesso e a pesquisa por agricultores.',
    'Anexo obrigatório de documento de identidade.',
    'Anexo opcional do talão do agricultor.',
    'Menu para ajuda e informações.',
    'Formação de pasta e organização mais inteligente e concisa.',
    'Sistema de login individual e criptografado.',
    'Registro de logs para auditoria.',
    'Popup para mensagens ou avisos.',
    'Melhorias no layout de cadastro e consulta.',
  ],
};
