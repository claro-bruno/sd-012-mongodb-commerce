db.produtos.updateMany(
  { },
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  { "tags.0": "bovino", "tags.1": "pão" },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find({ }, { nome: true, vendasPorDia: true, _id: false });