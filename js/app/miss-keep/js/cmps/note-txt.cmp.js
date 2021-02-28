export default {
     template: `
          <div  class=" flex justify-content-center align-items-center ">            
                          
                <!-- <div  class=" " v-for="keep in keepsArrDb"  > -->
                <textarea class="note-txt round"   v-model="txt" :style="styleObject"></textarea>
                <div  class="Notes-Variations-buttons-container flex ">
                    <!-- <button class="delet-Butoon round"  @click.prevent="saveKeeps()" > Save</button> -->
                    <input class="txtcol delet-Butoon round" placeholder="xxxxxx" type="color" id="stroke-color" name="colorTxt" form="test" @change="updateFontColor( $event)" /> 
                    <input class="txtcol delet-Butoon round"  type="color" id="stroke-color" name="colorTxt" form="test" @change="updateEditorColor( $event)" /> 
                    <button  class="delet-Butoon round" @click.prevent="deleteKeep()" > Delete</button>
                </div>
                </div>
             
           </div>
     `,
  props: ['info'],
    data() {
        return {

            txt :  null,
            styleObject: {
                color: '1d1b1b',
                fontSize: '30px',
                backgroundColor:'#b4d9bb', 
              },

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




    // <router-link :to="/book/+book.id" class="image"> <img  :src = this.book.img alt=""/> </router-link>

}
