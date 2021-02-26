import {keepsService} from  '../services/miss-keep.service.js';
import noteTxt from '../cmps/note-txt.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'

// @import url("./apps/miss-keep/miss-keep.main.css");

export default {
    template: `
        <section class=" keep-app">
            <div class="main-container flex justify-content-center">
                <textarea class=" Notes-Variations round "   v-model="notesVariations"  placeholder="Take a Note...">
                    <!-- <div role="button" class="Q0hgme-LgbsSe Q0hgme-Bz112c-LgbsSe VsHK1d INgbqf-LgbsSe VIpgJd-LgbsSe" tabindex="0" aria-label="Change color" style="user-select: none;"></div> -->
                </textarea>
                <div class="Notes-Variations-buttons-container">
                    <button class="Notes-Variations-Button round" > text</button>
                    <button class="Notes-Variations-Button round" > todos</button>
                    <button class="Notes-Variations-Button round" > img</button>
                    <button class="Notes-Variations-Button round" > Add</button>
                </div>
            
           </div>

            <div class="  grid-container flex justify-content-center">
       


                <!-- <input class="Notes-Variations round" v-model="message" placeholder="notes.."> -->
                
                <div>
                    <!-- <p>Message is: {{ message }}</p>                -->
                    <note-todos :keepsArrDb="getKeeps" >  </note-todos>
                </div>
            </div>
                <!-- <button class="myButoon round"  @click.prevent="addKeep()" > add</button>
                <button class="myButoon round"  @click.prevent="saveKeeps()" > Save</button>
                <button  class="myButoon round" @click.prevent="loadKeeps()" > load</button> -->
                
         </section>
    `,

        data() {
            return {

                // gkeepsCounter : 3 ,
                // keep1 : null,
                // keep2 : null,
                // keep3 : null,
                keepsArr2 : [],
                notesVariations : "",

            
        
            }
        },
        created() {
            this.loadKeeps()
            console.log('Load from keep app')

            // this.keepsArr[0]=this.keep1;
            // this.keepsArr[1]=this.keep3;
            // this.keepsArr[2]=this.keep3;

    
        },
        methods: {
            loadKeeps() {
                 var y = keepsService.onloadApp()
                  .then( DBArr=>{
                      console.log('xxxxxxxxxxxx in then',DBArr);
                    // this.keepsArr=;
                        this.keepsArr2=DBArr
                        console.log('On Load Main !!', this.keepsArr2 );
                    })
          console.log('zzzzzzzzzzzzzzz',y)
            },


            addKeep() {


            },
         //   },
            saveKeeps() {
    
                //    let  notes ={
                //         keep1 : this.note1,
                //         keep2 : this.note2,
                //         keep3 : this.note3,
                //     }
                //     keeps.push(note1)
                // this.keepsArr.forEach(element => {
                //     keepsArr
                // });
                this.keepsArr[0] = this.keep1;
                this.keepsArr[1] = this.keep2;
                this.keepsArr[2] = this.keep3;
    
                console.log('save button clicked to save Keeps', this.keepsArr)
                keepsService.saveAllKeeps(this.keepsArr);
    
            },
            // loadKeeps() {
            //     var keepsArr = keepsService.getKeepList()
            //         .then(DBkeepsArr => {
            //             console.log('Keeps from service in keep app after promis', DBkeepsArr)
            //             this.keep1 = DBkeepsArr[0][0];
            //             this.keep2 = DBkeepsArr[0][1];
            //             this.keep3 = DBkeepsArr[0][2];
            //         })
            // },

    },
    computed: {
        getKeeps(){
            console.log('keepsArr befor  V-bind in Keep App',this.keepsArr2)
            return this.keepsArr2;
        }
    },

    components: {
  
        noteTxt,
        noteTodos,
            

    },
}