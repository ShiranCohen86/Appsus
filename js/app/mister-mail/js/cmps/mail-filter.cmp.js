export default {
    template: `
        <form @submit.prevent="setFilter" class="mail-filter">
            <input type="search" @input="setFilter" placeholder="Search Email..." v-model="filterBy.txt">
        </form>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    },

}
