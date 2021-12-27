import React from 'react'

function About(props) {
    return (
        <div className="container my-3" style={{color: props.mode===('light')?'black':'white'}}>

            <h1 >About Us</h1>
            <p>An About Us page helps your company make a good first impression, and is critical for 
            building customer trust and loyalty. An About Us page should make sure to cover basic information 
            about the store and its founders, explain the company's purpose and how it differs from the 
            competition, and encourage discussion and interaction. Here are some free templates, samples, 
            and example About Us pages to help your ecommerce store stand out from the crowd.</p>
        </div>
    )
}

export default About

