db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

// dot notation pra acessar a posição certa do array de acordo com o requisito:

db.produtos.updateOne({ nome: { $eq: "Big Mac" } }, { $inc: { "vendasPorDia.3": 60 } });

db.produtos.updateOne({ tags: { $in: ["bovino", "pão"] } }, { $inc: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
