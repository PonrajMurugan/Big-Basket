import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../Products/product.json';
import Button from 'react-bootstrap/Button';
import './product-details.css';
import { useDispatch, useSelector } from 'react-redux';
import { reduxAddToCard } from '../../redux/slice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedRate, setSelectedRate] = useState(null);
  const reduxData = useSelector(state => state.card.addToCardData);
  const product = productsData.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const details = product.detail[0];

  const handleRateClick = (rate) => {
    setSelectedRate(rate);
  };

  const funAddToCard = (item) => {
    if (!selectedRate) {
      alert('Please select a rate before adding to cart.');
      return;
    }

    const itemWithRate = { ...item, selectedRate };
    const itemId = item.id.toString();


    const dataCopy = JSON.parse(JSON.stringify(reduxData));

    if (dataCopy[itemId]) {
      dataCopy[itemId].push(itemWithRate);
    } else {
      dataCopy[itemId] = [itemWithRate];
    }

    dispatch(reduxAddToCard(dataCopy));
  };

  return (
    <div className=''>
      <div className="container">
        <div className="product-details">
          <h6>Home / Fruits & Vegetables</h6>
          <div className="image-and-rates">
            <img src={product.img} alt={product.proname} />
            <div className="rates">
              <p className='custom-underline' style={{color: "grey"}}>{product.fresho} !</p>
              <h1 style={{fontSize: "1.25rem", fontWeight: "700"}}>
                {details.head}
                {selectedRate && (
                  <span className="selected-rate">
                    {' - '}{selectedRate.kg}: ₹{selectedRate.proprice}
                  </span>
                )}
              </h1>
              {product.rate.map((rate, index) => (
                <div 
                  key={index} 
                  onClick={() => handleRateClick(rate)} 
                  className={`rate-item ${selectedRate === rate ? 'active' : ''}`}
                >
                  <span className='rates-tk' style={{fontSize: "1.0rem", fontWeight: "600"}}>{rate.kg}: ₹{rate.proprice}</span>
                  {selectedRate === rate && (
                    <i className="bi bi-check-circle tick-icon tkico"></i>
                  )}
                </div>
              ))}
              <p style={{marginTop: "15px", color: "green", fontSize: "1.0rem", fontWeight: "400"}}>You Save 27% on Offer</p>
              <p style={{color: "grey", fontSize: "1.0rem", fontWeight: "400"}}>(Inclusive of all taxes)</p>
              <div className='but-sec'>
                <Button className='a-but' variant="danger" onClick={() => funAddToCard(product)}>Add To Cart</Button>
                <i className="bi bi-bookmark b-s-ico">Save For Later</i>
              </div>
            </div>
          </div>
          <div className="product-info">
            <h2>{details.head}</h2>
          <div className='d-flex justify-content-between'>
            <h4>{details.abo_head}</h4> <i class="bi bi-plus ibb"></i>
          </div>          
            <p>{details.abo_detail1}</p>
            <p className='p'>{details.abo_detail2}</p>
          <div className='d-flex justify-content-between'>
            <h4>{details.benifit_head}</h4> <i class="bi bi-plus ibb"></i>
          </div>
            <p>{details.ben_detail1}</p>
            <p  className='p'>{details.ben_detail2}</p>
          <div className='d-flex justify-content-between'>
            <h4>{details.store_head}</h4>  <i class="bi bi-plus ibb"></i>
          </div>
            <p  className='p'>{details.store_detail}</p>
          <div className='d-flex justify-content-between'>
            <h4>{details.other_head}</h4>  <i class="bi bi-plus ibb"></i>
          </div>
            <p>{details.other_detail1}</p>
            <p>{details.other_detail2}</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ProductDetails;
