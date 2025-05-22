import { createPortal } from "react-dom";

function Text({ settext }) {
  return createPortal(
    <textarea
      placeholder="Digite:"
      value={value}
      onChange={(e) => settext(e.target.value)}
    ></textarea>,
    document.getElementById("textarea")
  );
}

export default Text;
