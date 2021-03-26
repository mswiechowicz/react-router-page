import CommentsStore from "./CommentsStore";

class RootStore {
    constructor() {
        this.commentsStore = new CommentsStore();
    }
}

 export default RootStore;