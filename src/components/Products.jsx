import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import Loading from './Loading';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [condi, setcondi] = useState(true)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const api = await fetch(`https://fakestoreapi.com/products/`);
        const data = await api.json();
        setProducts(data);
        setcondi(false)
    }

    if(condi){
        return (<Loading/>)
    }

  return (
    <div className=' flex flex-wrap gap-2 md:gap-5 justify-evenly items-center'>
        {
            products?.map(pd => <SingleProduct key={pd.id} {...pd} />)
        }
    </div>
  )
}

export default Products