const fg = require("fast-glob");
const path = require("path");

module.exports = function() {
  return new Promise(async (resolve, reject) => {
    const iconFolder = path.resolve(__dirname, "../images/icons-solid-png/");
    const pngIcons = await fg("**/*.png", {
      cwd: iconFolder
    });
    const iconData = pngIcons.map((name) => {
      const namePlain = path.parse(name).name;
      const filePath = path.join("/images/icons-solid-png/", name);
      return {
        name,
        filePath,
        namePlain
      };
    });
    resolve(JSON.stringify(iconData));
  });
};