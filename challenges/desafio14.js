db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: {
  tipo: "sódio",
  percentual: {
    $lt: 40,
    $gt: 20,
  } } } }, { $push: { tags: {
    $each: ["contém sódio"],
  } } },
);

db.produtos.find(
  { }, { tags: 1, nome: 1, _id: 0 },
);