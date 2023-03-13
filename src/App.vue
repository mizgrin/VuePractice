

<template>
  <header>
 
  <div class="container">
      <nav>
        
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/reactiontimer">Timer</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
       <RouterLink to = "/testpage">Test</RouterLink>
       <!-- <RouterLink to = "/counter">Counter</RouterLink> -->
        <RouterLink to = "/tasktracker">View Task Tracker</RouterLink>
        <RouterLink to = "/notes">Notes</RouterLink>
        <RouterLink to="/quiz">Quiz</RouterLink>
      </nav>
    </div>

  </header> 
  <Tasks  :task="data().task"/>
  <RouterView />


</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import Tasks from './components/Tasks.vue'
import Notes from './views/Notes.vue';
import './assets/scss/main.scss'
function data()
{
  return{
    task:[{
    userId: 1,
    id: 1,
    text: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit,",
    day: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto,",
    reminder:true,
  },
  {
    userId: 1,
    id: 2,
    text: "qui est esse",
    day: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    reminder:true,
  },
  {
    userId: 1,
    id: 3,
    text: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    day: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    reminder:true,
  },],
  }
}
</script>