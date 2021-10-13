db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

// 3.2
db.produtos.updateMany({ tags: "bovino" }, { $set: { avaliacao: NumberInt(5) } });

// 3.3
db.produtos.updateMany(
  { tags: "ave" },
  { $set: { avaliacao: NumberInt(3) } },
);

// 3.4
db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
