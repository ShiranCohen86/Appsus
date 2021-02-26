
export default {
    template: `
   <footer class="mail-side-menu">
        <button @click="openCompose">Compose</button>
    </footer>`
    ,
    data(){
        return{
            isCompose :true
        }
    },
    methods: {
        openCompose(){
            this.$emit('compose', this.isCompose)
        }
    },
}
