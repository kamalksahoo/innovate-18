import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
export default function MyModal() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className='container'>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open}  center>
        <h2>Simple centered modal</h2>
        <p onClick={()=>{setOpen(false)}} >X</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  );
}