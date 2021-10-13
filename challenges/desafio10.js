// 10 - Adicione a quantidade de vendas dos sanduíches por dia da semana.

db.produtos.updateMany({},
  {
     $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
  });

db.produtos.update({ nome: "Big Mac" },
  {
    $set: { "vendasPorDia.3": 60 },
  });

db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } },
  {
    $set: { "vendasPorDia.6": 120 },
  });

db.produtos.find({},
  {
    _id: false,
    nome: true,
    vendasPorDia: true,
  });
