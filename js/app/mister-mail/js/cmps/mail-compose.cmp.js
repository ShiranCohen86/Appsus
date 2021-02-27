
import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="compose-container">
            <form class="mail-submit">
                <input type=text placeholder="Subject" v-model="mail.subject"/>
                <router-link to="/mister-mail" @click.native.prevent="addMail">Send Mail</router-link>
            </form> 
        </section>
    `,
    data() {
        return {
            mail: {},
        }
    },
    methods: {
        newMail() {
            return {
                id: '0',
                subject: '',
                body: '',
                isRead: false,
                sentAt: ''
            }
        },
        addMail() {
            eventBus.$emit('addMail', this.mail);
            eventBus.$emit('reloadMails');
            this.mail = this.newMail();

        },
    },
    created() {
        this.newMail();
    },
}