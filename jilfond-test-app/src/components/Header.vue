<script>
    export default {
        name: 'Header',
    };
</script>

<template>
    <header class="header">
        <a href="https://jilfond.ru/" class="logo">ЖИЛФОНД</a>
        <a href="#" class="user">Пользователь</a>
    </header>
</template>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px 0 26px 0;

        a{
            text-decoration: none;

            &.logo{
                color: $brand-color;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 32px;
            }

            &.user{
                color: $headers-color;
            }
        }
        
    }
</style>