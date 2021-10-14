// 13 - Adicione o elemento `muito sódio` ao final do _array_ `tags` 
// nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch:
      {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    },
  },
  {
    $push:
    {
      tags: "muito sódio",
    },
  },
);

db.produtos.find({},
  {
    _id: false,
    nome: true,
    tags: true,
  });
