import React, { useState } from "react";
import "./Address.css";

function Address() {
  const [open, setOpenModal] = useState(false);
  return (
    <>
      <h2>welocme</h2>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        X
      </button>
      {open && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Are You Sure You Want to Continue?</h1>
            </div>
            <div className="body">
              <p>
                The next page looks amazing. Hope you want
                to go there!
              </p>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Address;
