const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
  cats.push("Ralph");
}

function destructivelyPrependCat(name){
  cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){
  cats.pop();

}
function destructivelyRemoveFirstCat(){
  cats.shift();

}


function appendCat(name){
  cats.push("Broom");
const newCats = [...cats]
cats.splice(3,1)  
return newCats;
  // const newCats = [...cats.splice(3,1)];

}

function prependCat(name){
  const newCats = ["Arnold", ...cats];
  return newCats;

}

function removeLastCat(){
  const newCats2 = [...cats];
  newCats2.pop();
return newCats2
}

function removeFirstCat(){
  const newCats3 = [...cats];
  newCats3.shift();
  return newCats3;

}

