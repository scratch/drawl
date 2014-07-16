var request = require('request');
var cheerio = require('cheerio');
/*var url = [ 'http://192.168.1.4/kompass/index.html', 'http://192.168.1.4/kompass/index.html.1' ]
 */

var url = ['http://192.168.1.4/kompass/index.html', 'http://192.168.1.4/kompass/index.html.1', 'http://192.168.1.4/kompass/index.html.10', 'http://192.168.1.4/kompass/index.html.11', 'http://192.168.1.4/kompass/index.html.12', 'http://192.168.1.4/kompass/index.html.13', 'http://192.168.1.4/kompass/index.html.14', 'http://192.168.1.4/kompass/index.html.15', 'http://192.168.1.4/kompass/index.html.16', 'http://192.168.1.4/kompass/index.html.17', 'http://192.168.1.4/kompass/index.html.18', 'http://192.168.1.4/kompass/index.html.19', 'http://192.168.1.4/kompass/index.html.2', 'http://192.168.1.4/kompass/index.html.20', 'http://192.168.1.4/kompass/index.html.21', 'http://192.168.1.4/kompass/index.html.22', 'http://192.168.1.4/kompass/index.html.23', 'http://192.168.1.4/kompass/index.html.24', 'http://192.168.1.4/kompass/index.html.25', 'http://192.168.1.4/kompass/index.html.26', 'http://192.168.1.4/kompass/index.html.27', 'http://192.168.1.4/kompass/index.html.28', 'http://192.168.1.4/kompass/index.html.29', 'http://192.168.1.4/kompass/index.html.3', 'http://192.168.1.4/kompass/index.html.30', 'http://192.168.1.4/kompass/index.html.31', 'http://192.168.1.4/kompass/index.html.32', 'http://192.168.1.4/kompass/index.html.33', 'http://192.168.1.4/kompass/index.html.34', 'http://192.168.1.4/kompass/index.html.35', 'http://192.168.1.4/kompass/index.html.36', 'http://192.168.1.4/kompass/index.html.37', 'http://192.168.1.4/kompass/index.html.38', 'http://192.168.1.4/kompass/index.html.39', 'http://192.168.1.4/kompass/index.html.4', 'http://192.168.1.4/kompass/index.html.40', 'http://192.168.1.4/kompass/index.html.41', 'http://192.168.1.4/kompass/index.html.42', 'http://192.168.1.4/kompass/index.html.43', 'http://192.168.1.4/kompass/index.html.44', 'http://192.168.1.4/kompass/index.html.45', 'http://192.168.1.4/kompass/index.html.46', 'http://192.168.1.4/kompass/index.html.47', 'http://192.168.1.4/kompass/index.html.48', 'http://192.168.1.4/kompass/index.html.49', 'http://192.168.1.4/kompass/index.html.5', 'http://192.168.1.4/kompass/index.html.50', 'http://192.168.1.4/kompass/index.html.51', 'http://192.168.1.4/kompass/index.html.52', 'http://192.168.1.4/kompass/index.html.53', 'http://192.168.1.4/kompass/index.html.54', 'http://192.168.1.4/kompass/index.html.55', 'http://192.168.1.4/kompass/index.html.56', 'http://192.168.1.4/kompass/index.html.57', 'http://192.168.1.4/kompass/index.html.58', 'http://192.168.1.4/kompass/index.html.59', 'http://192.168.1.4/kompass/index.html.6', 'http://192.168.1.4/kompass/index.html.60', 'http://192.168.1.4/kompass/index.html.61', 'http://192.168.1.4/kompass/index.html.62', 'http://192.168.1.4/kompass/index.html.63', 'http://192.168.1.4/kompass/index.html.64', 'http://192.168.1.4/kompass/index.html.65', 'http://192.168.1.4/kompass/index.html.66', 'http://192.168.1.4/kompass/index.html.67', 'http://192.168.1.4/kompass/index.html.68', 'http://192.168.1.4/kompass/index.html.69', 'http://192.168.1.4/kompass/index.html.7', 'http://192.168.1.4/kompass/index.html.70', 'http://192.168.1.4/kompass/index.html.71', 'http://192.168.1.4/kompass/index.html.72', 'http://192.168.1.4/kompass/index.html.73', 'http://192.168.1.4/kompass/index.html.74', 'http://192.168.1.4/kompass/index.html.75', 'http://192.168.1.4/kompass/index.html.76', 'http://192.168.1.4/kompass/index.html.77', 'http://192.168.1.4/kompass/index.html.78', 'http://192.168.1.4/kompass/index.html.79', 'http://192.168.1.4/kompass/index.html.8', 'http://192.168.1.4/kompass/index.html.80', 'http://192.168.1.4/kompass/index.html.81', 'http://192.168.1.4/kompass/index.html.82', 'http://192.168.1.4/kompass/index.html.9']

 for(var i=0;i<url.length;i++) { 
    var uri = url[i];
    request(uri, function(error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html)
            var www={}
            var www_cl = $('.global')
            var tmpurl = $(www_cl).children()
            var www_url = $(tmpurl[1]).text().trim().replace(/\t/g,'').replace(/\n/g,'');
            var h1_tag = $('.span6 h1')
            var companyname =$(h1_tag).text().trim().replace(/\t/g,'').replace(/\n/g,'');
            www.url=www_url;
            www.name=companyname;
            console.log('"' + www_url + '"' + ' ' + ',' + '"' + companyname + '"' )
        }
    })
}
