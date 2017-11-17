/**
 * Gulp utils for async utils.
 */
const archiver = require("archiver");
const fs = require("fs");
const path = require("path");
const util = require("util");
const display = require("./display");
async function stream(gulpStream) {
    return new Promise((resolve, reject) => {
        gulpStream.on("error", reject);
        gulpStream.on("end", resolve);
    });
}
exports.stream = stream;
async function fileExists(filename) {
    try {
        const stat = await util.promisify(fs.stat)(filename);
        return stat.isFile();
    } catch (err) {
        if (err.code !== "ENOENT") {
            display.error(`Error accessing '${filename}`, err);
            process.exit(1);
        }
        return false;
    }
}
exports.fileExists = fileExists;
async function directoryExists(filename) {
    try {
        const stat = await util.promisify(fs.stat)(filename);
        return stat.isDirectory();
    } catch (err) {
        if (err.code !== "ENOENT") {
            display.error(`Error accessing '${filename}`, err);
            process.exit(1);
        }
        return false;
    }
}
exports.directoryExists = directoryExists;
async function zipFolder(sourceFolder, destFile) {
    return new Promise(async (resolve) => {
        const fullPath = path.resolve(sourceFolder);
        const output = fs.createWriteStream(destFile);
        const archive = archiver("zip");
        output.on("close", () => {
            resolve();
        });
        archive.on("warning", (err) => {
            if (err.code === "ENOENT") {
                display.warning(err);
            } else {
                display.error(err);
                process.exit(1);
            }
        });
        archive.on("error", (err) => {
            display.error("Zipping folder", err);
            process.exit(1);
        });
        archive.on("entry", (entryData) => {
            display.info("Adding", entryData.name);
        });
        archive.pipe(output);
        archive.directory(fullPath, "");
        return archive.finalize();
    });
}
exports.zipFolder = zipFolder;
// Generated by UniteJS