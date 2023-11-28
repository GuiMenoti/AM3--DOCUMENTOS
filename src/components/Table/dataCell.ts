export interface Data {
  id: number;
  nome: string;
  apelido: string;
  cpf: string;
  ativoPrograma: string;
}

function createData(
  id: number,
  nome: string,
  apelido: string,
  cpf: string,
  ativoPrograma: string
): Data {
  return {
    id,
    nome,
    apelido,
    cpf,
    ativoPrograma,
  };
}

export const rows = [
  createData(1, 'Frederico', 'Fred', '11111111111', 'ativo'),
];
