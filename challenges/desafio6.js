db.produtos.updateMany(
  { nome: { $in: ["Quarteirão com Queijo", "Big Mac"] } },
  { $push: { ingredientes: { $each: ["bacon"] } } },
);

db.produtos.find(
  {},
  { nome: true, ingredientes: true, _id: false },
);
