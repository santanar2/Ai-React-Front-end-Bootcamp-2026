# Smart Component — Lista de Produtos

Aplicação React criada com Vite que busca produtos em uma API e os exibe em uma lista.

## Tecnologias

- React 19
- Vite 8
- Oxlint

## Funcionalidades

- Carrega os produtos da API ao abrir a página.
- Mostra uma mensagem enquanto o carregamento está em andamento.
- Exibe nome, preço e descrição de cada produto.

## Como executar

No diretório `smart-component`, instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço indicado no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run build` | Gera a versão de produção na pasta `dist`. |
| `npm run preview` | Visualiza localmente o build de produção. |
| `npm run lint` | Verifica problemas de código. |

## Estrutura principal

```text
src/
├── App.jsx                         # Renderiza a lista de produtos
├── settings.js                      # Endereço base da API
└── components/
    └── ProductsList/
        └── index.jsx                # Busca e mostra os produtos
```

## API

O endereço da API é definido em `src/settings.js`. O componente consulta o endpoint `/api/products/` e usa o retorno para montar a lista.
