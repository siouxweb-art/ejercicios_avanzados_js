const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

//contar las veces que aparecen los sonidos
function countSoundApparitions(users) {
    const soundCounts = {};

    for (const user of users) {
        for (const sound in user.favoritesSounds){
        if (soundCounts[sound]) {
            soundCounts[sound]++;//si ya existe el sonido en el objeto soundCounts, aumenta su valor en 1
        } else {
            soundCounts[sound] = 1; //si no existe ya, queda igual a 1
        }
    }
}
return soundCounts;
}

const soundFrequencies = countSoundApparitions(users);//para calcular la frecuencia con la que aparece cada sonido
console.log(soundFrequencies);
