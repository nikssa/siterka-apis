export const convertISO8601ToDateTime = (
  dateString: string,
  languageId: string
) => {
  const date = new Date(dateString).toLocaleString(languageId);
  return date;
};
