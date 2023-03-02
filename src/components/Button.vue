
<template>
    <button @click="onClick()">{{buttontext}}</button>
</template>

<script setup lang="ts">

import '../assets/scss/main.scss'
    defineProps<{
        buttontext:string,
       
    }>()
    function onClick() {
            console.log("add")
        }
// export default{
//     props:{
//         buttontext:String,
        
//     },
//     methods:{
//         onClick(){
//             console.log("added");
//         }
//     },

    
// }
    
    
  
    
</script>