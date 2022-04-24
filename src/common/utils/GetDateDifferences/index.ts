import { DateDiffsType } from 'common/types/TDateDiffsType';

type GetDateDifferences = (date: string) => DateDiffsType;
export const getDateDifferences: GetDateDifferences = (date) => {
  const today = new Date();
  const pastDate = new Date(date);
  const diff = Math.floor(today.getTime() - pastDate.getTime());
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const minutes = Math.floor(diff / minute);
  const hours = Math.floor(diff / hour);
  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);

  return {
    days, months, years, minutes, hours,
  };
};
