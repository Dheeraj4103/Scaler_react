import React ,{ memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoryLink.module.css"
import { NavLink } from "react-router-dom";

function CategoryLink({ category }) {
    console.log("Category link rendered", category.id);

    return (
        <li>
            <NavLink
                className={({ isActive }) =>
                isActive ? styles.selected : styles.link
              }
                to={`/categories/${category.id}`}
            >
                { category.name }
            </NavLink>
        </li>
    )
}

export default memo(CategoryLink);