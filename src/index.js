const express = require("express");
const { v4: uuid} = require("uuid");

const app = express();

app.listen(3333);

app.use(express.json());

const contasreceber = [];

app.post("/contasreceber", (request,response) => {
  const { dataVenda, descricao, cartao, tipo, parcelas, valorTotal} = request.body;

  for(let i=1; i <= parcelas; i++){

    //Calcula data de vencimento das próximas parcelas
    let dataVencto = new Date(dataVenda);
    dataVencto.setMonth(dataVencto.getMonth() + i);

    //Calcula valor da parcela
    const valorParcela = parseFloat((valorTotal / parcelas).toFixed(2));
    
    const cr = {
      id: uuid(),
      dataVenda: new Date(dataVenda),
      descricao,
      cartao,
      tipo,
      dataVencto: new Date(dataVencto),
      parcela: i,
      parcelas,
      valorParcela,
      valorTotal,

    }
    contasreceber.push(cr);
  };
 
  return response.status(201).json(contasreceber);
});