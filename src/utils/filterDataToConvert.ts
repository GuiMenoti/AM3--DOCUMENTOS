type Data = {
  [key: string]: any;
};

export function filterDataToConvert(data: Data) {
  const filteredData: any = {};

  if (data) {
    Object.keys(data).forEach((key) => {
      if (key === 'dataNascimento') {
        return;
      } else if (
        (typeof data[key] === 'string' && data[key].length === 0) ||
        data[key] === undefined ||
        data[key] === null
      ) {
        return;
      } else {
        filteredData[key] = data[key];
      }
    });
  }

  return filteredData;
}
