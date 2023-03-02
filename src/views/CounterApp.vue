
<!-- <script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
    const addToCount = () =>{
        console.log("click")
         count.value = count.value + 1;
    }
    const substractFromCount = () =>{
        count.value = count.value - 1;
    }
</script> -->
<script>
    export default ({ 
        data(){ // define data variable here
            return{
                count: 0
            }
        },
        methods: { // define functions here
            addToCount(){
                console.log("here")
                this.count = this.count + 1;
            },
            substractFromCount(){
                console.log("here")
                this.count = this.count - 1;
            }
        }
    })
</script>
<template>
    <div class="counter-pp">
        <button @click = substractFromCount()>-</button>
        <h1>
            {{ count }}
        </h1>
        <button @click = addToCount()>+</button>
    </div>
   
</template>

