// Copyright (c) 2023, OSSPHinc and contributors
// For license information, please see license.txt

frappe.ui.form.on('Students', {
	last_name: function(frm) {
		var first_name = frm.doc.first_name
		var middle_name = frm.doc.middle_name ? frm.doc.middle_name : ""
		var last_name = frm.doc.last_name
		var full_name = first_name + " " + middle_name + " " + last_name

		frm.set_value("full_name", full_name)
		//setting property hidden, reqd, 
		// frm.set_df_property("full_name", "hidden", 1)
	}
});

frappe.ui.form.on('Subject Grades', {	
	percent_grade: function(frm, cdt, cdn) {
		var d  = locals[cdt][cdn]
		var percent_grade = d.percent_grade

		console.log("Percent Grade", percent_grade)

		//Validate inputted percentage is not lower than 0 and higher than 100
		if(percent_grade < 0.00 || percent_grade > 100.00){
			frappe.msgprint("Grade should not be lesser than 0 and not more than 100")
			frm.set_value("percent_grade", 0)
		} else {
			// Conditions for setting the letter grade
			if (percent_grade>90) d.letter_grade ="A"
			else if (percent_grade > 80 && percent_grade < 91) d.letter_grade ="B"
			else if (percent_grade > 70 && percent_grade < 81) d.letter_grade ="B-"
			else if (percent_grade > 60 && percent_grade < 71) d.letter_grade ="C"
			else if (percent_grade > 50 && percent_grade < 61) d.letter_grade ="D"
			else if (percent_grade < 51) d.letter_grade = "F"
			frm.refresh()
		}
	},
	grades_add: function(frm) {
		var total_subject_grades = parseInt(frm.doc.total_subject_grades)
		frm.set_value("total_subject_grades", total_subject_grades + 1)

	},
	grades_remove: function(frm) {
		var total_subject_grades = parseInt(frm.doc.total_subject_grades)
		frm.set_value("total_subject_grades", total_subject_grades - 1)

	}
});
