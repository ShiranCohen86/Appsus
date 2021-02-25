import { eventBus } from '../services/event-bus-service.js';
import { mailService } from '../services/mail.service.js'
import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
    // props: ['mails'],
    template: `
    <ul class="gallery-mails">
        <li v-for="mail in mails" :key="mail.id" class="mail-card">
            <mail-preview :mail="mail" />
            <button @click="remove(mail.id)">x</button>
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
        remove(mailId) {
            mailService.remove(mailId)
                .then(() => {
                    const msg = {
                        txt: 'mail removed successfully',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    eventBus.$emit('reloadMails');
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg)
                })
        },
        getMails(mails){
            console.log('Mails',mails);
            
           
        }
    },
    created() {
        eventBus.$on('getMails', this.getMails);
    },
    components: {
        mailPreview
    }
}
