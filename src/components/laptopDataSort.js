const laptopDataSort = (laptopDataEntries, LaptopSort) => {
    console.log(LaptopSort)
    if (!LaptopSort) {
      return laptopDataEntries;
    }
  
    switch (LaptopSort) {
      case " ":
        return laptopDataEntries.sort((a, b) => (a.node.title < b.node.title) ? -1 : 1);
      case "price-lowToHigh":
        return laptopDataEntries.sort((a, b) => ( parseFloat(a.node.laptopMeta.price) < parseFloat(b.node.laptopMeta.price)) ? -1 : 1);
      case "Price-HighToLow":
        return laptopDataEntries.sort((a, b) => ( parseFloat(b.node.laptopMeta.price) < parseFloat(a.node.laptopMeta.price)) ? -1 : 1);
      case "storage":
        return laptopDataEntries.sort((a, b) => (a.node.laptopMeta.storage > b.node.laptopMeta.storage) ? -1 : 1);
      case "ram":
        return laptopDataEntries.sort((a, b) => (a.node.laptopMeta.ram > b.node.laptopMeta.ram) ? -1 : 1);
      default:
        return laptopDataEntries;
    }
  };
  
  export default laptopDataSort;