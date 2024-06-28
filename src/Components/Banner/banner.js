import React from 'react';
import '../Banner/banner.css'

const Banner = () => {
    return (
        <div className='container'>
            <div className='b-imag'>
                <img src='./Images/banner.jpg' alt='load' />
            </div>

            <div className='ba-imag'>
            <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_01.png?tr=w-1920,q=80' alt='img' />
            <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_02.png?tr=w-1920,q=80' alt='img' />
            <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_03.png?tr=w-1920,q=80' alt='img' />
            <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_04.png?tr=w-1920,q=80' alt='img' />
            <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_05.png?tr=w-1920,q=80' alt='img' />
            <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_06.png?tr=w-1920,q=80' alt='img' />
        </div>
            
        <div className='d-flex ban-end'>
            <h4>My Smart Basket</h4>
            <h6>View All</h6>
            <i class="bi bi-chevron-left b-ico"></i>
            <i class="bi bi-chevron-right"></i>


        </div>
            
        </div>
    );
};

export default Banner;