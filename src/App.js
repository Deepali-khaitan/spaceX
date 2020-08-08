import React from 'react';
import './App.css';
import './main.css';
import Filter from "./filter"


class getpage extends React.Component{
state={
  loading:true,
  spaceXdata:null,
};


async componentDidMount(){
  const url="https://api.spaceXdata.com/v3/launches?limit=100";
  const response= await fetch(url);
  const data = await response.json();
  console.log("dataaaaaaaaa",data)
  if(data!==null){
    return this.setState({loading:false,spaceXdata:data})
  }
 
}
render()
{
  return(
     <div>
       {this.state.loading?<div>loading....</div>:
       <div className="container">
         <div className="launchbox">
         <div className="header"><h3><b>SpaceX Launch Programs</b></h3>
          <Filter  spaceXdata={this.state.spaceXdata}/>
         
         
         </div>
         </div>
       </div>}
     </div>)
  
}
}
export default getpage;
