export function handleRegEx(name: string, value: string = '') {
  name = name.toLowerCase();
  if (name === 'cpf') {
    return (value = value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'));
  } else if (name === 'numcelular') {
    return (value = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})/g, '($1) ')
      .replace(/^((\d{5})(\d{4})){9}/, '$1-$2'));
  } else if (name === 'numtelfixo') {
    return (value = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})/g, '($1) ')
      .replace(/((\d{4})(\d{4})){8}$/, '$1-$2'));
  } else if (name === 'coordenadas') {
    return (value = value.replace(/[^0-9,-]/g, ''));
  } else if (name === 'numcasa' || name === 'numtalao') {
    return (value = value.replace(/[^0-9]/g, ''));
  } else {
    return value;
  }
}

export const descompCPF = (string: string) => string?.replace(/[^0-9]/g, '');
export const compactCPF = (string: string) => {
  let n1 = string.substring(0, 3);
  let n2 = string.substring(3, 6);
  let n3 = string.substring(6, 9);
  let n4 = string.substring(9, 11);
  let concat = `${n1}.${n2}.${n3}-${n4}`;
  return concat;
};
export const descompDate = (string: string) => {
  let sub = string.substring(0, 10);
  let ano = sub.substring(0, 4);
  let mes = sub.substring(5, 7);
  let dia = sub.substring(8, 10);
  let concat = `${dia}/${mes}/${ano}`;
  return concat;
};
