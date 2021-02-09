Vue.component('filter-basket', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `
            <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch" placeholder="Введите наименование товара для поиска">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
});
