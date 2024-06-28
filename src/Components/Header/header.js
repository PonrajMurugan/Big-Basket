import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Header/header.css";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { reduxAddToCard, reduxAddToCardDirect } from '../../redux/slice';

const Header = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.card.addToCardData);
  const listItem = Object.keys(reduxData).length;
  const [open, setOpen] = useState(false);

  useEffect(() => {
  }, [reduxData]);

  const aggregatedItems = [];
  for (const key in reduxData) {
    reduxData[key].forEach(item => {
      const existingItem = aggregatedItems.find(it => it.id === item.id && it.selectedRate.kg === item.selectedRate.kg);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        const newItem = { ...item, qty: 1 }; 
        aggregatedItems.push(newItem);
      }
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const funMinus = (item) => {
    const itemId = item.id.toString();
    const dataCopy = JSON.parse(JSON.stringify(reduxData));

    if (dataCopy[itemId]) {
      const itemIndex = dataCopy[itemId].findIndex(it => it.selectedRate.kg === item.selectedRate.kg);

      if (itemIndex !== -1) {
        if (dataCopy[itemId].length === 1) {
          delete dataCopy[itemId];
        } else {
          dataCopy[itemId].splice(itemIndex, 1);
        }

        dispatch(reduxAddToCardDirect(dataCopy));
      }
    }
  };

  const grandTotal = aggregatedItems.reduce((total, item) => {
    return total + (item.qty * item.selectedRate.proprice);
  }, 0);

  return (
    <div className='bb d-flex'>
      <img src='./Images/bb-logo.jpg' alt='logo' />

      <div className='d-flex sea'>
        <i className="bi bi-search ico"></i>
        <input type="text" placeholder='Search For Products' className='search' />
      </div>

      <div className='d-flex location'>
        <i className="bi bi-compass"></i>
        <p>Select Location</p>
      </div>

      <div className='d-flex login'>
        <p>Login / Sign <br /> <span className='up'>Up</span></p>
      </div>

      {listItem > 0 ? (
        <IconButton aria-label="cart" onClick={handleClickOpen}>
          <Badge badgeContent={listItem} color="secondary">
            <ShoppingCartIcon style={{ fontSize: 30, marginTop: "-8px", marginLeft: "10px" }} />
          </Badge>
        </IconButton>
      ) : (
        <IconButton aria-label="cart">
          <ShoppingCartIcon style={{ fontSize: 30, marginTop: "-8px", marginLeft: "10px" }} />
        </IconButton>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your order"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='model-div'>
              {aggregatedItems.map(item => (
                <div key={`${item.id}-${item.selectedRate.kg}`} className='model-div-whole'>
                  <div>
                    {item.proname} - {item.selectedRate.kg} - ₹{item.selectedRate.proprice}
                  </div>
                  <div>
                    {item.qty} <i className="bi bi-dash" onClick={() => funMinus(item)}></i>
                  </div>
                </div>
              ))}
              <div className='model-div-whole'>
                <strong>Total: ₹{grandTotal}</strong>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
