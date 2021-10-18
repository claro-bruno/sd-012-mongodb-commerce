db.produtos.find(
  { $where: "this.curtidas > this.vendidos" },
  { _id: false, nome: true },
);