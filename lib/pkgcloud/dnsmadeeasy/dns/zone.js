var utile = require('utile'),
    base = require('../../core/dns/zone'),
    _ = require('underscore');

var Zone = exports.Zone = function Zone(client, details) {
  base.Zone.call(this, client, details);
};

utile.inherits(Zone, base.Zone);

Zone.prototype._setProperties = function (details) {
  this.id = details.id;
  this.name = details.name;
  this.nameservers = details.nameServers || details.nameservers || [];
  this.gtdEnabled = details.gtdEnabled || false;
  this.soaId = details.soaID || details.soaId || null;
  this.vanityId = details.vanityId || null;
  this.transferAclId = details.transferAclId || null;
  this.folderId = details.folderId || null;
  this.updated = new Date(details.updated);
  this.created = new Date(details.created);
  this.axfrServer = details.axfrServer || [];
  this.delegateNameServers = details.delegateNameServers || [];
};

Zone.prototype.toJSON = function() {
  return _.pick(this, ['id', 'name', 'nameservers', 'gtdEnabled', 'soaId',
    'vanityId', 'transferAclId', 'folderId', 'updated', 'created',
    'axfrServer', 'delegateNameServers']);
};
