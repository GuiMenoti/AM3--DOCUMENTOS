export function convertDataToFront(data: any) {
  if (data) {
    return {
      ...data,
      dataNascimento: new Date(data.dataNascimento).toLocaleDateString(),
    };
  }
}
