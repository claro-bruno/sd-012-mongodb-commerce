db.produtos.updateMany({}, {
  /**
   * field: The field name
   * expression: The expression.
   */
  $set: {
    criadoPor: "Ronald McDonald",
  },
});

  db.produtos.find({}, {
    _id: 0,
    nome: 1,
    criadoPor: 1,
  });
