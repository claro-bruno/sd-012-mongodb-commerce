db.produtos.updateMany(
  {},
  {
    $set: { criadoPor: "Ronald McDonald" },
  },
  {
    $upsert: true,
  },
);

db.produtos.find(
  {},
  {
    nome: true,
    criadoPor: true,
    _id: false,
  },
);
