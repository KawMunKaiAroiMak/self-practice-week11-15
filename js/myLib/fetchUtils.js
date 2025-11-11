const { error } = require("console")

async function getItems(url){
    try{
        const res = await fetch(url)
        const items = await res.json() //convert json to JavaScript Object
    }
    catch (e){
        throw new Error(`There is a problem, cannot read items`)
    }
}
export { getItems}