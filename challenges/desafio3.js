db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);

db.produtos.update(
  { tags: "bovino" },
  { $inc: { avaliacao: 5 } },
);

db.produtos.update(
  { tags: "ave" },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find(
  {},
  { nome: 1, avaliacao: 1, _id: 0 },
);