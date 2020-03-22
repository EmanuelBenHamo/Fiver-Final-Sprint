import brandService from "../../services/brand.service.js";

export default {
    state: {
        brands: []
    },
    mutations: {
        setBrands(state, { brands }) {
            state.brands = brands;
        },
    },
    getters: {
        brands(state) {
            return state.brands;
        },
    },
    actions: {
        async loadBrands(context) {
            const brands = await brandService.query()
            context.commit({ type: 'setBrands', brands })
        },
        async addBrand(context, { brand }) {
            var user = await brandService.add(brand);
            context.dispatch({
                type: 'signup',
                user
            })
            console.log("brand has been saved!", user);
            return user;
        },
        getEmptybrand() {
            return brandService.getEmptybrand();
        },
        getbrandById(context, { brandId }) {
            return brandService.getById(brandId)
        }
    },
    modules: {}
};