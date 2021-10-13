// 6.1
db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $push: { ingredientes: "bacon" } },
);

db.produtos.find(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
);

// 6.2
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
