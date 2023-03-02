<script setup>
    import { ref } from 'vue';

    const showModal = ref(false);
    const newNote = ref("")
    const notes = ref([])
    const errorMessage  = ref("")
    function getRandomColor() {
        return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
   
}
    const addNote = () => {
        if(newNote.value.length>9){
            notes.value.push({
            id: Math.floor(Math.random() * 30000),
            text:newNote.value,
            date:new Date(),
            color: getRandomColor(),
        })
        showModal.value = false;
        newNote.value  = ""
        errorMessage.value = ""
        }
        else{
            debugger
            
            return errorMessage.value = "note not complted"
        }
       
    }
     const  closeNote= () =>{
        showModal.value = false;
        newNote.value  = ""
        errorMessage.value = ""
     }
</script>
<template>
    <h1>{{ showModal }}</h1>
{{ notes }}
    <div  class="body-wrap">
        <div v-show="showModal" class="modal-form">
            
            <div class="modal-body">
                
                    <textarea name="" v-model.trim="newNote" id="" cols="30" rows="10"></textarea>
                    <p  v-if ="errorMessage">Charecter should be more than 10</p>
                    <button @click=addNote()>Add Note </button>

                    <button @click="closeNote();">Close</button>
             
            </div>
        </div>
        <div class="container">
        
        <main>
            <h1>Notes</h1>
        <button @click="(showModal= true)">+</button>
        <ul class="list-unstyled d-flex">
            <li 
            v-for = "note in notes" 
            :key="note.id" > 
                <!-- notes in note itirate over each item of note -->
                <div class="card" :style="{backgroundColor:note.color}">
                    <h5> {{ note.text }} </h5>
                    <p>{{ note.date.toLocaleDateString("en-US") }}</p>
                </div>
            </li>
            
        </ul>
    </main>
    </div>
    </div>
  
   
</template>

<style scoped>
.body-wrap{
    position: relative;
    height: 100vh;
}
button{
    background-color: yellowgreen;
    color: white;
    padding: 10px;
}
main ul{
    flex-wrap: wrap;
}
    main ul li{
        padding: 10px;
        flex: 2;
    }
    main ul li:nth-child(odd) .card{
  
    }
    main ul li:nth-child(odd){
   
    }
    .modal-form{
        background-color: #3d3d3d4c;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 999;
    }
    .modal-body{
        background-color: white;
        width: 50%;
        margin:0 auto;
    }
</style>