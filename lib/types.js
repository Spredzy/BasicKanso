
var Type = require('couchtypes/types').Type,
	fields = require('couchtypes/fields');

exports.picture = new Type('picture', {
	fields: {
		creator: fields.creator(),
		dateinit: fields.createdTime(),
		title: fields.string(),
		description: fields.string(),
		vote: fields.number(),
		picture: fields.attachments()
	}
});

exports.comment = new Type('comment', {
	fields: {
		creator: fields.creator(),
		dateinit: fields.createdTime(),
		content: fields.string(),
		vote: fields.number(),
		ref_picture : fields.string()
	}
});
