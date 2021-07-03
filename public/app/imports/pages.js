let htmlPages = [];


const importHtml = r => r.keys().forEach(s => {
    htmlPages.push(`./${s.substr(2)}`)

});


importHtml(require.context('../../pages/pages.list/', true, /\.html$/));


console.log('htmlPages', htmlPages);
exports.htmlPages = htmlPages;