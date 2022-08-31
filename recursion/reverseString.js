class reverseString{
  
    constructor(){
      let length = 0;
      let r = 0;
    }
  
    reverse(str){
      
      if(this.length >= this.r){
        return str;
      }
      this.r = str[str.length-this.length];
      this.length++;
      console.log(this.length);
      let temp = str[this.length];
      str[this.length] = str[this.r];
      str[this.r] = temp;
      this.reverse(str[this.length])
      
      // let temp = str[this.length-1];
      // str[this.length-1] = str[this.length+1];
      // str[this.length+1] = temp;
    
    }
  }
  
  const c = new reverseString();
  
  console.log(c.reverse('apple'));
  