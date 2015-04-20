/*
 * index.js: Top-level include for the DNSMadeEasy service
 *
 * (C) 2014 Evan Lucas
 * MIT LICENSE
 *
 */

exports.Client = require('./client').Client;
exports.Record = require('./record').Record;
exports.Zone = require('./zone').Zone;

exports.createClient = function(options) {
  return new exports.Client(options);
}
