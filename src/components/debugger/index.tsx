import { useState } from "react";
import Button from "react-bootstrap/Button";
import { buttonState } from "../../utils/debugger";
import ControlsForm from "./controls-form";

const Debugger = () => {
  const [debugging, setDebugging] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setDebugging(!debugging)}
        variant={debugging ? buttonState.on.variant : buttonState.off.variant}
      >
        Debug Mode: {debugging ? buttonState.on.label : buttonState.off.label}
      </Button>

      <ControlsForm />
    </>
  );
};

export default Debugger;
