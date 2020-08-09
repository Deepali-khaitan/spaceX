import React from 'react';
import './App.css';
import './main.css';
import Filter from "./filter"


class Getpage extends React.Component {
  state = {
    loading: true,
    spaceXdata: null,
  };


  async componentDidMount() {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    const response = await fetch(url);
    const data = await response.json();

    if (data !== null) {
      return this.setState({ loading: false, spaceXdata: data })
    }

  }
  render() {
    return (
      <div>
        {this.state.loading ? <div>loading....</div> :
          <div className="container">
            <div className="launchbox">
              <div className="header"><h3><b>SpaceX Launch Programs</b></h3>
                <Filter spaceXdata={this.state.spaceXdata} />
                <div><label>Developed By-:Deepali khaitan</label></div>

              </div>

            </div>
          </div>}
      </div>)

  }
}
export default Getpage;
