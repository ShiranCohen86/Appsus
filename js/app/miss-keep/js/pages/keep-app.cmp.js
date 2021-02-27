import {keepsService} from  '../services/miss-keep.service.js';
import noteTxt from '../cmps/note-txt.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import noteImg from '../cmps/note-img.cmp.js'

// @import url("./apps/miss-keep/miss-keep.main.css");

export default {
    template: `
        <section class=" keep-app">
            <div class="main-container flex justify-content-center" >


                        <!-- <div contenteditable="true"  class=" Notes-Variations round flex  justify-content-flex-end "   v-model="notesVariations"  placeholder="Take a Note..."> -->
                    
                     <textarea class="Notes-Variations round"   v-model="notesVariations"   placeholder="Take a Note...">
                      </textarea>
                      <div  class="Notes-Variations-buttons-container flex ">
                        <button class="Notes-Variations-Button round text" @click.prevent="editContent(1)" v-bind:class="{opacity : gKeepsForClass.isTxt }"> text</button>
                        <button class="Notes-Variations-Button round todos" @click.prevent="editContent(2)" v-bind:class="{opacity : gKeepsForClass.isTodos }"> todos</button>
                        <button class="Notes-Variations-Button round img"  @click.prevent="editContent(3)" v-bind:class="{opacity : gKeepsForClass.isImg }"> img</button>
                        <button class="Notes-Variations-Button round add"  @click.prevent="editContent(4)" v-bind:class="{opacity : gKeepsForClass.add }"> Add</button>
                        <button class="Notes-Variations-Button round add"  @click.prevent="editContent(5)" v-bind:class="{opacity : gKeepsForClass.save }"> Save</button>
                    </div>
                       <!-- </div> -->
                    </div>

            <div class="  grid-container flex justify-content-center">
               <!-- <input class="Notes-Variations round" v-model="message" placeholder="notes.."> -->
                 <div v-for="(k,idx)  in myKeeps">
                    <component  :is="k.type"> </component>
                </div>
                                                    <!-- <note-todos :keepsArrDb="getKeeps" >  </note-todos> -->


    </div>
                                                <!-- <p class="p" contenteditable="true" placeholder="Take a Note...">
                                                      <button  class="b" onclick="alert($(this).parent().find('span').text());">hello</button>
                                                          <span class="testspan">
                                                          </span>
                                                  </p> -->


                <!-- <div class="test-container p" placeholder="Type something..." contenteditable="true"></div> -->

                <!-- <div  contenteditable="true" class="test-container p" placeholder="Take a Note...">

                Take a Note...
                <button   contenteditable="false" class="test-button">Button</button> -->
                    <!-- <textarea class="test-textArea"> at .</textarea>
                </div> -->
        
                
         </section>
    `,

        data() {
            return {

                myComponents : {
                    isTxt : false,
                    isTodos : false, 
                    isImg : false,
                },
                myKeeps : [],
                notesVariations : "",
                gKeepsGenerator : {
                    isTxt : false,
                    isTodos : false, 
                    isImg : false,
                    add : false,
                    save : false,

                },
                gKeepsForClass : {
                    isTxt : false,
                    isTodos : false, 
                    isImg : false,
                    add : false,
                    save : false,

                }

            
        
            }
        },
        created() {
            this.loadKeeps()
            console.log(' created Keep App')

            // this.keepsArr[0]=this.keep1;
            // this.keepsArr[1]=this.keep3;
            // this.keepsArr[2]=this.keep3;

    
        },
        mounted() {
            this.loadKeeps()
            console.log(' mounted Keep App')
        },
        computed: {
            getKeeps(){
                console.log('keepsArr befor  V-bind in Keep App',this.myKeeps)
                return this.myKeeps;
            },
            myGens(){
                console.log('this.gKeepsGenerator.isTxt',this.gKeepsGenerator.isTxt)
                return this.gKeepsGenerator.isTxt;
            },
            // CurrentComponent(){
                
            //     this.myKeeps.forEach(element => {
                    
            //         var currentKeep=this.myKeeps
            //         switch(currentKeep.type) {
            //             case 'noteTxt':
            //               return noteTxt
            //                 break;
                      
            //             case 'noteTodos': 
            //             return noteTodos
            //                 break;
                        
            //             case 'noteImg': 
            //             return  noteImg
            //                 break;
            //                 default:
            //         }
            //     });
           
            // },
        },
        methods: {
            creatNewNote(){

                var keep=null; 
             if( this.gKeepsGenerator.isTxt){
                 console.log('creating text' )
                    keep = {
                        type: "noteTxt",
                        isPinned: true,
                        info: {
                            txt: this.notesVariations
                        }
                }
              

             }else if(this.gKeepsGenerator.isImg){
                 keep = {
                    type: "noteImg",
                    info: {
                      url: "https://www.coding-academy.org/books-photos/8.jpg",
                       title: "Me playing Mi"
                    },
                    style: {
                    backgroundColor: "#00d"
                    }
                }
           
            }else if(this.gKeepsGenerator.isTodos){
             keep ={
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
            }

            }
            var books= keepsService.getNotes(); //<=====================================================
            console.log('books ',books)
            console.log('keep ',keep)
            console.log('my text',this.notesVariations)
            books.push(keep)
            //console.log('books after push new Note ',books)

            },


        
            loadKeeps() {
                 var y = keepsService.onloadApp()
                  .then( DBArr=>{
                      console.log('xxxxxxxxxxxx in then',DBArr);
                    // this.keepsArr=;
                        this.myKeeps=DBArr
                        console.log('myKeeps On Load Main !!', this.myKeeps );
                    })
          console.log('zzzzzzzzzzzzzzz',y)
            },
            clear(ev){
                ev.preventdefault;
                this.gKeepsGenerator.isTxt=false
                this.gKeepsGenerator.isTodos=false
                this.gKeepsGenerator.isImg=false
                this.gKeepsGenerator.add=false
                this.gKeepsGenerator.save=false
            },
            editContent(num) {
                switch(num) {
                    case 1:
                        this.gKeepsGenerator.isTxt=true
                        this.gKeepsForClass.isTxt=true
                        this.gKeepsGenerator.isTodos=false
                        this.gKeepsForClass.isTodos=false
                        this.gKeepsGenerator.isImg=false
                        this.gKeepsForClass.isImg=false
                        this.gKeepsGenerator.add=false
                        this.gKeepsForClass.add=false
                        console.log('isTxt=',this.gKeepsGenerator.isTxt)
                        break;
                    case 2:
                        this.gKeepsGenerator.isTxt=false
                        this.gKeepsForClass.isTxt=false
                        this.gKeepsGenerator.isTodos=true
                        this.gKeepsForClass.isTodos=true
                        this.gKeepsGenerator.isImg=false
                        this.gKeepsForClass.isImg=false
                        this. gKeepsGenerator.add=false
                        this.gKeepsForClass.add=false
                        this.gKeepsGenerator.save=false
                        this.gKeepsForClass.save=false
                        console.log('isTodos', this.gKeepsGenerator.isTodos)
                        break;
                    case 3:
                        this.gKeepsGenerator.isTxt=false
                        this.gKeepsForClass.isTxt=false
                        this.gKeepsGenerator.isTodos=false
                        this.gKeepsForClass.isTodos=false
                        this.gKeepsGenerator.isImg=true
                        this.gKeepsForClass.isImg=true
                        this.gKeepsGenerator.add=false
                        this.gKeepsForClass.add=false
                        this.gKeepsGenerator.save=false
                        this.gKeepsForClass.save=false
                        console.log('isImg',this.gKeepsGenerator.isImg)
                        break;
                    case 4:
                        this.gKeepsForClass.isTxt=false
                         this.gKeepsForClass.isTodos=false
                        this.gKeepsForClass.isImg=false
                        this.gKeepsGenerator.add=true 
                        this.gKeepsForClass.add=true
                        this.gKeepsGenerator.save=false
                        this.gKeepsForClass.save=false
                        this.creatNewNote()
                        console.log('after add',this.notesVariations)
                       // console.log('add',this.gKeepsForClass.add)
                        setTimeout(()=>{
                            this.gKeepsForClass.add=false
                            this.gKeepsGenerator.add=false
                             }, 3000);                   
                      break;

                      case 5:
                        this.gKeepsGenerator.isTxt=false
                        this.gKeepsForClass.isTxt=false
                        this.gKeepsGenerator.isTodos=false
                        this.gKeepsForClass.isTodos=false
                        this.gKeepsGenerator.isImg=false
                        this.gKeepsForClass.isImg=false
                        this.gKeepsGenerator.add=false
                        this.gKeepsForClass.add=false
                        this.gKeepsGenerator.save=true
                        this.gKeepsForClass.save=true
                        var books= keepsService.getNotes();
                        keepsService.saveAllKeeps(books)
                        setTimeout(()=>{
                            this.gKeepsForClass.save=false
                            this.gKeepsGenerator.save=false
                             }, 3000);
                        console.log('save alll keeps to localStorage from app')
                        break;
                    default:
                      // code block
                  }
             

            },
 
   


    },


    components: {
  
        noteTxt,
        noteTodos,
        noteImg,
            

    },
}