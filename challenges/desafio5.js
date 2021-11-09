db.produtos.updateMany(
  { nome: { $not: /McChicken/ } },
  { $addToSet: { ingredientes: { $each: ["ketchup"] } } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
