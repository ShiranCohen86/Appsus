export default {
    template: `
        <form @submit.prevent="setFilter" class="book-filter">
            <label> Search a book: </label>    
            <input type="search" @input="setFilter" placeholder="Book name..." v-model="filterBy.byName">
            <input type="number" placeholder="max" v-model.number="filterBy.fromPrice">
            <input type="number" placeholder="max" v-model.number="filterBy.toPrice">
            <button>Search</button>
        </form>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    },

}
