// 20.1
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

// 20.2
db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });
