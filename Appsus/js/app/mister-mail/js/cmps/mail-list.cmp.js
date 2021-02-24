import { eventBus } from '../services/event-bus-service.js';
import {mailService} from '../services/mail-service.js';

export default {
    props: ['mails'],
    template: `
    <ul class="gallery-mails">
        <li v-for="mail in mails" :key="mail.id" class="mail-card">
            <mail-preview :mail="mail" />
            <button @click="remove(mail.id)">x</button>
        </li>
    </ul>
    `,
    methods: {
        select(mail) {
            this.$emit('selected', mail)
        },
        remove(mailId) {
            mailService.remove(mailId)
                .then(mail => {
                    const msg = {
                        txt: 'mail removed successfully',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    eventBus.$emit('reloadMails');
                })
                .catch(err =>{
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg)
                })
        },
    },
    components: {
        mailPreview
    }
}
