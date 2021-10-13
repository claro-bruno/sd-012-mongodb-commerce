db.produtos
.updateOne({ nome: "Big Mac" }, { $set: { UltimaModificacao: ISODate() } }, { upsert: true });
db.produtos.find({ UltimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
