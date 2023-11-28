import * as yup from 'yup';

export const schemaAgricultorGetFields = {
  apelido: yup.string(),
  numCelular: yup
    .string()
    .required('Campo obrigatório!')
    .matches(/^[0-9]+$/, 'Somente números!')
    .min(11, 'No mínimo 11 caracteres!')
    .max(11, 'No máximo 11 caracteres!'),
  numTelFixo: yup
    .string()
    .matches(/^[0-9]*$/, 'Somente números!')
    .max(10, 'No máximo 10 caracteres!'),
  email: yup.string().email(),
  cep: yup
    .string()
    .required('Campo obrigatório')
    .matches(/^[0-9]+$/, 'Somente números!')
    .length(8, 'Deve conter 8 caracteres!'),
  nomeRua: yup.string().required('Campo obrigatório'),
  nomeBairro: yup.string().required('Campo obrigatório'),
  nomeCidade: yup.string().required('Campo obrigatório'),
  uf: yup.string().required('Campo obrigatório'),
  numCasa: yup
    .string()
    .test('is-numerical', 'Somente números são permitidos', (value) => {
      if (value) {
        return /^\d+$/.test(value);
      }
      return true;
    }),
  numTalao: yup.string().matches(/^[0-9]*$/, 'Somente números!'),
  coordenadas: yup.string(),
  pontoReferencia: yup.string(),
  obsGeral: yup.string().max(300, 'O campo deve ter no máximo 250 caracteres'),
  ativoPrograma: yup.boolean(),
};
