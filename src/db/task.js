//description - string
//completed - Boolean

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://SelineOuma:seline123@cluster0.qjsmvkx.mongodb.net/task-manager-api"
    
);

const Task = mongoose.model("Task",{
    description: {
        type: String,
    },

    completed: {
        type: Boolean,
    }
    
});

const task = new Task({
    description:"football coach",
    completed: true,
});
task
.save()
.then(() =>{
    console.log(task);
})
.catch((error) => {
    console.log("Error",error);
});