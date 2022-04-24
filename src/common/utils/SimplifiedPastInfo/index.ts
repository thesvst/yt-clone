import { DateDiffsType } from 'common/types/TDateDiffsType';

type SimplifiedPastInfo = (date: DateDiffsType) => string;
export const simplifiedPastInfo: SimplifiedPastInfo = (date) => {
  if (date.years >= 2) return `${date.years} years ago`;
  if (date.years === 1) return `${date.years} year ago`;

  if (date.months >= 2) return `${date.months} months ago`;
  if (date.months === 1) return `${date.months} month ago`;

  if (date.days >= 2) return `${date.days} days ago`;
  if (date.days === 1) return `${date.days} day ago`;

  return '';
};
