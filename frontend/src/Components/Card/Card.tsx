import React from 'react'
import  "./Card.css";
import internal from 'stream';

interface Props{
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className='card'>Card
        <div className='details'>
            <h2>{companyName} {ticker}</h2>
            <p>${price}</p>
            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis magnam iure amet ipsam explicabo in adipisci ducimus labore et exercitationem sapiente nam esse, sint cupiditate eos officia molestias minima!</p>
        </div>    
    </div>
  )
}

export default Card