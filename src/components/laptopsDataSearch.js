// function to search the laptop data arrey
const laptopDataSearch = (laptopDataEntries, search) => {
    if (laptopDataEntries === null || laptopDataEntries === undefined || laptopDataEntries === "") {
        return laptopDataEntries;
    }else{
    return laptopDataEntries.filter((item) =>
        item.node.laptopMeta.model?.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.node.laptopMeta.cpu?.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.node.laptopMeta.gpu?.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.node.laptopMeta.price?.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.node.laptopMeta.ram?.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.node.laptopMeta.storage?.toString().toLowerCase().includes(search.toLowerCase())
        
    )}
}
export default laptopDataSearch;
