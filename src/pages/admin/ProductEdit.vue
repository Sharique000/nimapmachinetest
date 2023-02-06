<template>
  <form @submit.prevent="submit" >
    <label>Product Name</label>
    <input type="text" name="Product Name" v-model="ProductName"                
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
    name: "ProductEdit",
    props: ['id'],
    setup() {
       const ProductName = ref(''); 
       const CategoryName = ref('');
       const router = useRouter();
       const route = useRoute()
       onMounted(async() => {
           const res = await fetch(`http://localhost:3000/api/products/${route.params.id}`);
           const product = await res.json();
           ProductName.value = product.ProductName;
           CategoryName.value = product.CategoryName;
           
       })

       const submit = async () => {
           await fetch(`http://localhost:3000/api/products/${route.params.id}`, {
               method: 'PUT',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   ProductName: ProductName.value,
                   CategoryName: CategoryName.value,
                  
                })
           });

           await router.push('/admin/products');
       }
       
       return {ProductName, CategoryName, submit}
    }
    
}
</script>
