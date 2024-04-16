<template>

    <div class="main__week">

        <Day v-for="(day, i) in weather.daily" :key="i" :day="day" :daily="weather.daily"/>
    </div>
</template>

<script>

import Day from './Day.vue';
import { mapState } from 'vuex';


export default {
    components: {
        Day
    },

    computed: {
        ...mapState(['weather'])
    }



}
</script>
