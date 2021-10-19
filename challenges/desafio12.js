db.produtos.updateMany({}, {
    $push: {
        valoresNutricionas: {
        $each: [],
        $sort: { percentual: -1, }
      },
    },
  });
  
  db.produtos.find({}, {
    _id: 0,
    nome: 1,
    valoresNutricionas: 1,
  });
