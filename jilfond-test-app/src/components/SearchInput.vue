<template>
    <div class="search">
        <h2>Поиск сотрудников</h2>
        <input type="text" v-model="query" @input="onInput"  placeholder="Введите id или имя">
    </div>
</template>

<script>
    export default {
        name: 'SearchInput',
        props: ['searchQuery'],
        data() {
            return {
            query: this.searchQuery,
            };
        },
        watch: {
            searchQuery(newQuery) {
            this.query = newQuery;
            },
        },
        methods: {
            onInput() {
            this.$emit('update:searchQuery', this.query);
            },
        },
    };
</script>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';

    .search{
        margin-bottom: 29px;

        h2{
            color: $headers-color;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 14px;
        }
        
        input[type='text']{
            width: 100%;
            padding: 16px 24px;
            border: 1.5px solid $input-border-color;
            @include border-radius(8px);
        }
    }
</style>