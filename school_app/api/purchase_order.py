import frappe

@frappe.whitelist()
def get_student_details(student_number):
    data = frappe.db.get_value(
        "Students", 
        {"name": student_number}, 
        "first_name")
    print(data)