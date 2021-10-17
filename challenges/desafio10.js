db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({ nome: "Big Mac" }, {

     $inc:
     {
        "vendasPorDia.0": 0,
        "vendasPorDia.1": 0,
        "vendasPorDia.2": 0,
        "vendasPorDia.3": 60,
        "vendasPorDia.4": 0,
        "vendasPorDia.5": 0,
        "vendasPorDia.6": 0,
      },
});

db.produtos.updateMany(
      {
          $and:
              [
                { tags: "bovino" },
                { tags: "pão" },
              ],
      }, {
      $inc:

      {
        "vendasPorDia.0": 0,
        "vendasPorDia.1": 0,
        "vendasPorDia.2": 0,
        "vendasPorDia.3": 0,
        "vendasPorDia.4": 0,
        "vendasPorDia.5": 0,
        "vendasPorDia.6": 120,
      },
},
      );

db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });