db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany(
  { tags: { $all: ["bovino"] } },
  { $max: { avaliacao: 5 } },
);

db.produtos.updateMany({ tags: { $all: ["ave"] } }, { $max: { avaliacao: 3 } });

db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
