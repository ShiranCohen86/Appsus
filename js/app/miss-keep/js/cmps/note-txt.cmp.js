export default {
     template: `
          <div  class=" flex justify-content-center align-items-center ">            
                          
                <!-- <div  class=" " v-for="keep in keepsArrDb"  > -->
                <textarea class="note-txt round"   v-model="txt" ></textarea>
                <button class="delet-Butoon round"  @click.prevent="saveKeeps()" > Save</button>
                <button  class="delet-Butoon round" @click.prevent="deleteKeep()" > Delete</button>
             
                </div>
             
           </div>
     `,
  props: ['info'],
    data() {
        return {

            txt :  null,

        }
    },
    created() {
    //  this.txt=this.info
     
    },
    mounted() {
        console.log('info on note-txtx component',this.info)
        this.txt=this.info.info.txt   
     },
    methods: {
        deleteKeep(){
            console.log('delete index in the son txt ',this.info.index)
            this.$emit("deletNote", this.info.index);
        }




    },
    computed: {

    },




    // <router-link :to="/book/+book.id" class="image"> <img  :src = this.book.img alt=""/> </router-link>

}
