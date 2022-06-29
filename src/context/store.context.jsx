import { createContext ,useState,useEffect} from "react";
import { getStoreAndDocument } from "../utils/firebase/firebase.utils";


export const StoreContext = createContext({
    storiesMap:{},
});

export const StoreProvider = ({children}) => {
    const [storiesMap, setStoriesMap] = useState({});
    useEffect(() => {
        const getStoreMap = async () => {
    const storeMap = await getStoreAndDocument();
            setStoriesMap(storeMap);
        }
        getStoreMap();
    },[])
    const value = { storiesMap };
    return (
			<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
		);
}