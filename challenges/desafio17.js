db.produtos.createIndex( // visto pelo projeto da colega AliceGS19
  { 
      descricao: "text",
  }, 
  { 
      default_language: "pt",
  },
);

db.produtos.count(
  { 
      $text: { 
          $search: "frango hamburguer", 
      }, 
  },
);