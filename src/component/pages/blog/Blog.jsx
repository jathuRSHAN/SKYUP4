import React from "react";

import { BlogList } from "../../data";
import "./blog.css";
import BlogItem from "./BlogItem";

function Blog() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Blog</h1>
            <div className="menuList">
                {BlogList.map((blogItem, key) => {
                    return (
                        <BlogItem
                            key={key}
                            image={blogItem.image}
                            name={blogItem.name}
                            price={blogItem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Blog;