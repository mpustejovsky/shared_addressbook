import ShowDetails from './showdetails'
import React, { Component } from 'react';

function UsersList(props){



    return(
        <div>
            <h1>Current Users</h1>
        <div className="user_area">

            {console.log ("userlist area",props.items)}
            

           
             {props.items.map((item,index)=>{
                return <div key={'u'+index} className="user_list">
                    <img src={item.picture.thumbnail} width="auto" height="125"></img>
                    
             <p key={'li'+index}>{item.name.title} {item.name.first} {item.name.last}</p>
                        <ShowDetails index={index} showUsersDetails={props.showUsersDetails} items={props.items}/>

                </div>
             })}

            




       
        </div></div>
    )
}

export default UsersList