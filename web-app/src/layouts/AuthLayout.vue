<template>
    <div class="home-page">
        <div class="container">
            <div class="home-page__text">
                <h1 class="home-page__title">Своя игра в браузере</h1>
                <p class="home-page__description">Добро пожаловать в лучший симулятор популярной телевизионной игры-векторины "Своя игра". Тебя уже ждут сотни отборных паков на любые темы, создавай свои паки в удобном конструкторе. Чтобы начать пройди процесс авторизации.</p>
            </div>
            <div class="home-page__auth">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
.home-page {
    background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(3,7,121,1) 38%, rgba(73,4,147,1) 100%);
    min-height: 100vh;
}
.container {
    display: flex;
    justify-content: space-between;
    padding-top: 150px;
}
.home-page__text {
    width: 100%;
    max-width: 700px;
    position: relative;
    z-index: 1;
    &:after {
        content: '';
        width: 300px; height: 300px;
        background: url('./images/triagle.png') center center no-repeat;
        background-size: contain;
        position: absolute;
        left: 50%;
        transform: translateX(-70%);
        top: 70px;
        z-index: -1;
    }
}
.home-page__title {
    color: #fff;
    font-size: 3rem;
    margin-bottom: 1rem;
}
.home-page__description {
    font-size: 1.2rem;
}
.home-page__auth {
    max-width: 380px;
    width: 100%;
}
</style>