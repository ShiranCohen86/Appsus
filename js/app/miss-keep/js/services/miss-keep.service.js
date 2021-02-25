import { storageService } from './async-storage-service.js'


const KEEP_KEY = 'MyKeeps'
 
 export const keepsService = {
    saveKeepsToStorage,
    loadKeepsFromStorage,
     getKeepList,
     saveAllKeeps,
    //  getKeepById,
    
}


function saveAllKeeps(keeps){

console.log('keeps befor saving',keeps)
     getKeepList()
    .then( tmpArr=>{
    if (tmpArr==null|| tmpArr ===undefined ){
      var keepArr=[];
      console.log('push on null')
      keepArr.push(keeps);
      saveKeepsToStorage(keepArr)
    }else{
        console.log(' normal push ')
        tmpArr.push(keeps);
        saveKeepsToStorage(tmpArr)
    }
})




}



function getKeepList(){
    var keepFromLoad=  loadKeepsFromStorage()
    .then(keepsArr=>{ 
     console.log('keepssArr in keep service on promis after waiting',keepsArr)
      return  keepsArr });
     return keepFromLoad;
    // .then(keepsArr=>keepsArr)

  
 }
 


function saveKeepsToStorage(booksList){
    saveToStorage(KEEP_KEY,booksList)
}

function loadKeepsFromStorage(){
    return  storageService.query(KEEP_KEY)
       // return loadFromStorage(BOOKS_KEY);
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}