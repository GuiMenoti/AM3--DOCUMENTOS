type Data = {
  data: any;
  formData: FormData | any;
};

export function convertDataToBackFormData({ data, formData }: Data) {
  Object?.keys(data)?.forEach((key) => {
    if (key === undefined) {
      return;
    } else if (key === 'dataNascimento') {
      formData.append(key, data[key]?.toISOString());
    } else if (
      key.includes('anexo') ||
      key.includes('contrato') ||
      key.includes('identidade')
    ) {
      const fileList = data[key];
      const filesArray = Array.from(fileList);
      filesArray.forEach((file: any) => {
        formData.append(key, file);
      });
    } else if (key.includes('num')) {
      const num = data[key]?.trim();
      if (
        num === '51' ||
        (typeof data[key] === 'string' && data[key].length === 0)
      ) {
      } else {
        formData.append(key, num);
      }
    } else if (typeof data[key] === 'string' && data[key].length === 0) {
    } else {
      formData.append(key, data[key]);
    }
  });
}
