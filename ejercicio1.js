const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

  const categories = new Set(); //set: no admitimos repeticiones

  for (const movie of movies) {
    for (const category of movie.categories) {
        if (!categories.has(category)) {//has: verificar si ya existe
            categories.add(category);//añadir si no existe
        }
    }
  }

  console.log(Array.from(categories));