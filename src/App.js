import React, { Component } from "react";
import "./App.css";

var i;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mesa: [
        "t",
        "c",
        "b",
        "q",
        "k",
        "b",
        "c",
        "t",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "P",
        "P",
        "P",
        "P",
        "P",
        "P",
        "P",
        "P",
        "T",
        "C",
        "B",
        "K",
        "Q",
        "B",
        "C",
        "T",
      ],
      copy: [
        "t",
        "c",
        "b",
        "q",
        "k",
        "b",
        "c",
        "t",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        "P",
        "P",
        "P",
        "P",
        "P",
        "P",
        "P",
        "P",
        "T",
        "C",
        "B",
        "K",
        "Q",
        "B",
        "C",
        "T",
      ],
      selected: "",
      clicked: false,
    };
  }

  move = (peca, pos) => {
    console.log({ peca, pos });
    this.setState({
      clicked: true,
    });
    let mesa = this.state.mesa;
    switch (peca) {
      case "t": //--------------------------------------------------------------
        let coluna = pos % 8;
        let linha = Math.floor(pos / 8);
        let beginLine = linha * 8;
        let endLine = beginLine + 7;
        let checkBegin = true;
        let checkEnd = true;
        //checkHorizontal
        for (i = 0; i < 8; i++) {
          if (pos - i >= beginLine && checkBegin) {
            if (mesa[pos - i] === " ") {
              mesa[pos - i] = "x";
            } else {
              if (
                mesa[pos - i] === "T" ||
                mesa[pos - i] === "C" ||
                mesa[pos - i] === "B" ||
                mesa[pos - i] === "Q" ||
                mesa[pos - i] === "K" ||
                mesa[pos - i] === "P"
              ) {
                mesa[pos - i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - i] !== " " && mesa[pos - i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          console.log(`Pos+i${pos + i}`);
          console.log(endLine);
          if (pos + i <= endLine && checkEnd) {
            if (mesa[pos + i] === " ") {
              mesa[pos + i] = "x";
            } else {
              if (
                mesa[pos + i] === "T" ||
                mesa[pos + i] === "C" ||
                mesa[pos + i] === "B" ||
                mesa[pos + i] === "Q" ||
                mesa[pos + i] === "K" ||
                mesa[pos + i] === "P"
              ) {
                mesa[pos + i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + i] !== " " && mesa[pos + i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        for (i = 1; i <= 8; i++) {
          if (pos - 8 * i >= linha && checkBegin) {
            if (mesa[pos - 8 * i] === " ") {
              mesa[pos - 8 * i] = "x";
            } else {
              if (
                mesa[pos - 8 * i] === "T" ||
                mesa[pos - 8 * i] === "C" ||
                mesa[pos - 8 * i] === "B" ||
                mesa[pos - 8 * i] === "Q" ||
                mesa[pos - 8 * i] === "K" ||
                mesa[pos - 8 * i] === "P"
              ) {
                mesa[pos - 8 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          if (pos + 8 * i <= 64 && checkEnd) {
            if (mesa[pos + 8 * i] === " ") {
              mesa[pos + 8 * i] = "x";
            } else {
              if (
                mesa[pos + 8 * i] === "T" ||
                mesa[pos + 8 * i] === "C" ||
                mesa[pos + 8 * i] === "B" ||
                mesa[pos + 8 * i] === "Q" ||
                mesa[pos + 8 * i] === "K" ||
                mesa[pos + 8 * i] === "P"
              ) {
                mesa[pos + 8 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "c": //-----------------------------------------------------
        if (pos % 8 === 7) {
          console.log(pos % 8);
          if (
            this.checkCavaloP(mesa[pos + 15]) &&
            pos + 15 > 0 &&
            pos + 15 < 64
          ) {
            mesa[pos + 15] = "x";
          }
          if (
            this.checkCavaloP(mesa[pos - 17]) &&
            pos + 15 > 0 &&
            pos - 17 < 64
          ) {
            mesa[pos - 17] = "x";
          }
          if (
            this.checkCavaloP(mesa[pos + 6]) &&
            pos + 15 > 0 &&
            pos + 6 < 64
          ) {
            mesa[pos + 6] = "x";
          }
          if (
            this.checkCavaloP(mesa[pos - 10]) &&
            pos + 15 > 0 &&
            pos - 10 < 64
          ) {
            mesa[pos - 10] = "x";
          }
        } else {
          if (pos % 8 === 6) {
            console.log(pos % 8);
            if (
              this.checkCavaloP(mesa[pos + 15]) &&
              pos + 15 > 0 &&
              pos + 15 < 64
            ) {
              mesa[pos + 15] = "x";
            }
            if (
              this.checkCavaloP(mesa[pos + 17]) &&
              pos + 15 > 0 &&
              pos + 17 < 64
            ) {
              mesa[pos + 17] = "x";
            }
            if (
              this.checkCavaloP(mesa[pos - 15]) &&
              pos + 15 > 0 &&
              pos - 15 < 64
            ) {
              mesa[pos - 15] = "x";
            }
            if (
              this.checkCavaloP(mesa[pos - 17]) &&
              pos + 15 > 0 &&
              pos - 17 < 64
            ) {
              mesa[pos - 17] = "x";
            }
            if (
              this.checkCavaloP(mesa[pos + 6]) &&
              pos + 15 > 0 &&
              pos + 6 < 64
            ) {
              mesa[pos + 6] = "x";
            }
            if (
              this.checkCavaloP(mesa[pos - 10]) &&
              pos + 15 > 0 &&
              pos - 10 < 64
            ) {
              mesa[pos - 10] = "x";
            }
          } else {
            if (pos % 8 === 1) {
              console.log(pos % 8);
              if (
                this.checkCavaloP(mesa[pos + 15]) &&
                pos + 15 > 0 &&
                pos + 15 < 64
              ) {
                mesa[pos + 15] = "x";
              }
              if (
                this.checkCavaloP(mesa[pos + 17]) &&
                pos + 15 > 0 &&
                pos + 17 < 64
              ) {
                mesa[pos + 17] = "x";
              }
              if (
                this.checkCavaloP(mesa[pos - 15]) &&
                pos + 15 > 0 &&
                pos - 15 < 64
              ) {
                mesa[pos - 15] = "x";
              }
              if (
                this.checkCavaloP(mesa[pos - 17]) &&
                pos + 15 > 0 &&
                pos - 17 < 64
              ) {
                mesa[pos - 17] = "x";
              }
              if (
                this.checkCavaloP(mesa[pos + 10]) &&
                pos + 15 > 0 &&
                pos + 10 < 64
              ) {
                mesa[pos + 10] = "x";
              }
              if (
                this.checkCavaloP(mesa[pos - 6]) &&
                pos + 15 > 0 &&
                pos - 6 < 64
              ) {
                mesa[pos - 6] = "x";
              }
            } else {
              if (pos % 8 === 0) {
                console.log(pos % 8);
                if (
                  this.checkCavaloP(mesa[pos + 17]) &&
                  pos + 15 > 0 &&
                  pos + 17 < 64
                ) {
                  mesa[pos + 17] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos - 15]) &&
                  pos + 15 > 0 &&
                  pos - 15 < 64
                ) {
                  mesa[pos - 15] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos + 10]) &&
                  pos + 15 > 0 &&
                  pos + 10 < 64
                ) {
                  mesa[pos + 10] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos - 6]) &&
                  pos + 15 > 0 &&
                  pos - 6 < 64
                ) {
                  mesa[pos - 6] = "x";
                }
              } else {
                if (
                  this.checkCavaloP(mesa[pos + 15]) &&
                  pos + 15 > 0 &&
                  pos + 15 < 64
                ) {
                  mesa[pos + 15] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos + 17]) &&
                  pos + 15 > 0 &&
                  pos + 17 < 64
                ) {
                  mesa[pos + 17] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos - 15]) &&
                  pos + 15 > 0 &&
                  pos - 15 < 64
                ) {
                  mesa[pos - 15] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos - 17]) &&
                  pos + 15 > 0 &&
                  pos - 17 < 64
                ) {
                  mesa[pos - 17] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos + 6]) &&
                  pos + 15 > 0 &&
                  pos + 6 < 64
                ) {
                  mesa[pos + 6] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos + 10]) &&
                  pos + 15 > 0 &&
                  pos + 10 < 64
                ) {
                  mesa[pos + 10] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos - 6]) &&
                  pos + 15 > 0 &&
                  pos - 6 < 64
                ) {
                  mesa[pos - 6] = "x";
                }
                if (
                  this.checkCavaloP(mesa[pos - 10]) &&
                  pos + 15 > 0 &&
                  pos - 10 < 64
                ) {
                  mesa[pos - 10] = "x";
                }
              }
            }
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "b": //----------------------------------------------------------
        coluna = pos % 8;
        linha = Math.floor(pos / 8);
        beginLine = linha * 8;
        endLine = beginLine + 7;
        checkBegin = true;
        checkEnd = true;
        let counter = 0;
        let counter2 = 0;
        //checkHorizontal
        console.clear();
        for (i = 0; i < 8; i++) {
          console.log(coluna);
          if (counter <= coluna && checkBegin) {
            if (mesa[pos - 9 * i] === " ") {
              mesa[pos - 9 * i] = "x";
            } else {
              if (
                mesa[pos - 9 * i] === "T" ||
                mesa[pos - 9 * i] === "C" ||
                mesa[pos - 9 * i] === "B" ||
                mesa[pos - 9 * i] === "Q" ||
                mesa[pos - 9 * i] === "K" ||
                mesa[pos - 9 * i] === "P"
              ) {
                mesa[pos - 9 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 9 * i] !== " " && mesa[pos - 9 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < 8 - coluna && checkEnd) {
            if (mesa[pos + 9 * i] === " ") {
              mesa[pos + 9 * i] = "x";
            } else {
              if (
                mesa[pos + 9 * i] === "T" ||
                mesa[pos + 9 * i] === "C" ||
                mesa[pos + 9 * i] === "B" ||
                mesa[pos + 9 * i] === "Q" ||
                mesa[pos + 9 * i] === "K" ||
                mesa[pos + 9 * i] === "P"
              ) {
                mesa[pos + 9 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 9 * i] !== " " && mesa[pos + 9 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        counter = 0;
        counter2 = 0;
        for (i = 1; i <= 8; i++) {
          if (counter < 7 - coluna && checkBegin) {
            if (mesa[pos - 7 * i] === " ") {
              mesa[pos - 7 * i] = "x";
            } else {
              if (
                mesa[pos - 7 * i] === "T" ||
                mesa[pos - 7 * i] === "C" ||
                mesa[pos - 7 * i] === "B" ||
                mesa[pos - 7 * i] === "Q" ||
                mesa[pos - 7 * i] === "K" ||
                mesa[pos - 7 * i] === "P"
              ) {
                mesa[pos - 7 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 7 * i] !== " " && mesa[pos - 7 * i] !== peca) {
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < coluna && checkEnd) {
            if (mesa[pos + 7 * i] === " ") {
              mesa[pos + 7 * i] = "x";
            } else {
              if (
                mesa[pos + 7 * i] === "T" ||
                mesa[pos + 7 * i] === "C" ||
                mesa[pos + 7 * i] === "B" ||
                mesa[pos + 7 * i] === "Q" ||
                mesa[pos + 7 * i] === "K" ||
                mesa[pos + 7 * i] === "P"
              ) {
                mesa[pos + 7 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 7 * i] !== " " && mesa[pos + 7 * i] !== peca) {
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "q": //-----------------------------------------------------------------
        coluna = pos % 8;
        linha = Math.floor(pos / 8);
        beginLine = linha * 8;
        endLine = beginLine + 7;
        checkBegin = true;
        checkEnd = true;
        //checkHorizontal
        for (i = 0; i < 8; i++) {
          if (pos - i >= beginLine && checkBegin) {
            if (mesa[pos - i] === " ") {
              mesa[pos - i] = "x";
            } else {
              if (
                mesa[pos - i] === "T" ||
                mesa[pos - i] === "C" ||
                mesa[pos - i] === "B" ||
                mesa[pos - i] === "Q" ||
                mesa[pos - i] === "K" ||
                mesa[pos - i] === "P"
              ) {
                mesa[pos - i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - i] !== " " && mesa[pos - i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          console.log(`Pos+i${pos + i}`);
          console.log(endLine);
          if (pos + i <= endLine && checkEnd) {
            if (mesa[pos + i] === " ") {
              mesa[pos + i] = "x";
            } else {
              if (
                mesa[pos + i] === "T" ||
                mesa[pos + i] === "C" ||
                mesa[pos + i] === "B" ||
                mesa[pos + i] === "Q" ||
                mesa[pos + i] === "K" ||
                mesa[pos + i] === "P"
              ) {
                mesa[pos + i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + i] !== " " && mesa[pos + i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        for (i = 1; i <= 8; i++) {
          if (pos - 8 * i >= linha && checkBegin) {
            if (mesa[pos - 8 * i] === " ") {
              mesa[pos - 8 * i] = "x";
            } else {
              if (
                mesa[pos - 8 * i] === "T" ||
                mesa[pos - 8 * i] === "C" ||
                mesa[pos - 8 * i] === "B" ||
                mesa[pos - 8 * i] === "Q" ||
                mesa[pos - 8 * i] === "K" ||
                mesa[pos - 8 * i] === "P"
              ) {
                mesa[pos - 8 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          if (pos + 8 * i <= 64 && checkEnd) {
            if (mesa[pos + 8 * i] === " ") {
              mesa[pos + 8 * i] = "x";
            } else {
              if (
                mesa[pos + 8 * i] === "T" ||
                mesa[pos + 8 * i] === "C" ||
                mesa[pos + 8 * i] === "B" ||
                mesa[pos + 8 * i] === "Q" ||
                mesa[pos + 8 * i] === "K" ||
                mesa[pos + 8 * i] === "P"
              ) {
                mesa[pos + 8 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        coluna = pos % 8;
        linha = Math.floor(pos / 8);
        beginLine = linha * 8;
        endLine = beginLine + 7;
        checkBegin = true;
        checkEnd = true;
        counter = 0;
        counter2 = 0;
        //checkHorizontal
        console.clear();
        for (i = 0; i < 8; i++) {
          console.log(coluna);
          if (counter <= coluna && checkBegin) {
            if (mesa[pos - 9 * i] === " ") {
              mesa[pos - 9 * i] = "x";
            } else {
              if (
                mesa[pos - 9 * i] === "T" ||
                mesa[pos - 9 * i] === "C" ||
                mesa[pos - 9 * i] === "B" ||
                mesa[pos - 9 * i] === "Q" ||
                mesa[pos - 9 * i] === "K" ||
                mesa[pos - 9 * i] === "P"
              ) {
                mesa[pos - 9 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 9 * i] !== " " && mesa[pos - 9 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < 8 - coluna && checkEnd) {
            if (mesa[pos + 9 * i] === " ") {
              mesa[pos + 9 * i] = "x";
            } else {
              if (
                mesa[pos + 9 * i] === "T" ||
                mesa[pos + 9 * i] === "C" ||
                mesa[pos + 9 * i] === "B" ||
                mesa[pos + 9 * i] === "Q" ||
                mesa[pos + 9 * i] === "K" ||
                mesa[pos + 9 * i] === "P"
              ) {
                mesa[pos + 9 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 9 * i] !== " " && mesa[pos + 9 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        counter = 0;
        counter2 = 0;
        for (i = 1; i <= 8; i++) {
          if (counter < 7 - coluna && checkBegin) {
            if (mesa[pos - 7 * i] === " ") {
              mesa[pos - 7 * i] = "x";
            } else {
              if (
                mesa[pos - 7 * i] === "T" ||
                mesa[pos - 7 * i] === "C" ||
                mesa[pos - 7 * i] === "B" ||
                mesa[pos - 7 * i] === "Q" ||
                mesa[pos - 7 * i] === "K" ||
                mesa[pos - 7 * i] === "P"
              ) {
                mesa[pos - 7 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 7 * i] !== " " && mesa[pos - 7 * i] !== peca) {
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < coluna && checkEnd) {
            if (mesa[pos + 7 * i] === " ") {
              mesa[pos + 7 * i] = "x";
            } else {
              if (
                mesa[pos + 7 * i] === "T" ||
                mesa[pos + 7 * i] === "C" ||
                mesa[pos + 7 * i] === "B" ||
                mesa[pos + 7 * i] === "Q" ||
                mesa[pos + 7 * i] === "K" ||
                mesa[pos + 7 * i] === "P"
              ) {
                mesa[pos + 7 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 7 * i] !== " " && mesa[pos + 7 * i] !== peca) {
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "k": //-------------------------------------------------------------
        if (pos === 56) {
          if (
            mesa[pos + 1] === " " ||
            mesa[pos + 1] === "T" ||
            mesa[pos + 1] === "C" ||
            mesa[pos + 1] === "B" ||
            mesa[pos + 1] === "Q" ||
            mesa[pos + 1] === "P" ||
            pos + 1 > 64
          ) {
            mesa[pos + 1] = "x";
          }
          if (
            mesa[pos - 8] === " " ||
            mesa[pos - 8] === "T" ||
            mesa[pos - 8] === "C" ||
            mesa[pos - 8] === "B" ||
            mesa[pos - 8] === "Q" ||
            mesa[pos - 8] === "P" ||
            pos - 8 > 64
          ) {
            mesa[pos - 8] = "x";
          }
          if (
            mesa[pos - 7] === " " ||
            mesa[pos - 7] === "T" ||
            mesa[pos - 7] === "C" ||
            mesa[pos - 7] === "B" ||
            mesa[pos - 7] === "Q" ||
            mesa[pos - 7] === "P" ||
            pos - 7 > 64
          ) {
            mesa[pos - 7] = "x";
          }
        } else {
          if (pos === 63) {
            if (
              mesa[pos - 9] === " " ||
              mesa[pos - 9] === "T" ||
              mesa[pos - 9] === "C" ||
              mesa[pos - 9] === "B" ||
              mesa[pos - 9] === "Q" ||
              mesa[pos - 9] === "P" ||
              pos - 9 > 64
            ) {
              mesa[pos - 9] = "x";
            }
            if (
              mesa[pos - 1] === " " ||
              mesa[pos - 1] === "T" ||
              mesa[pos - 1] === "C" ||
              mesa[pos - 1] === "B" ||
              mesa[pos - 1] === "Q" ||
              mesa[pos - 1] === "P" ||
              pos - 1 > 64
            ) {
              mesa[pos - 1] = "x";
            }
            if (
              mesa[pos - 8] === " " ||
              mesa[pos - 8] === "T" ||
              mesa[pos - 8] === "C" ||
              mesa[pos - 8] === "B" ||
              mesa[pos - 8] === "Q" ||
              mesa[pos - 8] === "P" ||
              pos - 8 > 64
            ) {
              mesa[pos - 8] = "x";
            }
          } else {
            if (pos === 0) {
              if (
                mesa[pos + 9] === " " ||
                mesa[pos + 9] === "T" ||
                mesa[pos + 9] === "C" ||
                mesa[pos + 9] === "B" ||
                mesa[pos + 9] === "Q" ||
                mesa[pos + 9] === "P" ||
                pos + 9 > 64
              ) {
                mesa[pos + 9] = "x";
              }
              if (
                mesa[pos + 1] === " " ||
                mesa[pos + 1] === "T" ||
                mesa[pos + 1] === "C" ||
                mesa[pos + 1] === "B" ||
                mesa[pos + 1] === "Q" ||
                mesa[pos + 1] === "P" ||
                pos + 1 > 64
              ) {
                mesa[pos + 1] = "x";
              }
              if (
                mesa[pos + 8] === " " ||
                mesa[pos + 8] === "T" ||
                mesa[pos + 8] === "C" ||
                mesa[pos + 8] === "B" ||
                mesa[pos + 8] === "Q" ||
                mesa[pos + 8] === "P" ||
                pos + 8 > 64
              ) {
                mesa[pos + 8] = "x";
              }
            } else {
              if (pos === 7) {
                if (
                  mesa[pos + 8] === " " ||
                  mesa[pos + 8] === "T" ||
                  mesa[pos + 8] === "C" ||
                  mesa[pos + 8] === "B" ||
                  mesa[pos + 8] === "Q" ||
                  mesa[pos + 8] === "P" ||
                  pos + 8 > 64
                ) {
                  mesa[pos + 8] = "x";
                }
                if (
                  mesa[pos + 7] === " " ||
                  mesa[pos + 7] === "T" ||
                  mesa[pos + 7] === "C" ||
                  mesa[pos + 7] === "B" ||
                  mesa[pos + 7] === "Q" ||
                  mesa[pos + 7] === "P" ||
                  pos + 7 > 64
                ) {
                  mesa[pos + 7] = "x";
                }
                if (
                  mesa[pos - 1] === " " ||
                  mesa[pos - 1] === "T" ||
                  mesa[pos - 1] === "C" ||
                  mesa[pos - 1] === "B" ||
                  mesa[pos - 1] === "Q" ||
                  mesa[pos - 1] === "P" ||
                  pos - 1 > 64
                ) {
                  mesa[pos - 1] = "x";
                }
              } else {
                if (pos % 8 === 7) {
                  if (
                    mesa[pos + 8] === " " ||
                    mesa[pos + 8] === "T" ||
                    mesa[pos + 8] === "C" ||
                    mesa[pos + 8] === "B" ||
                    mesa[pos + 8] === "Q" ||
                    mesa[pos + 8] === "P" ||
                    pos + 8 > 64
                  ) {
                    mesa[pos + 8] = "x";
                  }
                  if (
                    mesa[pos + 7] === " " ||
                    mesa[pos + 7] === "T" ||
                    mesa[pos + 7] === "C" ||
                    mesa[pos + 7] === "B" ||
                    mesa[pos + 7] === "Q" ||
                    mesa[pos + 7] === "P" ||
                    pos + 7 > 64
                  ) {
                    mesa[pos + 7] = "x";
                  }
                  if (
                    mesa[pos - 9] === " " ||
                    mesa[pos - 9] === "T" ||
                    mesa[pos - 9] === "C" ||
                    mesa[pos - 9] === "B" ||
                    mesa[pos - 9] === "Q" ||
                    mesa[pos - 9] === "P" ||
                    pos - 9 > 64
                  ) {
                    mesa[pos - 9] = "x";
                  }
                  if (
                    mesa[pos - 1] === " " ||
                    mesa[pos - 1] === "T" ||
                    mesa[pos - 1] === "C" ||
                    mesa[pos - 1] === "B" ||
                    mesa[pos - 1] === "Q" ||
                    mesa[pos - 1] === "P" ||
                    pos - 1 > 64
                  ) {
                    mesa[pos - 1] = "x";
                  }
                  if (
                    mesa[pos - 8] === " " ||
                    mesa[pos - 8] === "T" ||
                    mesa[pos - 8] === "C" ||
                    mesa[pos - 8] === "B" ||
                    mesa[pos - 8] === "Q" ||
                    mesa[pos - 8] === "P" ||
                    pos - 8 > 64
                  ) {
                    mesa[pos - 8] = "x";
                  }
                } else {
                  if (pos % 8 === 0) {
                    if (
                      mesa[pos + 9] === " " ||
                      mesa[pos + 9] === "T" ||
                      mesa[pos + 9] === "C" ||
                      mesa[pos + 9] === "B" ||
                      mesa[pos + 9] === "Q" ||
                      mesa[pos + 9] === "P" ||
                      pos + 9 > 64
                    ) {
                      mesa[pos + 9] = "x";
                    }
                    if (
                      mesa[pos + 1] === " " ||
                      mesa[pos + 1] === "T" ||
                      mesa[pos + 1] === "C" ||
                      mesa[pos + 1] === "B" ||
                      mesa[pos + 1] === "Q" ||
                      mesa[pos + 1] === "P" ||
                      pos + 1 > 64
                    ) {
                      mesa[pos + 1] = "x";
                    }
                    if (
                      mesa[pos + 8] === " " ||
                      mesa[pos + 8] === "T" ||
                      mesa[pos + 8] === "C" ||
                      mesa[pos + 8] === "B" ||
                      mesa[pos + 8] === "Q" ||
                      mesa[pos + 8] === "P" ||
                      pos + 8 > 64
                    ) {
                      mesa[pos + 8] = "x";
                    }
                    if (
                      mesa[pos - 8] === " " ||
                      mesa[pos - 8] === "T" ||
                      mesa[pos - 8] === "C" ||
                      mesa[pos - 8] === "B" ||
                      mesa[pos - 8] === "Q" ||
                      mesa[pos - 8] === "P" ||
                      pos - 8 > 64
                    ) {
                      mesa[pos - 8] = "x";
                    }
                    if (
                      mesa[pos - 7] === " " ||
                      mesa[pos - 7] === "T" ||
                      mesa[pos - 7] === "C" ||
                      mesa[pos - 7] === "B" ||
                      mesa[pos - 7] === "Q" ||
                      mesa[pos - 7] === "P" ||
                      pos - 7 > 64
                    ) {
                      mesa[pos - 7] = "x";
                    }
                  } else {
                    if (pos > 56) {
                      if (
                        mesa[pos + 1] === " " ||
                        mesa[pos + 1] === "T" ||
                        mesa[pos + 1] === "C" ||
                        mesa[pos + 1] === "B" ||
                        mesa[pos + 1] === "Q" ||
                        mesa[pos + 1] === "P" ||
                        pos + 1 > 64
                      ) {
                        mesa[pos + 1] = "x";
                      }
                      if (
                        mesa[pos - 9] === " " ||
                        mesa[pos - 9] === "T" ||
                        mesa[pos - 9] === "C" ||
                        mesa[pos - 9] === "B" ||
                        mesa[pos - 9] === "Q" ||
                        mesa[pos - 9] === "P" ||
                        pos - 9 > 64
                      ) {
                        mesa[pos - 9] = "x";
                      }
                      if (
                        mesa[pos - 1] === " " ||
                        mesa[pos - 1] === "T" ||
                        mesa[pos - 1] === "C" ||
                        mesa[pos - 1] === "B" ||
                        mesa[pos - 1] === "Q" ||
                        mesa[pos - 1] === "P" ||
                        pos - 1 > 64
                      ) {
                        mesa[pos - 1] = "x";
                      }
                      if (
                        mesa[pos - 8] === " " ||
                        mesa[pos - 8] === "T" ||
                        mesa[pos - 8] === "C" ||
                        mesa[pos - 8] === "B" ||
                        mesa[pos - 8] === "Q" ||
                        mesa[pos - 8] === "P" ||
                        pos - 8 > 64
                      ) {
                        mesa[pos - 8] = "x";
                      }
                      if (
                        mesa[pos - 7] === " " ||
                        mesa[pos - 7] === "T" ||
                        mesa[pos - 7] === "C" ||
                        mesa[pos - 7] === "B" ||
                        mesa[pos - 7] === "Q" ||
                        mesa[pos - 7] === "P" ||
                        pos - 7 > 64
                      ) {
                        mesa[pos - 7] = "x";
                      }
                    } else {
                      if (pos < 7) {
                        if (
                          mesa[pos + 9] === " " ||
                          mesa[pos + 9] === "T" ||
                          mesa[pos + 9] === "C" ||
                          mesa[pos + 9] === "B" ||
                          mesa[pos + 9] === "Q" ||
                          mesa[pos + 9] === "P" ||
                          pos + 9 > 64
                        ) {
                          mesa[pos + 9] = "x";
                        }
                        if (
                          mesa[pos + 1] === " " ||
                          mesa[pos + 1] === "T" ||
                          mesa[pos + 1] === "C" ||
                          mesa[pos + 1] === "B" ||
                          mesa[pos + 1] === "Q" ||
                          mesa[pos + 1] === "P" ||
                          pos + 1 > 64
                        ) {
                          mesa[pos + 1] = "x";
                        }
                        if (
                          mesa[pos + 8] === " " ||
                          mesa[pos + 8] === "T" ||
                          mesa[pos + 8] === "C" ||
                          mesa[pos + 8] === "B" ||
                          mesa[pos + 8] === "Q" ||
                          mesa[pos + 8] === "P" ||
                          pos + 8 > 64
                        ) {
                          mesa[pos + 8] = "x";
                        }
                        if (
                          mesa[pos + 7] === " " ||
                          mesa[pos + 7] === "T" ||
                          mesa[pos + 7] === "C" ||
                          mesa[pos + 7] === "B" ||
                          mesa[pos + 7] === "Q" ||
                          mesa[pos + 7] === "P" ||
                          pos + 7 > 64
                        ) {
                          mesa[pos + 7] = "x";
                        }
                        if (
                          mesa[pos - 1] === " " ||
                          mesa[pos - 1] === "T" ||
                          mesa[pos - 1] === "C" ||
                          mesa[pos - 1] === "B" ||
                          mesa[pos - 1] === "Q" ||
                          mesa[pos - 1] === "P" ||
                          pos - 1 > 64
                        ) {
                          mesa[pos - 1] = "x";
                        }
                      } else {
                        if (
                          mesa[pos + 9] === " " ||
                          mesa[pos + 9] === "T" ||
                          mesa[pos + 9] === "C" ||
                          mesa[pos + 9] === "B" ||
                          mesa[pos + 9] === "Q" ||
                          mesa[pos + 9] === "P" ||
                          pos + 9 > 64
                        ) {
                          mesa[pos + 9] = "x";
                        }
                        if (
                          mesa[pos + 1] === " " ||
                          mesa[pos + 1] === "T" ||
                          mesa[pos + 1] === "C" ||
                          mesa[pos + 1] === "B" ||
                          mesa[pos + 1] === "Q" ||
                          mesa[pos + 1] === "P" ||
                          pos + 1 > 64
                        ) {
                          mesa[pos + 1] = "x";
                        }
                        if (
                          mesa[pos + 8] === " " ||
                          mesa[pos + 8] === "T" ||
                          mesa[pos + 8] === "C" ||
                          mesa[pos + 8] === "B" ||
                          mesa[pos + 8] === "Q" ||
                          mesa[pos + 8] === "P" ||
                          pos + 8 > 64
                        ) {
                          mesa[pos + 8] = "x";
                        }
                        if (
                          mesa[pos + 7] === " " ||
                          mesa[pos + 7] === "T" ||
                          mesa[pos + 7] === "C" ||
                          mesa[pos + 7] === "B" ||
                          mesa[pos + 7] === "Q" ||
                          mesa[pos + 7] === "P" ||
                          pos + 7 > 64
                        ) {
                          mesa[pos + 7] = "x";
                        }
                        if (
                          mesa[pos - 9] === " " ||
                          mesa[pos - 9] === "T" ||
                          mesa[pos - 9] === "C" ||
                          mesa[pos - 9] === "B" ||
                          mesa[pos - 9] === "Q" ||
                          mesa[pos - 9] === "P" ||
                          pos - 9 > 64
                        ) {
                          mesa[pos - 9] = "x";
                        }
                        if (
                          mesa[pos - 1] === " " ||
                          mesa[pos - 1] === "T" ||
                          mesa[pos - 1] === "C" ||
                          mesa[pos - 1] === "B" ||
                          mesa[pos - 1] === "Q" ||
                          mesa[pos - 1] === "P" ||
                          pos - 1 > 64
                        ) {
                          mesa[pos - 1] = "x";
                        }
                        if (
                          mesa[pos - 8] === " " ||
                          mesa[pos - 8] === "T" ||
                          mesa[pos - 8] === "C" ||
                          mesa[pos - 8] === "B" ||
                          mesa[pos - 8] === "Q" ||
                          mesa[pos - 8] === "P" ||
                          pos - 8 > 64
                        ) {
                          mesa[pos - 8] = "x";
                        }
                        if (
                          mesa[pos - 7] === " " ||
                          mesa[pos - 7] === "T" ||
                          mesa[pos - 7] === "C" ||
                          mesa[pos - 7] === "B" ||
                          mesa[pos - 7] === "Q" ||
                          mesa[pos - 7] === "P" ||
                          pos - 7 > 64
                        ) {
                          mesa[pos - 7] = "x";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "p": //---------------------------------------------------------------
        mesa[pos + 8] = "x";
        mesa[pos + 16] = "x";
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "T": //---------------------------------------------------------------
        coluna = pos % 8;
        linha = Math.floor(pos / 8);
        beginLine = linha * 8;
        endLine = beginLine + 7;
        checkBegin = true;
        checkEnd = true;
        //checkHorizontal
        for (i = 0; i < 8; i++) {
          if (pos - i >= beginLine && checkBegin) {
            if (mesa[pos - i] === " ") {
              mesa[pos - i] = "x";
            } else {
              if (
                mesa[pos - i] === "t" ||
                mesa[pos - i] === "c" ||
                mesa[pos - i] === "b" ||
                mesa[pos - i] === "q" ||
                mesa[pos - i] === "k" ||
                mesa[pos - i] === "p"
              ) {
                mesa[pos - i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - i] !== " " && mesa[pos - i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          console.log(`Pos+i${pos + i}`);
          console.log(endLine);
          if (pos + i <= endLine && checkEnd) {
            if (mesa[pos + i] === " ") {
              mesa[pos + i] = "x";
            } else {
              if (
                mesa[pos + i] === "t" ||
                mesa[pos + i] === "c" ||
                mesa[pos + i] === "b" ||
                mesa[pos + i] === "q" ||
                mesa[pos + i] === "k" ||
                mesa[pos + i] === "p"
              ) {
                mesa[pos + i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + i] !== " " && mesa[pos + i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        for (i = 1; i <= 8; i++) {
          if (pos - 8 * i >= linha && checkBegin) {
            if (mesa[pos - 8 * i] === " ") {
              mesa[pos - 8 * i] = "x";
            } else {
              if (
                mesa[pos - 8 * i] === "t" ||
                mesa[pos - 8 * i] === "c" ||
                mesa[pos - 8 * i] === "b" ||
                mesa[pos - 8 * i] === "q" ||
                mesa[pos - 8 * i] === "k" ||
                mesa[pos - 8 * i] === "p"
              ) {
                mesa[pos - 8 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          if (pos + 8 * i <= 64 && checkEnd) {
            if (mesa[pos + 8 * i] === " ") {
              mesa[pos + 8 * i] = "x";
            } else {
              if (
                mesa[pos + 8 * i] === "t" ||
                mesa[pos + 8 * i] === "c" ||
                mesa[pos + 8 * i] === "b" ||
                mesa[pos + 8 * i] === "q" ||
                mesa[pos + 8 * i] === "k" ||
                mesa[pos + 8 * i] === "p"
              ) {
                mesa[pos + 8 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "C":
        if (
          this.checkCavaloB(mesa[pos + 15]) &&
          pos + 15 > 0 &&
          pos + 15 < 64
        ) {
          mesa[pos + 15] = "x";
        }
        if (
          this.checkCavaloB(mesa[pos + 17]) &&
          pos + 15 > 0 &&
          pos + 17 < 64
        ) {
          mesa[pos + 17] = "x";
        }
        if (
          this.checkCavaloB(mesa[pos - 15]) &&
          pos + 15 > 0 &&
          pos - 15 < 64
        ) {
          mesa[pos - 15] = "x";
        }
        if (
          this.checkCavaloB(mesa[pos - 17]) &&
          pos + 15 > 0 &&
          pos - 17 < 64
        ) {
          mesa[pos - 17] = "x";
        }
        if (this.checkCavaloB(mesa[pos + 6]) && pos + 15 > 0 && pos + 6 < 64) {
          mesa[pos + 6] = "x";
        }
        if (
          this.checkCavaloB(mesa[pos + 10]) &&
          pos + 15 > 0 &&
          pos + 10 < 64
        ) {
          mesa[pos + 10] = "x";
        }
        if (this.checkCavaloB(mesa[pos - 6]) && pos + 15 > 0 && pos - 6 < 64) {
          mesa[pos - 6] = "x";
        }
        if (
          this.checkCavaloB(mesa[pos - 10]) &&
          pos + 15 > 0 &&
          pos - 10 < 64
        ) {
          mesa[pos - 10] = "x";
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "B":
        coluna = pos % 8;
        linha = Math.floor(pos / 8);
        beginLine = linha * 8;
        endLine = beginLine + 7;
        checkBegin = true;
        checkEnd = true;
        counter = 0;
        counter2 = 0;
        //checkHorizontal
        console.clear();
        for (i = 0; i < 8; i++) {
          console.log(coluna);
          if (counter <= coluna && checkBegin) {
            if (mesa[pos - 9 * i] === " ") {
              mesa[pos - 9 * i] = "x";
            } else {
              if (
                mesa[pos - 9 * i] === "t" ||
                mesa[pos - 9 * i] === "c" ||
                mesa[pos - 9 * i] === "b" ||
                mesa[pos - 9 * i] === "q" ||
                mesa[pos - 9 * i] === "k" ||
                mesa[pos - 9 * i] === "p"
              ) {
                mesa[pos - 9 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 9 * i] !== " " && mesa[pos - 9 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < 8 - coluna && checkEnd) {
            if (mesa[pos + 9 * i] === " ") {
              mesa[pos + 9 * i] = "x";
            } else {
              if (
                mesa[pos + 9 * i] === "t" ||
                mesa[pos + 9 * i] === "c" ||
                mesa[pos + 9 * i] === "b" ||
                mesa[pos + 9 * i] === "q" ||
                mesa[pos + 9 * i] === "k" ||
                mesa[pos + 9 * i] === "p"
              ) {
                mesa[pos + 9 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 9 * i] !== " " && mesa[pos + 9 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        counter = 0;
        counter2 = 0;
        for (i = 1; i <= 8; i++) {
          if (counter < 7 - coluna && checkBegin) {
            if (mesa[pos - 7 * i] === " ") {
              mesa[pos - 7 * i] = "x";
            } else {
              if (
                mesa[pos - 7 * i] === "t" ||
                mesa[pos - 7 * i] === "c" ||
                mesa[pos - 7 * i] === "b" ||
                mesa[pos - 7 * i] === "q" ||
                mesa[pos - 7 * i] === "k" ||
                mesa[pos - 7 * i] === "p"
              ) {
                mesa[pos - 7 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 7 * i] !== " " && mesa[pos - 7 * i] !== peca) {
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < coluna && checkEnd) {
            if (mesa[pos + 7 * i] === " ") {
              mesa[pos + 7 * i] = "x";
            } else {
              if (
                mesa[pos + 7 * i] === "t" ||
                mesa[pos + 7 * i] === "c" ||
                mesa[pos + 7 * i] === "b" ||
                mesa[pos + 7 * i] === "q" ||
                mesa[pos + 7 * i] === "k" ||
                mesa[pos + 7 * i] === "p"
              ) {
                mesa[pos + 7 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 7 * i] !== " " && mesa[pos + 7 * i] !== peca) {
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "Q":
        coluna = pos % 8;
        linha = Math.floor(pos / 8);
        beginLine = linha * 8;
        endLine = beginLine + 7;
        checkBegin = true;
        checkEnd = true;
        //checkHorizontal
        for (i = 0; i < 8; i++) {
          if (pos - i >= beginLine && checkBegin) {
            if (mesa[pos - i] === " ") {
              mesa[pos - i] = "x";
            } else {
              if (
                mesa[pos - i] === "t" ||
                mesa[pos - i] === "c" ||
                mesa[pos - i] === "b" ||
                mesa[pos - i] === "q" ||
                mesa[pos - i] === "k" ||
                mesa[pos - i] === "p"
              ) {
                mesa[pos - i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - i] !== " " && mesa[pos - i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          console.log(`Pos+i${pos + i}`);
          console.log(endLine);
          if (pos + i <= endLine && checkEnd) {
            if (mesa[pos + i] === " ") {
              mesa[pos + i] = "x";
            } else {
              if (
                mesa[pos + i] === "t" ||
                mesa[pos + i] === "c" ||
                mesa[pos + i] === "b" ||
                mesa[pos + i] === "q" ||
                mesa[pos + i] === "k" ||
                mesa[pos + i] === "p"
              ) {
                mesa[pos + i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + i] !== " " && mesa[pos + i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        for (i = 1; i <= 8; i++) {
          if (pos - 8 * i >= linha && checkBegin) {
            if (mesa[pos - 8 * i] === " ") {
              mesa[pos - 8 * i] = "x";
            } else {
              if (
                mesa[pos - 8 * i] === "t" ||
                mesa[pos - 8 * i] === "c" ||
                mesa[pos - 8 * i] === "b" ||
                mesa[pos - 8 * i] === "q" ||
                mesa[pos - 8 * i] === "k" ||
                mesa[pos - 8 * i] === "p"
              ) {
                mesa[pos - 8 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
          }
          if (pos + 8 * i <= 64 && checkEnd) {
            if (mesa[pos + 8 * i] === " ") {
              mesa[pos + 8 * i] = "x";
            } else {
              if (
                mesa[pos + 8 * i] === "t" ||
                mesa[pos + 8 * i] === "c" ||
                mesa[pos + 8 * i] === "b" ||
                mesa[pos + 8 * i] === "q" ||
                mesa[pos + 8 * i] === "k" ||
                mesa[pos + 8 * i] === "p"
              ) {
                mesa[pos + 8 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 8 * i] !== " " && mesa[pos - 8 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
          }
        }
        coluna = pos % 8;
        linha = Math.floor(pos / 8);
        beginLine = linha * 8;
        endLine = beginLine + 7;
        checkBegin = true;
        checkEnd = true;
        counter = 0;
        counter2 = 0;
        //checkHorizontal
        console.clear();
        for (i = 0; i < 8; i++) {
          console.log(coluna);
          if (counter <= coluna && checkBegin) {
            if (mesa[pos - 9 * i] === " ") {
              mesa[pos - 9 * i] = "x";
            } else {
              if (
                mesa[pos - 9 * i] === "t" ||
                mesa[pos - 9 * i] === "c" ||
                mesa[pos - 9 * i] === "b" ||
                mesa[pos - 9 * i] === "q" ||
                mesa[pos - 9 * i] === "k" ||
                mesa[pos - 9 * i] === "p"
              ) {
                mesa[pos - 9 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 9 * i] !== " " && mesa[pos - 9 * i] !== peca) {
                  console.log(i);
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < 8 - coluna && checkEnd) {
            if (mesa[pos + 9 * i] === " ") {
              mesa[pos + 9 * i] = "x";
            } else {
              if (
                mesa[pos + 9 * i] === "t" ||
                mesa[pos + 9 * i] === "c" ||
                mesa[pos + 9 * i] === "b" ||
                mesa[pos + 9 * i] === "q" ||
                mesa[pos + 9 * i] === "k" ||
                mesa[pos + 9 * i] === "p"
              ) {
                mesa[pos + 9 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 9 * i] !== " " && mesa[pos + 9 * i] !== peca) {
                  console.log(i);
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        //checkVertical
        checkBegin = true;
        checkEnd = true;
        counter = 0;
        counter2 = 0;
        for (i = 1; i <= 8; i++) {
          if (counter < 7 - coluna && checkBegin) {
            if (mesa[pos - 7 * i] === " ") {
              mesa[pos - 7 * i] = "x";
            } else {
              if (
                mesa[pos - 7 * i] === "t" ||
                mesa[pos - 7 * i] === "c" ||
                mesa[pos - 7 * i] === "b" ||
                mesa[pos - 7 * i] === "q" ||
                mesa[pos - 7 * i] === "k" ||
                mesa[pos - 7 * i] === "p"
              ) {
                mesa[pos - 7 * i] = "x";
                checkBegin = false;
              } else {
                if (mesa[pos - 7 * i] !== " " && mesa[pos - 7 * i] !== peca) {
                  checkBegin = false;
                }
              }
            }
            counter++;
          }
          if (counter2 < coluna && checkEnd) {
            if (mesa[pos + 7 * i] === " ") {
              mesa[pos + 7 * i] = "x";
            } else {
              if (
                mesa[pos + 7 * i] === "t" ||
                mesa[pos + 7 * i] === "c" ||
                mesa[pos + 7 * i] === "b" ||
                mesa[pos + 7 * i] === "q" ||
                mesa[pos + 7 * i] === "k" ||
                mesa[pos + 7 * i] === "p"
              ) {
                mesa[pos + 7 * i] = "x";
                checkEnd = false;
              } else {
                if (mesa[pos + 7 * i] !== " " && mesa[pos + 7 * i] !== peca) {
                  checkEnd = false;
                }
              }
            }
            counter2++;
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "K":
        if (pos === 56) {
          if (
            mesa[pos + 1] === " " ||
            mesa[pos + 1] === "t" ||
            mesa[pos + 1] === "c" ||
            mesa[pos + 1] === "b" ||
            mesa[pos + 1] === "q" ||
            mesa[pos + 1] === "p" ||
            pos + 1 > 64
          ) {
            mesa[pos + 1] = "x";
          }
          if (
            mesa[pos - 8] === " " ||
            mesa[pos - 8] === "t" ||
            mesa[pos - 8] === "c" ||
            mesa[pos - 8] === "b" ||
            mesa[pos - 8] === "q" ||
            mesa[pos - 8] === "p" ||
            pos - 8 > 64
          ) {
            mesa[pos - 8] = "x";
          }
          if (
            mesa[pos - 7] === " " ||
            mesa[pos - 7] === "t" ||
            mesa[pos - 7] === "c" ||
            mesa[pos - 7] === "b" ||
            mesa[pos - 7] === "q" ||
            mesa[pos - 7] === "p" ||
            pos - 7 > 64
          ) {
            mesa[pos - 7] = "x";
          }
        } else {
          if (pos === 63) {
            if (
              mesa[pos - 9] === " " ||
              mesa[pos - 9] === "t" ||
              mesa[pos - 9] === "c" ||
              mesa[pos - 9] === "b" ||
              mesa[pos - 9] === "q" ||
              mesa[pos - 9] === "p" ||
              pos - 9 > 64
            ) {
              mesa[pos - 9] = "x";
            }
            if (
              mesa[pos - 1] === " " ||
              mesa[pos - 1] === "t" ||
              mesa[pos - 1] === "c" ||
              mesa[pos - 1] === "b" ||
              mesa[pos - 1] === "q" ||
              mesa[pos - 1] === "p" ||
              pos - 1 > 64
            ) {
              mesa[pos - 1] = "x";
            }
            if (
              mesa[pos - 8] === " " ||
              mesa[pos - 8] === "t" ||
              mesa[pos - 8] === "c" ||
              mesa[pos - 8] === "b" ||
              mesa[pos - 8] === "q" ||
              mesa[pos - 8] === "p" ||
              pos - 8 > 64
            ) {
              mesa[pos - 8] = "x";
            }
          } else {
            if (pos === 0) {
              if (
                mesa[pos + 9] === " " ||
                mesa[pos + 9] === "t" ||
                mesa[pos + 9] === "c" ||
                mesa[pos + 9] === "b" ||
                mesa[pos + 9] === "q" ||
                mesa[pos + 9] === "p" ||
                pos + 9 > 64
              ) {
                mesa[pos + 9] = "x";
              }
              if (
                mesa[pos + 1] === " " ||
                mesa[pos + 1] === "t" ||
                mesa[pos + 1] === "c" ||
                mesa[pos + 1] === "b" ||
                mesa[pos + 1] === "q" ||
                mesa[pos + 1] === "p" ||
                pos + 1 > 64
              ) {
                mesa[pos + 1] = "x";
              }
              if (
                mesa[pos + 8] === " " ||
                mesa[pos + 8] === "t" ||
                mesa[pos + 8] === "c" ||
                mesa[pos + 8] === "b" ||
                mesa[pos + 8] === "q" ||
                mesa[pos + 8] === "p" ||
                pos + 8 > 64
              ) {
                mesa[pos + 8] = "x";
              }
            } else {
              if (pos === 7) {
                if (
                  mesa[pos + 8] === " " ||
                  mesa[pos + 8] === "t" ||
                  mesa[pos + 8] === "c" ||
                  mesa[pos + 8] === "b" ||
                  mesa[pos + 8] === "q" ||
                  mesa[pos + 8] === "p" ||
                  pos + 8 > 64
                ) {
                  mesa[pos + 8] = "x";
                }
                if (
                  mesa[pos + 7] === " " ||
                  mesa[pos + 7] === "t" ||
                  mesa[pos + 7] === "c" ||
                  mesa[pos + 7] === "b" ||
                  mesa[pos + 7] === "q" ||
                  mesa[pos + 7] === "p" ||
                  pos + 7 > 64
                ) {
                  mesa[pos + 7] = "x";
                }
                if (
                  mesa[pos - 1] === " " ||
                  mesa[pos - 1] === "t" ||
                  mesa[pos - 1] === "c" ||
                  mesa[pos - 1] === "b" ||
                  mesa[pos - 1] === "q" ||
                  mesa[pos - 1] === "p" ||
                  pos - 1 > 64
                ) {
                  mesa[pos - 1] = "x";
                }
              } else {
                if (pos % 8 === 7) {
                  if (
                    mesa[pos + 8] === " " ||
                    mesa[pos + 8] === "t" ||
                    mesa[pos + 8] === "c" ||
                    mesa[pos + 8] === "b" ||
                    mesa[pos + 8] === "q" ||
                    mesa[pos + 8] === "p" ||
                    pos + 8 > 64
                  ) {
                    mesa[pos + 8] = "x";
                  }
                  if (
                    mesa[pos + 7] === " " ||
                    mesa[pos + 7] === "t" ||
                    mesa[pos + 7] === "c" ||
                    mesa[pos + 7] === "b" ||
                    mesa[pos + 7] === "q" ||
                    mesa[pos + 7] === "p" ||
                    pos + 7 > 64
                  ) {
                    mesa[pos + 7] = "x";
                  }
                  if (
                    mesa[pos - 9] === " " ||
                    mesa[pos - 9] === "t" ||
                    mesa[pos - 9] === "c" ||
                    mesa[pos - 9] === "b" ||
                    mesa[pos - 9] === "q" ||
                    mesa[pos - 9] === "p" ||
                    pos - 9 > 64
                  ) {
                    mesa[pos - 9] = "x";
                  }
                  if (
                    mesa[pos - 1] === " " ||
                    mesa[pos - 1] === "t" ||
                    mesa[pos - 1] === "c" ||
                    mesa[pos - 1] === "b" ||
                    mesa[pos - 1] === "q" ||
                    mesa[pos - 1] === "p" ||
                    pos - 1 > 64
                  ) {
                    mesa[pos - 1] = "x";
                  }
                  if (
                    mesa[pos - 8] === " " ||
                    mesa[pos - 8] === "t" ||
                    mesa[pos - 8] === "c" ||
                    mesa[pos - 8] === "b" ||
                    mesa[pos - 8] === "q" ||
                    mesa[pos - 8] === "p" ||
                    pos - 8 > 64
                  ) {
                    mesa[pos - 8] = "x";
                  }
                } else {
                  if (pos % 8 === 0) {
                    if (
                      mesa[pos + 9] === " " ||
                      mesa[pos + 9] === "t" ||
                      mesa[pos + 9] === "c" ||
                      mesa[pos + 9] === "b" ||
                      mesa[pos + 9] === "q" ||
                      mesa[pos + 9] === "p" ||
                      pos + 9 > 64
                    ) {
                      mesa[pos + 9] = "x";
                    }
                    if (
                      mesa[pos + 1] === " " ||
                      mesa[pos + 1] === "t" ||
                      mesa[pos + 1] === "c" ||
                      mesa[pos + 1] === "b" ||
                      mesa[pos + 1] === "q" ||
                      mesa[pos + 1] === "p" ||
                      pos + 1 > 64
                    ) {
                      mesa[pos + 1] = "x";
                    }
                    if (
                      mesa[pos + 8] === " " ||
                      mesa[pos + 8] === "t" ||
                      mesa[pos + 8] === "c" ||
                      mesa[pos + 8] === "b" ||
                      mesa[pos + 8] === "q" ||
                      mesa[pos + 8] === "p" ||
                      pos + 8 > 64
                    ) {
                      mesa[pos + 8] = "x";
                    }
                    if (
                      mesa[pos - 8] === " " ||
                      mesa[pos - 8] === "t" ||
                      mesa[pos - 8] === "c" ||
                      mesa[pos - 8] === "b" ||
                      mesa[pos - 8] === "q" ||
                      mesa[pos - 8] === "p" ||
                      pos - 8 > 64
                    ) {
                      mesa[pos - 8] = "x";
                    }
                    if (
                      mesa[pos - 7] === " " ||
                      mesa[pos - 7] === "t" ||
                      mesa[pos - 7] === "c" ||
                      mesa[pos - 7] === "b" ||
                      mesa[pos - 7] === "q" ||
                      mesa[pos - 7] === "p" ||
                      pos - 7 > 64
                    ) {
                      mesa[pos - 7] = "x";
                    }
                  } else {
                    if (pos > 56) {
                      if (
                        mesa[pos + 1] === " " ||
                        mesa[pos + 1] === "t" ||
                        mesa[pos + 1] === "c" ||
                        mesa[pos + 1] === "b" ||
                        mesa[pos + 1] === "q" ||
                        mesa[pos + 1] === "p" ||
                        pos + 1 > 64
                      ) {
                        mesa[pos + 1] = "x";
                      }
                      if (
                        mesa[pos - 9] === " " ||
                        mesa[pos - 9] === "t" ||
                        mesa[pos - 9] === "c" ||
                        mesa[pos - 9] === "b" ||
                        mesa[pos - 9] === "q" ||
                        mesa[pos - 9] === "p" ||
                        pos - 9 > 64
                      ) {
                        mesa[pos - 9] = "x";
                      }
                      if (
                        mesa[pos - 1] === " " ||
                        mesa[pos - 1] === "t" ||
                        mesa[pos - 1] === "c" ||
                        mesa[pos - 1] === "b" ||
                        mesa[pos - 1] === "q" ||
                        mesa[pos - 1] === "p" ||
                        pos - 1 > 64
                      ) {
                        mesa[pos - 1] = "x";
                      }
                      if (
                        mesa[pos - 8] === " " ||
                        mesa[pos - 8] === "t" ||
                        mesa[pos - 8] === "c" ||
                        mesa[pos - 8] === "b" ||
                        mesa[pos - 8] === "q" ||
                        mesa[pos - 8] === "p" ||
                        pos - 8 > 64
                      ) {
                        mesa[pos - 8] = "x";
                      }
                      if (
                        mesa[pos - 7] === " " ||
                        mesa[pos - 7] === "t" ||
                        mesa[pos - 7] === "c" ||
                        mesa[pos - 7] === "b" ||
                        mesa[pos - 7] === "q" ||
                        mesa[pos - 7] === "p" ||
                        pos - 7 > 64
                      ) {
                        mesa[pos - 7] = "x";
                      }
                    } else {
                      if (pos < 7) {
                        if (
                          mesa[pos + 9] === " " ||
                          mesa[pos + 9] === "t" ||
                          mesa[pos + 9] === "c" ||
                          mesa[pos + 9] === "b" ||
                          mesa[pos + 9] === "q" ||
                          mesa[pos + 9] === "p" ||
                          pos + 9 > 64
                        ) {
                          mesa[pos + 9] = "x";
                        }
                        if (
                          mesa[pos + 1] === " " ||
                          mesa[pos + 1] === "t" ||
                          mesa[pos + 1] === "c" ||
                          mesa[pos + 1] === "b" ||
                          mesa[pos + 1] === "q" ||
                          mesa[pos + 1] === "p" ||
                          pos + 1 > 64
                        ) {
                          mesa[pos + 1] = "x";
                        }
                        if (
                          mesa[pos + 8] === " " ||
                          mesa[pos + 8] === "t" ||
                          mesa[pos + 8] === "c" ||
                          mesa[pos + 8] === "b" ||
                          mesa[pos + 8] === "q" ||
                          mesa[pos + 8] === "p" ||
                          pos + 8 > 64
                        ) {
                          mesa[pos + 8] = "x";
                        }
                        if (
                          mesa[pos + 7] === " " ||
                          mesa[pos + 7] === "t" ||
                          mesa[pos + 7] === "c" ||
                          mesa[pos + 7] === "b" ||
                          mesa[pos + 7] === "q" ||
                          mesa[pos + 7] === "p" ||
                          pos + 7 > 64
                        ) {
                          mesa[pos + 7] = "x";
                        }
                        if (
                          mesa[pos - 1] === " " ||
                          mesa[pos - 1] === "t" ||
                          mesa[pos - 1] === "c" ||
                          mesa[pos - 1] === "b" ||
                          mesa[pos - 1] === "q" ||
                          mesa[pos - 1] === "p" ||
                          pos - 1 > 64
                        ) {
                          mesa[pos - 1] = "x";
                        }
                      } else {
                        if (
                          mesa[pos + 9] === " " ||
                          mesa[pos + 9] === "t" ||
                          mesa[pos + 9] === "c" ||
                          mesa[pos + 9] === "b" ||
                          mesa[pos + 9] === "q" ||
                          mesa[pos + 9] === "p" ||
                          pos + 9 > 64
                        ) {
                          mesa[pos + 9] = "x";
                        }
                        if (
                          mesa[pos + 1] === " " ||
                          mesa[pos + 1] === "t" ||
                          mesa[pos + 1] === "c" ||
                          mesa[pos + 1] === "b" ||
                          mesa[pos + 1] === "q" ||
                          mesa[pos + 1] === "p" ||
                          pos + 1 > 64
                        ) {
                          mesa[pos + 1] = "x";
                        }
                        if (
                          mesa[pos + 8] === " " ||
                          mesa[pos + 8] === "t" ||
                          mesa[pos + 8] === "c" ||
                          mesa[pos + 8] === "b" ||
                          mesa[pos + 8] === "q" ||
                          mesa[pos + 8] === "p" ||
                          pos + 8 > 64
                        ) {
                          mesa[pos + 8] = "x";
                        }
                        if (
                          mesa[pos + 7] === " " ||
                          mesa[pos + 7] === "t" ||
                          mesa[pos + 7] === "c" ||
                          mesa[pos + 7] === "b" ||
                          mesa[pos + 7] === "q" ||
                          mesa[pos + 7] === "p" ||
                          pos + 7 > 64
                        ) {
                          mesa[pos + 7] = "x";
                        }
                        if (
                          mesa[pos - 9] === " " ||
                          mesa[pos - 9] === "t" ||
                          mesa[pos - 9] === "c" ||
                          mesa[pos - 9] === "b" ||
                          mesa[pos - 9] === "q" ||
                          mesa[pos - 9] === "p" ||
                          pos - 9 > 64
                        ) {
                          mesa[pos - 9] = "x";
                        }
                        if (
                          mesa[pos - 1] === " " ||
                          mesa[pos - 1] === "t" ||
                          mesa[pos - 1] === "c" ||
                          mesa[pos - 1] === "b" ||
                          mesa[pos - 1] === "q" ||
                          mesa[pos - 1] === "p" ||
                          pos - 1 > 64
                        ) {
                          mesa[pos - 1] = "x";
                        }
                        if (
                          mesa[pos - 8] === " " ||
                          mesa[pos - 8] === "t" ||
                          mesa[pos - 8] === "c" ||
                          mesa[pos - 8] === "b" ||
                          mesa[pos - 8] === "q" ||
                          mesa[pos - 8] === "p" ||
                          pos - 8 > 64
                        ) {
                          mesa[pos - 8] = "x";
                        }
                        if (
                          mesa[pos - 7] === " " ||
                          mesa[pos - 7] === "t" ||
                          mesa[pos - 7] === "c" ||
                          mesa[pos - 7] === "b" ||
                          mesa[pos - 7] === "q" ||
                          mesa[pos - 7] === "p" ||
                          pos - 7 > 64
                        ) {
                          mesa[pos - 7] = "x";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      case "P":
        mesa[pos - 8] = "x";
        mesa[pos - 16] = "x";
        this.setState({
          mesa,
          selected: pos,
        });
        break;
      default:
        return " ";
    }
  };

  checkCavaloB = (pos) => {
    if (
      pos === " " ||
      pos === "t" ||
      pos === "c" ||
      pos === "b" ||
      pos === "q" ||
      pos === "k" ||
      pos === "p"
    ) {
      console.log(true);
      return true;
    }
    return false;
  };

  checkCavaloP = (pos) => {
    if (
      pos === " " ||
      pos === "T" ||
      pos === "C" ||
      pos === "B" ||
      pos === "Q" ||
      pos === "K" ||
      pos === "P"
    ) {
      console.log(true);
      return true;
    }
    return false;
  };

  confirm = (value, i) => {
    console.log(value);
    let mesa = this.state.mesa;
    let copia = this.state.copy;
    if (mesa[i] === "x") {
      mesa[i] = mesa[this.state.selected];
      mesa[this.state.selected] = " ";
      copia[i] = mesa[i];
      copia[this.state.selected] = " ";
    }
    this.state.mesa.forEach((value, i) => {
      if (value === "x") {
        mesa[i] = copia[i];
      }
    });
    this.setState({
      mesa,
      clicked: false,
    });
  };

  renderMesa = () => {
    let contador = 0;
    return this.state.mesa.map((value, i) => {
      let peca = this.checkEmoji(value);
      contador++;
      if (i % 8 === 0) {
        contador--;
        return (
          <div
            className="casa"
            style={{
              backgroundColor:
                contador % 2
                  ? value !== "x"
                    ? "black"
                    : "blue"
                  : value !== "x"
                  ? "white"
                  : "blue",
            }}
            key={i}
            onClick={
              !this.state.clicked
                ? () => this.move(value, i)
                : () => this.confirm(value, i)
            }
          >
            <div>{peca}</div>
            <br />
          </div>
        );
      } else {
        return (
          <div
            className="casa"
            style={{
              backgroundColor:
                contador % 2
                  ? value !== "x"
                    ? "black"
                    : "blue"
                  : value !== "x"
                  ? "white"
                  : "blue",
            }}
            key={i}
            onClick={
              !this.state.clicked
                ? () => this.move(value, i)
                : () => this.confirm(value, i)
            }
          >
            <div>{peca}</div>
          </div>
        );
      }
    });
  };

  checkEmoji = (peca) => {
    switch (peca) {
      case "t":
        return "♜";
      case "c":
        return "♞";
      case "b":
        return "♝";
      case "q":
        return "♛";
      case "k":
        return "♚";
      case "p":
        return "♟";
      case "T":
        return "♖";
      case "C":
        return "♘";
      case "B":
        return "♗";
      case "Q":
        return "♕";
      case "K":
        return "♔";
      case "P":
        return "♙";
      default:
        return peca;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="grid">{this.renderMesa()}</div>
      </div>
    );
  }
}

export default App;
