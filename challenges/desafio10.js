// 10.1
db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
} },
);

// 10.2
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

// 10.3
db.produtos.updateOne(
  { tags: { $all: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

// 10.4
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });
