/* Walk through the 'Next' link in businesslist.net
 */

	var request = require('request')
	var cheerio = require('cheerio')
	var url = 'http://www.businesslist.net.nz/state/wellington/'

	var i=1
	var intr = setInterval (function() {
		if (i == 450)  {
			clearInterval(intr)
			return
		}

		request(url + i++, function(error, response, html) {
			if (!error && response.statusCode == 200) {
				var $ = cheerio.load(html)
				var website_list = $('.website')
				console.log ('Page no: ' +  i + '\n')
				console.log ('---------------' + '\n')
				// website_list.each(function() { console.log($(this).attr('href'))})

			    for (i = 0;  i < website_list.length;  i++)  {
					var site = $(website_list).attr('.href')
					console.log(site);
				}
			}
		}) 
	}, 10000)
