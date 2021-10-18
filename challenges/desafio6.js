db.produtos.updateMany({
    nome: {
      $in: ["Quarteirão com Queijo", "Big Mac"],
    },
  }, {
    $push: {
      ingredientes: "bacon",
    },
  });
db.produtos.find({}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  });
