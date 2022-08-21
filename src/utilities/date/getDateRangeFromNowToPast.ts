export const getDateRangeFromNowToPast = (differenceInDays: number) => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - differenceInDays);

  return [startDate, endDate] as const;
};
