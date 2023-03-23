import React from 'react'
import { SubHeading } from '../../components'
import data from '../../constants/data'
import './products.css'

const ProductList = ({product : {imgUrl, heading, text}}) => (
    <div className="app__productlist">
        <img src={imgUrl} alt="" />
        <h2>{heading}</h2>
        <p>{text}</p>
    </div>
)

const Products = () => {
  return (
    <div className="app__products section__padding app__bg" id="products">
        <SubHeading text='What We Offer'/>
        <div className="app__heading">View Our Amazing Products</div>
        <div className="app__produsts_list">
            {
                data.products.map( (product, index) => <ProductList product={product} key = {index}/>)
            }
        </div>
    </div>
  )
}

export default Products