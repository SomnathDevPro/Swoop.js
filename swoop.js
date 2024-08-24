const SWOOP = {
  //array functions 
  ARR: {
    //union of 2 arrays
    union: function(arr1,arr2) {
      return [...new Set([...arr1,...arr2])]
    },
    //intersection of 2 arrays
    intersection: function (arr1,arr2) {
      return arr1.filter(element=>{
       return arr2.includes(element)
      })
    },
    difference: function(arr1,arr2) {
      const a = arr1.filter(element=>{
       return !arr2.includes(element)
      })
      const b = arr2.filter(element=>{
        return !arr1.includes(element)
      })
      return a.concat(b)
    },
    //returns the sum of all elements in an array
    sum: function(arr) {
      let total = 0;
      for (var i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    },
    //returns the mean of an array
    mean: function(arr) {
      const len = arr.length;
      const mean = SWOOP.ARR.sum(arr) / len;
      return mean;
    },
    //returns the standard deviation of an array
    standard_deviation: function(arr) {
      const m = SWOOP.ARR.mean(arr);
      const s = arr.length - 1;
      const variance = arr.map(x => (x - m) ** 2).reduce((a, b) => a + b, 0) / s;
      return Math.sqrt(variance);
    },
    //returns the variance of an array
    variance: function(arr) {
      const m = SWOOP.ARR.mean(arr);
      const s = arr.length - 1;
      const variance = arr.map(x => (x - m) ** 2).reduce((a, b) => a + b, 0) / s;
      return variance;
    },
    //returns the median of an array
    median: function(arr) {
      arr.sort((a, b) => a - b);
      const middle = Math.floor(arr.length / 2);
      if (arr.length % 2 === 0) {
        return (arr[middle - 1] + arr[middle]);
      } else {
        return arr[middle];
      }
    },
    //returns the minimum value of an array
    min: function(arr) {
      let min = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
      }
      return min;
    },
    //returns the maximum value of an array 
    max: function(arr) {
      let max = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
          max = arr[i];
        }
      }
      return max;
    },
    //counts the number of unique values in an array
    countUnique: function(arr) {
      return arr.filter((value, index, self) => self.indexOf(value) === index).length;
    },
    //counts the number of duplicate values of an arrat
    countDuplicates: function(arr) {
      return arr.filter((value, index, self) => arr.indexOf(value) !== index).length;
    },
    //merges 2 arrays
    merge: function(arr1, arr2) {
      return [...arr1, ...arr2];
    },
    //returns the frequency of elements in an array
    freq: function(arr) {
      const frequency = {};
      for (const value of arr) {
        frequency[value] = (frequency[value] || 0) + 1;
      }
      return frequency;
    },
  },
  //DOM functions 
  DOM: {
    //selects an element 
    select: function(selector) {
      const elem = document.querySelector(selector);
      if (!elem) {
        throw new Error(`Element not found: ${selector}`);
      }
      return elem;
    },
    //selects an element by id
    selectid: function(id) {
      const elem = document.getElementById(id);
      if (!elem) {
        throw new Error(`Element not found: ${id}`);
      }
      return elem;
    },
    //selects all elements with matching selector
    selectall: function(element) {
      const elem = document.querySelectorAll(element);
      if (!elem.length) {
        throw new Error(`Element not found: ${element}`);
      }
      return elem;
    },
    //attaches an event listener to an element 
    addListener:function(element,event,fn){
      return element.addEventListener(event,fn)
    },
    //remove an event listener
    removeListener: function(element, event, fn) {
      return element.removeEventListener(event, fn)
    },
  },
  //functional programming utils
  FUNC: {
    //throttles a function
    throttle: function(func,wait) {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        }
      };
    },
    //debounces a function 
    debounce: function(func, wait) {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    },
    //memoize a function 
    memoize: function(func) {
      const cache = new Map();
      return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
          return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
      };
    },
    //curries a function 
    curry: function(fn) {
      return function curried(...args) {
        if (args.length >= fn.length) {
          return fn(...args);
        }
        return function(...nextArgs) {
          return curried(...args.concat(nextArgs));
        };
      };
    },
    //a function will be called only once
    once:function(func){
      let called = false;
      return function(...args){
        if (!called) {
          let called = true;
          return func(...args);
        }
      }
    }
  },
  //string utils
  STR: {
    //removes whitespaces
    strip: function(str) {
      return str.replace(/\s/g, '');
    },
    //checks if a substring is present in a string 
    contains: function(str, search, position = 0) {
      return str.indexOf(search, position) !== -1;
    },
    //checks if a string is blank
    isBlank: function(str) {
      return SWOOP.STR.strip(str) === "";
    },
    //checks if a string is not blank
    isNotBlank: function(str) {
      return SWOOP.STR.strip(str)!== "";
    },
    //checks if a string contains only contains alphabetic characters
    isAlphabet: function(str) {
      return /^\D+$/.test(str);
    },
        //checks if a string contains only contains numeric characters
    isNumeric: function(str) {
      return /^\d+$/.test(str);
    },
    //repeats a function 
    echo: function(str, n) {
      for (var i = 0; i < n; i++) {
        console.log(str.toString());
      }
    },
    //capitalises the first letter of a string
    capitalise: function(str){
      return replace(/^./,match=>match.toUpperCase())
    },
  },
  MATHS: {
    //calculates sine of an angle
    sin:(angle)=>Math.sin(angle),
   //calculates cosine of an angle 
    cos:(angle)=>Math.cos(angle),
   //calculates tangent of an angle
    tan:(angle)=>Math.tan(angle),
   //distance of a line
    distance:(x1,x2,y1,y2)=>Math.sqrt((x2-x1)**2+(y2+y1)**2),
    //calculates midpoint
    midpoint:(x1,x2,y1,y2)=>[(x1+x2)/2,(y1+y2)/2],
    //calculates linear interpolation 
    lerp:(a,b,t)=>a+(a-b)*t,
    //clamps a number
    clamp:(value,min,max)=>Math.min(Math.max(value,min),max),
    //returns the sign of a number 
    signum:(value)=>value===0?0:(value>=0?1:-1),
    //finds the square root of a number 
    sqrt:(value)=>Math.sqrt(value),
    //returns the rounded value a number
    round:(num)=>Math.round(num),
    //ceils a number
    ceil:(num)=>Math.ceil(num),
    //returns the absolute value of a number
    absolute:num=>Math.abs(num),
    //calculates the Greatest Common Divisor of 2 numbers
    gcd:(a,b)=>b===0?a:SWOOP.MATHS.gcd(b,a%b),
    //calculates the Least Common Multiple of 2 numbers
    lcm:(a,b)=>SWOOP.MATHS.absolute(a*b)/SWOOP.MATHS.gcd(a,b),
    //calculates the hypotenuse when perpendicular and base is given
    hypot:(p,b)=>Math.sqrt(p*p+b*b),
    //generates a random number
    randnum:(min,max)=>Math.floor(Math.random()*(max-min+1)+min)
  }
};

