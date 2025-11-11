import {deleteItem, getItems, addItem} from "./myLib/fetchUtils"

async function loadQuotes(){
    try{
    await getItems(`${import.meta.env.VITE_APP_URL}/
        quotes`)
        
        return quotes
    }
    catch (e){
        alert(e)
    }
}
async function deleteQuote(quoteId){
    try{
        const deleteId = await deleteItem(quoteURL, quoteId)
        return deleteId
    } catch (e){
        throw new Error(`Quote: ${e.message}`)
    }
}
async function addQuote(quote){
    try{
        const addedItem= await addItem(quoteURL,quote)
        return addedItem
    } catch (e) {
        throw new Error(`Quote: ${e.message}`)
    }
}
export {loadQuotes, deleteQuote, addQuote}