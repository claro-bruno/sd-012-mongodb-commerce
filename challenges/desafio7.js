// 7.1
db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

// 7.2
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
