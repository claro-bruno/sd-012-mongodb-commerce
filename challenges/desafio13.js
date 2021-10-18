db.produtos.updateMany(
  {
    "valoresNutricionais.percentual": {
      $gte: 40,
    },
  },
  { $push: {
      tags: "muito sódio",
    },
  },
);
db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);