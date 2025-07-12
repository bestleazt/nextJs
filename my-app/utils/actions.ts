'use server'

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export const createCamps = async(prevState:any,formData:FormData)=>{
  console.log('====================================');
  console.log(prevState);
  console.log('===================================='); 
  await new Promise((resolve) => {
    setInterval(resolve, 1000);
  });
    const rawData = Object.fromEntries(formData)
    console.log(rawData);
    // revalidatePath('/camp')
    // redirect('/')
    return 'Create Camp Success !!!'
};
export const fetchCamp = async()=>{
   const camps = [
        { id:1, title:'โคราช'},
        { id:2, title:'สระบุรี'},
        { id:3, title:'นครนายก'},
    ];
    return camps;
};