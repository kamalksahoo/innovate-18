import React, { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import StripeCheckout from "../../StripeCheckout";
import Data from "../../dummydata/Data";
//Redux
import { connect } from "react-redux";
import MyModal from "../../components/Modal/MyModal";

const Cart = (props) => {
  const [total, setTotal] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [item, setItem] = useState([]);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    computeTotal();
  });

  const SearchItem = () => {
    Data.filter((record) => {
      if (
        searchTerm !== "" &&
        record.mobile_no == searchTerm
      ) {
        setItem([
          {
            name: record.name,
            mobile: record.mobile_no,
            address: record.Address,
          },
        ]);
        setDisabled(false);
      }
    });
    // console.log(item)
  };

  const computeTotal = () => {
    let totalAmount = 0;
    props.cart.forEach((item) => {
      totalAmount += parseInt(item[1]) * item[2];
    });
    setTotal(totalAmount);
  };
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
                  <CartItem id={item[0]} count={item[1]} />
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
            <input
              type="text"
              className="form-control"
              required
              placeholder="enter mobile number"
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={SearchItem}
            >
              Search Address By Mobile
            </button>
            {/* <MyModal/> */}

            {item.length > 0 &&
              item.map((data) => {
                return (
                  <>
                    <div key={data.mobile}>
                      <h3>Your Fetched Shipping Address</h3>
                      name :{data.name} <br />
                      mobile: {data.mobile}
                      <br />
                      address:{data.address}
                    </div>
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Cart);
