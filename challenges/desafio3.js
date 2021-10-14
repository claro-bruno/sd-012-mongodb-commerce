db.produtos.updateMany({ }, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany(
  { "tags.0": "bovino" },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { "tags.0": "ave" },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find({ }, { nome: true, avaliacao: true, _id: false });