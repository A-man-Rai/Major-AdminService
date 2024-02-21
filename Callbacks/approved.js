import ApprovedForm from "../Schema/approvedFormSchema.js";

const approved=async(req,res)=>{
    try {
        const formData  = req.body;
        const newForm = new ApprovedForm({
          name: formData.name,
          dob: formData.dob,
          userId:formData.userId,
          nationality: formData.nationality,
          occupation: formData.occupation,
          passportNo: formData.passportNo,
          passportDateOfIssue: formData.dateOfIssue,
          passportValidUpto: formData.validUpTo,
          ilpNo: formData.ilpNo,
          visaNo: formData.visaNo,
          visaIssue: formData.visaIssue,
          visaValidUpto: formData.visaValidUpto,
          residentialAddress: formData.residentialAddress,
          dateOfVisit: formData.dateOfVisit,
          durationOfStay: formData.durationOfStay,
          travelArrangementBy: formData.travelArrangement,
        });
    
        const savedForm = await newForm.save();
        res.status(200).send({ message:'Application approved '});
      } catch (error) {
        console.error('Error storing form data with images:', error);
        res.status(500).send('Error storing form data with images');
      }
}

export default approved;