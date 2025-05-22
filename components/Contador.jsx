import { useRef } from "react";

function Contador({ text }) {
  const ref = useRef(text.length);
  if (text.length < ref.current) {
    ref.current = text.length;
  }
  return <h1>{ref.current}</h1>;
}

export default Contador;
