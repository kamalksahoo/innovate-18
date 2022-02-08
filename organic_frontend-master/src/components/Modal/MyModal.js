import React,{useState} from "react";
// import { Button } from 'react-bootstrap';
const MyModal = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <h1>hi</h1>
  );
};

export default MyModal;
{/* <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        style={{
          width: "100%",
          backgroundColor: "white",
          margin: "auto",
        }}
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Your Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Enter Mobile Number</label>
          <br />
          <input
            placeholder="enter mobile number"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <br />
          <br />
          <Button variant="primary" onClick={handleClose}>
            Search Address
          </Button>
          <div>
            <h3>your Shipment Adress</h3>
            name: kamal kant <br />
            Mobile: {text} <br />
            Address: 16/5, pune 411001
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </> */}