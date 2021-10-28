db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronaldo Mcdonald" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, criadoPor: 1 },
);