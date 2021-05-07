  
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    const imgClass = `cards__item__pic__wrap ${props.datatype}`;
    const pathTo = `/content/${props.title}`;
    
    return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={pathTo}>
                <figure className={imgClass} data-category={props.label} content-title={props.title}>
                    <img
                    className='cards__item__img'
                    alt='Travel'
                    src={props.src}
                    />
                </figure>
                <div className="title-card">{props.title}</div>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  );
}

export default CardItem;