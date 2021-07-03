let htmlPages = [];
let menuList = [];



const importHtml = r => r.keys().forEach(s => {
    htmlPages.push(s);
    menuList.push(s.substr(2, 4));

});


importHtml(require.context('../../pages/pages.list/', true, /\.html$/));



exports.menuList = menuList;
exports.htmlPages = htmlPages;