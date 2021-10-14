db.produtos.createIndex(
    { descricao: "text" }, // cria o índice "text" no campo descrição
    { default_language: "portuguese" }, // define que a língua padrão é Português
    );
db.produtos.count({ $text: { // usei o count pq o req pede contagem
     $search: "frango hamburguer", 
} }); // vai procurar qualquer campo descricao que tenha as palavras "frango" ou "hamburguer".