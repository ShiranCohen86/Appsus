
export default {
    template: `
   <footer class="mail-side-menu">
        <button @click="openCompose" class="compose-btn">     
          <img src="css/apps/mister-mail/img/plus-sign.png">
          Compose
        </button>
    </footer>`
    ,
    data() {
        return {
            isCompose: true
        }
    },
    methods: {
        openCompose() {
            this.$emit('compose', this.isCompose)
        }
    },
}
