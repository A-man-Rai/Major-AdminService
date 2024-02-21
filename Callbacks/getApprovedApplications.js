import ApprovedForm from "../Schema/approvedFormSchema.js";


const getApprovedApplications = async (req, res) => {
 
  try {
 
   const userApplications = await ApprovedForm.find();

      res.status(200).json({userApplications});
   
  } catch (error) {
    console.error('Error checking user application:', error);
    res.status(500).send('Error checking user application');
  }
};

export default getApprovedApplications
