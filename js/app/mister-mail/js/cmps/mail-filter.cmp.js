export default {
    template: `
        <form @submit.prevent="setFilter" class="mail-filter">
            <input type="search" @input="setFilter" placeholder="Search Email..." v-model="filterBy.txt">
            <select className="email-filter" v-model="filterBy.msgStatus">
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
            <select className="email-sort" v-model="filterBy.sort">
                <option value="subject">By subject</option>
                <option value="date">By date</option>
            </select>
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
