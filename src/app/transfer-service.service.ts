import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferServiceService {

  constructor(private http: HttpClient) { }

  private data;
  private carFaxObjects;
  
  setCarFax = () =>{
    let ans;
    console.log(`SETCARFAX ran`)
   fetch('http://localhost:3005/')
   .then(res => res.json())
   .then(d => {
    console.log(`GEEEEZ ${d}`)
    ans = d
    return ans
     
   })
   
     //let val  = JSON.stringify(res)
    //this.carFaxObjects = val 
    //return this.carFaxObjects
  
  //return this.carFaxObjects
  }

  setData = (data) => {
    this.data = data
  }
  getData = () => {
    let temp = this.data;
    //this.clearData();
    return temp;
  }

  clearData = () => {
    this.data = undefined;
  }

 getExp = (objs) =>{
  return objs.sort((a,b) => {
    return b.price.replace(/\D/g, '')  - a.price.replace(/\D/g,"") 
  })
 }

  getFilteredPrice = (objs) =>{

    return objs.sort((a,b) => {
      return a.price.replace(/\D/g, '')  - b.price.replace(/\D/g,"") 
    })
   }

   getBetweenTen = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 10000 && obj.price.replace(/\D/g, '') < 20000 
    })

   }

   getBetweenTwenty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 20000 && obj.price.replace(/\D/g, '') < 30000 
    })

   }

   getBetweenThirty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 30000 && obj.price.replace(/\D/g, '') < 40000 
    })

   }

   getBetweenFourty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 40000 && obj.price.replace(/\D/g, '') < 50000 
    })

   } 

   getBetweenFifty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 50000 && obj.price.replace(/\D/g, '') < 60000 
    })

   }

   getBetweenSixty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 60000 && obj.price.replace(/\D/g, '') < 70000 
    })

   }

   getBlackCars = (objs) =>{
     return objs.filter((obj) =>{
       console.log(obj.multi);
       return obj.multi[2].replace(/(Color:)/g,"").trim() == 'Black' 
     })

   }

   getWhiteCars = (objs) =>{
    return objs.filter((obj) =>{
      console.log(obj.multi);
      return obj.multi[2].replace(/(Color:)/g,"").trim() == 'White' ||   obj.multi[2].replace(/(Color:)/g,"").trim() == 'white'
    })

  }

  getRedCars = (objs) =>{
    return objs.filter((obj) =>{
      console.log(obj.multi);
      return obj.multi[2].replace(/(Color:)/g,"").trim() == 'Red' ||   obj.multi[2].replace(/(Color:)/g,"").trim() == 'red'
    })

  }

  getBlueCars = (objs) =>{
    return objs.filter((obj) =>{
      console.log(obj.multi);
      return obj.multi[2].replace(/(Color:)/g,"").trim() == 'Blue' ||   obj.multi[2].replace(/(Color:)/g,"").trim() == 'blue'
    })

  }

  getGrayCars = (objs) =>{
    return objs.filter((obj) =>{
      console.log(obj.multi);
      return obj.multi[2].replace(/(Color:)/g,"").trim() == 'Gray' ||   obj.multi[2].replace(/(Color:)/g,"").trim() == 'gray'
    })

  }

  getOtherCars = (objs) =>{
     //let arr = ['Black', 'White', 'Red', 'Blue', 'Gray'];
     return objs.filter((obj) =>{
      console.log(obj.multi);
      return obj.multi[2].replace(/(Color:)/g,"").trim() != 'Gray' &&   obj.multi[2].replace(/(Color:)/g,"").trim() != 'White' &&  obj.multi[2].replace(/(Color:)/g,"").trim() != 'Red' && obj.multi[2].replace(/(Color:)/g,"").trim() != 'Black' && obj.multi[2].replace(/(Color:)/g,"").trim() !== 'Blue'
    })


  }


  getLowestMileage = (objs) =>{
    return objs.sort((a,b) =>{
      return a.multi[0].replace(/\D/g, "") - b.multi[0].replace(/\D/g, "")
    })
  }

  getLessThanTwenty = (objs) =>{
    return objs.filter((obj) =>{
      return obj.multi[0].replace(/\D/g,"") <= 20000
    })
  }


  getLessThanFourty = (objs) =>{
    return objs.filter((obj) =>{
      return obj.multi[0].replace(/\D/g,"") <= 40000
    })
  }




}

