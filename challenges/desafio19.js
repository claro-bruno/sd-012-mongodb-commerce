db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find(
  null,
  {
    _id: 0, nome: 1, descricao: 1, descricaoSite: 1,
  },
);
