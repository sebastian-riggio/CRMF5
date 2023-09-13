export const  autoGenerateCode = ():string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
  
    return `-${year}${month}${day}`
   
}
