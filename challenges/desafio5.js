db.produtos.updateMany({ nome: { $nin: ["McChicken"] } }, { 
  $addToSet: { ingredientes: "ketchup" } });

db.produtos.find({}, { nome: 1, _id: 0, ingredientes: 1 });
