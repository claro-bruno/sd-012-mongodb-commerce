db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: { percentual: { $gt: 40 }, tipo: "sódio" },
    },
  },
  { $push: { tags: "muito sódio" } },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
