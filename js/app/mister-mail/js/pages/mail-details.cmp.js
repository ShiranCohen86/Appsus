import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
    <section v-if="mail" class="mail-details-page">

        <!-- <button @click="remove(mail.id)">x</button> -->
        <section class="mail-details">
            <router-link to="/mister-mail/inbox" @click.native="remove(mail.id)">Delete Mail</router-link>
            {{mail.body}} 
            {{mail.sentAt}} 
        </section>
    </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    methods: {
        remove(mailId) {
            eventBus.$emit('deleteMail', mailId)       
        },
        loadMailDetails(mail) {
            const id = this.$route.params.mailId
            this.mail = mail     
        },
    },
    created() {
        this.loadMailDetails();
        eventBus.on('mailById', loadMailDetails)
    },

}
