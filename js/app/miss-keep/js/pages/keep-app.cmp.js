import {keepsService} from  '../services/miss-keep.service.js';

// @import url("./apps/miss-keep/miss-keep.main.css");

export default {
    template: `
        <section class="keep-app flex justify-content-center align-items-center ">
            <div  class="grid-container " >
             
                <textarea class="txt-area round" v-model="keep1" style="overflow:hidden"  placeholder=""></textarea>
              
                <textarea class="txt-area round" v-model="keep2" style="overflow:hidden"  placeholder=""></textarea>
               
                <textarea class="txt-area round" v-model="keep3" style="overflow:hidden"  placeholder=""></textarea>
            </div>
                <button class="myButoon round"  @click.prevent="addKeep()" > add</button>
                <button class="myButoon round"  @click.prevent="saveKeeps()" > Save</button>
                <button  class="myButoon round" @click.prevent="loadKeeps()" > load</button>

                
         
        </section>
    `,

        data() {
            return {
                keep1 : null,
                keep2 : null,
                keep3 : null,
                keepsArr  : [],
            
        
            }
        },
        created() {
            this.keepsArr[0]=this.keep1;
            this.keepsArr[1]=this.keep3;
            this.keepsArr[2]=this.keep3;
            console.log('On Load Main !!');
    
        },
        methods: {
            saveKeeps(){

            //    let  notes ={
            //         keep1 : this.note1,
            //         keep2 : this.note2,
            //         keep3 : this.note3,
            //     }
            //     keeps.push(note1)
            // this.keepsArr.forEach(element => {
            //     keepsArr
            // });
            this.keepsArr[0]=this.keep1;
            this.keepsArr[1]=this.keep2;
            this.keepsArr[2]=this.keep3;

                console.log('save button clicked to save Keeps',this.keepsArr)
                keepsService.saveAllKeeps(this.keepsArr);
                
            },
            loadKeeps(){
                var keepsArr =keepsService.getKeepList()
               .then(DBkeepsArr=>{
                console.log('Keeps from service in keep app after promis',DBkeepsArr)
                this.keep1=DBkeepsArr[0][0];
                this.keep2=DBkeepsArr[0][1];
                this.keep3=DBkeepsArr[0][2];
               } )
         },
         addKeep(){
             
         }
    },
    components: {
 
    }
}