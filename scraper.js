const request = require('request')

nr = "AB123"
URL = "https://www.samgongustofa.is/umferd/okutaeki/okutaekjaskra/uppfletting?vq=" + nr


request(URL, function(err, res, body) {
        let v = body.indexOf("Verksmiðjunr:");
        let t = body.indexOf("Tegund:");
        let a = body.indexOf("Fyrst skráð:");
        argerd = body.slice(a).slice(body.slice(a).indexOf("</sp")-4, (body.slice(a).indexOf("</sp"))).trim()
        let framl = body.slice(t+30, t+50).trim()
        //console.log(framl)
        let vin = body.slice(v+51, v+68);
        let vinURL = "https://vindecoder.eu/check-vin/" + vin
        request(vinURL, function(err, res, body) {
                let mod = body.indexOf("Model\"")
                let model = body.slice(mod+44, mod+51).trim()
                //console.log()
                console.log(nr + " er " + argerd + " " + framl + " " + model)
        });
});

