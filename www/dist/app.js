System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters: [],
        execute: function () {
            App = /** @class */ (function () {
                function App() {
                }
                App.prototype.configureRouter = function (config, router) {
                    config.title = "Obany";
                    config.map([
                        {
                            route: ["", "projects"],
                            name: "projects",
                            moduleId: "./projects/projects",
                            nav: true,
                            title: "Projects"
                        }
                    ]);
                    this.router = router;
                };
                return App;
            }());
            exports_1("App", App);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBS0E7Z0JBQUE7Z0JBaUJBLENBQUM7Z0JBZFUsNkJBQWUsR0FBdEIsVUFBdUIsTUFBMkIsRUFBRSxNQUFjO29CQUM5RCxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDUDs0QkFDSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDOzRCQUN2QixJQUFJLEVBQUUsVUFBVTs0QkFDaEIsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsR0FBRyxFQUFFLElBQUk7NEJBQ1QsS0FBSyxFQUFFLFVBQVU7eUJBQ3BCO3FCQUNKLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDekIsQ0FBQztnQkFDTCxVQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFpbiBhcHBsaWNhdGlvbiBjbGFzcy5cbiAqL1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuICAgIHB1YmxpYyBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcik6IGFueSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IFwiT2JhbnlcIjtcbiAgICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm91dGU6IFtcIlwiLCBcInByb2plY3RzXCJdLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvamVjdHNcIixcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogXCIuL3Byb2plY3RzL3Byb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlByb2plY3RzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
