import React from 'react';

const CreateCard = () =>{
    return <div className="container">
        <div >
            <img src="https://i0.wp.com/www.barleyandsage.com/wp-content/uploads/2021/05/IMG_1716.png?resize=722%2C1024&ssl=1" className="recipe-img"/>
        </div>
        <div className="recipe">
            <div className="recipeName">
               <h1>Strawberry Cake</h1>
            </div>
            <div className="recipeLogo">
                <img src="https://e7.pngegg.com/pngimages/1022/5/png-clipart-emblem-logo-illustration-microsoft-azure-building-exterior-emblem-logo.png" alt="logo" className="recipeLogo"/>
            </div>
        </div>
        <div className="recipe-desription">
            <p>Three layer Strawberry dessert is not only beautiful looking but also delicious ! perfect dessert for spring and summer.</p>
        </div>
        <div className="recipe-gradient">
            <div className="recipe-energy">
                <p>346 Cal</p>
            </div>
            <div className="recipe-energy">
                <p>P/F/C:6/14/49</p>
            </div>
            <div className="recipe-energy">
                <p>13.9 ◦C</p>
            </div>
        </div>
        <div className="recipe-order">
            <div className="price">$13.90</div>
            <div className="cross-price">$18.90</div>
            <div> <button className="order-btn">Order</button> </div>
        </div>
    </div>;
}

export default CreateCard;