db.produtos.updateMany(
  { nome: { $in: ["Quarteirão com Queijo", "Big Mac"] } }, { $push: { ingredientes: "bacon" } },
);

db.produtos.find(
  { }, { ingredientes: 1, nome: 1, _id: 0 },
);
