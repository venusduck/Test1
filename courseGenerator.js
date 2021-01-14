const menu = {
    _courses:{
      appetizers:[/*addDishToCourse returns here*/],
      mains:[/*addDishToCourse returns here*/],
      desserts:[/*addDishToCourse returns here*/],
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers
    },
    get mains() {
      return this._courses.mains
    },
    set mains(mains) {
      this._courses.mains = mains
    },
    get desserts() {
      return this._courses.desserts
    },
    set desserts(desserts) {
      return this._courses.desserts = desserts
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price
      const ending = [' #TeamJacob', ' 420 blaz', ' remember the Alamo'];
      const ending2 = [' Mr.Moneybags', ' Mr.President Obama'];
      if ((totalPrice > 500)) {
        return `you ordered: 
        ${appetizer.name} 
        ${main.name}
        ${dessert.name} 
        your total is $${totalPrice}${ending2[(Math.floor(Math.random()*     ending2.length))]}`
      }
      else return `you ordered: 
      ${appetizer.name} 
      ${main.name}
      ${dessert.name} 
      your total is $${totalPrice}${ending[(Math.floor(Math.random()* ending.length))]}`;
    
  }};
  
  menu.addDishToCourse('appetizers', 'TGIF Anti-Ty Extra Skin Tatos', 420.68)
  menu.addDishToCourse('appetizers', 'Bees Knees Fried Motz', 6969.420)
  menu.addDishToCourse('appetizers',"Daddy Chen's Fried Curly Q's", 2.18)
  
  menu.addDishToCourse('mains', "Salad's Tosst Saladz", 83.33)
  menu.addDishToCourse('mains', 'Dummy Thiccccccc Clapped Cheex Burjair', 1.09)
  menu.addDishToCourse('mains', "eGg zWegg zKeGz Deg'Z", 6.66)
  
  menu.addDishToCourse('desserts', "Binslie's Crumbru Lay's tm", 75.52)
  menu.addDishToCourse('desserts', 'Raw Grass-Fed-Free-Range Weed', 4.20)
  menu.addDishToCourse('desserts', 'Pâté of roasted indigenous legumes with a compote of seasonal berries on hearty sprouted wheat bread.', 0.69)
  
  let meal = menu.generateRandomMeal();
  console.log(meal)