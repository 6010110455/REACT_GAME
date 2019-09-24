import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Surrender from './surrender';

    class App extends Component {

    	constructor() {
    		super()
    		this.setCategory = React.createRef();
    		this.state = {
      			isSurrenderConfirm: false,
      			category: 'animal'
   			};
    	}

    	newgame = () => {
   		 	window.location.reload(false);
  		}

		handleCategory = (e) => {
    		let category = e.target.id;

	      			this.setCategory.current.setCategory('animal');
	      			this.setState({category: 'animal'})

		    document.getElementById('maingame').style.display = 'block';
		    document.getElementById('btn-group').style.display = 'none';
  		}

  		getSurrender = (isSurrender) =>{
   		 		if(isSurrender){
      				this.setState({isSurrenderConfirm:true});
    			}
  		}

  		getAnswer = (answer) => {
    		document.getElementById('complete').innerHTML = `Answer : ${answer}`;
  		}

       render() {
    return (
      <div className="App">
        <h1 id="welcome">Welcome to ReactCardGame</h1>
       
        <div id="maingame">
          <h1 ></h1>
            <div id="wordcard">
            {
              <WordCard ref={this.setCategory} value={this.state.category} isSurrenderConfirm={this.state.isSurrenderConfirm} getAnswer={this.getAnswer}/>

            }
            </div>
            <h2 id="your-answer"></h2>
            <h1 id="complete"></h1>
            <h2 id="nod">Attempt : 0</h2>
            {
              <Surrender getSurrender={this.getSurrender}/>
            }
       
        </div>
      <div id="btn-group">
          <h2 ></h2>
          

       </div>

        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
       
        
      </div>
    	);
  	}
  }
export default App;