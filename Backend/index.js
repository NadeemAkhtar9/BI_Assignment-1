const express = require("express")
const app = express()

const {initializeDatabase} = require("./db/db.connects")
const MeetUp = require("./models/meetUp.models")


app.use(express.json())

const cors = require("cors");

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
  }));

initializeDatabase()
app.get("/",(req,res)=>{
    res.send("Recipe App")
}) 


// Create a new meetup 

async function createMeetUp(newMeetUp){
    try{
        const meetUp = new MeetUp(newMeetUp); 
        const savedMeetUp = await meetUp.save();
        return savedMeetUp;
    }
    catch(error){
        throw error;
    }
}

app.post("/meetups",async (req,res)=>{
    try{
        const savedMeetUp = await createMeetUp(req.body)
        res.status(200).json({message: "Meetup added successfully.",meetUp:savedMeetUp})
    }
    catch(error){
        res.status(500).json({error: "Failed to add Meetup.",details: error.message})
    }
})
// api to get all the meetups
async function readAllMeetUps(){
    try{
        const allMeetUps = await MeetUp.find()
        return allMeetUps 
    }
    catch (error) {
        throw error
    }
  }
  //readAllMeetUps()

app.get("/meetups",async (req,res)=>{
    try{
        const meetUp = await readAllMeetUps()
        if(meetUp.length != 0){
            res.json(meetUp)
        }
        else{
            res.status(404).json({error: "No Meetups found."})
        }
    }
    catch(error){
        res.status(500).json({error:"Failed to fetch Meetups."})
    }
})
// api to get a recipe details by its title
async function readMeetUpByTitle(meetupTitle){
    try{    
        const meetUp = await MeetUp.findOne({title:meetupTitle})
        return meetUp
    }
    catch(error){
        throw error
    }
  }
  //readMeetUpByTitle("Classic Chocolate Chip Cookies")
  app.get("/meetups/:meetupTitle",async (req,res)=>{
    try{
        const meetUp = await readMeetUpByTitle(req.params.meetupTitle)
        if(meetUp.length != 0){
            res.json(meetUp)
        }
        else{
            res.status(404).json({error: "No Meetups found."})
        }
    }
    catch(error){
        res.status(500).json({error:"Failed to fetch Meetups."})
    }
})
// update  title by its id

async function updateMeetUp(meetUpId,dataToUpdate){
    try{
      const updatedMeetUp = await MeetUp.findByIdAndUpdate(meetUpId,dataToUpdate,{new:true})
      return updatedMeetUp
    }
    catch(error){
      console.log("Error in updating Recipe")
    }
  }
  app.post("/meetups/:meetUpId",async (req,res)=>{
    try{
      const updatedMeetUp = await updateMeetUp(req.params.meetUpId,req.body)
      if(updatedMeetUp){
        res.status(200).json({message: "Meetup updated successfully.",updatedMeetUp:updatedMeetUp})
      }
      else{
        res.status(404).json({error: "Meetup does not exist."})
      }
    }
    catch(error){
      res.status(404).json({error: "Failed to update Meetup."})
    }
  })

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})