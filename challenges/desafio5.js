db.produtos.updateMany(
  {
    nome: { $nin: ["McChicken"] },
    ingredientes: { $nin: ["ketchup"] },
  },
  {
    $push: {
      ingredientes: 
        "ketchup",
    },
  },
);

db.produtos.find(
  {

  },
  {
    nome: true,
    ingredientes: true,
    _id: false,
  },
);