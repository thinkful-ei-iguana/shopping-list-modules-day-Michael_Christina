import item from './item.js';

const items = [];
const hideCheckedItems = false;


//CRUD functions
//findByID(id)
const findById = function (id){
  return items.find(index => index.id === id);
};

const addItem = function (name){
  try{item.validateName(name);
    let result = item.createName(name);
    this.items.push(result);
  }catch (error){
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function(id){
  let foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
};

const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
};



const findAndUpdateName = function(id, newName){
  try{item.validateName(newName);
    this.findById(id);
  } catch (error){
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndDelete = function(id){
  this.items = this.items.filter(index => index.id !== id);
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};
