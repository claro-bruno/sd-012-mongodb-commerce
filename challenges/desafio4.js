db.produtos.updateMany({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });

db.produtos.find({ nome: "Big Mac" }, { nome: 1, _id: 0 });
