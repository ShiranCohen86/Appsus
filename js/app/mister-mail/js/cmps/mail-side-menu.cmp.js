import mailCompose from '../cmps/mail-compose.cmp.js'

export default {
    template: `
   <section class="mail-side-menu">
        <button @click="isCompose = !isCompose" class="compose-btn"> 
          <img src="css/apps/mister-mail/img/plus-sign.png">
          Compose
        </button>
        <mail-compose v-if="isCompose" />
    </section>`
    ,
    data() {
        return {
            isCompose: false
        }
    },
    components:{
        mailCompose
    }
}
