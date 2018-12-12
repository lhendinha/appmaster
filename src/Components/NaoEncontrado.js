import React from "react";
import { Label } from "semantic-ui-react";

const NaoEncontrado = () => (
  <div
    style={{
      textAlign: "center"
    }}
  >
    <Label color={"red"} style={{ marginTop: window.innerHeight * 0.5 }}>
      Página não encontrada.
    </Label>
  </div>
);

export default NaoEncontrado;
