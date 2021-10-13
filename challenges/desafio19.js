// 19.1
db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

// 19.2
db.produtos.find({}, { nome: 1, descricao: 1, descricaoSite: 1, _id: 0 });
