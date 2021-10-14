db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      }
    },
  },
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

/**A princípio fiquei sem entender o motivo de ter que usar o $each, mas ao consultar o course ficou claro.**/
