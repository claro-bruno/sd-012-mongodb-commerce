db.produtos.updateMany(
  {
    ingredientes: "cebola",
  },
  {
    $pull: {
      ingredientes: "cebola",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  },
);