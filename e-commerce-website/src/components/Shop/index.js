import React, { useState } from 'react'
import './shop.css';

import { Link } from 'react-router-dom'


export let Shop = () => {

  return (
    <div className="shop">


        <div className="shop_inner">
          <img className="shop_image" id="image1" src="https://newstimeusa.com/wp-content/uploads/2021/10/electronic_devices-daily-sun.jpg" alt="" />
          <div className="shop_product_name">HEADPHONES</div>

          <div className="shop_link_outer">

            <Link to={{pathname: '/headphones', state: {num:0, text:'HEADPHONES'}}}>
              <a className="shop_link">shop</a>
            </Link>
            <span className="arrow">></span>

          </div>
        </div>

        <div className="shop_inner">
          <img className="shop_image" id="image2" src="https://images.ctfassets.net/p45hjpqws0vd/1RPH6ZTXIP5AFKauWNoEz2/90d6921a3124a1da6721b6d80f1f94db/Untitled-1.png" alt="" />
          <div className="shop_product_name">SPEAKERS</div>

          <div className="shop_link_outer">

          <Link to={{pathname: '/speakers', state: {num:1, text:'SPEAKERS'}}}>
              <a className="shop_link">shop</a>
            </Link>
            <span className="arrow">></span>

          </div>
        </div>

        <div className="shop_inner">
          <img className="shop_image" id="image3" src="https://ostraining.com/wp-content/uploads/ostrainingcom/subscription-billing-hq.jpg" alt="" />
          <div className="shop_product_name">EARPHONES</div>

          <div className="shop_link_outer">

          <Link to={{pathname: '/earphones', state: {num:2, text:'EARPHONES'}}}>
              <a className="shop_link">shop</a>
            </Link>
            <span className="arrow">></span>

          </div>
        </div>

      </div>
  );
}

export default Shop;
