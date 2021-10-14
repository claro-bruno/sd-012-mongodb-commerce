db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  { },
  { nome: true, ingredientes: true, _id: false },
);

// addToSet - refatoração - não adiciona duplicado, eliminando a necessidade de filtrar
