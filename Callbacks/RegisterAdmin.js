import Admin from "../Schema/adminSchema.js";

import bcrypt from "bcrypt";

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10);

const RegisterAdmin=async(req,res)=>{
  
    const{email,password}=req.body;
    try{
        const existingUser=await Admin.findOne({email:email});
        if(existingUser){
          return res.status(200).json({message:"EMAIL ALREADY REGISTERED", alreadyRegistered: true });
        }
        const hash = await bcrypt.hash(password, saltRounds);

        await Admin.create({
            email: email,
            password: hash,
        });
        return res.status(201).json({message: "account created",accountCreated:true});
     }
    catch(err){
        res.status(500).json({message:"Something Went Wrong", success: false })
    }
}


export default RegisterAdmin