import './home_header.css'
import React from 'react'

function Home_Header(){

    return(

        <div className="header">
            <div className="header_inner">

                <div className="right-content">

                <div className="new_product">Online store for the students, by the students</div>

                <div className="header_heading_container">
                    <div className="header_heading">BEST College Gear House </div>
                </div>

                <div className="hero-about-outer">
                <div className="hero_about">Made with ❤ by TechnoMaits</div>
                </div>

                <button className="see_product">SEE PRODUCT</button>


                </div>


            </div>
        </div>
        
    )
}
export default Home_Header