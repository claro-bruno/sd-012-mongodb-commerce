db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: { $all: ["ave"] } },
  { $inc: { avalicao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
