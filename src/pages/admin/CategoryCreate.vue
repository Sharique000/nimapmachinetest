<template>
    <form @submit.prevent="submit" >
     
      <label>Category Name</label>
      <input type="text" name="CategoryName" v-model="CategoryName" 
      />
    
      <button>Add category</button>
  </form>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
      name: "categoryCreate",
      setup() {
         const categoryName = ref(''); 
        
         const router = useRouter();
  
         const submit = async () => {
             await fetch('http://localhost:3000/api/categorys', {
                 method: 'POST',
                 headers: {"Content-type": "application/json"},
                 body: JSON.stringify({ 
                     categoryName: categoryName.value,
                     details: details.value,
                     price: price.value
                  })
             });
  
             await router.push('/admin/categorys');
         }
         
         return {categoryName, submit}
      }
      
  }
  </script>
  
  <style>
  
  </style>