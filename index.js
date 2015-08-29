module.exports = function () {
   return function ($) {
      $('img:not([alt])').each(function () {
         $(this).attr('alt', '');
      });
   };
};
