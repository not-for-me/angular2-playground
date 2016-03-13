/**
 * Created by woojin on 2016. 3. 13.
 */
System.register(['angular2/platform/browser', './app.cmp'], function(exports_1) {
    var browser_1, app_cmp_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_cmp_1_1) {
                app_cmp_1 = app_cmp_1_1;
            }],
        execute: function() {
            // webapp은 angular2/platform/browser 모듈의 bootstrap 함수를 사용해서 시작 할 수 있다.
            browser_1.bootstrap(app_cmp_1.RCPAppCmp);
        }
    }
});
//# sourceMappingURL=boot.js.map