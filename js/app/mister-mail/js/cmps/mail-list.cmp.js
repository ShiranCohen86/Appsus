import { eventBus } from '../services/event-bus-service.js';
import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
    // props: ['mails'],
    template: `
    <ul class="gallery-mails">
        <li v-for="mail in mails" :key="mail.id" class="mail-card">
            <mail-preview :mail="mail" />
            <!-- <button @click="remove(mail.id)">x</button> -->
            <router-link to="/mister-mail/inbox" @click.native="remove(mail.id)">Delete Mail</router-link>
            <router-link :to="'/mister-mail/'+mail.id">Mail Details</router-link>
        </li>
    </ul>
    `,
    data() {
        return {
            mails: [],
        }
    },
    methods: {
        getMails(mails) {
            this.mails = mails
        },
        remove(mailId) {
            eventBus.$emit('deleteMail', mailId)
        }
    },
    created() {
        eventBus.$on('getEmails', this.getMails);
    },
    components: {
        mailPreview
    }
}
