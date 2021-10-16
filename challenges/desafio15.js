db.produtos.count(
  { nome: { $regex: /Mc/g } },  
);