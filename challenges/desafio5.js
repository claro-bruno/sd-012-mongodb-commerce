db.produtos.updateMany(
{ nome: { $ne: "McChicken" } },
{ $addToSet: { ingredientes: "ketchup" } },
{ $upsert: true },
);

db.produtos.find(
{ nome: true, ingredientes: true, _id: false },
);