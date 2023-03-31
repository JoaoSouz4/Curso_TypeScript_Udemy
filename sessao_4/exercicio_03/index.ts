function getReview (r?: boolean | number) {
    if(!r || r == undefined) {
        console.log('O usuário não enviou uma nota.')
    } else {
        switch(r) {
            case 1 : 
                console.log("Avaliação: detestei");
                break;
            case 2: 
                console.log("Avaliação: ruim");
                break;
            case 3: 
                console.log("avaliação: Bom, mas eu esperava mais.");
                break;
            case 4: 
                console.log("Avaliação: Muito Bom!" );
                break;
            case 5: 
                console.log("Avaliação: Excelente!!!!!");
                break;
            default : 
                console.log('Escolha uma nota de 1 a 5');
        }
    }
}

getReview(false);
getReview();
getReview(1);
getReview(5);
getReview(10);