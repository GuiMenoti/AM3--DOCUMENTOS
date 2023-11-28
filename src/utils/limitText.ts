export function limitText(text: string = '', limit: number = 9): string {
  if (text.length >= 9) {
    return `${text?.slice(0, 9).trim()}...`;
  }
  return text;
}
