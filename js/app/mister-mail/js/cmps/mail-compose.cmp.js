
import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="compose-container">
            <form class="mail-submit round">
                
                <input class="round" type=text placeholder="Subject" v-model="mail.subject"/>
                <textarea class="test-sent-mail round" v-model="test" ></textarea>
                <!-- <div class="test-sent-mail round" contenteditable="true"   v-model="test">
                   </div> -->

                <router-link to="/mister-mail" @click.native.prevent="addMail">Send Mail</router-link>
            </form> 
        </section>
    `,
    data() {
        return {
            test:'',
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
            console.log('mail.body',this.test)
            eventBus.$emit('addMail', this.mail);
            eventBus.$emit('reloadMails');
            this.mail = this.newMail();

        },
    },
    created() {
        this.newMail();
    },
}