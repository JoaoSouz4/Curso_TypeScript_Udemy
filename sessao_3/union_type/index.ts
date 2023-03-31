//Union typeé uma alternativa para o uso do tipo any, pois
// podemos determinar dois possíveis tipos para um dado: 

function showBalance(balance: string | number){
   console.log('Tipo de dado recebido: '+typeof(balance));
   console.log('Value: '+ balance);
   return;
}

showBalance('100');
showBalance(100);
//utilizando o "|", semelhante ao OR;