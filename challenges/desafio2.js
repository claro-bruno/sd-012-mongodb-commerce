db.produtos.updateMany(
  {},
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);
db.produtos.find(
  {},
  { nome: true, _id: false, valorUnitario: true },
);
