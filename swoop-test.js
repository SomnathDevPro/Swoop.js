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
