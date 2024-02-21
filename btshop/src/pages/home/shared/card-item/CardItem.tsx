import React, { FC } from "react";
import './CardItem.css'
import { IProduct } from "../../../../api/IProduct";
import { Link } from "react-router-dom";

const CardItem: FC<{ item: IProduct }> = ({ item }) => {
    return (
        <div className="card-item">
            <Link to={"/product/" + item.articul}><img src={'/DB/products/' + item.articul + '/' + item.image[0]} alt={item.name} /></Link>
            <div className="item-info">
                <div className="item-description">
                    <a href={item.brand.page}><div className="item-brand">{item.brand.name}</div></a>
                    <Link to={"/product/" + item.articul}><div className="item-name">{item.name}</div></Link>
                </div>
                <div className="item-price"><span>&#36;</span>{item.price}</div>
            </div>
        </div>
    );
}

export default CardItem;