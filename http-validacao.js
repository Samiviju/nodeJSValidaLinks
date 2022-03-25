const fetch = (...args) => import('node-fetch').then(({default: fetch})=> fetch(...args));

module.exports = validaUrls;

function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayUrls){
    try{
        
        const arrayStatus = await Promise
            .all(arrayUrls
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
        })) 
        return arrayStatus;
    }catch(erro){
        manejaErros(erro);
    }
}

function geraArrayDeUrls(arrayDeLinks){
    //loop para cada {chave: valor}
    //objeto -> [valor]
    //Object.values(objeto)
    return arrayDeLinks
        .map(objetoLink => Object
           .values(objetoLink).join());
}


async function validaUrls(arrayDeLinks){
    const links = geraArrayDeUrls(arrayDeLinks)
    const statusLinks = await checaStatus(links);
    //spread operator
    const resultados =  arrayDeLinks.map((objeto, indice) => ({...objeto,
         status: statusLinks[indice]
    }));
    return resultados;
}
