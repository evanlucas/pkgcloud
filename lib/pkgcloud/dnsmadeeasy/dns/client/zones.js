var base = require('../../../core/dns'),
    urlJoin = require('url-join'),
    pkgcloud = require('../../../../../lib/pkgcloud'),
    errs = require('errs'),
    _ = require('underscore'),
    dns = pkgcloud.providers.dnsmadeeasy.dns;

var _urlPrefix = 'managed';

module.exports = {
  getZones: function (details, callback) {
    var self = this;

    if (typeof details === 'function') {
      callback = details;
      details = {};
    }

    var requestOptions = {
      path: _urlPrefix
    };

    return self._request(requestOptions, function (err, body, res) {
      return err
        ? callback(err)
        : callback(null, body.data.map(function (result) {
          return new dns.Zone(self, result);
        }), res);
    });
  },

  getZone: function (zone, callback) {
    var self = this,
        zoneId = zone instanceof dns.Zone ? zone.id : zone;

    self._request({
      path: urlJoin(_urlPrefix, zoneId)
    }, function (err, body, res) {
      return err
        ? callback(err)
        : callback(null, new dns.Zone(self, body), res);
    });
  },

  createZone: function (details, callback) {
    this.createZones([ details ], function (err, zones) {
      if (err) {
        return callback(err);
      }

      if (zones && zones.length === 1) {
        return callback(err, zones[0])
      }
      else {
        return callback(new Error('Unexpected error when creating single zone'), zones);
      }
    });
  }
}
