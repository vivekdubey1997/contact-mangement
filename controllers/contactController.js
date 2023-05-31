const Contact = require("../model/contacts");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = async(req,res)=>{
    try{
       
         const contacts = await Contact.find({}).sort({"name":1})
         res.status(201).json({contacts})
    }
    catch (error){
         res.status(500).json({message:error})
    }

 
}

//@desc search  contacts by name,phone and exp-like dep for deepak
//@route GET /api/contacts/:key
//@access private
const searchContacts = async(req,res)=>{
    
    try{
         const contacts = await Contact.find(
            {"$or":
            [{"name":{$regex:".*"+req.params.key+".*"}},{"phone":{$regex:"^"+req.params.key+"$"}}]

            }
         )
        
         res.status(201).json({contacts})
    }
    catch (error){
         res.status(500).json({message:error})
    }

 
}
//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContact = async(req,res)=>{
    try{
         const { name,phone } = req.body;
        
        if (!name || !phone) {
            res.status(400).json({"message":"all fields are manadatory"})
         
        }
        const contact = await Contact.create({
                name,
                phone,
            });
        res.status(201).json({"message":"contact create succesfully"})
            }
    catch (error){
         res.status(500).json({'messsage':error})
    }

}

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = async(req,res)=>{
     
    try {
     const {id:contactid}=req.params
     const contact = await Contact.findOne({_id:contactid})
     if(!contact){
          return res.status(404).json({message:`no contact with id${contactid}`})
     }
     res.status(200).json({contact})
     
    } catch (error) {
        res.status(500).json({mes:error})
    }

}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact =async(req,res)=>{
    try {
        const {id:contactid} = req.params
        console.log(contactid)
        const contact = await Contact.findOneAndUpdate({_id:contactid},req.body,
         {new:true}) 
         res.status(200).json({contact})

        if(!contact){
         res.status(404).json({mess:`no contact with id: ${contactid}`})
        }
    } catch (error) {
         res.status(500).json({message:error})
    }
   
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = async(req,res)=>{
    try {
         const {id:contactid}= req.params
         const contact = await Contact.findOneAndDelete({_id:contactid})
         if(!contact){
              return res.status(404).json({message:`no contact with id${contactd}`})
         }

        res.status(200).json({contact:null,status:"success"}) 
    } catch (error) {
         res.status(500).json({message:error})
         
    }
}


















module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    searchContacts,
  };