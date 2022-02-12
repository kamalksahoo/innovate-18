import React, { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import StripeCheckout from "../../StripeCheckout";
import Data from "../../dummydata/Data";
import { Link } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import Address from "../Address/Address";
import "./a.css";

const Cart = (props) => {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState({
    mobile: "",
    fullname: "",
    addresstype: "",
    addressline1: "",
    addressline2: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });
  const [disbaleform, setDisableform] = useState(false);
  const [justclick, setJustClick] = useState("");
  const [ismanual, setisManual] = useState("");
  const [finalJustPayAddress, setfinalJustPayAddress] =
    useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    computeTotal();
  });

  const SearchItem = () => {
    var res = [];
    Data.forEach((record) => {
      if (record.mobile_no == justclick) {
        res.push({
          name: record.name,
          mobile: record.mobile_no,
          address: record.Address,
          pincode: record.pin,
          id: record.id,
        });
        setDisabled(false);
      }
    });
    console.log(res);
    setItem(res);
  };

  const computeTotal = () => {
    let totalAmount = 0;
    props.cart.forEach((item) => {
      totalAmount += parseInt(item[1]) * item[2];
    });
    setTotal(totalAmount);
  };

  const handleAddress = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
    // console.log(address);
  };
  const handleAddressSubmit = (event) => {
    event.preventDefault();
    console.log("data submitted....");
    console.log(address);
    setDisableform(true);
    setisManual(true);
    setDisabled(false);
  };
  const handleJustClick = (e) => {
    e.preventDefault();
    console.log(justclick);
    setDisableform(true);
    setisManual(false);
    SearchItem();
  };

  const selectAddress = (id) => {
    setSuccess(false);
    var result = [];
    // console.log(id)
    item.forEach((it) => {
      console.log(it);
      if (it.id == id) {
        result.push({
          name: it.name,
          mobile: it.mobile,
          pincode: it.pincode,
          id: it.id,
          address: it.address,
        });
      }
    });
    setfinalJustPayAddress(result);
    setSuccess(true);
    // console.log(result)
  };
  const BackgroundModal = () => {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Add Your Shiping Address</h1>
          </div>
          <div className="body">
            <div className="inner">
              <p>Enter address manually</p>
              <form>
                <div className="inputdiv">
                  <div className="rows">
                    <label> Full name</label>
                    <input
                      onChange={handleAddress}
                      value={address.fullname}
                      type="text"
                      className="form-control"
                      required
                      placeholder="enter your address line 2"
                      name="fullname"
                      disabled={disbaleform}
                    />
                  </div>

                  <div className="rowss">
                    <label>Address Type</label>
                    <div className="radiocontainer">
                      <div className="form-check">
                        <input
                          disabled={disbaleform}
                          className="form-check-input"
                          type="radio"
                          name="addresstype"
                          id="home"
                          value="home"
                          checked={
                            address.addresstype === "home"
                          }
                          onChange={handleAddress}
                        />
                        <label className="form-check-label">
                          Home address
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          disabled={disbaleform}
                          className="form-check-input"
                          type="radio"
                          name="addresstype"
                          id="office"
                          value="office"
                          checked={
                            address.addresstype == "office"
                          }
                          onChange={handleAddress}
                        />
                        <label className="form-check-label">
                          Office dddress
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="rows">
                    <label>Mobile number (+91)</label>
                    <input
                      disabled={disbaleform}
                      onChange={handleAddress}
                      value={address.mobile}
                      type="number"
                      className="form-control"
                      placeholder="enter your mobile number"
                      name="mobile"
                    />
                  </div>

                  <div className="rows">
                    <label>Adddress Line1</label>
                    <input
                      disabled={disbaleform}
                      onChange={handleAddress}
                      value={address.addressline1}
                      type="text"
                      className="form-control"
                      required
                      placeholder="enter your address line 1"
                      name="addressline1"
                    />
                  </div>

                  <div className="rows">
                    <label>Address Line2</label>
                    <input
                      disabled={disbaleform}
                      onChange={handleAddress}
                      value={address.addressline2}
                      type="text"
                      className="form-control"
                      required
                      placeholder="enter your address line 2"
                      name="addressline2"
                    />
                  </div>
                  <div className="rows">
                    <label>Landmark</label>
                    <input
                      disabled={disbaleform}
                      onChange={handleAddress}
                      value={address.landmark}
                      type="text"
                      className="form-control"
                      required
                      placeholder="enter your landmark"
                      name="landmark"
                    />
                  </div>
                  <div className="rows">
                    <label>Pincode</label>
                    <input
                      disabled={disbaleform}
                      onChange={handleAddress}
                      value={address.pincode}
                      type="text"
                      className="form-control"
                      required
                      placeholder="enter your Pincode"
                      name="pincode"
                    />
                  </div>
                  <div className="rows">
                    <label>City</label>
                    <input
                      disabled={disbaleform}
                      onChange={handleAddress}
                      value={address.city}
                      type="text"
                      className="form-control"
                      placeholder="enter your City"
                      name="city"
                    />
                  </div>
                  <div className="rows">
                    <label>State</label>
                    <input
                      disabled={disbaleform}
                      onChange={handleAddress}
                      value={address.state}
                      type="text"
                      className="form-control"
                      placeholder="enter your state"
                      name="state"
                    />
                    <button
                      disabled={disbaleform}
                      onClick={handleAddressSubmit}
                      id="btn_lt"
                      className="btn btn-success"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="linecontainer">
              <div className="line"></div>
              <p id="or">OR</p>
              <div className="line"></div>
            </div>

            <div className="inner">
              <p>enter by just click</p>
              <div className="inputdiv">
                <div className="rowsright">
                  <label> Mobile</label>
                  <input
                    disabled={disbaleform}
                    type="text"
                    className="form-control"
                    required
                    placeholder="enter your name"
                    value={justclick}
                    onChange={(e) =>
                      setJustClick(e.target.value)
                    }
                  />
                  <button
                    disabled={disbaleform}
                    id="btn_rt"
                    className="btn btn-secondary"
                    onClick={handleJustClick}
                  >
                    Add by Just click
                  </button>

                  {item.length > 0 && (
                    <p>select your address</p>
                  )}
                  <div id="maindiv">
                    {item.length > 0 &&
                      item.map((data) => {
                        console.log(data.id);
                        return (
                          <>
                            <div
                              className="btn btn-success"
                              onClick={() => {
                                selectAddress(data.id);
                              }}
                              key={data.id}
                              class="address"
                            >
                              <div
                                key={data.id}
                                class="addressinner"
                              >
                                <p className="p">
                                  {data.name}
                                </p>

                                <p className="p">
                                  {data.mobile}
                                </p>

                                <p className="p">
                                  {data.address}
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                  {success && (
                    <p style={{ color: "green" }}>
                      Address Selected{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpen(false);
              }}
              id="cancelBtn"
            >
              Close
            </button>
            {/* <button>Continue</button> */}
          </div>
        </div>
      </div>
    );
  };

  const CartView = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row">
              {props.cart.map((item) => {
                return (
                  <div
                    key={item[0]}
                    className="col-xs-12 col-md-6 col-lg-6"
                  >
                    <CartItem
                      id={item[0]}
                      count={item[1]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <br />
            {/* addresss container */}
            <div className="container border border-black">
              <label>Add Your Address</label>
              <br />
              <button
                className="btn btn-primary"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add Address
              </button>
              <br />
              {showHiddenAddress()}
              {ismanual == true &&

                    <>
                      <ul key={address.mobile}>
                        <h3>Your Entered Address</h3>
                        <li> name :{address.fullname} </li>
                        <br />
                        <li> mobile: {address.mobile}</li>
                        <br />
                       
                        <li>address type:{address.addresstype}</li>
                        <br />
                        <li>addressLine 1:{address.addressline1}</li>
                        <br />
                        <li>addressLine2:{address.addressline2}</li>
                        <br />
                        <li>landmark:{address.landmark}</li>
                        <br />
                        <li>pincode:{address.pincode}</li>
                        <br />
                        <li>city:{address.city}</li>
                        <br />
                        <li>state:{address.state}</li>
                      </ul>
                 </>}

              {finalJustPayAddress.length > 0 &&
                finalJustPayAddress.map((data) => {
                  return (
                    <>
                      <ul key={data.id}>
                        <h3>Your Selected Address</h3>
                        <li> name :{data.name} </li>
                        <br />
                        <li> mobile: {data.mobile}</li>
                        <br />
                        <li>address:{data.address}</li>
                      </ul>
                    </>
                  );
                })}
            </div>
            <br />
            <br />
            {/* bill conatiner */}
            {!disabled && (
              <div className="container border border-black">
                <h1 className="text-center">
                  Bill : Rs {total}
                </h1>
                <StripeCheckout
                  disabled={disabled}
                  token={props.user.user}
                  total={(total / 60) * 100}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const showHiddenAddress = () => {
    return (
      <>
        <div>
          {ismanual === true && (
            <p>address entered manullay</p>
          )}
          {ismanual === false && (
            <p>address entered by just click</p>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      {open && BackgroundModal()}
      {CartView()}
      {/* {showHiddenAddress()} */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Cart);
