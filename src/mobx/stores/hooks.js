import {useContext} from "react";
import {StoreContextMobx} from "./StoreProviderMobx";


export function useCommentsStore() {
    const rootStore = useContext(StoreContextMobx)

    if(!rootStore) {
        throw new Error('Nie znaleziono RootStore, sprawdź czy masz provider, który go dostarcza');
    }

    return rootStore.commentsStore;
}