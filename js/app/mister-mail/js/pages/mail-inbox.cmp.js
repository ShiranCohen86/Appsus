import { eventBus } from '../services/event-bus-service.js';
import { bookService } from '../services/book-service.js';

export default {
    props: ['books'],
    template: `
    <ul class="gallery-books">
        <li v-for="book in books" :key="book.id" class="book-card">
            <book-preview :book="book" />
            <router-link :to="'/book/'+book.id">Details</router-link>
            <button @click="remove(book.id)">x</button>
        </li>
    </ul>
    `,
    methods: {
        select(book) {
            this.$emit('selected', book)
        },
        remove(bookId) {
            bookService.remove(bookId)
                .then(book => {
                    const msg = {
                        txt: 'Book removed successfully',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    eventBus.$emit('reloadBooks');
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
    },
    components: {
        bookPreview
    }
}
