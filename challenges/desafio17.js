db.produtos.createIndex( 
 { descricao: "text" },
 { default_language: "portuguese" },
);
db.produtos({ 
  $text: { 
    $search: "frango hamburguer",
  },
}).coun();