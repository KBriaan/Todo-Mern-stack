// Import mongoose module for defining schemas and models
const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema({
    // Define 'task' field with type String and required validation
    task: {
        type: String,
        required: true
    },
    // Define 'category' field with type String and enum validation
    category: {
        type: String,
        enum: ['Work', 'Personal', 'Home', 'Urgent'], // Possible values for category
        default: 'Personal' // Default value for category
    },
    // Define 'isCompleted' field with type Boolean and default value
    isCompleted: {
        type: Boolean,
        default: false // Default value for isCompleted
    }
}, { timestamps: true }); // Enable timestamps (createdAt and updatedAt) for documents

// Create a Mongoose model named 'ToDo' based on ToDoSchema
const ToDo = mongoose.model("ToDo", ToDoSchema);

// Export the ToDo model to make it available for use in other modules
module.exports = ToDo;