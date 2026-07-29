import useMediaQuery from "./useMediaQuery";

/** True when device is in landscape and viewport height is short (phones/tablets). */
const useIsLandscape = () =>
  useMediaQuery("(orientation: landscape) and (max-height: 500px)");

export default useIsLandscape;
