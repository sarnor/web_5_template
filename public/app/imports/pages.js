let htmlPages = [];
let menuList = [];
let menuPath = [];

const importHtml = r => r.keys().forEach(s => {
    htmlPages.push(s);
    menuList.push(s.substr(4, s.lastIndexOf("/") - 4));
    menuPath.push(s.slice(4));
});

importHtml(require.context('../../pages/pages.list/', true, /\.html$/));

exports.menuList = menuList;
exports.htmlPages = htmlPages;
exports.menuPath = menuPath;