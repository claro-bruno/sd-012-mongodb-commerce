db.produtos.find(
  {
    ingredientes: {
      $size: 4,
    },
  },
  {
    nome: 1,
    ingredientes: 1,
    _id: 0,
  },
).count();
