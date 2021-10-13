db.produtos.updateMany(
  {},
  {
    $push: {
      criadoPor: "Ronald McDonald",
    },
  },
  {
    upsert: true,
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    criadoPor: 1,
    _id: 0,
  },
);