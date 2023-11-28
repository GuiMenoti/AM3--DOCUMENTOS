export function convertDataToBackJson(data: any) {
  let convertData: any = data;

  Object?.keys(convertData)?.forEach((key) => {
    if (convertData[key] === undefined || convertData[key] === '') {
      delete convertData[key];
    } else if (key === 'dataNascimento') {
      convertData[key] = convertData[key]?.toISOString();
    } else if (key.includes('num')) {
      const num = convertData[key]?.trim();
      if (
        num === '51' ||
        (typeof convertData[key] === 'string' && convertData[key].length === 0)
      ) {
        delete convertData[key];
      } else {
        convertData[key] = num;
      }
    } else if (
      typeof convertData[key] === 'string' &&
      convertData[key].length === 0
    ) {
    }
  });
  return convertData;
}
