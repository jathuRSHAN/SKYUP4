import React from "react";
import "./blog.css"
function BlogItem({ image, name, user, url }) {
    return (
        <div className="menuItem">
            {/* <div style={{ backgroundImage: `url(${image})` }}> </div> */}
            <a href={url}>
                <img src={image} alt="" />
                <h3> {name} </h3>
                <p><i class="fa-solid fa-user"></i>{user} </p></a>
        </div>
    );
}

export default BlogItem;