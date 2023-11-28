export function convertBase64ToFile(
  base64String: string,
  contentType = 'application/octet-stream'
) {
  const byteCharacters = atob(base64String.split(',')[1]);

  const byteArray = new Uint8Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i);
  }

  const blob = new Blob([byteArray], { type: contentType });

  return blob;
}
