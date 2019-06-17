webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TwoPage = /** @class */ (function () {
    function TwoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TwoPage');
    };
    TwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-two',template:/*ion-inline-start:"C:\Users\Siva\Desktop\ionic\eagle\src\pages\two\two.html"*/'\n<ion-header>\n\n  <ion-navbar color=\'light\'>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <img src="../assets/new/mm.jpg"/>\n        <ion-card-content>\n          <ion-card-title>\n            Looking for a change v0.1\n            </ion-card-title>\n          <p>\n            App Developer: Siva\n            <br>\n            Mentor: keerthana\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Siva\Desktop\ionic\eagle\src\pages\two\two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TwoPage);
    return TwoPage;
}());

//# sourceMappingURL=two.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/one/one.module": [
		270,
		1
	],
	"../pages/two/two.module": [
		271,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__one_one__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__two_two__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.load = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__one_one__["a" /* OnePage */]);
    };
    HomePage.prototype.two = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__two_two__["a" /* TwoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Siva\Desktop\ionic\eagle\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color= \'primary\' >\n  \n    <ion-title>\n      Looking for a change\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n  \n  <br><br>\n  <ion-row>\n        <ion-col item-width="50" style="text-align: center">\n          <button ion-button color="danger" round outline (click)="load()" side="center">Quotes</button>\n        </ion-col>\n      </ion-row>\n<ion-row>\n      <ion-col item-width="50"  style="text-align: center">\n        <button ion-button color="danger" round outline  (click)="two()" side="center">About</button>\n      </ion-col>\n    </ion-row>\n\n  <ion-fab center middle>\n      <button ion-fab  ><ion-icon name="logo-facebook">\n        \n      </ion-icon>\n      </button>\n    </ion-fab>\n   \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Siva\Desktop\ionic\eagle\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_one_one__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_two_two__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_one_one__["a" /* OnePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_two_two__["a" /* TwoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/one/one.module#OnePageModule', name: 'OnePage', segment: 'one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/two/two.module#TwoPageModule', name: 'TwoPage', segment: 'two', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_one_one__["a" /* OnePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_two_two__["a" /* TwoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Siva\Desktop\ionic\eagle\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Siva\Desktop\ionic\eagle\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnePage = /** @class */ (function () {
    function OnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnePage');
    };
    OnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-one',template:/*ion-inline-start:"C:\Users\Siva\Desktop\ionic\eagle\src\pages\one\one.html"*/'<!--\n  Generated template for the OnePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Quotes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n        <img src="../assets/new/mom.jpg"/>\n        <ion-card-content>\n          <ion-card-title>\n            Mother Teresa\n            </ion-card-title>\n          <p>  <br>            "Peace begins with a smile.."\n            <br>  <br>\n\n            Spread love everywhere you go. Let no one ever come to you without leaving happier.\n\n            <br>  <br>\n            If we have no peace, it is because we have forgotten that we belong to each other.\n\n            <br>  <br>\n            There are no great things, only small things with great love. Happy are those.\n\n            <br>  <br>\n            If you judge people, you have no time to love them.\n            <br>  <br>\n\n            Let us always meet each other with smile, for the smile is the beginning of love.\n            <br>  <br>\n\n            I\'m a little pencil in the hand of a writing God, who is sending a love letter to the world.\n\n            <br>  <br>\n            Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n\n\n      <ion-card>\n        <img src="../assets/new/bb.jpg"/>\n        <ion-card-content>\n          <ion-card-title>\n            Gautama Buddha\n            </ion-card-title>\n          <p>\n            The mind is everything. What you think you become.\n            <br><br>\n            Three things cannot be long hidden: the sun, the moon, and the truth.\n            <br><br>\n            We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.\n            <br><br>\n            All that we are is the result of what we have thought.\n            <br><br>\n            You, yourself, as much as anybody in the entire universe, deserve your love and affection.\n            <br><br>    \n             Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\n            <br><br>   \n            Peace comes from within. Do not seek it without.\n            <br><br> \n           Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.\n           <br><br> \n           We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.\n          You only lose what you cling to.\n            \n          </p>\n        </ion-card-content>\n      </ion-card>\n\n\n\n      \n          <ion-card>\n              <img src="../assets/new/ab.jpg"/>\n              <ion-card-content>\n                <ion-card-title>\n                    Albert Einstein\n                  </ion-card-title>\n                <p>\n                    Imagination is more important than knowledge.\n                    <br><br>\n                    Life is like riding a bicycle. To keep your balance you must keep moving.\n                    <br><br>\n                    Look deep into nature, and then you will understand everything better.\n                    <br><br>\n                    I have no special talents. I am only passionately curious.\n                    <br><br>\n                    Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\n                    <br><br>\n                    Try not to become a man of success, but rather try to become a man of value.\n                    <br><br>\n                    The important thing is not to stop questioning. Curiosity has its own reason for existing.\n                    <br><br>\n                    There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\n                    <br><br>\n                    Imagination is everything. It is the preview of life\'s coming attractions.\n                    <br><br>\n                    Great spirits have always encountered violent opposition from mediocre minds.\n                    \n                </p>\n              </ion-card-content>\n            </ion-card>\n\n\n          <ion-card>\n           <img src="../assets/new/sj.jpg"/>\n            <ion-card-content>\n            <ion-card-title>\n                Steve Jobs\n            </ion-card-title>\n            <p>\n                Stay hungry stay foolish.\n                <br><br>\n                I want to put a ding in the universe.\n                <br><br>\n                Design is not just what it looks like and feels like. Design is how it works.\n                <br><br>\n                We hire people who want to make the best things in the world.\n                <br><br>\n                Innovation distinguishes between a leader and a follower.\n                <br><br>\n                Sometimes life is going to hit you in the head with a brick. Don\'t lose faith.\n                <br><br>\n                Being the richest man in the cemetery doesn\'t matter to me. Going to bed at night saying we\'ve done something wonderful, that\'s what matters to me.\n                <br><br>\n                Be a yardstick of quality. Some people aren\'t used to an environment where excellence is expected.\n                <br><br>\n                Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.\n                <br><br>\n                You can\'t just ask customers what they want and then try to give that to them. By the time you get it built, they\'ll want something new.\n                <br><br>\n                It\'s really hard to design products by focus groups. A lot of times, people don\'t know what they want until you show it to them.\n             </p>\n           </ion-card-content>\n            </ion-card>\n\n\n\n\n\n\n            <ion-card>\n                <img src="../assets/new/leo.jpg"/>\n                 <ion-card-content>\n                 <ion-card-title>\n                    Leonardo da Vinci\n                 </ion-card-title>\n                 <p>\n                    Simplicity is the ultimate sophistication.\n                    <br><br>\n                    When once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.\n                    <br><br>\n                    Learning never exhausts the mind.\n                    <br><br>\n                     Art is never finished, only abandoned.\n                     <br><br>\n                     Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.\n                     <br><br>\n                     The human foot is a masterpiece of engineering and a work of art.\n                     <br><br>\n                     It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.\n                     <br><br>\n                     I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.\n                     <br><br>\n                     As a well-spent day brings happy sleep, so a life well spent brings happy death.\n                     <br><br>\n                     Water is the driving force of all nature.\n                    \n                  </p>\n                </ion-card-content>\n                 </ion-card>\n\n\n\n            <ion-card>\n                <img src="../assets/new/pc.jpg"/>\n                 <ion-card-content>\n                 <ion-card-title>\n                    Paulo Coelho\n                 </ion-card-title>\n                 <p>\n                    When you want something, all the universe conspires in helping you to achieve it.\n                    <br><br>\n                    Be brave. Take risks. Nothing can substitute experience.\n                    <br><br>\n                    There is only one thing that makes a dream impossible to achieve: the fear of failure.\n                    <br><br>\n                    So, I love you because the entire universe conspired to help me find you.\n                    <br><br>\n                    Tell your heart that the fear of suffering is worse than the suffering itself. And no heart has ever suffered when it goes in search of its dream.\n                    <br><br>\n                    One is loved because one is loved. No reason is needed for loving.\n                    <br><br>\n                    Don\'t waste your time with explanations: people only hear what they want to hear.\n                    <br><br>\n                    Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.\n                    <br><br>\n                    Remember that wherever your heart is, there you will find your treasure.\n                    <br><br>\n                    You drown not by falling into a river, but by staying submerged in it.\n                  </p>\n                </ion-card-content>\n                 </ion-card>\n      \n                 <ion-card>\n                    <img src="../assets/new/dm.jpg"/>\n                     <ion-card-content>\n                     <ion-card-title>\n                        14th Dalai Lama\n                     </ion-card-title>\n                     <p>\n                        Be kind whenever possible. It is always possible.\n                        <br><br>\n                        My religion is very simple. My religion is kindness.\n                        <br><br>\n                        Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.\n                        <br><br>\n                        Sleep is the best meditation.\n                        <br><br>\n                       Happiness is not something ready made. It comes from your own actions.\n                       <br><br>\n                       If you want others to be happy, practice compassion. If you want to be happy, practice compassion.\n                       <br><br>\n                       Remember that sometimes not getting what you want is a wonderful stroke of luck.\n                       <br><br> \n                       This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.\n                       <br><br> \n                       Our prime purpose in this life is to help others. And if you can\'t help them, at least don\'t hurt them.\n                       <br><br>\n                       The purpose of our lives is to be happy.\n                      </p>\n                    </ion-card-content>\n                     </ion-card>\n\n                     <ion-card>\n                        <img src="../assets/new/rumi.jpg"/>\n                         <ion-card-content>\n                         <ion-card-title>\n                             Rumi\n                         </ion-card-title>\n                         <p>\n                            The wound is the place where the Light enters you.\n                            <br><br>\n                            Out beyond ideas of wrongdoing and rightdoing there is a field. I\'ll meet you there. When the soul lies down in that grass the world is too full to talk about.\n                            <br><br>\n                            Let the beauty we love be what we do.\n                            <br><br>\n                            Stop acting so small. You are the universe in ecstatic motion.\n                            <br><br>\n                            Lovers don\'t finally meet somewhere. They\'re in each other all along.\n                            <br><br>\n                            Only from the heart can you touch the sky.\n                            <br><br>\n                            Let yourself be silently drawn by the stronger pull of what you really love.\n                            <br><br>\n                            Sell your cleverness and buy bewilderment.\n                            <br><br>\n                            When you do things from your soul, you feel a river moving in you, a joy.\n                            <br><br>\n                            The cure for pain is in the pain.\n                            \n                          </p>\n                        </ion-card-content>\n                         </ion-card>\n          \n\n      \n\n\n\n\n                        \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Siva\Desktop\ionic\eagle\src\pages\one\one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OnePage);
    return OnePage;
}());

//# sourceMappingURL=one.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map