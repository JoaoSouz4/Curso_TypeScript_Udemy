//Never é semlhante ao void; 
//Utilizado quando a função realmente não retorna nada, como tipo de erros: 

function showMessage(msg: string): never {
    throw new Error(msg);
}

showMessage("erroooooooooooooooooooooooooooooooooooooorr");