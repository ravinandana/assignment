import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CardComponent from './CardComponent';

const Product = () => {
    const [productcs] = useState([
        { Name: 'Boat Headphone',Desc:'Wireless', Pcode:112, MRP:2252, OfferP: 2000, GST:18.00, Photo: '/images/boat.jpg', Date:'13/10/2022' },
        { Name: 'Laptop',Desc:'4GB RAM | 1TB Hard Disk', Pcode:112, MRP:2252, OfferP: 2000, GST:18.00, Photo: '/images/laptop.jpg', Date:'15/10/2022' },
        { Name: 'Mobile',Desc:'64MP Camera | 8GB RAM', Pcode:112, MRP:2252, OfferP: 2000, GST:18.00, Photo: '/images/mobile.jpg', Date:'15/10/2022' },

        // { Name: 'Laptop', Price: 23432, Photo: '/images/laptop.jpg' },
        // { Name: 'Samsung TV', Price: 1234, Photo: '/images/boat.jpg' },
        // { Name: 'Laptop', Price: 23432, Photo: '/images/laptop.jpg' },
        // { Name: 'Samsung TV', Price: 1234, Photo: '/images/boat.jpg' },
        // { Name: 'Laptop', Price: 23432, Photo: '/images/laptop.jpg' }

    ])
    return (
        <>
            <h1>Product Catalog</h1>
            <button className='float-end1 btn btn-info1'>
                <NavLink to="/addproducts"  >
                    Add Products
                </NavLink>
            </button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {/* <h1>Hai</h1> */}
                {
                    productcs.map(item =>
                        <CardComponent Name={item.Name} Desc={item.Desc} Pcode={item.Pcode} Price={item.Price} MRP={item.MRP} OfferP={item.OfferP} GST={item.GST} Photo={item.Photo}  Date={item.Date} />
                    )
                }
            </div>

        </>
    );
};

export default Product;