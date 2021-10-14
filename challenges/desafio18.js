db.produtos.createIndex(
    { descricao: "text" }, 
    { default_language: "portuguese" }, 
    );
db.produtos.count({ $text: { 
     $search: "/feito com/", 
} }); // o req não quer que procure o campo descrição que tenham as palavras "feito" ou "com". O req quer a expressão "feito com". Aí nesse caso deve usar esses / antes e depois da expressão no $search.