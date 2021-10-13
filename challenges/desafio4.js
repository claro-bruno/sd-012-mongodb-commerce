db.produtos.updateMany(
  {
    nome: { $eq: "Big Mac" },
  },
  {
    $currentDate: {
      ultimaModificacao: { $type: "date" },
    },
  },
  {
    $upsert: true,
  },
);

db.produtos.find(
  {
    ultimaModificacao: { $exists: true },
  },
  {
    nome: true,
    _id: false,
  },
);
