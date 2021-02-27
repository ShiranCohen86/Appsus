export default {
    props: ['keepsArrDb'],
    template: `
          <div  class=" flex justify-content-center align-items-center ">            
                          
                <!-- <div  class=" " v-for="keep in keepsArrDb"  > -->
                <textarea class="note-txt round"   v-model="txt" ></textarea>
                <button class="delet-Butoon round"  @click.prevent="saveKeeps()" > Save</button>
                <button  class="delet-Butoon round" @click.prevent="loadKeeps()" > load</button>
             
                </div>
             
           </div>
     `,

    data() {
        return {

            txt :  null,

        }
    },
    created() {

     
    },
    methods: {
 




    },
    computed: {

    },




    // <router-link :to="/book/+book.id" class="image"> <img  :src = this.book.img alt=""/> </router-link>

}
