<template>
  <div>
   <div 
    :id="name" 
    :class="height" 
    class="carousel slide max-w-full" 
    data-bs-ride="carousel">
      <div class="carousel-indicators pointer-events-auto" >
        <button 
          v-for="(slide, index) in length"
          :key="index"
          type="button" 
          :data-bs-target="`#${name}`" 
          :data-bs-slide-to="index" 
          :class="index === 0 ? 'active' : ''" 
          aria-current="true" 
          :aria-label="'Slide'+(Number(index)+1)"></button>
      </div>
      <div class="carousel-inner with-slot">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    data() {
      return {
        length: 0 
      }
    },
    props: {
      name: { type: String, default: "carousel-name" },
      height: { type: String },
      indicators: { type: Boolean, default: true}

    },
    mounted () {
     this.length = document.querySelector('.with-slot').children.length
    },
    methods: {
      
    }
  }
</script>