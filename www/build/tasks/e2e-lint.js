/**
 * Gulp tasks for linting modules.
 */
const gulp = require("gulp");
const tslint = require("gulp-tslint");
const minimist = require("minimist");
const path = require("path");
const asyncUtil = require("./util/async-util");
const display = require("./util/display");
const uc = require("./util/unite-config");
gulp.task("e2e-lint", async () => {
    display.info("Running", "TSLint");
    const knownOptions = {
        default: {
            grep: "*"
        },
        string: [
            "grep"
        ]
    };
    const options = minimist(process.argv.slice(2), knownOptions);
    const uniteConfig = await uc.getUniteConfig();
    return asyncUtil.stream(gulp.src(path.join(uniteConfig.dirs.www.e2eTestSrc, `**/${options.grep}.${uc.extensionMap(uniteConfig.sourceExtensions)}`))
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report({
            allowWarnings: true
        }))
        .on("error", () => {
            process.exit(1);
        }));
});
// Generated by UniteJS