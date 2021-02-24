import {keepsService} from  '../services/miss-keep.service.js';

// @import url("./apps/miss-keep/miss-keep.main.css");

export default {
    template: `
        <section class="keep-app flex justify-content-center align-items-center">
            <div >
                <h1>Keep App</h1>
                <span>Multiline message is:</span>
                <!-- <p style="white-space: pre-line;">{{ note1 }}</p> -->
                <br>
                <textarea v-model="note1 " placeholder=""></textarea>
                <!-- <p style="white-space: pre-line;">{{ note2 }}</p> -->
                <br>
                <textarea v-model="note2" placeholder=""></textarea>
                <!-- <p style="white-space: pre-line;">{{ note3 }}</p> -->
                <br>
                <textarea v-model="note3" placeholder=""></textarea>
                <button   @click.prevent="saveKeeps()" > Save</button>
                <button   @click.prevent="loadKeeps()" > load</button>
         
           </div>
        </section>
    `,

        data() {
            return {
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
         }
    },
    components: {
 
    }
}