export default {
      template: `
  
     <div  class=" flex justify-content-center align-items-center ">            
          
<!--                 
                <div  class="grid-container " v-for="keep in keepsArrDb"  > -->
                  <!-- <textarea class="note-todos round"   v-model="keep.info.txt" ></textarea> -->

                  <textarea class="note-todos round"   v-model="txt"  :style="styleObject"></textarea>
                  <div >
                  <div  class="Notes-Variations-buttons-container flex ">
                             <!-- <button class="delet-Butoon round"   >Save </button> -->
                             <button class="delet-Butoon round" @click.prevent="deleteKeep()"> Delete</button>
                             <input class="txtcol delet-Butoon round"  type="color" id="stroke-color" name="colorTxt" form="test" @change="updateFontColor( $event)" /> 
                    <input class="txtcol delet-Butoon round"  type="color" id="stroke-color" name="colorTxt" form="test" @change="updateEditorColor( $event)" /> 
                 </div>
                </div>
             
           </div>
   
    `,
    props: ['info'],
    data() {
        return {
            txt :  null,
            keepsArr: [],
            styleObject: {
                color: '1d1b1b',
                fontSize: '30px',
                backgroundColor:'#9d7da1', 
              },

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
        },
        updateEditorColor( e) {
            console.log('this color2', e.target.value)
            this.styleObject.backgroundColor=e.target.value;
            // this.color.code = e.target.value;
            },
        updateFontColor( e) {
            console.log('this color2', e.target.value)
            this.styleObject.color=e.target.value;
            // this.color.code = e.target.value;
            },
        

    },
    computed: {

    },

}
