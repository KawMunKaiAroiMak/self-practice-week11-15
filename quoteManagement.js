import {getItems} from "./js/myLib/fetchUtils"

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
