db.produtos.updateMany(
  { nome: { $ne: "McChicken" } }, 
  { $addToSet: { ingredientes: "ketchup" } },
);

// 5.2
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
