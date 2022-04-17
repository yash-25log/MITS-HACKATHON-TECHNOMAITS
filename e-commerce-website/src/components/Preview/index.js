import './preview.css'

function Preview(){
    return(
        <div className="preview">
            <div className="zx9_preview">
                <div className="zx9_left">
                    <img className="zx9_image" src='https://media.karousell.com/media/photos/products/2020/7/10/chemical_engineering_books_1594362099_2955f3c2.jpg' alt=''/>
                </div>

                <div className="zx9_right">
                    <h1 className="zx9_heading">STUDY MATERIAL</h1>
                    <p className="zx9_content">Find the best material used by your fellow mates at campus</p>
                    <button className="zx9_button">SEE PRODUCT</button>
                </div>
            </div>

            <div className="zx7_preview">

                {/* <h1 className="zx7_heading">LIFETIME COURSES</h1> */}
                <button className="zx7_button">SEE PRODUCT</button>
            </div>

            <div className="yx1_preview">
                <div className="yx1_left">
                    <img className="yx1_image" src='https://i0.wp.com/theconstructor.org/wp-content/uploads/2017/12/instruments-used-in-engineering-drawings.jpg?fit=614%2C374&ssl=1' alt=''/>
                </div>

                <div className="yx1_right">
                    <h1 className="yx1_heading">INSTRUMENTS</h1>
                    <button className="zx7_button">SEE PRODUCT</button>
                </div>
            </div>
        </div>
    )

}
export default Preview
