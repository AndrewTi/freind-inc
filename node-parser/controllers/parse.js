const request = require("request");
const cheerio = require("cheerio");


module.exports = {
    parse: (req, res) => {

        request({url: req.query.link }, (err, resp, body) => {
            return new Promise((resovle, err) => {
                let data = cheerio.load(body);
                let arrValid = [];
                let reg = /^((?!https:\/\/)(?!http:\/\/)(?!\/\/).)+/gm;

                data("a").each(function() {
                    let href = data(this).attr("href");
                    let text = data(this).text();
                    if(reg.test(href)) {
                        arrValid
                            .push({
                                "text":text,
                                "href": href
                            });
                    }
                })

                resovle(arrValid);
                
            }).then(data => {
                res.json(data);
            },err => {
                res.json({"err": "error"})
            })
            
        })

    }
}