db.produtos.updateMany(
  {},
  {
    $set: { valorUnitario: NumberDecimal("0.00") },
  },
  { $upsert: true },
);

db.produtos.find(
  {},
  {
    nome: true,
    valorUnitario: true,
    _id: false,
  },
);
