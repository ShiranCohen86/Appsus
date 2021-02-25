import {keepsService} from  '../services/miss-keep.service.js';

// @import url("./apps/miss-keep/miss-keep.main.css");

export default {
    template: `
        <section class="keep-app flex justify-content-center align-items-center ">
            <div  class="grid-container " >
             
                <textarea class="txt-area round" v-model="note1" style="overflow:hidden"  placeholder=""></textarea>
              
                <textarea class="txt-area round" v-model="note2" style="overflow:hidden"  placeholder=""></textarea>
               
                <textarea class="txt-area round" v-model="note3" style="overflow:hidden"  placeholder=""></textarea>
            </div>
                <button class="myButoon round"  @click.prevent="addKeep()" > add</button>
                <button class="myButoon round"  @click.prevent="saveKeeps()" > Save</button>
                <button  class="myButoon round" @click.prevent="loadKeeps()" > load</button>

                
         
        </section>
    `,

        data() {
            return {
                keeps = [],
                note1 : null,
                note2 : null,
                note3 : null,
            
        
            }
        },
        methods: {
            saveKeeps(){

               let  notes ={
                    keep1 : this.note1,
                    keep2 : this.note2,
                    keep3 : this.note3,
                }
                console.log('saveKeeps',notes)
                keepsService.saveAllKeeps(notes);
                
            },
            loadKeeps(){
                var keepsArr =keepsService.getKeepList()
               .then(keepsArr=>{
                console.log('Keeps from service in keep app after promis',keepsArr)
                this.note1=keepsArr[0].keep1;
                this.note2=keepsArr[0].keep2;
                this.note3=keepsArr[0].keep3;
               } )
         },
         addKeep(){

         }
    },
    components: {
 
    }
}