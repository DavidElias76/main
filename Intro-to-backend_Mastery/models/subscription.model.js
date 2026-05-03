import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 200   
    },
    price: {
        type: Number,
        required: [true, 'subscription price is required'],
        min: [true, "Price must be greater than 0"]
    },
    currency: {
        type: String,
        enum: ['USD', 'GBP', 'EUR'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ['daily', "weekly", "monthly", "yearly"]
    },
    category: {
        type: String,
        enum: ["sports", "news", "entertainment", "lifestyle", "technology", "finance", "politics", "other"],
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', "canceled", "expired"],
        default: "active"
    },
    startDate: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                value <= new Date(); 
                message: "The start date must be in the past"
            }
        }
    }, 
     renewalDate: {
        type: String,
        validate: {
            validator: function(value) {
                value > this.startDate
            }
        },
        message: "Renewal date must be after the start date"
    },
    user: {
        type: Schema.Types.ObjectId, // this is the reference to the user model that was already created
        ref: 'User',
        required: true,
        index: true
    }
}, 
    {timestamps: true}
)

// this is a function that will run before saving to the database
// this function will autocalculate the renewal date of missing
subscriptionSchema.pre('save', function (next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }
        // jan 1st
        // monthly - 30 
        // jan = 1 + 30 = 31st

        this.renewalDate = new Date(this.startDate) // set the value of the start date as the renewal value
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency])
    }

    // auto update the status if the renewal date has passed
    if(this.renewalDate < new Date()) {
        this.status = 'expired'
    }

    next(); // continue with the creation of the document
    
})
const Subscription = model("Subscription", subscriptionSchema);

export default Subscription;
