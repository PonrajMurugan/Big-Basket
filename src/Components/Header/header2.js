import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "../Header/header2.css"

const Header2 = () => {
    return (
        <div className='d-flex head-whole'>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropd'>
                    Shop By Category
                </Dropdown.Toggle>

                <Dropdown.Menu className='dd'>

                    <Dropdown.Item>Fruits & Vegetables</Dropdown.Item>
                    <Dropdown.Item>Foodgrains,Oil & Masala</Dropdown.Item>
                    <Dropdown.Item>Bakery,Cakes & Dairy</Dropdown.Item>
                    <Dropdown.Item>Beverages</Dropdown.Item>
                    <Dropdown.Item>Snacks & Brander Foods</Dropdown.Item>
                    <Dropdown.Item>Beauty & Hygienic</Dropdown.Item>
                    <Dropdown.Item>Cleaning & Household</Dropdown.Item>
                    <Dropdown.Item>Kitchen,Garden & Pets</Dropdown.Item>
                    <Dropdown.Item>Lunchboxes & Bags</Dropdown.Item>
                    <Dropdown.Item>Egg, Meat & Fish</Dropdown.Item>
                    <Dropdown.Item>Gourmet & World Food</Dropdown.Item>
                    <Dropdown.Item>Baby Care</Dropdown.Item>
                    <Dropdown.Item>Paan Corner</Dropdown.Item>

                </Dropdown.Menu>
                
                
            </Dropdown>

            <div className='d-flex ban'>
                <p>Exotic Fruits</p>
                <p>Tea</p>
                <p>Ghee</p>
                <p>Nandini</p>
                <p>Fresh Vegetables</p>
            </div>

            <div className='ban-imag'>
                <i class="bi bi-chevron-double-right"></i>
                <img src='./Images/Smart_basket.jpg' className='ban-imag1' alt='img' />
                <img src='./Images/hp_cmc.jpg' className='ban-imag2' alt='img' />
            </div>
            
        </div>
    );
};

export default Header2;