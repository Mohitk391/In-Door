import { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { DataReducer } from "./DataReducer";

const ProductContext = createContext();

const initialState = {
    laminates : [],
    wooden : []
};

const ProductProvider = ({children}) => {
    const [ productState, productDispatch ] = useReducer(DataReducer, initialState);

    useEffect(() => {
        const laminateQuery = query(collection(db, "laminates"), orderBy("created"));
        const woodenQuery = query(collection(db, "wooden"), orderBy("created"));
        const unsubscribe = 
            onSnapshot(laminateQuery, (querySnapshot) => {
            querySnapshot.docs.map(doc => {
                const collectionName = doc.data().name;
                const seriesName = doc.data().series;
                const categoryId = doc.id;
                return onSnapshot(query(collection(db, `laminates/${collectionName}/${seriesName}`)),
                    (snapshot) => {
                        let collections = [];
                        let action = null;
                        let updatedValue= null;
                        snapshot.docChanges().forEach((change) => {
                            if (change.type === "added") {
                                console.log("New city: ", change.doc.data());
                                collections = [...collections, {...change.doc.data(), id: change.doc.id}];
                                action="added";
                            }
                            if (change.type === "modified") {
                                console.log("Modified city: ", change.doc.data());
                                updatedValue = {...change.doc.data(), id:change.doc.id};
                                action="modified";
                            }
                            if (change.type === "removed") {
                                console.log("Removed city: ", change.doc.data());
                                updatedValue = {...change.doc.data(), id:change.doc.id};
                                action="removed";
                            }
                          });
                        switch(action){
                            case "added":
                                productDispatch({ type: "SET_LAMINATES", value: {categoryName: collectionName, categoryId: categoryId, seriesName: seriesName, doors: collections} });
                                break;
                            case "modified":
                                productDispatch({type: "UPDATE_LAMINATES", value: updatedValue});
                                break;
                            case "removed":
                                productDispatch({type: "REMOVE_LAMINATES", value: updatedValue});
                                break;
                            default:
                                return ;
                        }   
                    });
            });
        });
        
        const unsubscribeWooden = onSnapshot(woodenQuery, (querySnapshot) => {
            querySnapshot.docs.map(doc => {
                const collectionName = doc.data().name;
                const seriesName = doc.data().series;
                const categoryId = doc.id;
                return onSnapshot(query(collection(db, `wooden/${collectionName}/${seriesName}`)),
                    (snapshot) => {
                        console.log("its inside second snapshot"); 
                        let collections = [];
                        let action = null;
                        let updatedValue= null;
                        snapshot.docChanges().forEach((change) => {
                            if (change.type === "added") {
                                console.log("New city: ", change.doc.data());
                                collections = [...collections, {...change.doc.data(), id: change.doc.id}];
                                action="added";
                            }
                            if (change.type === "modified") {
                                console.log("Modified city: ", change.doc.data());
                                updatedValue = {...change.doc.data(), id:change.doc.id};
                                action="modified";
                            }
                            if (change.type === "removed") {
                                console.log("Removed city: ", change.doc.data());
                                updatedValue = {...change.doc.data(), id:change.doc.id};
                                action="removed";
                            }
                          });
                        switch(action){
                            case "added":
                                productDispatch({ type: "SET_WOODEN", value: {categoryName: collectionName, categoryId: categoryId, seriesName: seriesName, doors: collections} });
                                break;
                            case "modified":
                                productDispatch({type: "UPDATE_WOODEN", value: updatedValue});
                                break;
                            case "removed":
                                productDispatch({type: "REMOVE_WOODEN", value: updatedValue});
                                break;
                            default:
                                return ;
                        }   
                    });
            });
        });


        return () => {
            unsubscribe();
            unsubscribeWooden();
        }
    }, [])


    return (
        <ProductContext.Provider value={{productState, productDispatch}}>
            {children}
        </ProductContext.Provider>
    )
};

const useProduct = () => useContext(ProductContext);

export {ProductProvider, useProduct}