const { error } = require("console")

async function getItems(url){
    let message = ""
    try{
        const res = await fetch(url)
        if(res.status !== 200){
        switch(res.status){
            case 401: message='401 - Unauthorized';break
            case 404: message='404 - Item not found';break
            default: message= "There is a problem, please try again"
        }
        throw new Error(message)
    }
        if (res.status ===404) throw new Error("404 Item not found")
        const items = await res.json() //convert json to JavaScript Object
            return items
    }
    catch (e){
        throw new Error(message || e.message) //e.message is always true
    }
}
async function deleteItem(url,id) {
    try{
        const res = await fetch(`${url}/${id}`,{
            method: "DELETE",
        })
        if(!res.ok)
            throw new Error(`Fail to delete item: ${res.status} - ${res.statusText}`)
        try{
            const deleteItem = await res.json()
            return deleteItem
        } catch(e){
            return id
        } 
      }
        catch(e){
            throw new Error(e.message)
    }
}
async function addItem(url,item){
    try{
    const res = await fetch(`${url}`,{
        method: "POST",
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify(item),
    })
    if(!res.ok){
        throw new Error(`Fail to add item: ${res.status} - ${res.statusText}`)
    }
    const addedItem = await res.json
    return addedItem
}   catch (e){
    throw new Error(e.message)
}
}
export {deleteItem, getItems, addItem}