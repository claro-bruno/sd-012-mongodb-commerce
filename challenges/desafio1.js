db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.find(
  {}, 
  { id: false,
    nome: true,
    criadoPor: true },
);