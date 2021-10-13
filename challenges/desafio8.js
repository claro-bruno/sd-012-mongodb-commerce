db.produtos.updateOne(
{
  nome: "Quarteirão com Queijo",
}, {
  $pop: {
    ingrediente: -1,
  },
},
);

db.produtos.find(
  {}, 
  {
  _id: 1,
  nome: 1,
  ingredientes: 1,
},
);