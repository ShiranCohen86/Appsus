import { storageService } from './async-storage-service.js'


const KEEP_KEY = 'MyKeeps'
 
 export const keepsService = {
    saveKeepsToStorage,
    loadKeepsFromStorage,
     getKeepList,
     saveAllKeeps,
     onloadApp,
     getNotes,
    //  getKeepById,
    
}




var gNotes = [
 {
    type: "noteTxt",
    isPinned: true,
    info: {
       txt: "Fullstack Me Baby !"
       
       }
 },

{
    type: "noteTodos",
    info: {
       label: "How was it:",
       todos: [
         { 
             txt: "Do that",
             doneAt: null 
         },
         { 
             txt: "Do this"
             , doneAt: 187111111 
         }
      ]
     }
  },

 {
    type: "noteImg",
    info: {
       url: "http://some-img/me",
       title: "Me playing Mi"
    },
    style: {
       backgroundColor: "#00d"
    }
 },

];


function getNotes(){
    return gNotes;
}

// when the App Loads for the First Time
function onloadApp(){

    var DBdata=getKeepList()
    .then( DBnotes=>{
        console.log(' DB APP LOADS DATA',DBnotes)
        if (!DBnotes|| DBnotes === undefined ||DBnotes.length===0 ){
            console.log(' DB APP LOADS RETURN NO DATA- function will return gNotes',gNotes)
            return gNotes;
        }else{
            console.log(' DB APP LOADS NO EMPTY DATA - will return DATA',gNotes)
            gNotes=DBnotes;
            return gNotes;
        }
        
    })
  return DBdata;

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