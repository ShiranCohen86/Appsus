
import { myRouter } from './routes.js'




const options = {
    el: '#app',
    router : myRouter,
    template:`
        <section >
             <apsus-header />
             <router-view />
             <footer><p> &copy; Coffeerights 2021</p></footer>
        </section>
     `,
      
    data() {
        return {
      
        }
    },


    created() {
        console.log('On Load Main !!');

    },
    methods: {
        foo(){
             console.log('gfdg')
        }
    },
    computed: {
 
    },
    components:{
      bookHeader,
    }
}



new Vue(options)