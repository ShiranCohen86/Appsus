export default {
    template: `
        <form @submit.prevent="setFilter" class="mail-filter">
            <select class="email-filter" v-model="filterBy.msgStatus">
                <option value="all">All</option>
                <option value="read">Read</option> 
                <option value="unread">Unread</option>
            </select>
            <select class="email-sort" v-model="filterBy.sort">
                <option value="" disabled selected>Sort</option>
                <option value="subject">By subject</option>
                <option value="date">By date</option>
            </select>
            <input type="search" @input="setFilter" placeholder="Search Email..." v-model="filterBy.txt">
        </form>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                msgStatus: 0,
                sort: '',
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    },

}
