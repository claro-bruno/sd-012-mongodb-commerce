db.produtos.find(
  { nome: { $regex: /MC/i } },
).count();
// https://docs.mongodb.com/manual/reference/operator/query/regex/