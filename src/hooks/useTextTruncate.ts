export default async function useTextTruncate(text: string, length: number) {
  let result = text;
  if (text.length > length) {
    result = text.substring(0, length) + '...';
  }
  return result;
}
