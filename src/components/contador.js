import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  upCount = (e) => {
    e.preventDefault();
    this.setState(function(prevState) {
      return {
        count: prevState.count + 1
      }
    })
  }

  downCount = (e) => {
    e.preventDefault();
    this.setState(function(prevState) {
      if (prevState.count>0) {
          return {
            count: prevState.count - 1
          }
      }
    })
  }

  resetCount = (e) => {
    e.preventDefault();
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="counter">
        <div className="count">
          {this.state.count}
        </div>
        <div className="chageCounter">
          <a href="#" onClick={this.upCount} className="upCount">Up </a>
          <a href="#" onClick={this.downCount} className="downCount">Down </a>
          <a href="#" onClick={this.resetCount} className="resetCount">Reset</a>
        </div>
      </div>
    )
  }
}

export default Contador;