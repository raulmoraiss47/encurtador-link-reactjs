// buscar os links salvos
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}
// salvar os links no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinkSave(key);

// se ja tiver um link salvo com algum ID eu nao vou deixar duplicar    
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('esse link ja existe')
        return;
    }

// adicionar esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("Salvo com sucesso");
}

// deletar algum link salvo.
export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link deletado com Sucesso!")
    return myLinks;
}