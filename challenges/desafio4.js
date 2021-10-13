db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $currentDate: { ultimaModificacao: true },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ultimaModificacao: 1,
  },
);
