import useMediaQuery from "./useMediaQuery";

const useIsMobile = (maxWidth = 767) =>
  useMediaQuery(`(max-width: ${maxWidth}px)`);

export default useIsMobile;
