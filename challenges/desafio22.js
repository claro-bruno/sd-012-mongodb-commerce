db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { vendidos: 1, nome: 1, _id: 0 },
);