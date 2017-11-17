System.register(["aurelia-templating"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, NavBar;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            }
        ],
        execute: function () {
            NavBar = /** @class */ (function () {
                function NavBar() {
                }
                __decorate([
                    aurelia_templating_1.bindable
                ], NavBar.prototype, "router", void 0);
                NavBar = __decorate([
                    aurelia_templating_1.customElement("nav-bar")
                ], NavBar);
                return NavBar;
            }());
            exports_1("NavBar", NavBar);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL25hdkJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBUUE7Z0JBR0EsQ0FBQztnQkFERztvQkFEQyw2QkFBUTtzREFDYTtnQkFGYixNQUFNO29CQURsQixrQ0FBYSxDQUFDLFNBQVMsQ0FBQzttQkFDWixNQUFNLENBR2xCO2dCQUFELGFBQUM7YUFIRCxBQUdDOztRQUNELENBQUMiLCJmaWxlIjoibmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBOYXZCYXIgY2xhc3MuXG4gKi9cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nXCI7XG5cbkBjdXN0b21FbGVtZW50KFwibmF2LWJhclwiKVxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XG4gICAgQGJpbmRhYmxlXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
