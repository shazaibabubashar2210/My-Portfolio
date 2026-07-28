import { useEffect, useRef, useState } from "react";

const Typewriter = ({
  segments = [],
  speed = 60,
  startDelay = 0,
  start = true,
  onComplete,
  className = "",
  cursorClassName = "inline-block w-[2px] h-[1em] ml-1 bg-[#915EFF] animate-pulse align-middle",
  showCursor = true,
}) => {
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(startDelay === 0);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!start || startDelay === 0) return undefined;

    const delayTimer = setTimeout(() => setIsStarted(true), startDelay);
    return () => clearTimeout(delayTimer);
  }, [start, startDelay]);

  useEffect(() => {
    if (!start || !isStarted || segments.length === 0) return undefined;

    const currentSegment = segments[segmentIndex];

    if (!currentSegment) {
      setIsComplete(true);
      onCompleteRef.current?.();
      return undefined;
    }

    if (charIndex >= currentSegment.text.length) {
      if (segmentIndex < segments.length - 1) {
        setSegmentIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        setIsComplete(true);
        onCompleteRef.current?.();
      }
      return undefined;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isStarted, segmentIndex, segments, speed, start]);

  const renderedSegments = segments.map((segment, index) => {
    const visibleLength =
      index < segmentIndex
        ? segment.text.length
        : index === segmentIndex
          ? charIndex
          : 0;

    if (visibleLength === 0) return null;

    return (
      <span key={`${segment.text}-${index}`} className={segment.className}>
        {segment.text.slice(0, visibleLength)}
      </span>
    );
  });

  return (
    <span className={className}>
      {renderedSegments}
      {showCursor && !isComplete && (
        <span className={cursorClassName} aria-hidden='true' />
      )}
    </span>
  );
};

export default Typewriter;
