let htmlPages = [];


const importHtml = r => r.keys().forEach(s => htmlPages.push(`./public/pages/pages.list/${s.substr(2)}`));


importHtml(require.context('../../pages/pages.list/', true, /\.html$/));


exports.htmlPages = htmlPages;