class Swoophysix {
  constructor(gravity=9.81) {
    this.gravity = gravity
  }
  //heat conversion 
  convertFtoC(value){
    return (value-32)*5/9;
  }
  convertCtoF(value){
    return (value*9/5)+32;
  }
  convertCtoK(value){
    return value+273.15;
  }
  convertKtoC(value){
    return value-273.15;
  }
  convertFtoK(value){
    return (value-32)*5/9+273.15
  }
  convertKtoF(value){
    return (value-273.15)*9/5+32
  }
  //length conversion
  convertMtoFT(value){
    return value*3.28084;
  }
  convertFTtoM(value){
    return value*(1/3.28084);
  }
  convertINtoCM(value){
    return value*2.54;
  }
  convertCMtoIN(value){
    return value/2.54;
  }
  convertMtoIN(value){
    return value/0.0254;
  }
  convertINtoM(value){
    return value*0.0254;
  }
  convertCMtoM(value){
    return value/100;
  }
  convertMtoCM(value){
    return value*100;
  }
  //physics calculation 
  force(mass,acceleration) {
    return mass*acceleration;
  }
  pressure(force,area){
    return force/area;
  }
  energy(mass,velocity){
    return 0.5*mass*velocity**2;
  }
  momentum(mass,velocity){
    return mass*velocity;
  }
  liquid_pressure(area,height,density){
    return area*height*this.gravity*density;
  }
  friction(force,coeff){
    return force*coeff;
  }
  acceleration(velocity,time){
    return velocity*time;
  }
  potential_energy(mass,height){
    return mass*this.gravity*height;
  }
  torque(radii,force){
    return radii*force;
  }
}

class SwoopTest {
  constructor() {
    this.tests = [];
  }
  addTest(name,fn){
    this.tests.push({name,fn})
  }
  runTests(){
    this.tests.forEach((test)=>{
      try {
        test.fn()
        console.log(`passed ${test.name} ✓`)
      } catch (error) {
        console.log(`Failed:${test.name}-${error.message}`)
      }
    })
  }
  assertEqual(a,b){
    if (a!==b) {
      throw new Error(`expected ${b} but got ${a}`)
    }
  }
  assertNotEqual(a,b,messagpe){
    if (a===b) {
      throw new Error(`expected ${b} but got ${a}`)
    }
  }
  assertGreaterThan(a,b,message){
     if (a<=b) {
       throw new Error(`expected ${b} but got ${a}`)
     }
  }
  assertLessThan(a,b,message){
     if (a>=b) {
       throw new Error(message)
     }
  }
}

class SwoopCache {
  constructor(TTL=60000){
    this.cache={}
    this.TTL = TTL;
  }
  setCacheData(key,value){
    this.cache[key]={
      value,
      expires:Date.now()+this.TTL
    }
  }
  getCachedData(key){
    const cache = this.cache[key];
    if (!cache || cache.expires<Date.now()){
      delete this.cache[key];
      return null;
    }
    return cache.value;
  }
  deleteCachedData(key){
    delete this.cache[key];
  }
  clearCachedData(){
    this.cache={};
  }
}
