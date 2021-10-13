db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        percentual: {
          $gte: 40,
        },
        tipo: {
          $eq: "sódio",
        },
      },
    },
  },
  {
    $push: {
      tags: "muito sódio",
    },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    tags: 1,
    _id: 0,
  },
);

// realizado em call com o Diogo Sant'Anna