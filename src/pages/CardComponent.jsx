export default function CardComponent(props){
    
    return(
        <>

{/*                         <CardComponent Name={item.Name} Desc={item.Desc} Pcode={item.Pcode} Price={item.Price} Photo={item.Photo}  />
 */}
            <div className="card w-25 m-2">
                <img src={props.Photo} alt="preview" height="200" className="card-img-top"/>
                <div className="card-header" style={{height:'230px'}}>
                    <p>{props.Name}</p>
                    <p>{props.Desc}</p>
                    <p>{props.Pcode}</p>

                    <p>{props.Price}</p>
                    <p>{props.Date}</p>
                    <p>{props.GST}</p>
                    <p><span>{props.MRP}</span>  ||  <span>{props.OfferP}</span></p> 

                    {/* <p>{props.Price}</p> */}



                </div>
                <div className="card-footer w-100">
                    <button className="btn btn-primary">
                    Add to cart
                    </button>
                </div>
            </div>
        
        
        </>
    )
}