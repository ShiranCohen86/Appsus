// import mailHeader from '../cmps/mail-header.cmp.js'
// import mailSideMenu from '../cmps/mail-side-menu.cmp.js'
import { mailService } from '../services/mail.service.js'
import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
    <section v-if="mail" class="mail-details-page">
        <!-- <mail-header />
        <mail-side-menu /> -->
        <!-- <button @click="remove(mail.id)">x</button> -->
        <router-link to="/mister-mail" @click.native="remove(mail.id)">Delete Mail</router-link>
        <section class="mail-details">
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
        loadDetails() {
            const id = this.$route.params.mailId
            mailService.getById(id)
                .then(mail => {
                    this.mail = mail
                    console.log(mail);
                })
            },
    },
    created() {
        this.loadDetails();
    },
    // components: {
    //     mailHeader,
    //     mailSideMenu,
    // }
}
