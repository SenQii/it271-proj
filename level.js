// to detrmine the level 

let easy1 = document.getElementById("easy");
let med1 = document.getElementById("med");
let hard1 = document.getElementById("hard");
var range = 10;
let level;

function setLevel(l) {
  level = l;
  setRange();
  console.log('choosen level: ' + level)
  console.log('choosen range: ' + range)
}

function setRange(){

if ( level === 1){
  range = 10 ;
}else if ( level === 2){
  range = 100 ;
}else if ( level === 3){
  range = 1000 ;
}
  
  }

  let levelsent = level;
export {levelsent};