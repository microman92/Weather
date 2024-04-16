<template>

    <div class="main__week_item">

        <div class="main__week_item-title">{{ day.dt == daily[0].dt ? 'Сегодня' :
            day.dt == daily[1].dt ? 'Завтра' :
                getWeekDay }}</div>

        <p class="main__week_item-date">{{ getDay }} {{ getMounth }}</p>

        <div class="main__week_item-img">
            <img :src="getImg" alt="">
        </div>


        <p class="main__week_item-temp">+ {{ Math.round(day.temp.max) }}°</p>
        <p class="main__week_item-info">{{ description }}</p>
    </div>
</template>

<script>
import { weatherName } from '@/icons'

import unix from '@/unix'

export default {
    props: {
        day: {
            typeof: Object,
        },
        daily: {
            typeof: Array
        }
    },
    computed: {
        description() {
            return this.day.weather[0].description
        },
        getImg() {
            return weatherName[this.description] || weatherName['ясно']
        },

        getDay() {
            return unix(this.day.dt, 'day')
        },
        getMounth() {
            return unix(this.day.dt, 'mounth')
        },
        getWeekDay() {
            return unix(this.day.dt, 'weekDay')
        },
    },

    created() {
        console.log(this.daily[0]);
    }
}
</script>
