// 12 - Ordene em todos os documentos os 
// elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente.

db.produtos.updateMany({},
  {
    $push:
    {
      valoresNutricionais: 
        {
          $each: [],
          $sort: { percentual: -1 },
        },
    },
  },
  { collation: { locale: "pt" } });

db.produtos.find({},
  {
    _id: false,
    nome: true,
    valoresNutricionais: true,
  });
