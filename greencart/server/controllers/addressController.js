

//Add address :/api/address/add

import Address from "../models/address.js";

export const addAddress=async(req,res)=>{
  try {
    const userId=req.userId;
    const {address}=req.body;
    await Address.create({...address,userId})
    res.json({success:true,message:"Address added successfully"})
    
  } catch (error) {
    res.json({success:false,message:error.message})
    
  }
}

//Get address"/api/address/get

export const getAddress=async(req,res)=>{
  try {
    const userId=req.userId;
    const addresses=await Address.find({userId});
    res.json({success:true,addresses})
    
  } catch (error) {
    res.json({success:false,message:error.message})
    
  }
}