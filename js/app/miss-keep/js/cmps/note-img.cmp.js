export default {
    template: `
  
     <div  class=" ">            
          
                
                  <div contenteditable="true" >  
                        <img  class="image round "  src="https://www.coding-academy.org/books-photos/8.jpg"  width="200" height="200">
                 </div>
                                         
                             <button class="delet-Butoon round"   >Save </button>
                             <button class="delet-Butoon round"  @click.prevent="deleteKeep()"> Delet</button>
                 </div>
                </div>
             
           </div>
   
    `,
  props: ['info'],
    data() {
        return {

       

        }
    },
    created() {

    
    },
    methods: {
    
       
        deleteKeep(){
            console.log('delete index in son note-img',this.info.index)
            this.$emit("deletNote", this.info.index);
        }
     

    },
    computed: {

    },




}
