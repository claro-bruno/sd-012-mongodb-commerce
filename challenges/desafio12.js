db.produtos.updateMany(
    {},
    {
        $push: {
            valoresNutricionais: {
              $each: [],
              $sort: { percentual: -1 },
              },
        },
    }, { collation: { locale: "pt" } },
    );

db.produtos.find(
  {},
  { _id: false, nome: true, valoresNutricionais: true },
  );
