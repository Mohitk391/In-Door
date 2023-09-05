
const DataReducer = (productState, action) => {
    switch(action.type){
        case "SET_LAMINATES":
            return {...productState, laminates : AddLaminates(productState.laminates, action.value)};
        case "UPDATE_LAMINATES":
            return {...productState, laminates : UpdatedLaminates(productState.laminates, action.value)};
        case "REMOVE_LAMINATES":
            return {...productState, laminates : RemoveLaminates(productState.laminates, action.value)};
        case "REMOVE_LAMINATE_COLLECTION":
            return {...productState, laminates: RemoveCollection(productState.laminates, action.value)};
            
        case "SET_WOODEN":
            return {...productState, wooden: AddWooden(productState.wooden, action.value)};
        case "UPDATE_WOODEN":
            return {...productState, wooden: UpdateWooden(productState.wooden, action.value)}
        case "REMOVE_WOODEN":
            return {...productState, wooden : RemoveWooden(productState.wooden, action.value)};
        case "REMOVE_WOODEN_COLLECTION":
            return {...productState, wooden: RemoveCollection(productState.wooden, action.value)};
        default: 
            return productState;
    }
}

const AddLaminates = (collections, current) => {
    if(collections.find(collection => collection.categoryName === current.categoryName)){
        return collections.map(collection=>{
            if(collection.categoryName === current.categoryName){
                if(collection.doors.find(door => door.id === current.doors[0].id)){
                    return collection;
                }
                else {
                    return {...collection, doors: collection.doors.concat(current.doors)};
                }
            }
            return collection;
    });
    }
    else {
        return [...collections, current];
    }
}

const UpdatedLaminates = (collections, current) => {
    return collections.map(collection => collection.categoryName === current.category ?  {...collection, doors: UpdatedDoors(collection.doors, current)} : collection);
}

const UpdatedDoors = (doors, current) => {
    return doors.map(door => door.id === current.id ? current : door);
}

const RemoveLaminates = (collections, removed) => {
    return collections.map(collection => collection.categoryName === removed.category ? {...collection,  doors: collection.doors.filter(door => door.id !== removed.id)} : collection);
}

const RemoveCollection = (collections, current)=> {
    return collections.filter(collection => collection.categoryId !== current.categoryId);
}

const AddWooden = (collections, current) => {
    if(collections.find(collection => collection.categoryName === current.categoryName)){
        return collections.map(collection=>{
            if(collection.categoryName === current.categoryName){
                if(collection.doors.find(door => door.id === current.doors[0].id)){
                    return collection;
                }
                else {
                    return {...collection, doors: collection.doors.concat(current.doors)};
                }
            }
            return collection;
    });
    }
    else {
        return [...collections, current];
    }
}

const UpdateWooden = (collection, updated) => {
    return collection.map(door => door.id === updated.id ? updated : door);
}

const RemoveWooden = (collection, removed) => {
    return collection.filter(door => door.id !== removed.id);
}

export { DataReducer }
