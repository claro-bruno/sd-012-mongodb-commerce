db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $inc: {
    "vendasPorDia.3": 60,
  } },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: {
    "vendasPorDia.6": 120,
  } },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);