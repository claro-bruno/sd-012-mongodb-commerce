db.produtos.updateMany({}, { $set: { riadoPor: "Ronald McDonald" } });

db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });