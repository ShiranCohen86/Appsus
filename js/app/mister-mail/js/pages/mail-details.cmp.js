import mailHeader from '../cmps/mail-header.cmp.js'
import mailSideMenu from '../cmps/mail-side-menu.cmp.js'
import longText from '../cmps/long-text.cmp.js'
import { mailService } from '../services/mail-service.js'
import mailReview from '../cmps/add-review.cmp.js'
import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
    <mail-header />
    <mail-side-menu />

    <section class="mail-details">
        
        
    </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    methods: {
        loadDetails() {
            const id = this.$route.params.mailId
            mailService.getById(id)
                .then(mail => this.mail = mail)
        },
        removeReview(reviewIdx) {
            this.mail.reviews.splice(reviewIdx, 1);
            mailService.save(this.mail)
                .then(() => {
                    this.loadDetails();
                    const msg = {
                        txt: `You Removed a review from ${this.mail.title} mail`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                });
        },
        addReview(review) {
            // Optimistic approach
            this.mail.reviews.push(review);
            mailService.save(this.mail)
                .then(() => {
                    const msg = {
                        txt: `You Add a review to ${this.mail.title} mail`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
                .catch(() => {
                    this.loadDetails();
                    // remove the review from the data
                })
        }
    },
    computed: {
        readingDuration() {
            if (this.mail.pageCount > 500) return 'Long reading (500+ pages)'
            if (this.mail.pageCount > 200) return 'Decent reading (200-500 pages)'
            if (this.mail.pageCount < 100) return 'Light reading (Less than 100 pages)'
        },
        publishedDate() {
            let txt = '';
            if (this.mail.publishedDate < 2011) txt = 'Veteran mail (more than 10 years)'
            if (this.mail.publishedDate > 2020) txt = 'NEW! (less than a year)'
            return this.mail.publishedDate + ', ' + txt;
        },
        priceColor() {
            return {
                'high-price': this.mail.listPrice.amount > 150,
                'low-price': this.mail.listPrice.amount < 20
            }
        },
        getCurrencyIcon() {
            return mailService.getCurrencySymbol(this.mail)
        }
    },
    created() {
        this.loadDetails();
    },
    // mounted() {
    //     const id = this.$route.params.bookId
    //     console.log(this.$route);
    //     bookService.getById(id)
    //         .then(book => this.book = book)
    // },
    components: {
        longText,
        mailReview,
        mailHeader,
        mailSideMenu

    }
}
