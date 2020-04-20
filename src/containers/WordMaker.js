import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadRound} from '../actions/wordActions';
import Board from '../components/Board';
import Card from '../components/Card';
import Solution from '../components/Solution';
import LetterBox from '../components/LetterBox';



class WordMaker extends Component {
  
  // componentWillMount(){
  //   this.props.loadRound()
  // };

  


  render() {
    const {imagine, solutie, rezolvat} = this.props;
    console.log(this.props);
    function afiseazaSolutie () {
      const solBox = document.getElementById('solution');
      if (rezolvat==='fals')
      solutie.map((litera, i) => {
        return (solBox.append(<Board id={i} className="card empty">
        </Board>));
      })
    } 

    return (
      <div className="round">
        <h3>Level {this.props.word.id}</h3>
        
        <img src={imagine} alt="carte" className="wordPic"/>

        <div id="solution" className="box" >
        { solutie.map((litera, i) => {
          return (<Board id={i} className="card empty">
          </Board>);
        })   }        
        </div>

        <div id="letterBox" className="box">
          {solutie.map((litera, i=10) => (
            <>
            <Card id={i} className="card fill letter"> {litera} 
            </Card>
            <Card id={i} className="card fill letter"> {litera} 
            </Card>
            </>
          ))
          }
        </div>

        <div className="box">
          <button className="main" onClick={afiseazaSolutie}>Incepe din nou</button>
          <button className="main" onClick="">Verifica</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    word: state.word
  });
};

export default connect(mapStateToProps,{})(WordMaker);