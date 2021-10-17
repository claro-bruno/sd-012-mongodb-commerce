db.produtos.updateMany(
{ ingredientes: { $nin: ["McChicken"] } },
{ $addToSet: { ingredientes: "ketchup" } },
{ $upsert: true },
);

db.produtos.find(
{ nome: true, ingredientes: true, _id: false },
);