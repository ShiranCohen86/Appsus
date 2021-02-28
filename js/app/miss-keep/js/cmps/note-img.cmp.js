export default {
    template: `
  
     <div  class=" ">            
          
                
                  <!-- <div contenteditable="true"  class="div-img-container">   -->
                     <div class="flex flex-direction-column" >
                         <img  class="image  "  :src="myImage" width="200" height="200">
                         <textarea class="note-txt-img "  :style="styleObject" v-model="txt" ></textarea>
                    </div>
                        <!-- </div> -->
                                         
                             <!-- <button class="delet-Butoon round"   >Save </button> -->
                             <button class="delet-Butoon round"  @click.prevent="deleteKeep()"> Delet</button>
                             <input class="txtcol delet-Butoon round"  type="color" id="stroke-color" name="colorTxt" form="test" @change="updateFontColor( $event)" /> 
                    <input class="txtcol delet-Butoon round"  type="color" id="stroke-color" name="colorTxt" form="test" @change="updateEditorColor( $event)" /> 
                    <input class="file-Butoon round"  type="file" accept="image/*" @change="uploadImage($event)" id="file-input">

                </div>
                </div>
             
           </div>
   
    `,
  props: ['info'],
    data() {
        return {
                txt :  null,
                myImage :  "img/finish.jpg",
                // myImage :  "js/app/miss-keep/js/cmps/keepImg/finish.jpg",
                // myImage : "https://www.coding-academy.org/books-photos/8.jpg",
                styleObject: {
                    color: '1d1b1b',
                    fontSize: '30px',
                    backgroundColor:'#8888af', 
              },

              path : 'img/'

        }
    },
    created() {
      
        // C:\Users\omero\Development\MyCodingAcademyClass\Sprint3\Appsus\js\app\miss-keep\keepImg\finish.jpg

        
    },
    mounted() {
        console.log('info on note-txtx component',this.info)
        this.txt=this.info.info.title   
     },
    methods: {
        uploadImage(e){
          

            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.myImage = e.target.result;
                console.log('somethinggg',this.previewImage);
            };
                  
                      
        },
       
        deleteKeep(){
            console.log('delete index in son note-img',this.info.index)
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
                // myImage(){
                //     return image
                // }
    },




}
