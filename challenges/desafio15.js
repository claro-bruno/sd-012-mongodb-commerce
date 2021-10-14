db.produtos.count({ nome: { $regex: /Mc/i } });
// usei o count porque o req 15 pede contagem
// a letra i é pra indicar case INsensitive, aí não vai importar ser letra maiúscula ou minúscula
// Não usei ^ ou $ no regex porque o req não especificou se queria que começasse ou terminasse com Mc.