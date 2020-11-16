function ShowDetails(props){

    console.log (props.index)
    let detailssection = props.items[props.index]
    console.log (detailssection.gender)
    
return(
   <div>
<button id={"button"+props.index} onClick={()=>props.showUsersDetails(props.index)}>ShowDetails</button>
<div id={"details"+props.index} className="hide">    
    list details here
   
    <p><b>Gender:</b> {detailssection.gender}</p>
    <p><b>Location:</b> {detailssection.location.street.number} {detailssection.location.street.name}<br>
    </br>{detailssection.location.city},{detailssection.location.state}  {detailssection.location.postcode}<br></br>
    {detailssection.location.country} 
    </p>
    <p><b>email:</b> {detailssection.email}</p>
    <p><b>phone:</b> {detailssection.phone}</p>
    <p><b>cell:</b> {detailssection.cell}</p>
    <p><b>Birthday</b> {detailssection.dob.date}</p>  
    
    

    
    
    </div>

</div>)
}

export default ShowDetails