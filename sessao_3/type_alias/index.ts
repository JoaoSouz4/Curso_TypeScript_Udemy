//Type alias permite "criarmos" tipos de dados e dizer quais tipos correspondem ao  mesmo: 

type ID = string | number;
function showId(id: ID) {
    console.log('ID: '+id);
}

showId(1);
showId(200);
// showId(true);