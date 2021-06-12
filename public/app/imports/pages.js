let htmlPages = [];


const importHtml = r => r.keys().forEach(s => htmlPages.push(`./public/pages/${s.substr(2)}`));


importHtml(require.context('../../pages/', true, /\.html$/));

exports.htmlPages = htmlPages;