db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        $and: [
            { percentual: { $gt: 20 } },
            { percentual: { $lt: 40 } },
          ],
        tipo: {
          $eq: "sódio",
        },
      },
    },
  },
  {
    $push: {
      tags: "contém sódio",
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
