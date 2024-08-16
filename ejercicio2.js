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

 //primero: calcular todos los volúmenes juntos en cada usuario y las canciones totales
 function calculateAverageVolume(users) {
    let totalVolume = 0;
    let totalSounds = 0;

    for (const user of users) {
        for (const sound in user.favoritesSounds) {
            totalVolume += user.favoritesSounds[sound].volume;
            totalSounds++;
        }
    }

    return totalVolume / totalSounds;
}

const averageVolume = calculateAverageVolume(users);
console.log("Average volume:", averageVolume);
