import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import reels from "../../utils/reels";
import Reel from "../../types/reel";

const ControlsForm = () => {
  const reelOptions = reels.map((reel: Reel) => (
    <option key={reel.name} value={reel.name}>
      {reel.name}
    </option>
  ));

  return (
    <Form>
      <Form.Group as={Row} className="my-3" controlId="inputBalance">
        <Form.Label column sm={2}>
          Input Balance
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="number" placeholder="Type in a number" />
        </Col>
      </Form.Group>

      {Array.from({ length: 3 }, (_, i) => i + 1).map((serial: number) => (
        <Form.Group
          key={serial}
          as={Row}
          className="mb-3"
          controlId={`reel${serial}`}
        >
          <Form.Label column sm={2}>
            Reel {serial}
          </Form.Label>
          <Col sm={3}>
            <Form.Select>{reelOptions}</Form.Select>
          </Col>
          <Col sm={3}>
            <Form.Select>{reelOptions}</Form.Select>
          </Col>
        </Form.Group>
      ))}
    </Form>
  );
};

export default ControlsForm;
