db.produtos.updateMany(
  {},
  { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find({}, { vendasPorDia: 1, _id: 0, nome: 1 });
