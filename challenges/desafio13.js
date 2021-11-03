db.produtos.updateMany({
  valoresNutricionais: { 
    $elemMatch: {
      tipo: "sódio",
      percentual: { $gte: 40 } },
  },
},
{
  $addToSet: {
    tags: "muito sódio",
  },
});

db.produtos.find({
},
{
  nome: true,
  tags: true,
  _id: false,
});