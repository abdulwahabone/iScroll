webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".main_h {\r\n  position: fixed;\r\n  top: 0px;\r\n  height: 60px;\r\n  z-index: 999;\r\n  width: 100%;\r\n  padding-top: 17px;\r\n  background: none;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n  opacity: 0;\r\n  top: -100px;\r\n  padding-bottom: 6px;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .main_h {\r\n    padding-top: 25px;\r\n  }\r\n}\r\n\r\n#loader {\r\n    margin: 0 auto;\r\n width: 40px;\r\nheight: 30px;\r\nmargin-top: 40px;\r\nmargin-bottom: 40px;\r\ndisplay: block;\r\n}\r\n\r\n.open-nav {\r\n  height: 220px;\r\n}\r\n.open-nav .mobile-toggle {\r\n  transform: rotate(-90deg);\r\n  -webkit-transform: rotate(-90deg);\r\n}\r\n\r\nnav[_ngcontent-c0] ul[_ngcontent-c0] {\r\n    margin-top:0px;\r\n}\r\n\r\nnav[_ngcontent-c0][_ngcontent-c0] ul[_ngcontent-c0][_ngcontent-c0] {\r\n    padding-left:0px;\r\n}\r\n\r\n.sticky {\r\n  background-color: rgba(255, 255, 255, 0.93);\r\n  opacity: 1;\r\n  top: 0px;\r\n  border-bottom: 1px solid gainsboro;\r\n}\r\n\r\n.logo > p {\r\n  width: 50px;\r\n  font-size: 25px;\r\n  color: #8f8f8f;\r\n  float: left;\r\n  display: block;\r\n  margin-top: 0;\r\n  line-height: 1;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n.logo[_ngcontent-c0]    > p[_ngcontent-c0] {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n@media only screen and (max-width: 766px) {\r\n  .logo > p {\r\n    float: none;\r\n  }\r\n}\r\n\r\n.logo > p::first-letter {\r\n   color : #cf0000;\r\n}\r\n\r\nnav {\r\n  float: right;\r\n  width: 60%;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav {\r\n    width: 100%;\r\n  }\r\n}\r\nnav ul {\r\n  list-style: none;\r\n  overflow: hidden;\r\n  text-align: right;\r\n  float: right;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav ul {\r\n    padding-top: 10px;\r\n    margin-bottom: 22px;\r\n    float: left;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n}\r\nnav ul li {\r\n  display: inline-block;\r\n  margin-left: 35px;\r\n  line-height: 1.5;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  nav ul li {\r\n    width: 100%;\r\n    padding: 7px 0;\r\n    margin: 0;\r\n  }\r\n}\r\nnav ul a {\r\n  color: #888888;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n}\r\n\r\n.mobile-toggle {\r\n  display: none;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  right: 22px;\r\n  top: 0;\r\n  width: 30px;\r\n  transition: all 200ms ease-in;\r\n}\r\n@media only screen and (max-width: 766px) {\r\n  .mobile-toggle {\r\n    display: block;\r\n  }\r\n}\r\n.mobile-toggle span {\r\n  width: 30px;\r\n  height: 4px;\r\n  margin-bottom: 6px;\r\n  border-radius: 1000px;\r\n  background: #8f8f8f;\r\n  display: block;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  max-width: 940px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  padding: 0 2%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  color: #8f8f8f;\r\n  background: white;\r\n  font-family: \"Cardo\", serif;\r\n  font-weight: 300;\r\n  -webkit-font-smoothing: antialiased;\r\n   margin: 0px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  line-height: 1.8;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\np {\r\n  margin-bottom: 20px;\r\n  font-size: 17px;\r\n  line-height: 2;\r\n}\r\n\r\n.content {\r\n  padding: 50px 0% 250px;\r\n}\r\n\r\n.hero {\r\n  position: relative;\r\n  background: url(https://ucarecdn.com/867af920-6da7-4111-98ab-373ed52230e1/andrewly152153.jpg) no-repeat center center fixed;\r\n  background-size: cover;\r\n  text-align: center;\r\n  color: #fff;\r\n  padding-top: 110px;\r\n  min-height: 100vh;\r\n  letter-spacing: 1.5px;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n.hero h1 {\r\n  font-size: 80px;\r\n  line-height: 0.7;\r\n  text-transform:none;\r\n\r\n}\r\n\r\n.hero[_ngcontent-c0]   h1[_ngcontent-c0]{\r\n      padding-top: 50px;\r\n}\r\n\r\n.hero[_ngcontent-c0]   h1[_ngcontent-c0]::first-letter{\r\n      color:#ffffff;\r\n}\r\n\r\n.hero h1{\r\n  color:#cf0000;\r\n}\r\n\r\n.hero h1 span {\r\n  font-size: 25px;\r\n  color: #ffffff;\r\n  border-bottom: 2px solid white;\r\n  padding-bottom: 12px;\r\n  line-height: 3;\r\n}\r\n\r\n.mouse {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 26px;\r\n  height: 46px;\r\n  border-radius: 13px;\r\n  border: 2px solid #cf0000;\r\n  position: absolute;\r\n  bottom: 40px;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -26px;\r\n}\r\n.mouse span {\r\n  display: block;\r\n  margin: 6px auto;\r\n  width: 2px;\r\n  height: 2px;\r\n  border-radius: 4px;\r\n  background: #cf0000;\r\n  border: 1px solid transparent;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-name: scroll;\r\n  animation-name: scroll;\r\n}\r\n\r\n@-webkit-keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n@keyframes scroll {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n\r\n.example-card {\r\n  width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('http://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n#main-content {\r\n    height: auto;\r\n    position: relative;\r\n}\r\n\r\n.example-card[_ngcontent-c0] {\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top:20px;\r\n    padding: 10px;\r\n    position: relative;\r\n    width: 50%;\r\n}\r\n\r\n.mat-card-image {\r\n    border-radius: 10px;\r\n    width:100%;\r\n    margin:0 auto;\r\n}\r\n\r\n.mat-card-content > :first-child, .mat-card > :first-child {\r\n    position: absolute;\r\n    margin: 2vw 2vw;\r\n}\r\n\r\n.mat-card-avatar {\r\n    height: 6vw;\r\n    width: 6vw;\r\n    border-radius: 50%;\r\n    -ms-flex-negative: 0;\r\n        flex-shrink: 0;\r\n    border: 10px blue;\r\n    border: 0.3vw solid #5752524d;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .mat-card-avatar {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    -ms-flex-negative: 0;\r\n        flex-shrink: 0;\r\n    border: 10px blue;\r\n    border: 0.3vw solid #57525d;\r\n    margin: 15px 15px;\r\n}\r\n  .example-card[_ngcontent-c0] {\r\n  width:90vw;\r\n}\r\n\r\n  .mat-card-image {\r\n    border-radius: 10px;\r\n      width:100%;\r\n    margin:0 auto;\r\n}\r\n\r\n  .example-card[_ngcontent-c0] {\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top:20px;\r\n    padding: 10px;\r\n    position: relative;\r\n    width: auto;\r\n  \r\n}\r\n\r\n}\r\n\r\n.example-selected-value {\n  margin: 15px 0;\n}\n\n.example-button-row {\r\n    margin: 0 auto;\r\nmargin-top: -45px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width:178px;\r\n}\n\n.mat-card {\r\n    border-radius: 10px;\r\n}\n\n.mat-card:not([class*=\"mat-elevation-z\"]) {\r\nbox-shadow: 3px 7px 27px -9px rgba(0,0,0,0.6);\r\n}\r\n\r\n.mat-fab:hover, .mat-fab:active, .mat-fab:focus  {\r\n    bottom:10px;\r\n}\r\n\r\n/* SPINNER-process */\r\n \r\n.progressSpinner {\r\n \r\n   margin: 0 auto;\r\n   margin-top: 20px; \r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #FFF;\r\n  border: 3px solid #007AC9;\r\n  border-radius: 50%;\r\n  border-right-color: transparent;\r\n  -webkit-animation: spin .6s infinite linear;\r\n          animation: spin .6s infinite linear;\r\n\r\n}\r\n  \r\n  @-webkit-keyframes spin { \r\n  100% { \r\n    -webkit-transform: rotate(360deg); \r\n            transform: rotate(360deg); \r\n  } \r\n}\r\n  \r\n  @keyframes spin { \r\n  100% { \r\n    -webkit-transform: rotate(360deg); \r\n            transform: rotate(360deg); \r\n  } \r\n} \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header id='head' class=\"main_h\">\r\n\r\n    <div class=\"row\">\r\n        <a class=\"logo\" href=\"#\"><p>iScroll</p></a>\r\n\r\n        <div id='mob' class=\"mobile-toggle\" onclick=\"fire()\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n\r\n        <nav>\r\n            <ul>\r\n                <li><a href=\"\">Sign UP</a></li>\r\n                <li><a href=\"\">Upload Images</a></li>\r\n                <li><a href=\"\">Contact us</a></li>\r\n                <li><a href=\"\">FAQ</a></li>\r\n            </ul>\r\n        </nav>\r\n\r\n    </div> <!-- / row -->\r\n\r\n</header>\r\n\r\n<div class=\"hero\">\r\n\r\n    <h1>iScroll<br><span>Scroll Images Forever</span></h1>\r\n\r\n    <div class=\"mouse\">\r\n        <span></span>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div id=\"main-content\">\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' onload=\"rimg()\" src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg'  src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg'  src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n    <mat-card id=\"card\" class=\"example-card container\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n    <mat-card id=\"card\" class=\"example-card\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n        </mat-card-header>\r\n        <img mat-card-image value='0' id='gimg' src=\"http://www.hannovermesse.de/files/001-fs5/media/funktionale-medien/bilder/loader.gif\" alt=\"Photo of a Shiba Inu\">\r\n        <div class=\"example-button-row\">\r\n\r\n            <button mat-fab>\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"primary\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">insert_comment</mat-icon>\r\n            </button>\r\n            <button mat-fab color=\"accent\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">share</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"progressSpinner\"></div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export PizzaPartyAppModule */
/* unused harmony export MyOwnCustomMaterialModule */
/* unused harmony export matButtonToggleGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

var PizzaPartyAppModule = (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());

var MyOwnCustomMaterialModule = (function () {
    function MyOwnCustomMaterialModule() {
    }
    return MyOwnCustomMaterialModule;
}());

var matButtonToggleGroup = (function () {
    function matButtonToggleGroup() {
    }
    return matButtonToggleGroup;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map