frappe.ui.form.on("Purchase Order", {
    refresh: function(frm) {

        frm.add_custom_button(__("Get Student"), function(){
            frappe.call({
                method: "school_app.api.purchase_order.get_student_details",
                args: {student_number: "2023-0000001"},
                callback: function(r){
                    console.log(r.message)
                    if(r.message) frappe.msgprint(r.message)
                }
            })
        });

        // Some code in here
        frappe.msgprint("Custom Script")

        //Reminder: don't forget to Export Customizations from 
        //Customize Form before doing bench migrate.

        //Reminder: Don't forget to enable your client script in the 
        //client script doctype

        //double check your file path of your 
    }
})