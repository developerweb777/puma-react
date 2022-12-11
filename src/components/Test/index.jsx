import React from 'react';
import qiz from "../../assets/Images/qiz.png"
import test from "../../assets/Images/test.png"
import "./index.scss"
const index = () => {
    return (
        <>
           <div className="container">
           <section className='test'>
                <h2 className='test_h2'>Testimonials</h2>
                <div className="test_wrapper">
                <img src={test} alt="" />
                <div className="test_text_wrapper">
                    <img className='test_text_wrapper_img' src={qiz} alt="" />
                    <strong className='test_text_wrapper_str'>Their services was best and friendly</strong>
                    <p className='test_text_wrapper_p'>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Eleifend </p>
                    <strong className='test_text_wrapper_str2'>Anna Paulwer</strong>
                    <p className='test_text_wrapper_p2'>Athletic</p>
                </div>
                </div>
            </section>
           </div>
        </>
    );
};

export default index;