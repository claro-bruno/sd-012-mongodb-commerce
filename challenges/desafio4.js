db.produtos.updateOne({ 
    nome: "Big Mac" }, { $currentDate: { ultimaModificacao: { $type: "date" } } });
db.produtos.findOne({ 
    ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });