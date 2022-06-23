import React, {useState, Model} from "react";
// import { Button } from "react-bootstrap";
import Car from "./Card";
const Card = ({ car }) => {
  const [show, setShow] = useState(false);
  const [carItem, setItem] = useState();
  console.log(car);
  return (
    <>
      {Car.map((item) => {
        let thumbnail =
          item.imageLinks &&
          item.imageLinks.smallThumbnail;
        let amount = item.Price && item.Price.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{this.props.meta.description}</h3>
                  <p className="title">{this.props.meta.engine}</p>
                  <p className="title">${this.props.meta.price}</p>
                </div>
              </div>
              <Car show={show} item={carItem} onClose={() => setShow(false)} />
            </>
          );
        }
      })}
    </>
  );
};
export default Card;