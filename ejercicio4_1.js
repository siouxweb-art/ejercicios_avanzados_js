function findArrayIndex(array, text) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === text){
            return i;
        }
     
    }
    return -1;
}



const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const searchCharacters = findArrayIndex(mainCharacters, "Vader");
console.log(searchCharacters);