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
