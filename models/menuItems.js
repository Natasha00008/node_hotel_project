const { name } = require("ejs");
const { default: mongoose } = require("mongoose");
const mongoDb = require("mongoose");

const Menu = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
      type: Number,
      default:0
  }
});

// crete person model

const MenuItems = mongoose.model("MenuItem", Menu );
module.exports = MenuItems;
