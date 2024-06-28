import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './smart-basket.css';
import { useDispatch, useSelector } from 'react-redux';
import { reduxAddToCard } from '../../redux/slice';
import axios from 'axios';



const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [selectedRate, setSelectedRate] = useState(product.rate[0]);
  const reduxData = useSelector(state => state.card.addToCardData);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    setState(reduxData);
  }, [reduxData]);

  const handleRateChange = (event) => {
    const selected = product.rate.find(rate => rate.kg === event.target.value);
    setSelectedRate(selected);
    event.stopPropagation();
  };

  const funAddToCard = (item) => {
    const itemId = item.id.toString();
    const updatedItem = { ...item, selectedRate };


    let newState = { ...state };

    if (newState[itemId]) {
 
      newState[itemId] = [...newState[itemId], updatedItem];
      
    } else {
      newState[itemId] = [updatedItem];
    }

    dispatch(reduxAddToCard(newState));
  };



  return (
    <div className="product">
      <div className='pp'>
        <div onClick={handleClick}>
          <img src={product.img} alt={product.proname} />
          <p style={{ color: "grey", fontSize: "14px", fontWeight: "200" }}>{product.fresho}!</p>
          <p style={{ fontSize: "1rem", fontWeight: "400", lineHeight: "1.25rem" }}>{product.proname}</p>
        </div>
        <div className="rates">
          <select 
            value={selectedRate.kg} 
            onChange={handleRateChange}
            onClick={(event) => event.stopPropagation()}
          >
            {product.rate.map((rate, index) => (
              <option key={index} value={rate.kg}>
                {rate.kg}
              </option>
            ))}
          </select>
          <div>
            <h6 style={{ fontSize: "1rem", fontWeight: "600" }}>₹{selectedRate.proprice} </h6>
          </div>
          <div className='save-cart'>
            <img src='./Images/save.png' className='' alt='pic' onClick={(event) => event.stopPropagation()} />
            <div>
              <Button className='cart-button' onClick={() => funAddToCard(product)} variant="outline-danger"> Add</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
