
import React, { Component } from 'react'


class Surrender extends Component {
   
    surrender = () => {
            document.getElementById('newgame').style.display = "inline-block";
            document.getElementById('surrender').style.display = "none";
            this.props.getSurrender(true);
    }

  render() {
    return (
      <React.Fragment>
        <button id="surrender" class="button"  onClick={this.surrender}>SURRENDER</button>
      </React.Fragment>
    )
  }
}

export default Surrender