// 17.1
db.produtos.createIndex({ descricao: "text" });

// 17.2
db.produtos.count({ $text: { $search: "frango hambúrguer" } });
