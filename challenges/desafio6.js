db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  {
    $addToSet: {
      ingredientes: {
        $each: ["bacon"],
      },
    },
  },
);
db.produtos.find(
  { },
  { _id: false, nome: true, ingredientes: true },
);
