<template>
  <form @submit.prevent="submit" >
    <label>Product Name</label>
    <input type="text" name="ProductName" v-model="ProductName"                
    />
    <label>Category Name</label>
    <input type="text" name="CategoryName" v-model="CategoryName" 
    />
  
    <button>Add Product</button>
</form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: "ProductCreate",
    setup() {
       const ProductName = ref(''); 
       const CategoryName = ref('');
      
       const router = useRouter();

       const submit = async () => {
           await fetch('http://localhost:3000/api/products', {
               method: 'POST',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   ProductName: ProductName.value,
                   CategoryName: CategoryName.value,
                   details: details.value,
                   price: price.value
                })
           });

           await router.push('/admin/products');
       }
       
       return {ProductName, CategoryName, submit}
    }
    
}
</script>

<style>

</style>