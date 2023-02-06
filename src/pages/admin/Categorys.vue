<template>
    <router-link :to="{ name: 'categoryCreate'}" class="btn">Add category</router-link>
      <table>
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categorys in categorys" :key="categorys._id">
            <td>{{categorys._id}}</td>
            <td>{{categorys.categoryName}}</td>
          
        
            <td>
              <router-link :to="{ name: 'categoryEdit', params: { id: category._id }}" class="btn">Edit</router-link>
              <button @click="del(categorys._id)" class="btn btn-del">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    
    <script>
    
    import {onMounted, ref} from 'vue';
    
    export default {
      name: 'categorys',
      setup() {
        const categorys = ref([]);
    
        onMounted( async () => {
          const res = await fetch('http://localhost:3000/api/categorys');
    
          categorys.value = await res.json();
        })
    
        const del = async (id) => {
          await fetch(`http://localhost:3000/api/categorys/${id}`, {
            method: 'DELETE'
          })
    
          categorys.value = categorys.value.filter(p => p._id !== id);
        }
    
        return { categorys, del }
      }
    }
    </script>
    