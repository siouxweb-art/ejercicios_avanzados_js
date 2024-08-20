function swap(array, index1, index2) {

    const temp = array[index1];

    array[index1] = array[index2];

    array[index2] = temp;
}


const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

swap(fantasticFour, 2, 3);

console.log(fantasticFour);