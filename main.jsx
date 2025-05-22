import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Contador, Text } from "./App";

const reactElements = document.getElementsByClassName("React");

if (reactElements.length >= 2) {
  const rootText = createRoot(reactElements[0]);
  const rootCounter = createRoot(reactElements[1]);

  function AppController() {
    const [text, settext] = useState("");

    rootText.render(<Text settext={settext} />);
    rootCounter.render(<Contador text={text} />);
    return <h1>meuovo</h1>; // Não renderiza nada nesse root principal
  }

  // Renderiza o controlador em qualquer lugar que tenha,
  // pode ser num div oculta, ou até no body, só para rodar o state
  createRoot(document.createElement("div")).render(<AppController />);
} else {
  console.error(
    "Precisa ter pelo menos 2 elementos com a classe 'React' no DOM"
  );
}
