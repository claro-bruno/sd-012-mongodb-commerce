db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": 60 } });

db.produtos.updateMany(
  { tags: { $all: ["bovino", "pão"] } },
  { $set: { "vendasPorDia.6": 120 } },
);

db.produtos.find({}, { vendasPorDia: 1, nome: 1, _id: 0 });
