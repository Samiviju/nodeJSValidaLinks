const fetch = require('node-fetch');




module.exports = validaUrls;

async function checaStatus(arrayUrls){
    const arrayStatus = await Promise.all(arrayUrls.map(url => {
        const res = await fetch(url);
        return res.status;
    })) 
    return arrayStatus;
}

function geraArrayDeUrls(arrayDeLinks){
    //loop para cada {chave: valor}
    //objeto -> [valor]
    //Object.values(objeto)
    return arrayDeLinks.map(objetoLink => Object.values(objetoLink).join());
}


function validaUrls(arrayDeLinks){
    return geraArrayDeUrls(arrayDeLinks);
}
