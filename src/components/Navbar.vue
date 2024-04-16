<template>
    <nav class="nav">
        <a href="#!" class="logo">
            <img src="@/assets/images/logo.svg" alt="">
            <span>vue weather</span>
        </a>
        <div class="nav__search">

            <img src="@/assets/images/drop.svg" alt="" @click="darkMode">

            <input v-model="city" type="text" placeholder="Введите город" @keydown.enter="getWeather(city), city = ''">

        </div>
    </nav>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            city: ''
        }
    },
    methods: {

        ...mapActions(['getWeather']),

        darkMode() {

            let value = document.body.style.getPropertyValue('--bg')
            if (value == 'white') {
                document.body.style.setProperty('--bg', '#5b5656')
                document.body.style.setProperty('--text', 'white')
                this.$store.state.cloud = true
            } else {
                document.body.style.setProperty('--bg', 'white')
                document.body.style.setProperty('--text', '5b5656')
                this.$store.state.cloud = false
            }
        }
    },
    created() {
        document.body.style.setProperty('--bg', 'white')
    }

}
</script>
