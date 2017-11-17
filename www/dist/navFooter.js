System.register(["aurelia-templating", "moment"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, moment_1, NavFooter;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }
        ],
        execute: function () {
            NavFooter = /** @class */ (function () {
                function NavFooter() {
                    this.buildDateTime = moment_1.default(new Date(window.unite.buildDateTime)).format("MMMM Do YYYY, h:mm a");
                    this.packageVersion = window.unite.packageVersion;
                }
                NavFooter = __decorate([
                    aurelia_templating_1.customElement("nav-footer")
                ], NavFooter);
                return NavFooter;
            }());
            exports_1("NavFooter", NavFooter);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL25hdkZvb3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBWUk7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDakcsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztnQkFDdEQsQ0FBQztnQkFQUSxTQUFTO29CQURyQixrQ0FBYSxDQUFDLFlBQVksQ0FBQzttQkFDZixTQUFTLENBUXJCO2dCQUFELGdCQUFDO2FBUkQsQUFRQzs7UUFDRCxDQUFDIiwiZmlsZSI6Im5hdkZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTmF2Rm9vdGVyIGNsYXNzLlxuICovXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInVuaXRlanMtdHlwZXNcIiAvPlxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLXRlbXBsYXRpbmdcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm5hdi1mb290ZXJcIilcbmV4cG9ydCBjbGFzcyBOYXZGb290ZXIge1xuICAgIHB1YmxpYyBidWlsZERhdGVUaW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHBhY2thZ2VWZXJzaW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5idWlsZERhdGVUaW1lID0gbW9tZW50KG5ldyBEYXRlKHdpbmRvdy51bml0ZS5idWlsZERhdGVUaW1lKSkuZm9ybWF0KFwiTU1NTSBEbyBZWVlZLCBoOm1tIGFcIik7XG4gICAgICAgIHRoaXMucGFja2FnZVZlcnNpb24gPSB3aW5kb3cudW5pdGUucGFja2FnZVZlcnNpb247XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
