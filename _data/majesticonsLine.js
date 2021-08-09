const fg = require("fast-glob");
const path = require("path");
const fs = require("fs");

module.exports = function() {
  return new Promise(async (resolve, reject) => {
    const iconFolder = path.resolve(__dirname, "../node_modules/majesticons/line/");
    const svgIcons = await fg("**/*.svg", {
      cwd: iconFolder
    });
    const iconData = await Promise.all(
      svgIcons.map(async (name) => {
        const namePlain = path.parse(name).name;
        const source = fs.readFileSync(path.resolve(iconFolder, name), {
          encoding: "utf8",
        });
        const sourceWithClass = source.replace('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"', '<svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"');
        return {
          name,
          source,
          namePlain,
          sourceWithClass
        };
      })
    );
    resolve(JSON.stringify(iconData));
  });
};