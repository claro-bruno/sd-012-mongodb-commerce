db.produtos.find(
  {},
  {
    nome: 1,
    valoresNutricionais: 1,
    _id: 0,
  },
).sort(
  "valoresNutricionais.percentual": -1,
);
