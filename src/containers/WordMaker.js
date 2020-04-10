import React, { Component } from 'react';
import Solution from '../components/Solution';
import LetterBox from '../components/LetterBox';


class WordMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagine: 'img/book.jpg',
      solutie: [...'carte'],
      lungime: 5

      };
  }
  render() {
    const {imagine, solutie} = this.state;

     
    return (
      <div className="round">
        <h3>Level 1</h3>
        <img src={imagine} alt="carte" className="wordPic"/>
        <Solution solution={solutie}/>
        <div id="letterBox" className="box">
          {solutie.map(litera => {
            return (<LetterBox letter={litera}/> )
          })
        }
        </div>
        <div className="box">
          <button className="main" onclick="verifica()">Incepe din nou</button>
          <button className="main" onclick="verifica()">Verifica</button>
        </div>
      </div>
    );
  }
}

export default WordMaker;