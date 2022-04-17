import "./footer.css";
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <div className="footer">
          <div className="footer_inner">

          <div className="top_container">

            {/* <div className="footer_logo"><img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/logo.svg" alt="Cart"/></div> */}
            <div style={{color : 'white'  }} >
 <p style={{fontSize : '30px' }} >TechnoMaits❤</p> 
</div>

            <ul className="footer_ul">
                <Link className="link-tag" to={{pathname: '/home'}}>
                    <li className="footer_first_link"><a>HOME</a></li>
                </Link>
                <Link className="link-tag" to={{pathname: '/headphones', state: {num:0, text:'HEADPHONES'}}}>
                    <li><a>CATEGORIES</a></li>

                </Link>
                <Link className="link-tag" to={{pathname: '/speakers', state: {num:1, text:'SPEAKERS'}}}>
                    <li><a>FORUM</a></li>
                </Link>
                <Link className="link-tag" to={{pathname: '/earphones', state: {num:2, text:'EARPHONES'}}}>
                    <li className="last_link"><a>SHOP</a></li>
                </Link>
                
            </ul>

          </div>

          <div className="bottom_container">
              
              <span className="footer_text">Techno-Connect is an all in one stop to fulfill your college needs. We're a small team of developers who are devoted to helping you get the most out of college life. Come and try our platform - and get the best deals!!!</span>

              <div className="footer_images_container">
                  <div><img src="facebook.png" alt=""/></div>
                  <div><img src="twitter.png" alt=""/></div>
                  <div><img src="instagram.png" alt=""/></div>
              </div>
          </div>
          
          <div className="copyright_text_container">

              <div className="copyright_text">Copyright 2022. All Rights Reserved</div>

              <div className="footer_images_container2">
                  <div><img src="facebook.png" alt=""/></div>
                  <div><img src="twitter.png" alt=""/></div>
                  <div><img src="instagram.png" alt=""/></div>
              </div>

          </div>

          </div>
      </div>
  );
}

export default Footer;
