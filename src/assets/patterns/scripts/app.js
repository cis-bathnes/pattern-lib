/**
 * Toolkit JavaScript
 */

// check jquery
if (typeof jQuery === 'undefined') {
  console.log('jQuery is NOT available');
} else {
  console.log('jQuery is available');
}

// For some reason Webpack is commenting the imports out.
import 'menu.js';

import '../../../../govuk_elements/assets/javascripts/application';


