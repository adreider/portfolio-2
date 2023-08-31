import { useEffect, useState } from "react";

function TypeWriterEffect(props: any) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(false)

  const writeOnScreen = (text:any, i = 0) => {
    if (i < text.length) {
      setShowCursor(true);

      setText(text.slice(0, i, 1));
      setTimeout(() => writeOnScreen(text, i + 1), 100);
    } else if (i >= text.length && props?.hideCursor) {
      setShowCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => writeOnScreen(props.text), props?.delay ?? 200);
  }, []);

  return (
    <>
      {text}
      {showCursor && (
        <span className="animate-animate-cursor text-xl md:text-2xl ml-1 font-medium">
          |
        </span>
      )}
    </>
  )
}

export { TypeWriterEffect }