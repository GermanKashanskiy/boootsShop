import React, { FC } from "react";
import './CardItem.css'
import { IProduct } from "../../../../api/IProduct";

const CardItem: FC<{ item: IProduct }> = ({ item }) => {
    return (
        <div className="card-item">
            <a href={item.page}><img src={'/DB/products/' + item.articul + '/' + item.image[0]} alt={item.name} /></a>
            <div className="item-info">
                <div className="item-description">
                    <a href={item.brand.page}><div className="item-brand">{item.brand.name}</div></a>
                    <a href={item.page}><div className="item-name">{item.name}</div></a>
                </div>
                <div className="item-price"><span>&#36;</span>{item.price}</div>
            </div>
        </div>
    );
}

export default CardItem;