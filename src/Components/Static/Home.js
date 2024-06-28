import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'


const Home = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-1920,q=80",
    },
    {
      id: 2,
      sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-1920,q=80",
    },
    {
        id: 3,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 4,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 5,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 6,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_tea-&-coffee_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 7,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_flavoured-&-soya-milk_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 8,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_soft-drinks-&-more_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 9,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_biscuits-&-namkeens_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 10,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-1920,q=80",
      },
      {
        id: 11,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_pasta-sauces-&-more_480_270723.jpg?tr=w-1920,q=80",
      },
      {
        id: 12,
        sta_img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_sweet-cravings_480_250923.jpg?tr=w-1920,q=80",
      }
  ];

  return (
    <div className='container'>
    <h4 style={{fontSize:"1.5rem", fontWeight:"700"}}>Fruits and Vegetables</h4>
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {data.map((item, index) => (
        <React.Fragment key={item.id}>
          <div
          className='hov'
            onClick={() => navigate(`/details/${item.id}`)}
            style={{ width: '23%', margin: '1%', cursor: 'pointer' }}
          >
            <img
              src={item.sta_img}
              alt={`Item ${item.id}`}
              style={{ width: '100%', marginBottom: '20px', border:'1px solid  rgb(222, 206, 206)',  boxShadow: '0 4px 8px rgba(136, 122, 122, 0.515)' }}
            />
          </div>

          {index === 3 && <h4 style={{ width: '100%' , fontSize:"1.5rem", fontWeight:"700" }}>Beverages</h4>}
          {index === 7 && <h4 style={{ width: '100%' , fontSize:"1.5rem", fontWeight:"700" }}>Snacks Store</h4>}
        </React.Fragment>
      ))}
    </div>


  </div>
  );
};

export default Home;
