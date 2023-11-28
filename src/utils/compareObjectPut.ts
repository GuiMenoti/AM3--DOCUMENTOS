type Data = {
  data: {
    [key: string]: any;
  };
  dataForm: {
    [key: string]: any;
  };
};

export function compareObjectPut({ data, dataForm }: Data) {
  for (const key in dataForm) {
    if (dataForm.hasOwnProperty(key)) {
      if (!(key in data) || data[key] !== dataForm[key]) {
        return false;
      }
    }
  }

  return true;
}
