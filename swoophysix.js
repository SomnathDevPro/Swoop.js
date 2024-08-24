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
