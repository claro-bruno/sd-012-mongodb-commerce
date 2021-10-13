db.produtos.updateMany({ valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } });
