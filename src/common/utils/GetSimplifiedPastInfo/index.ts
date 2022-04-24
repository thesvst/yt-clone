import { DateDiffsType } from 'common/types/TDateDiffsType';

type GetSimplifiedPastInfo = (date: DateDiffsType) => string;
export const getSimplifiedPastInfo: GetSimplifiedPastInfo = (date) => {
  if (date.years >= 2) return `${date.years} years ago`;
  if (date.years === 1) return `${date.years} year ago`;

  if (date.months >= 2) return `${date.months} months ago`;
  if (date.months === 1) return `${date.months} month ago`;

  if (date.days >= 2) return `${date.days} days ago`;
  if (date.days === 1) return `${date.days} day ago`;

  if (date.hours >= 1) return `${date.hours} hours ago`;
  if (date.hours === 1) return `${date.hours} hour ago`;

  if (date.minutes >= 1) return `${date.minutes} minutes ago`;
  if (date.minutes === 1) return `${date.minutes} minute ago`;

  return '';
};
