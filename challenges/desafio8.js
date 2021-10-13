// 8 - Remova o **primeiro** `ingrediente` do sanduíche `Quarteirão com Queijo`.

db.produtos.update({ nome: "Quarteirão com Queijo" },
  {
     $pop: { ingredientes: -1 },
  });

db.produtos.find({},
{
  _id: false,
  nome: true,
  ingredientes: true,
  });
