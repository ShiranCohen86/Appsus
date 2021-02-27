import mailCompose from '../cmps/mail-compose.cmp.js'

export default {
    template: `
   <section class="mail-side-menu">
        <button @click="isCompose = !isCompose" class="compose-btn"> 
          <img src="css/apps/mister-mail/img/plus-sign.png">
          <p>Compose</p>
        </button>
        <button @click="" class="inbox-btn"> 
            <img src="css/apps/mister-mail/img/inbox.png">
            <p>Inbox</p>
            <p>{{isCompose}}</p>
        </button>
        <button @click="" class="star-btn"> 
            <img class="star-logo" src="css/apps/mister-mail/img/star.png">
            <p>Starred</p>
            <p>{{isCompose}}</p>
        </button>
        <button @click="" class="sent-btn"> 
            <img class="sent-logo" src="css/apps/mister-mail/img/sent.png">
            <p>Sent</p>
            <p>{{isCompose}}</p>
        </button>
        <mail-compose v-if="isCompose" />
    </section>`
    ,
    data() {
        return {
            isCompose: false
        }
    },
    components: {
        mailCompose
    }
}
