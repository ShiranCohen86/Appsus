
export default {
    template: `
        <section class="add-mail-container">
            <form class="mail-submit">
                <input type=text placeholder="Subject" v-model="review.subject"/>
               
                <button @click.prevent="addMail()">Add Mail</button>
            </form> 
        </section>
    `,
    data() {
        return {
            mail: {
                subject: '',
                text: '',
                rate: 0
            }
        }
    },
    methods: {
        newMail() {
            return {
                subject: '',
                text: '',
                rate: 5
            }
        },
        setRate(rate) {
            this.review.rate = rate;
        },
        addMail() {
            eventBus.$emit('newMail', this.mail);
            this.mail = this.newMail();
        },
    },
}