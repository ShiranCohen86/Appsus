import { storageService } from './async-storage-service.js'


const KEEP_KEY = 'MyKeeps'
 
 export const keepsService = {
    saveKeepsToStorage,
    loadKeepsFromStorage,
     getKeepList,
     saveAllKeeps,
    //  getKeepById,
    
}

 //  with Promise
// function getBookById(idx){
//    // return getBookList.find(book=>book)
//    console.log('id to find in  book service',idx)
// //    const booksArr= loadBooksFromStorage();
//     loadBooksFromStorage()
//    .then(booksArr=> 
//     console.log('booksArr from book service',booksArr))
//     for(let i=0;i<booksList.length;i++){
//         if(idx===booksList[i].id){
//             console.log('the id returned from the service by id is : ',booksList[i].id)
//             var book = booksList[i];
//             console.log('the book i have found from local storage',book);
//              return  book;
//         }
        
//     }

//   // console.log('booksArr from book service',booksArr)
 
// }

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