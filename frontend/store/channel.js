import moment from 'moment';
import ru from 'moment/dist/locale/ru';

moment.locale('ru');

export default {
    namespaced: true,
    state() {
        return {
            posts: [],
            postLoading: false,
        };
    },
    getters: {
        posts: state => state.posts,
        postLoading: state => state.postLoading,
    },
    mutations: {
        SET_POST_LOADING(state, value) {
          state.postLoading = value;
        },
        CLEAR_POSTS(state) {
            state.posts = [];
        },
        ADD_POST_ITEM(state, payload) {
            state.posts.push(payload);
        },
    },
    actions: {
      async GET_POSTS({ commit }) {
          commit('SET_POST_LOADING', true);
          try {
              const xmlStr = await this.$axios.$get('/backend/parser.php', {
                  withCredentials: true,
              });
              const parser = new DOMParser();
              const doc = parser.parseFromString(xmlStr, "application/xml");
              const errorNode = doc.querySelector("parsererror");
              if (errorNode) {
                  console.log("error while parsing");
                  commit('SET_POST_LOADING', false);
              } else if (doc && doc.documentElement && typeof doc.documentElement.querySelectorAll === 'function') {
                  commit('CLEAR_POSTS');
                  const items = Array.from(doc.documentElement.querySelectorAll('item'));
                  items.forEach((item) => {
                      const itemContent = item.querySelector('description');
                      const itemLink = item.querySelector('link');
                      const itemClosure = item.querySelector('enclosure');
                      const itemDate = item.querySelector('pubDate');

                      const media = {
                          video: null,
                      };
                      if (itemClosure) {
                          const url = itemClosure.getAttribute('url');
                          const type = itemClosure.getAttribute('type');

                          if (typeof type === 'string' && typeof url === 'string') {
                              if (type.indexOf('image') > -1) {
                                  Object.defineProperty(media, 'image', {
                                      value: url, writable: true, enumerable: true, configurable: true,
                                  })
                              } else if (type.indexOf('video') > -1) {
                                  Object.defineProperty(media, 'video', {
                                      value: url, writable: true, enumerable: true, configurable: true,
                                  })
                              } else {
                                  console.log('undefined type: ', type);
                              }
                          }
                      }
                      if ((itemContent && itemContent.textContent) && (itemLink && itemLink.textContent) && (itemDate && itemDate.textContent)) {
                          const dateFormat = (date) => {
                              return moment(date).calendar({
                                  sameDay: '[Today]',
                                  nextDay: '[Tomorrow]',
                                  nextWeek: 'dddd',
                                  lastDay: '[Yesterday]',
                                  lastWeek: '[Last] dddd',
                                  sameElse: 'DD MMM YYYY'
                              });
                          };

                          const kitcut = ( text, limit) => {
                              text = text.trim();
                              if( text.length <= limit) return text;
                              text = text.slice( 0, limit); // тупо отрезать по лимиту
                              let lastSpace = text.lastIndexOf(" ");
                              if( lastSpace > 0) { // нашлась граница слов, ещё укорачиваем
                                  text = text.substr(0, lastSpace);
                              }
                              return text + '&hellip;';
                          }
                          const content = kitcut(String(itemContent.textContent), 500);

                          commit('ADD_POST_ITEM', {
                              content,
                              link: itemLink.textContent,
                              date: dateFormat(itemDate.textContent),
                              media
                          });
                      }
                  });
                  commit('SET_POST_LOADING', true);
              }
          } catch (error) {
              console.log(error);
              commit('SET_POST_LOADING', false);
          }
      },
    },
}