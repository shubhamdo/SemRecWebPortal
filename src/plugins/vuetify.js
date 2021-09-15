import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#475B61',
    success: '#3cd1c2',
    info: '#ffaa2c',
    error: '#f83e70'

  }
})
// Vue.use(Vuetify);
// import '@fortawesome/fontawesome-free/css/all.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

// export default new Vuetify({
//   icons: {
//       iconfont: 'md' || 'fa' 
//     },
//     theme: {
//       themes: {
//         primary: '#475B61',
//         success: '#3cd1c2',
//         info: '#ffaa2c',
//         error: '#f83e70',
//           light: {
//               background: colors.grey.lighten2, // Not automatically applied
//             },
//         dark: {
//           background: colors.shades.white, // If not using lighten/darken, use base to return hex
//         },
//       },
//     },
// });
