import mongoose from "mongoose";

const approvedFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    passportNo: {
        type: String,
        required: true
    },
    passportDateOfIssue: {
        type: String,
        required: true
    },
    passportValidUpto: {
        type: String,
        required: true
    },
    ilpNo: {
        type: String,
        required: true
    },
    visaNo: {
        type: String,
        required: true
    },
    visaIssue: {
        type: String,
        required: true
    },
    visaValidUpto: {
        type: String,
        required: true
    },
    residentialAddress: {
        type: String,
        required: true
    },
    dateOfVisit: {
        type: String,
        required: true
    },
    durationOfStay: {
        type: String,
        required: true
    },
    travelArrangementBy: {
        type: String,
        required: true
    },
});

const ApprovedForm = mongoose.model("Approved Application", approvedFormSchema)

export default ApprovedForm;
