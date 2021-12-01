let storage = {
    storage: [],
    getset: () => {
        if(localStorage.getItem(`todo-TYLPHE`) == null){
            localStorage.setItem(`todo-TYLPHE`, {});
        }
    },
}

export default storage;