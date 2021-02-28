import mailCompose from '../cmps/mail-compose.cmp.js'
import { eventBus } from '../services/event-bus-service.js'
export default {
    props: ['mails'],
    template: `
   <section class="mail-side-menu">
        <button @click="isCompose = !isCompose" class="compose-btn"> 
          <img src="css/apps/mister-mail/img/plus-sign.png">
          <p>Compose</p>
        </button>
        <button @click="" class="inbox-btn"> 
            <img src="css/apps/mister-mail/img/inbox.png">
            <p>Inbox</p>
            <p>{{notReadCount}}</p>
        </button>
        <button @click="" class="star-btn"> 
            <img class="star-logo" src="css/apps/mister-mail/img/star.png">
            <p>Starred</p>
            <p>{{starCount}}</p>
        </button>
        <button @click="" class="sent-btn"> 
            <img class="sent-logo" src="css/apps/mister-mail/img/sent.png">
            <p>Sent</p>
           
        </button>
        <mail-compose v-if="isCompose" />
    </section>`
    ,
    data() {
        return {
            isCompose: false
        }
    },
    computed: {
        starCount() {
            let starCount = 0;
            this.mails.forEach(mail => {
                if (mail.isStarred) starCount++
            })
            eventBus.$emit('reloadMails');
            return starCount
        },
        notReadCount() {
            let notReadCount = 0;
            this.mails.forEach(mail => {
                if (!mail.isRead) notReadCount++
            })
            eventBus.$emit('reloadMails');
            return notReadCount
        },
    },
    components: {
        mailCompose,
        eventBus
    }
}
