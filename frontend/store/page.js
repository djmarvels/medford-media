export default {
    namespaced: true,
    state() {
        return {
            orderPopup: false,
            callbackPopup: true,
        };
    },
    getters: {
        orderPopup: state => state.orderPopup,
        callbackPopup: state => state.callbackPopup,
    },
    mutations: {
        SET_ORDER_POPUP(state, value) {
            state.orderPopup = value;
        },
        SET_CALLBACK_POPUP(state, value) {
            state.callbackPopup = value;
        }
    }
}