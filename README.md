# Voltemos à Palavra — Bíblia Strong Interativa

## Estrutura de ficheiros
```
voltemos/
├── index.html       ← O site
└── data/
    ├── kjv.json     ← KJV com números Strong
    ├── ara.json     ← Almeida Revista Atualizada com Strong
    ├── strong.json  ← Dicionário Strong em Português
    └── refs.json    ← Referências cruzadas
```

## Como publicar no GitHub Pages (gratuito)
1. Crie uma conta em https://github.com
2. Crie um repositório novo (ex: `voltemos-a-palavra`)
3. Faça upload de todos os ficheiros (index.html + pasta data/)
4. Vá em Settings → Pages → Source: Deploy from branch → main
5. Aguarde 1-2 min → o site fica em: `https://SEU_USUARIO.github.io/voltemos-a-palavra`

## Como usar no Google Sites
1. Publique no GitHub Pages (acima)
2. No Google Sites → Inserir → Incorporar → Cole a URL do GitHub Pages
3. Ajuste o tamanho do frame conforme necessário

## Uso local (para testar)
Abra um terminal na pasta e execute:
```
python -m http.server 8000
```
Depois acesse: http://localhost:8000

**Nota:** Não funciona clicando duplo no index.html diretamente.
Precisa de um servidor (local ou web) por causa dos fetch() dos JSONs.
