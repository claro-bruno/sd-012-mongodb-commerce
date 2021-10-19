db.produtos.updateMany({
    $text:
        { $search: descricao,
        $language: portuguese,
        $caseSensitive: false,
        $diacriticSensitive: false },
});
db.produtos.find({ $text: { $search: { $in: ["frango", "hamburguer"] } } }).count();