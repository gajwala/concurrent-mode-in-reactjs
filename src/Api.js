export const fetchData = ()=>{
    let namePromise = fetchName();
    let addressPromise = fetchAddress();

    return{
        address:wrapPromise(namePromise),
        name:wrapPromise(addressPromise)
    }
}

const fetchName = ()=>{
    return new Promise((resolve,rejet)=>{
        setTimeout(() => {
            resolve("BalaChandraiah")
        }, 5000);
    })
}
const fetchAddress = ()=>{
    return new Promise((resolve,rejet)=>{
        setTimeout(() => {
            resolve("Paluvaigate Andhrapradesh")
        }, 5000);
    })
}

const wrapPromise=(promise)=>{
  let status="pending";
  let result;
  let suspender = promise.then(
      r=>{
         status="Sucess";
         result = r;
      },e=>{
        status="Error";
        result = e;
      }
  )
  return {
      read(){
          if(status === 'pending'){
              throw suspender;
          } 
          else if(status ==="Error"){
            throw result;
          }else if(status==="Sucess"){
              return result
          }
      }
  }

}