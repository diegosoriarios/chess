import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mesa: [
        't','c','b','q','k','b','c','t',
        'p','p','p','p','p','p','p','p',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        'P','P','P','P','P','P','P','P',
        'T','C','B','K','Q','B','C','T',
      ],
      copy: [
        't','c','b','q','k','b','c','t',
        'p','p','p','p','p','p','p','p',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        ' ',' ',' ',' ',' ',' ',' ',' ',
        'P','P','P','P','P','P','P','P',
        'T','C','B','K','Q','B','C','T',
      ],
      selected: '',
      clicked: false,
    }
  }

  move = (peca, pos) => {
    this.setState({
      clicked: true,
    })
    let mesa = this.state.mesa
    switch(peca){
      case 't':
        for(var i = 0; i < (8 - pos); i++){
          if(mesa[i] === ' ' || mesa[i] === 'T' || mesa[i] === 'C' || mesa[i] === 'B' || mesa[i] === 'Q' || mesa[i] === 'K' || mesa[i] === 'P'){
            mesa[i] = 'x'
            i = (8-pos)
          }
        }
        for(i = pos + 8; i < (64); i += 8){
          console.log(this.state.mesa)
          if(mesa[i] === ' '){
            mesa[i] = 'x'
          }else{
            if(mesa[i] === 'T' || mesa[i] === 'C' || mesa[i] === 'B' || mesa[i] === 'Q' || mesa[i] === 'K' || mesa[i] === 'P'){
              mesa[i] = 'x'
              i = 64;
            }else{
              if(mesa[i] !== ' '){
                i = 64;
              }
            }
          }
        }
        this.setState({
          mesa,
          selected: pos
        })
        return '♜'
      case 'c':
        if(pos % 8 === 7){
          console.log(pos % 8)
          if(this.checkCavaloP(mesa[pos+15]) && pos+15 > 0 && pos+15 < 64){mesa[pos+15] = 'x';}
          if(this.checkCavaloP(mesa[pos-17]) && pos+15 > 0 && pos-17 < 64){mesa[pos-17] = 'x';}
          if(this.checkCavaloP(mesa[pos+6]) && pos+15 > 0 && pos+6 < 64){mesa[pos+6] = 'x';}
          if(this.checkCavaloP(mesa[pos-10]) && pos+15 > 0 && pos-10 < 64){mesa[pos-10] = 'x';}
        }else{
          if(pos % 8 === 6){
            console.log(pos % 8)
            if(this.checkCavaloP(mesa[pos+15]) && pos+15 > 0 && pos+15 < 64){mesa[pos+15] = 'x';}
            if(this.checkCavaloP(mesa[pos+17]) && pos+15 > 0 && pos+17 < 64){mesa[pos+17] = 'x';}
            if(this.checkCavaloP(mesa[pos-15]) && pos+15 > 0 && pos-15 < 64){mesa[pos-15] = 'x';}
            if(this.checkCavaloP(mesa[pos-17]) && pos+15 > 0 && pos-17 < 64){mesa[pos-17] = 'x';}
            if(this.checkCavaloP(mesa[pos+6]) && pos+15 > 0 && pos+6 < 64){mesa[pos+6] = 'x';}
            if(this.checkCavaloP(mesa[pos-10]) && pos+15 > 0 && pos-10 < 64){mesa[pos-10] = 'x';}
          }else{
            if(pos % 8 === 1){
              console.log(pos % 8)
              if(this.checkCavaloP(mesa[pos+15]) && pos+15 > 0 && pos+15 < 64){mesa[pos+15] = 'x';}
              if(this.checkCavaloP(mesa[pos+17]) && pos+15 > 0 && pos+17 < 64){mesa[pos+17] = 'x';}
              if(this.checkCavaloP(mesa[pos-15]) && pos+15 > 0 && pos-15 < 64){mesa[pos-15] = 'x';}
              if(this.checkCavaloP(mesa[pos-17]) && pos+15 > 0 && pos-17 < 64){mesa[pos-17] = 'x';}
              if(this.checkCavaloP(mesa[pos+10]) && pos+15 > 0 && pos+10 < 64){mesa[pos+10] = 'x';}
              if(this.checkCavaloP(mesa[pos-6]) && pos+15 > 0 && pos-6 < 64){mesa[pos-6] = 'x';}
            }else{
              if(pos % 8 === 0){
                console.log(pos % 8)
                if(this.checkCavaloP(mesa[pos+17]) && pos+15 > 0 && pos+17 < 64){mesa[pos+17] = 'x';}
                if(this.checkCavaloP(mesa[pos-15]) && pos+15 > 0 && pos-15 < 64){mesa[pos-15] = 'x';}
                if(this.checkCavaloP(mesa[pos+10]) && pos+15 > 0 && pos+10 < 64){mesa[pos+10] = 'x';}
                if(this.checkCavaloP(mesa[pos-6]) && pos+15 > 0 && pos-6 < 64){mesa[pos-6] = 'x';}
              }else{
                if(this.checkCavaloP(mesa[pos+15]) && pos+15 > 0 && pos+15 < 64){mesa[pos+15] = 'x';}
                if(this.checkCavaloP(mesa[pos+17]) && pos+15 > 0 && pos+17 < 64){mesa[pos+17] = 'x';}
                if(this.checkCavaloP(mesa[pos-15]) && pos+15 > 0 && pos-15 < 64){mesa[pos-15] = 'x';}
                if(this.checkCavaloP(mesa[pos-17]) && pos+15 > 0 && pos-17 < 64){mesa[pos-17] = 'x';}
                if(this.checkCavaloP(mesa[pos+6]) && pos+15 > 0 && pos+6 < 64){mesa[pos+6] = 'x';}
                if(this.checkCavaloP(mesa[pos+10]) && pos+15 > 0 && pos+10 < 64){mesa[pos+10] = 'x';}
                if(this.checkCavaloP(mesa[pos-6]) && pos+15 > 0 && pos-6 < 64){mesa[pos-6] = 'x';}
                if(this.checkCavaloP(mesa[pos-10]) && pos+15 > 0 && pos-10 < 64){mesa[pos-10] = 'x';}
              }
            }
          }
        }
        this.setState({
          mesa,
          selected: pos
        })
        break;
      case 'b':
        return '♝'
      case 'q':
        return '♛'
      case 'k':
        return '♚'
      case 'p':
        mesa[pos+8] = 'x';
        mesa[pos+16] = 'x';
        this.setState({
          mesa,
          selected: pos
        })
        break;
      case 'T':
        return '♖'
      case 'C':
        if(this.checkCavaloB(mesa[pos+15]) && pos+15 > 0 && pos+15 < 64){mesa[pos+15] = 'x';}
        if(this.checkCavaloB(mesa[pos+17]) && pos+15 > 0 && pos+17 < 64){mesa[pos+17] = 'x';}
        if(this.checkCavaloB(mesa[pos-15]) && pos+15 > 0 && pos-15 < 64){mesa[pos-15] = 'x';}
        if(this.checkCavaloB(mesa[pos-17]) && pos+15 > 0 && pos-17 < 64){mesa[pos-17] = 'x';}
        if(this.checkCavaloB(mesa[pos+6]) && pos+15 > 0 && pos+6 < 64){mesa[pos+6] = 'x';}
        if(this.checkCavaloB(mesa[pos+10]) && pos+15 > 0 && pos+10 < 64){mesa[pos+10] = 'x';}
        if(this.checkCavaloB(mesa[pos-6]) && pos+15 > 0 && pos-6 < 64){mesa[pos-6] = 'x';}
        if(this.checkCavaloB(mesa[pos-10]) && pos+15 > 0 && pos-10 < 64){mesa[pos-10] = 'x';}
        this.setState({
          mesa,
          selected: pos
        })
        break;
      case 'B':
        return '♗'
      case 'Q':
        return '♕'
      case 'K':
        return '♔'
      case 'P':
        mesa[pos-8] = 'x';
        mesa[pos-16] = 'x';
        this.setState({
          mesa
        })
        break;
      default:
        return ' '
    }
  }

  checkCavaloB = pos => {
    if(pos === ' ' || pos === 't' || pos === 'c' || pos === 'b' || pos === 'q' || pos === 'k' || pos === 'p'){
      console.log(true)
      return true;
    }
    return false;
  }

  checkCavaloP = pos => {
    if(pos === ' ' || pos === 'T' || pos === 'C' || pos === 'B' || pos === 'Q' || pos === 'K' || pos === 'P'){
      console.log(true)
      return true;
    }
    return false;
  }

  confirm = (value, i) => {
    console.log(value)
    let mesa = this.state.mesa
    let copia = this.state.copy
    if(mesa[i] === 'x'){
      mesa[i] = mesa[this.state.selected]
      mesa[this.state.selected] = ' '
      copia[i] = mesa[i]
      copia[this.state.selected] = ' '
    }
    this.state.mesa.forEach((value, i) => {
      if(value === 'x'){
        mesa[i] = copia[i]
      }
    })
    this.setState({
      mesa,
      clicked: false,
    })
  }

  renderMesa = () => {
    let contador = 0;
    return this.state.mesa.map((value, i) => {
      let peca = this.checkEmoji(value);
      contador++;
      if(i % 8 === 0){
        contador--;
        return (
          <div 
            className="casa" 
            style={{backgroundColor: contador % 2 ? value !== 'x' ? 'black' : 'blue' : value !== 'x' ? 'white' : 'blue'}}
            key={i}
            onClick={!this.state.clicked ? () => this.move(value, i) : () => this.confirm(value, i)}
          >
            <div>
              {peca}
            </div>
            <br/>
          </div>
        );
      }else{
        return (
          <div 
            className="casa" 
            style={{backgroundColor: contador % 2 ? value !== 'x' ? 'black' : 'blue' : value !== 'x' ? 'white' : 'blue'}}
            key={i}
            onClick={!this.state.clicked ? () => this.move(value, i) : () => this.confirm(value, i)}
          >
            <div>
              {peca}
            </div>
          </div>
        );
      }
    })
  }

  checkEmoji = peca => {
    switch(peca){
      case 't':
        return '♜'
      case 'c':
        return '♞'
      case 'b':
        return '♝'
      case 'q':
        return '♛'
      case 'k':
        return '♚'
      case 'p':
        return '♟'
      case 'T':
        return '♖'
      case 'C':
        return '♘'
      case 'B':
        return '♗'
      case 'Q':
        return '♕'
      case 'K':
        return '♔'
      case 'P':
        return '♙'
      default:
        return peca
    }
  }

  render() {
    return (
      <div className="App">
        <div className="grid">
          {this.renderMesa()}
        </div>
      </div>
    );
  }
}

export default App;
