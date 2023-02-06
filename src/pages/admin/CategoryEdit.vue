<template>
    <form @submit.prevent="submit" >
      <label>category ID</label>
      <input type="text" name="Category ID" v-model="CategoryID"                
      />
      <label>Category Name</label>
      <input type="text" name="Category Name" v-model="CategoryName" 
      />
      
      <button>Save</button>
  </form>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  export default {
      name: "categoryEdit",
      props: ['id'],
      setup() {
         const categoryName = ref(''); 
         const CategoryName = ref('');
         const router = useRouter();
         const route = useRoute()
         onMounted(async() => {
             const res = await fetch(`http://localhost:3000/api/categorys/${route.params.id}`);
             const category = await res.json();
             categoryName.value = category.categoryName;
             CategoryName.value = category.CategoryName;
             
         })
  
         const submit = async () => {
             await fetch(`http://localhost:3000/api/categorys/${route.params.id}`, {
                 method: 'PUT',
                 headers: {"Content-type": "application/json"},
                 body: JSON.stringify({ 
                     categoryName: categoryName.value,
                     CategoryName: CategoryName.value,
                    
                  })
             });
  
             await router.push('/admin/categorys');
         }
         
         return {categoryID, CategoryName, submit}
      }
      
  }
  </script>
  