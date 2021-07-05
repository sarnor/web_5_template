let htmlPages = [];
let menuList = [];

let g = 'k/zinazina/vllllllll';

console.log(g.substr(2, g.lastIndexOf("/") - 2));


const importHtml = r => r.keys().forEach(s => {
    htmlPages.push(s);
    menuList.push(s.substr(2, s.lastIndexOf("/") - 2));

});


importHtml(require.context('../../pages/pages.list/', true, /\.html$/));



exports.menuList = menuList;
exports.htmlPages = htmlPages;