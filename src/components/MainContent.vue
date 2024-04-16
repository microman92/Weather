<template>
    <div class="main__content">
        <div class="main__content_left">
            <p class="main__content_left-degree">{{ Math.round(weather.current.temp) }}°</p>
            <p class="main__content_left-today">Сегодня <span>{{ description }}</span></p>
            <p class="main__content_left-time">Время: {{ getTime }}</p>
            <p class="main__content_left-city">Город: {{ weather.name }}</p>
            <div class="main__content_left-img">
                <img :src="getImg" alt="">
            </div>
        </div>

        <div class="main__content_right">
            <img src="@/assets/images/right_bg.svg" alt="" class="main__content_right-bg">
            <img src="@/assets/images/bigCloud.png" alt="" class="main__content_right-bg" v-show="cloud">

            <div class="main__content_right-item">
                <div class="main__content_right-item-icons">
                    <img src="@/assets/images/temp.svg" alt="">
                </div>
                <span>Температура</span>
                <p>{{ Math.round(weather.current.temp) }}° - ощущается как {{ Math.round(weather.current.feels_like) }}°
                </p>
            </div>

            <div class="main__content_right-item">
                <div class="main__content_right-item-icons">
                    <img src="@/assets/images/pressure.svg" alt="">
                </div>
                <span>Давление </span>
                <p>{{ weather.current.pressure }} мм ртутного столба - нормальное</p>
            </div>
            <div class="main__content_right-item">
                <div class="main__content_right-item-icons">
                    <img src="@/assets/images/precipitation.svg" alt="">
                </div>
                <span>Осадки</span>
                <p>{{ weather.current.clouds }} %</p>
            </div>
            <div class="main__content_right-item">
                <div class="main__content_right-item-icons">
                    <img src="@/assets/images/wind.svg" alt="">
                </div>
                <span>Ветер</span>
                <p>{{ weather.current.wind_speed }} м/с юго-запад - легкий ветер</p>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import { weatherName } from '@/icons'

export default {
    computed: {
        ...mapState(['weather', 'cloud']),
        description() {
            return this.weather.current.weather[0].description
        },
        getImg() {
            return weatherName[this.description] || weatherName['ясно']
        },
        getTime() {
            return new Date().toLocaleString('en-US', {
                timeZone: this.weather.timezone,
                timeStyle: 'short',
                hourCycle: 'h23'
            })
        },
    },

}
</script>
