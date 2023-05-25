export default {
    namespaced: true,
    state() {
        return {
            orderPopup: false,
            callbackPopup: false,
            mobileMenu: false,
        };
    },
    getters: {
        orderPopup: state => state.orderPopup,
        callbackPopup: state => state.callbackPopup,
        mobileMenu: state => state.mobileMenu,
    },
    mutations: {
        SET_ORDER_POPUP(state, value) {
            state.orderPopup = value;
        },
        SET_CALLBACK_POPUP(state, value) {
            state.callbackPopup = value;
        },
        SET_MOBILE_MENU(state, value) {
            if (value) {
                if (Array.from(document.body.classList).indexOf('overflow') === -1) {
                    document.body.classList.add('overflow');
                }
            } else if (Array.from(document.body.classList).indexOf('overflow') > -1) {
                document.body.classList.remove('overflow');
            }
            state.mobileMenu = value;
        }
    }
}