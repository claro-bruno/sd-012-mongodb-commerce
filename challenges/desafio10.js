db.produtos.updateMany(
  {

  },
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

db.produtos.updateMany(
  {
    nome: "Big Mac",
  },
  {
    $set: {
     "vendasPorDia.3": 60,
    },
  },
);

db.produtos.updateMany(
  {
    $and: [
      { tags: "pão" },
      { tags: "bovino" },
    ],
  },
  {
    $set: {
      "vendasPorDia.6": 120,
    },
  },
);

db.produtos.find(
  {

  },
  {
    nome: true,
    vendasPorDia: true,
    _id: false,
  },
);