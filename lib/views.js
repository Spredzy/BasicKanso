/**
 * Show functions to be exported from the design doc.
 */
exports.picture_by_created = {
    map: function (doc) {
		console.log("picture_by_created");
        if (doc.type === 'picture') {
            emit(doc.created, doc.title);
        }
    }
};
