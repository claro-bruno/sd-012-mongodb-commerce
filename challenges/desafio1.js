db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald McDonald" } },
);
db.produtos.find(
  {},
  { nome: true, _id: false, criadoPor: true },
);
