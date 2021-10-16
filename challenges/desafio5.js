db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);
