import { useState, useRef } from "react";

export function Contador({ text }) {
  const perimetro = 2 * 3.14 * 13;
  let cor = "";
  let qtd = 0;
  if (text.length < 260) {
    cor = "blue";
  } else if ((text.length >= 260) & (text.length <= 280)) {
    cor = "yellow";
    qtd = 280 - text.length;
  } else if (text.length > 280) {
    cor = "red";
    qtd = 280 - text.length;
  }

  return (
    <svg width="30" height="30">
      <circle
        cx="15"
        cy="15"
        r="13"
        stroke={cor}
        stroke-width="2"
        fill="none"
        strokeDasharray={perimetro}
        strokeDashoffset={
          text.length <= 280
            ? perimetro - (perimetro / 280) * text.length
            : null
        }
        markerMid="s"
      />
      <text x="15" y="18" textAnchor="middle" fontSize="10" fill="black">
        {280 - text.length <= 20 || 280 - text.length < 0 ? qtd : null}
      </text>
    </svg>
  );
}

export function Text({ settext }) {
  return (
    <textarea
      placeholder="Digite:"
      onChange={(e) => settext(e.target.value)}
    ></textarea>
  );
}
export default function App() {
  const [text, settext] = useState("");
  return <Text></Text>;
}
