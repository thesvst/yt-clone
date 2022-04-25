export const getVideoSrc = (id: string | undefined): string => {
  if (!id) return '';

  return `https://www.youtube.com/embed/${id}?enablejsapi=1&origin=http://example.com`;
};
