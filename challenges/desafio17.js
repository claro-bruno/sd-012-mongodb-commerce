db.produtos.createIndex(
  {
    descricao: "text",
  },
  {
    default_language: "pt",
  },

);

db.produtos.find(
  {
    $text: {
      $search: "hamburguer frango",
      $language: "pt",
      $caseSensitive: false,
      $diacriticSensitive: false,
    },
  },
).count();
