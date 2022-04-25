export const getYouTubePlayerHeight = (ref) => {
  if (!ref?.current) return 360;

  return ref.current.clientWidth * 0.5625;
};
