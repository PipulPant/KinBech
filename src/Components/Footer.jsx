import React from 'react'
import './Footer.css'


const Footer = () => {

    let date = new Date();

    return (
        <div className='footer__component row container-fluid'>
            <div className='footer__component __left col col-lg-6 col-md-6 col-sm-12 col-12'>
                <p>Other Places in Nepal - Kathmandu-Pokhara-Bhairawa-Butwal</p>
            </div>
            <div className='footer__component __right col col-lg-6 col-md-6 col-sm-12 col-12'>
                <p>Free Classifieds in Nepal. © 2021-{date.getFullYear()} OLX
                Other PLaces in Nepal India, Kathmandu  Pokhara  Bhairawa Butwal</p>
            </div>
        </div>
    )
}

export default Footer
