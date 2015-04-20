var pkgcloud = require('../../lib/pkgcloud');

var dme = pkgcloud.dns.createClient({
  provider: 'dnsmadeeasy',
  apiKey: '6ffc7a9e-0cd4-48df-afdd-ed224f639aec',
  secret: '2a7fc1a1-97f2-4240-b493-c1a0f4cf74f4',
  url: 'api.sandbox.dnsmadeeasy.com',
  protocol: 'http://'
})

dme.getZones(function(err, body, res) {
/*
  body.forEach(function(b) {
    console.log(b)
  })
*/
  console.log(body)
})

dme.getZone(865437, function(err, zone) {
  console.log(err, zone)
})
