import React from "react";

function BlogItem({ image, name, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p><i class="fa-solid fa-user"></i>{price} </p>
        </div>
    );
}

export default BlogItem;