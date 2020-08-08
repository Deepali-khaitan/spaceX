import React from 'react';
import './main.css';


class filter extends React.Component{
    constructor(props){
        super(props);
       this.state={
         filteredData:null
      }
        
    }
    yearClicked=(e)=>{
      console.log("in function",e.target.value,this.props.spaceXdata)
      let filteredData= this.props.spaceXdata.filter(ele=>ele.launch_year==e.target.value)
      this.setState({filteredData:filteredData})
      console.log("filteredData",filteredData)
     

    }
    
    render(){
        return(
            <div className=" box row">
            <div className="container_filter column1">
               <h4>Filters</h4>
               <div className="launchyear ">Launch Year</div> 
               <div className="border1"></div>
               <div className="launch">
               <div className="row">
               <div  className="column" > <button type="button" value="2006" onClick={e=>this.yearClicked(e)} className="btn">2006</button></div>
               <div  className="column" > <button type="button" value="2007" onClick={e=>this.yearClicked(e)} className="btn">2007</button></div>
                </div> 
                <div className="row">
                <div  className="column" > <button type="button" value="2008" onClick={e=>this.yearClicked(e)} className="btn">2008</button></div>
                <div  className="column" > <button type="button" value="2009" onClick={e=>this.yearClicked(e)}  className="btn">2009</button></div>
                 </div>
                 <div className="row">
                 <div  className="column" > <button type="button" value="2010" onClick={e=>this.yearClicked(e)} className="btn" >2010</button></div>
                 <div  className="column" > <button type="button" value="2011" onClick={e=>this.yearClicked(e)} className="btn" >2011</button></div>
                 </div>
                 <div className="row">
                 <div  className="column" > <button  type="button" value="2012" onClick={e=>this.yearClicked(e)}className="btn">2012</button></div>
                 <div  className="column" > <button  type="button" value="2013" onClick={e=>this.yearClicked(e)}className="btn">2013</button></div>
               </div>
               <div className="row">
                 <div  className="column" > <button type="button" value="2014" onClick={e=>this.yearClicked(e)} className="btn">2014</button></div>
                 <div  className="column" > <button  type="button" value="2015" onClick={e=>this.yearClicked(e)}className="btn">2015</button></div>
               </div>
               <div className="row">
                 <div  className="column" > <button type="button" value="2016" onClick={e=>this.yearClicked(e)} className="btn">2016</button></div>
                 <div  className="column" > <button type="button" value="2017" onClick={e=>this.yearClicked(e)} className="btn">2017</button></div>
               </div>
               <div className="row">
                 <div  className="column" > <button type="button" value="2018" onClick={e=>this.yearClicked(e)} className="btn">2018</button></div>
                 <div  className="column" > <button type="button" value="2019" onClick={e=>this.yearClicked(e)} className="btn">2019</button></div>
               </div>
               <div className="row">
                 <div  className="column" > <button type="button" value="2020" onClick={e=>this.yearClicked(e)} className="btn">2020</button></div>
              
               </div>
               </div>

              
               <div className="launchyear ">Successful Launch</div> 
               <div className="border2"></div> 
               <div className="launch">
               <div className="row">
               <div  className="column" > <button className="btn">true</button></div>
               <div  className="column" > <button  className="btn">false</button></div>
                </div> 
               </div>
               
               <div className="launchyear ">Successful Landing</div> 
               <div className="border2"></div> 
               <div className="launch">
               <div className="row">
               <div  className="column" > <button className="btn">true</button></div>
               <div  className="column" > <button  className="btn">false</button></div>
                </div>  
               </div>


            
            </div>
            <div className="column1">
                {console.log("finaldata",this.state.filteredData)}
                <div className="spacebox ">{this.state.filteredData?this.state.filteredData.map(ele=><div>
              
              <div className="img"><img src={ele.links.mission_patch} alt="" height="200" width="200"/></div>  
              <div className="font">{ele.mission_name+"#"+ele.flight_number}</div>
                <div><label className="bold">Mission Ids:</label>
                <ul>{ele.mission_id.map(item=><li className="naming">{item}</li>)}</ul>
                </div>
             <div><label className="bold">Launch Year:</label><label className="naming">{ele.launch_year}</label></div>
             {console.log("img",typeof ele.launch_success)}
               
              <div><label className="bold">successful Launch:</label><label className="naming">{JSON.stringify(ele.launch_success)}</label></div>
             <div><label className="bold">successful Landing:</label><label className="naming">{ele.launch_landing}</label></div>
             </div>
           ):"No Data"}</div>
            
            </div>
          
            </div>
        )
    }

}

export default filter;