export const isDateValid = (date: any): date is Date =>
  date instanceof Date && !Number.isNaN(Number(date));
