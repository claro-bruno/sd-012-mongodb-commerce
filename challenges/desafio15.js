db.produtos.find(
  {
    nome: {
      $regex: /mc/i,
    },
  },
  {
    nome: 1,
    _id: 0,
  },
).count();
