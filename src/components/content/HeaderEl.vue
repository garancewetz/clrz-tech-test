<template>
  <div class="-z-10 relative bg-hero-header -mt-24 lg:-mt-32 bg-center bg-cover h-[859px] lg:h-[1500px]">
    <div class="container mx-auto px-4 pt-32 lg:pt-60"> 
      <div class="text-center  mx-auto mb-36">
        <p class="text-orange-500 mb-5">Du JAMAIS VU (enfin jusqu’à maintenant, du coup)</p>
        <h1 class="text-dark-500 font-medium text-1.5xl lg:text-5xl">Avec Vision.R, travaillez au bureau... <br>comme si vous étiez encore à la maison&nbsp;! </h1>
      </div>
      <div class="absolute -bottom-4 right-6 lg:relative lg:flex lg:justify-end"> 
       <StickerEl color="bg-orange-500">
         <div class="text-white text-center transform rotate-[10deg]">
           <p class="uppercase text-xs lg:text-lg">Offre spéciale</p>
           <p class="font-bold text-3xl lg:text-4xl">799,99€*</p>
           <p class="font-light text-xxs lg:text-sm">*au lieu de 1.499,99€</p>
         </div>
       </StickerEl>
       </div>
    </div>
  </div>
</template>

<script>
import { StickerEl } from './../ui'

export default {
  name: 'App',
  components: {
    StickerEl
  }
}
</script>
