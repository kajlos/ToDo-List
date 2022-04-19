class Storage{
    static find(key,name){
        return localStorage.getItem(key);
    }
    static addItem(key,value){
        localStorage.setItem(key,value);
    }
    static initializeLocalStorage(){
        if (localStorage.getItem('Projects')){
            return;
        }
        else{
            localStorage.setItem("Projects",JSON.stringify([]));
        }
    }
}
export default Storage;