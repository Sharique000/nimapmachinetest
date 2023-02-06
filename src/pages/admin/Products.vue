<template>
<router-link :to="{ name: 'ProductCreate'}" class="btn">Add Product</router-link>
  <table>
    <thead>
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Category ID</th>
        <th>Category Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product._id">
        <td>{{product._id}}</td>
        <td>{{product.ProductName}}</td>
      
        
        <td>
          <router-link :to="{ name: 'ProductEdit', params: { id: product._id }}" class="btn">Edit</router-link>
          <button @click="del(product._id)" class="btn btn-del">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import {onMounted, ref} from 'vue';

export default {
  name: 'Products',
  setup() {
    const products = ref([]);

    onMounted( async () => {
      const res = await fetch('http://localhost:3000/api/products');

      products.value = await res.json();
    })

    const del = async (id) => {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE'
      })

      products.value = products.value.filter(p => p._id !== id);
    }

    return { products, del }
  }
}
</script>
