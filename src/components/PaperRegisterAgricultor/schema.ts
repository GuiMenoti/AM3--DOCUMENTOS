import { subYears } from 'date-fns';
import * as yup from 'yup';

export interface Agricultor {
  id: string;
  nome: string;
  sobrenome: string;
  apelido: string;
  cpf: string;
  dataNascimento: string;
  numCelular: string;
  numTelFixo: string;
  email: string;
  cep: string;
  nomeRua: string;
  nomeBairro: string;
  nomeCidade: string;
  uf: string;
  numCasa: string;
  coordenadas: string;
  pontoReferencia: string;
  numTalao: string;
  numContrato: string;
  obsGeral: string;
  ativo: boolean;
  ativoPrograma: boolean;
  anexoTalao: any;
  contrato: any;
  identidade: any;
}

export const initialStateAgricultorPostFields: Partial<Agricultor> = {
  nome: '',
  sobrenome: '',
  apelido: '',
  cpf: '',
  dataNascimento: '',
  numCelular: '51',
  numTelFixo: '51',
  email: '',
  cep: '',
  nomeRua: '',
  nomeBairro: '',
  nomeCidade: '',
  uf: '',
  numCasa: '',
  coordenadas: '',
  pontoReferencia: '',
  numTalao: '',
  numContrato: '',
  obsGeral: '',
  anexoTalao: FileList,
  contrato: FileList,
  identidade: FileList,
};

const currentDate = new Date();

const minDate = subYears(currentDate, 16);
const maxDate = subYears(currentDate, 150);

export const schemaAgricultorPostFields = {
  nome: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'Necessário que nome tenha mais de 3 caracteres')
    .max(50, 'Necessário que nome tenha no máximo 50 caracteres'),
  sobrenome: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'Necessário que nome tenha mais de 3 caracteres')
    .max(150, 'Necessário que nome tenha no máximo 150 caracteres'),
  apelido: yup
    .string()
    .max(50, 'Necessário que nome tenha no máximo 50 caracteres'),
  cpf: yup
    .string()
    .required('Campo obrigatório!')
    .matches(/^[0-9]+$/, 'Somente números!')
    .min(11, 'No mínimo 11 caracteres!')
    .max(11, 'No máximo 11 caracteres!'),
  dataNascimento: yup
    .date()
    .min(maxDate, 'Tem que ter no máximo 150 anos')
    .max(minDate, 'Tem que ter no mínimo 16 anos')
    .required('Campo obrigatário!'),
  numCelular: yup
    .string()
    .required('Campo obrigatório!')
    .test('is-numerical', 'Somente números são permitidos', (value) => {
      if (value) {
        return /^\d+$/.test(value);
      }
      return true;
    })
    .min(11, 'No mínimo 11 caracteres!')
    .max(11, 'No máximo 11 caracteres!'),
  numTelFixo: yup
    .string()
    .test('is-numerical', 'Somente números são permitidos', (value) => {
      if (value) {
        return /^\d+$/.test(value);
      }
      return true;
    })
    .max(10, 'No máximo 10 caracteres!'),
  email: yup.string().email('E-mail inválido'),
  cep: yup
    .string()
    .required('Campo obrigatório')
    .test('is-numerical', 'Somente números são permitidos', (value) => {
      if (value) {
        return /^\d+$/.test(value);
      }
      return true;
    })
    .length(8, 'Deve conter 8 caracteres!'),
  nomeRua: yup
    .string()
    .required('Campo obrigatório')
    .max(150, 'Necessário que nome tenha no máximo 150 caracteres'),
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
    })
    .max(15, 'Necessário que nome tenha no máximo 15 caracteres'),
  coordenadas: yup
    .string()
    .max(30, 'Necessário que nome tenha no máximo 30 caracteres'),
  pontoReferencia: yup
    .string()
    .max(100, 'Necessário que nome tenha no máximo 100 caracteres'),
  numTalao: yup
    .string()
    .test('is-numerical', 'Somente números são permitidos', (value) => {
      if (value) {
        return /^\d+$/.test(value);
      }
      return true;
    })
    .max(15, 'Necessário que nome tenha no máximo 15 caracteres'),
  numContrato: yup
    .string()
    .test('is-numerical', 'Somente números são permitidos', (value) => {
      if (value) {
        return /^\d+$/.test(value);
      }
      return true;
    })
    .required('Campo obrigatório')
    .max(15, 'Necessário que nome tenha no máximo 15 caracteres'),
  obsGeral: yup.string().max(300, 'O campo deve ter no máximo 250 caracteres'),
  anexoTalao: yup
    .mixed()
    .test('fileType', 'No máximo 5 arquivos', (value: any) => {
      if (value.length > 5) return false;
      else return true;
    })
    .test('fileType', 'Formato de arquivo inválido', (value: any) => {
      const allowedFileTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'application/pdf',
      ]; // Adicione os tipos de arquivo permitidos aqui

      if (value.length === 0) {
        return true;
      }

      const [files] = Array.isArray(value) ? value : [value];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!allowedFileTypes.includes(file.type)) {
          return false;
        }
      }

      return true;
    })

    .test('fileSize', 'O tamanho do arquivo é muito grande', (value: any) => {
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB (ajuste de acordo com suas necessidades)
      if (value.length === 0) {
        return true;
      }

      const files = Array.isArray(value) ? value : [value];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > maxSizeInBytes) {
          return false;
        }
      }

      return true;
    }),
  contrato: yup
    .mixed()
    .test('fileType', 'Campo obrigatório', (value: any) => {
      if (value.length > 0) return true;
      else return false;
    })
    .test('fileType', 'No máximo 5 arquivos', (value: any) => {
      if (value.length > 5) return false;
      else return true;
    })
    .test('fileType', 'Formato de arquivo inválido', (value: any) => {
      const allowedFileTypes = [
        'image/jpeg',
        'image/jpeg',
        'image/png',
        'application/pdf',
      ];

      if (value.length === 0) {
        return false;
      }

      const [files] = Array.isArray(value) ? value : [value];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!allowedFileTypes.includes(file.type)) {
          return false;
        }
      }

      return true;
    })

    .test('fileSize', 'O tamanho do arquivo é muito grande', (value: any) => {
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB (ajuste de acordo com suas necessidades)
      if (value.length === 0) {
        return false;
      }

      const files = Array.isArray(value) ? value : [value];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > maxSizeInBytes) {
          return false;
        }
      }

      return true;
    }),
  identidade: yup
    .mixed()
    .test('fileType', 'Campo obrigatório', (value: any) => {
      if (value.length > 0) return true;
      else return false;
    })
    .test('fileType', 'No máximo 5 arquivos', (value: any) => {
      if (value.length === 0) return true;
      else if (value.length > 5) return false;
      else return true;
    })
    .test('fileType', 'Formato de arquivo inválido', (value: any) => {
      if (value.length === 0) return true;
      const allowedFileTypes = [
        'image/jpeg',
        'image/jpeg',
        'image/png',
        'application/pdf',
      ];

      if (value.length === 0) {
        return false;
      }

      const [files] = Array.isArray(value) ? value : [value];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!allowedFileTypes.includes(file.type)) {
          return false;
        }
      }

      return true;
    })
    .test('fileSize', 'O tamanho do arquivo é muito grande', (value: any) => {
      if (value.length === 0) return true;
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB (ajuste de acordo com suas necessidades)
      if (value.length === 0) {
        return false;
      }

      const files = Array.isArray(value) ? value : [value];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > maxSizeInBytes) {
          return false;
        }
      }

      return true;
    }),
};
