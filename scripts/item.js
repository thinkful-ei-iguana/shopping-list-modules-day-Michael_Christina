const validateName = function(name){
  if(!name){
    throw TypeError('Name must not be blank');
  }
};

const createName = function(name){
  return { id: cuid(), name: name, checked: false };
};

export default {
  validateName,
  createName
};
