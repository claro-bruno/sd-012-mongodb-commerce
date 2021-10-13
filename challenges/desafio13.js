db.produtos.updateMany(
  {
    $elemMatch: {
      valoresNutricionais: {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    },
  },
  {
    $push: {
      tags: {
        $each: ["muito sódio"], 
      },
    },
  },  
);

db.produtos.find({}, {
  _id: false,
  nome: true,
  tags: true,
});