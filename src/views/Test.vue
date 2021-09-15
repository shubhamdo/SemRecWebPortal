<template>
  <div>
    <div>{{this.userId}}</div>
    <button @click="login()">Login as Nick</button>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'app',
        computed: mapState({
            userId: state => state.account.userId
        }),
        methods: {
            login() {
                this.$store.commit('login', 'Nick')
            },
            logout() {
                this.$store.commit('logout')
            }
        },
    }
</script>