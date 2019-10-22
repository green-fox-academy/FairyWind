function BMI(obj){
  let newObj ={
    'mass': obj.mass,
    'height': obj.height,
    'bmi': obj.mass/(obj.height * obj.height)
  }
  return newObj;
}

console.log(BMI({'mass': 50, 'height': 1.60}));