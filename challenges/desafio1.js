db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald Mcdonald" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, criadoPor: 1 },
);