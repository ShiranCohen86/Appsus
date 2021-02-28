import { eventBus } from '../services/event-bus-service.js'
import { mailService } from '../services/mail.service.js'


export default {
    template: `
           <section class="mail-details">
            <h2>{{mail.subject}}</h2>
            <p>{{mail.body}}</p>
            <p>Sent at: {{mail.sentAt}}</p> 
            <router-link to="/mister-mail" @click.native="deleteMail(mail.id)">Delete Mail</router-link>
        </section>
      `,
    data() {
        return {
            mail: '',
        }
    },
    methods: {
        deleteMail(mailId) {
            mailService.remove(mailId)
                .then(mail => {
                    const msg = {
                        txt: 'Mail removed successfully',
                        type: 'success'
                    }
                    // eventBus.$emit('show-msg', msg);
                    eventBus.$emit('reloadMails');
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    // eventBus.$emit('show-msg', msg)
                })
        },
        loadMailDetails() {
            const id = this.$route.params.mailId
            mailService.getById(id)
                .then(mail => this.mail = mail)
        },
    },
    created() {
        this.loadMailDetails();
        // eventBus.on('mailById', loadMailDetails)
    },
    component: {
        mailService
    },
    

}
