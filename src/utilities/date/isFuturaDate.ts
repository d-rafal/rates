export const isFutureDate = (date: Date) => {
  const todaySerialized = new Date().toISOString().split(":")[0];
  const dateSerialized = date.toISOString().split(":")[0];

  return dateSerialized.localeCompare(todaySerialized) < 0;
};
