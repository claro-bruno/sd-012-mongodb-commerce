db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.find({ $text: { $search: "\"feito com\"" } }).count();

// referencia para usar a sintaxe de buscar pela frase: https://app.betrybe.com/course/back-end/mongodb-updates-simples-e-complexos/updates-complexos-arrays-parte-2/4fd2d65a-b343-43a7-adb2-fc06227153f7/conteudos/328b830e-aa57-4f91-9b6e-f54ea6efbaf8/operador-text/7bf4eff8-a291-41e7-8855-aebb2020eaad?use_case=side_bar
