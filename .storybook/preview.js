import Vue from "vue";
import { addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '!style-loader!css-loader!sass-loader!../src/assets/scss/base.scss';
import '!style-loader!css-loader!sass-loader!../src/assets/scss/storybooks.scss';
import '!style-loader!css-loader!sass-loader!mere-css-utility/scss/utility/displays.scss';
import '!style-loader!css-loader!sass-loader!mere-css-utility/scss/utility/flexbox.scss';
import '!style-loader!css-loader!sass-loader!mere-css-utility/scss/utility/indents.scss';
import '!style-loader!css-loader!sass-loader!mere-css-utility/scss/utility/typography.scss';

library.add(faUserSecret, faTimes);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

addDecorator(withA11y);
