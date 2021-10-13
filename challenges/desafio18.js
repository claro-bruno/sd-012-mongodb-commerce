db.produtos.createIndex( 
  { descricao: "text" }, 
  { default_language: "portuguese" }, 
);
db.produtos({ 
  $text: {
     $search: "\"feito com\"",
    },
}).count();