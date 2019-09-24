import React,{ Component } from 'react';
import CharacterCard from './CharacterCard'
import _ from 'lodash';
import { thisTypeAnnotation } from '@babel/types';

const animal_word = [
    'dog', 'cat' , 'lion' , 'hippo' , 'fish' , 'duck' , 'bird', 'rat' , 'bat' 
];

var animal_item = animal_word[Math.floor(Math.random()*animal_word.length)];

var word =animal_item.toUpperCase();

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess:[],
        completed:false
    }
}

export default class WordCard extends Component {

     constructor(props){
        super(props)

       this.state = prepareStateFromWord(word)

      
    }
    
    setCategory = (category) =>{
        console.log(category);
            word = animal_item.toUpperCase();
        this.setState({
            word : word,
            chars : _.shuffle(Array.from(word))
        })

    }

    activationHandler = c => { 
        let guess = [...this.state.guess, c.toUpperCase()]
        if(guess.length == 1){
            document.getElementById('your-answer').innerHTML = `Your Answer : ${c.toUpperCase()}` 
        }else
            document.getElementById('your-answer').innerHTML += c.toUpperCase();
        this.setState({guess})
        if(guess.length == this.state.chars.length){

            if(guess.join('').toString() == this.state.chars.join('').toString()){
                this.setState({guess: [], complete: true})
                document.getElementById('complete').innerHTML = `Congratulations!`
                document.getElementById('newgame').style.display = "inline-block";
                document.getElementById('surrender').style.display = "none";
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('nod').innerHTML = `Attempt : ${this.state.attempt}`  
            }
  
        }else
            document.getElementById('your-answer').innerHTML += " / ";

    }

    

    
    render(){
        if(this.props.isSurrenderConfirm){
            this.props.getAnswer(this.state.chars.join(' / '))
        }
        return(
            
            <div>
                {
                    Array.from(word).map(
                        (c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} isSurrenderConfirm={this.props.isSurrenderConfirm} {...this.state}/>
                    )
                }
            </div>
        );
    }
    
}
