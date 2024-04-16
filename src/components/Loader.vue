<template>
    <div class="loading_box">
        <div class="ripple"></div>
        <div class="loader">
            <img src="@/assets/images/logo.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.loading_box {
    overflow: hidden;
    width: 100%;
    position: relative;
}

.ripple {
    position: absolute;
    top: 0;
    left: 15%;
    width: 70%;
    height: 100%;
    border-radius: 50%;
    background-color: #4793FF;
    border: 3px solid #4793FF;
    animation: ripple 2s infinite ease-in-out;
}

.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 4;
    animation: heartbeat 1s infinite alternate;

    & img {
        width: 100px;
        height: 100px;
    }
}

@keyframes heartbeat {
    0% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}


@keyframes ripple {
    0% {
        transform: scale(0);
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}
</style>