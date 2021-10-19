db.produtos.updateMany(
  { nome: "Big Mac" },
  { $unset: { curtidas: null } },
);

db.produtos.find(
  {},
  {
    _id: 0, nome: 1, curtidas: 1,
  },
);
