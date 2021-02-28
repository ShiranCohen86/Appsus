export default {
    props: ['txt'],
    template: `
        <section class="long-text">
            <p> - {{ getDescription }}</p>
        </section>
    `,
    computed: {
        getDescription() {
            return this.txt.length <= 20 ? this.txt : `${this.txt.substr(0, 20)}...`
        },
    }
}