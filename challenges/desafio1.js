db.produtos.updateMany(
    { valorUnitario: { $exists: true } },
    { $set: { valorUnitario: NumerDecimal("0.00") } },
);
db.produtos.find({ }, { nome: true, valorUnitario: true, _id: false });