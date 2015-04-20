var utile = require('utile'),
    base = require('../../core/dns/record'),
    _ = require('underscore');

var Record = exports.Record = function Record(zone, details) {
  base.Record.call(this, zone, details);
};

utile.inherits(Record, base.Record);

Record.prototype._setProperties = function (details) {
  this.id = details.id;
  this.name = details.name;
  this.value = details.value;
  this.type = details.type;
  this.source = details.source;
  this.sourceId = details.sourceID || details.sourceId;
  this.dynamicDns = details.dynamicDns;
  this.password = details.password;
  this.ttl = details.ttl;
  this.monitor = details.monitor || false;
  this.failover = details.failover || false;
  this.failed = details.failed || false;
  this.gtdLocation = details.gtdLocation;
  this.description = details.description;
  this.keywords = details.keywords;
  this.title = details.title;
  this.redirectType = details.redirectType;
  this.hardlink = details.hardlink;
  this.mxLevel = details.mxLevel;
  this.weight = details.weight;
  this.priority = details.priority;
  this.port = details.port;
};

Record.prototype.toJSON = function() {
  return _.pick(this, ['id', 'name', 'value', 'type', 'source',
    'sourceId', 'dynamicDns', 'password', 'ttl', 'monitor',
    'failover', 'failed', 'gtdLocation', 'description',
    'keywords', 'title', 'redirectType', 'hardlink', 'mxLevel',
    'weight', 'priority', 'port']);
};
