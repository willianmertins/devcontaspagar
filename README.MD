# Nome do Projeto 
DEVContasPagar

## Descrição do Projeto
(Projeto criado apenas para afins de estudos e práticas)
Criado uma API para criar registros de contas receber/pagar para crédito à vista e crédito parcelados. 
E a partir do que for informado nos parametros do Body será criado os registros.

### 🛠 Tecnologias
<a href="https://nodejs.org/en/">![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)</a>

### Requisitos
----
## Rotas da aplicação
### POST `/contasreceber`
A rota deve receber `dataVenda`, `descricao`, `cartao`, `tipo`, `parcelas` e `valorTotal` dentro do corpo da requisição. Ao cadastrar um novo contas receber e irár retornar com `status: 201` e um objeto no seguinte formato:
```jsx
{ 
  {
    "id": "uuid",
    "dataVenda": "2021-05-09T00:00:00.000Z",
    "descricao": "Xongas",
    "cartao": "Mastercard",
    "tipo": "credito",
    "dataVencto": "2021-06-09T00:00:00.000Z",
    "parcela": 1,
    "parcelas": 10,
    "valorParcela": 150,
    "valorTotal": 1500
  },
}
```
