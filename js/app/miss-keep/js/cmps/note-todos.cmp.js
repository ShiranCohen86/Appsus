export default {
    props: ['keepsArrDb'],
    template: `
  
     <div  class="note-txt flex justify-content-center align-items-center ">            
          
                
                <div  class="grid-container " v-for="keep in keepsArrDb"  >
                             
                  <textarea class="note-todos round"   v-model="keep.info.txt" ></textarea>
                  <div >
                             <button class="delet-Butoon round"   >Save </button>
                             <button class="delet-Butoon round" > Delet</button>
                 </div>
                </div>
             
           </div>
   
    `,

    data() {
        return {

            keepsArr: [],

        }
    },
    created() {

         this.loadData()
        console.log('load from note-txt')
            // .then(x => {

            //     console.log('keepsArrDb in note-txttttttttttt', this.keepsArrDb)
            //     this.keepsArr = this.keepsArrDb;

            // })
    },
    methods: {
        loadData(){
          ///  this.keepsArrDb
       //     .then(x=>{

           //     console.log('mmmmmmmmmmmmm',x)
           // })
           // var arrDB =this.keepsArrDb;
        console.log('aaaaaaaaaaaaaaaaaaa',this.keepsArrDb )
           //.then(x=>{

            //   console.log('this.keepsArrDbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb;',x)
        //   })
            // var arrDB =this.keepsArrDb;
            //.then(z => {
             //   console.log('zzzzzzzzzz',z)

        //   })
        },
        addKeep() {


        },
        // },
        // saveKeeps() {

        //     //    let  notes ={
        //     //         keep1 : this.note1,
        //     //         keep2 : this.note2,
        //     //         keep3 : this.note3,
        //     //     }
        //     //     keeps.push(note1)
        //     // this.keepsArr.forEach(element => {
        //     //     keepsArr
        //     // });
        //     this.keepsArr[0] = this.keep1;
        //     this.keepsArr[1] = this.keep2;
        //     this.keepsArr[2] = this.keep3;

        //     console.log('save button clicked to save Keeps', this.keepsArr)
        //     keepsService.saveAllKeeps(this.keepsArr);

        // },
        // loadKeeps() {
        //     var keepsArr = keepsService.getKeepList()
        //         .then(DBkeepsArr => {
        //             console.log('Keeps from service in keep app after promis', DBkeepsArr)
        //             this.keep1 = DBkeepsArr[0][0];
        //             this.keep2 = DBkeepsArr[0][1];
        //             this.keep3 = DBkeepsArr[0][2];
        //         })
        // },
        addKeep() {
            //  let newKeep ,
            // this.keepsArr.push(newKeep);

        }

    },
    computed: {

    },




    // <router-link :to="/book/+book.id" class="image"> <img  :src = this.book.img alt=""/> </router-link>

}
