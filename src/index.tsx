import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import Debugger from "./components/debugger";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Container>
    <Debugger />
  </Container>
);
