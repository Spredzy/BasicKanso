/**
 * Values exported from this module will automatically be used to generate
 * the design doc pushed to CouchDB.
 */
module.exports = {
    types: require('./types'),
    lists: require('./lists'),
    views: require('./views'),
    rewrites: require('./rewrites'),
    validate_doc_update: require('./validate'),
};
