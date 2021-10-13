db.produtos.updateMany(
  { vendasPorDia: { $exists: false } },
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
      "vendasPorDia.4": 60,
    },
  },
);

db.produtos.updateMany(
  {
    tags: {
      $all: ["bovino", "pão"],
    },
  },
  {
    $set: {
      "vendasPorDia.7": 120,
    },
  },
);

db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });
