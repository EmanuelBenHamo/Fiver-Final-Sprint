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
            console.log(brands)
            context.commit({ type: 'setBrands', brands })
        },
        addbrand(context, { brand }) {
            var savedCampign = brandService.add(brand);
            console.log("brand has been saved!", savedCampign);
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