
import './App.css';
import React, { Component } from 'react';
import UsersList from './userslist'

class App extends Component {
 
  constructor(props){
    super(props);

    this.state={
      data:
        {results:[{
          "gender": "female",
          "name": {
          "title": "Miss",
          "first": "Eleanor",
          "last": "Pearson"
          },
          "location": {
          "street": {
          "number": 5953,
          "name": "Woodlawn Avenue"
          },
          "city": "Roscommon",
          "state": "Louth",
          "country": "Ireland",
          "postcode": 15832,
          "coordinates": {
          "latitude": "22.0976",
          "longitude": "148.1676"
          },
          "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
          }
          },
          "email": "eleanor.pearson@example.com",
          "login": {
          "uuid": "5b319fc9-1c6b-4430-8917-b9265500f6e0",
          "username": "heavypeacock615",
          "password": "arkansas",
          "salt": "VARpodrJ",
          "md5": "8608f67d943db9267cdab14c23029559",
          "sha1": "df69c593c1a8b86fd6889eeae38156a92d57cbbf",
          "sha256": "0669adbb3518f06393ef227d009ddfde7179cbb1677e920a6a74b91297568dd3"
          },
          "dob": {
          "date": "1952-01-31T08:56:14.477Z",
          "age": 68
          },
          "registered": {
          "date": "2009-06-22T03:17:08.671Z",
          "age": 11
          },
          "phone": "031-009-4804",
          "cell": "081-664-1569",
          "id": {
          "name": "PPS",
          "value": "1435283T"
          },
          "picture": {
          "large": "https://randomuser.me/api/portraits/women/33.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
          },
          "nat": "IE"
          }
      ]}
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  showUsersDetails =(index) =>{
    
    if(document.getElementById("button"+index).innerHTML=="Hide Details"){
      document.getElementById("button"+index).innerHTML="Show Details"
      document.getElementById("details"+index).className="hide"
    }else{
    document.getElementById("button"+index).innerHTML="Hide Details";
    document.getElementById("details"+index).className="show"}
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
       {console.log(this.state.data)}
          Address Book
        
      </header>
      <UsersList items={this.state.data.results} showUsersDetails={this.showUsersDetails}/>
    </div>
  );
}}

export default App;
