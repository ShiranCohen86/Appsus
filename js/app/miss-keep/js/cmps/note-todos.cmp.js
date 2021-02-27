export default {
      template: `
  
     <div  class=" flex justify-content-center align-items-center ">            
          
<!--                 
                <div  class="grid-container " v-for="keep in keepsArrDb"  > -->
                  <!-- <textarea class="note-todos round"   v-model="keep.info.txt" ></textarea> -->

                  <textarea class="note-todos round"   v-model="txt" ></textarea>
                  <div >
                             <button class="delet-Butoon round"   >Save </button>
                             <button class="delet-Butoon round" @click.prevent="deleteKeep()"> Delete</button>
                 </div>
                </div>
             
           </div>
   
    `,
    props: ['info'],
    data() {
        return {
            txt :  null,
            keepsArr: [],

        }
    },
    created() {

        
        console.log('load from note-txt')
     
    },
    mounted() {
        console.log('info on note-todos component',this.info)
        this.txt=this.info.info.todos[0].txt   
     },
    methods: {

        
        deleteKeep(){
            console.log('delete index in son note-todos',this.info.index)
            this.$emit("deletNote", this.info.index);
        }
        

    },
    computed: {

    },

}
