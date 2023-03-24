// Copyright (c) 2023, OSSPHinc and contributors
// For license information, please see license.txt

frappe.ui.form.on('Profile', {
	// refresh: function(frm) {

	// }
});


frappe.ui.form.on('Parents', {
	parents_add: function(frm) {
		frappe.msgprint("Hello this is adding new row");

	},
	parents_remove: function(frm) {
		frappe.msgprint("Hello this is removing row");

	}
});