db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronaldd McDonald" } },
);

db.produtos.find(
  {},
  { nome: true, criadoPor: true, _id: false },
);