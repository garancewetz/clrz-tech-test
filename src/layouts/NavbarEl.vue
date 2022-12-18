<template>
  <navbar class="lg:flex justify-between container px-4 mx-auto mt-10 max-w-6xl">
    <a href="/">
      <div class="text-dark-500 font-medium text-center text-2xl lg:text-left">Vision.R</div>
    </a>
    <div class="hidden lg:block">
      <ul class="flex items-center space-x-4.5">
        <a href="#solution" class="cursor-pointer">
          <li class="text-dark-500 hover:text-orange-500 transition duration-200 py-3 px-4.5">Low Solution</li>
        </a>
        <a href="#technology" class="cursor-pointer">
          <li class="text-dark-500 hover:text-orange-500 transition duration-200 py-3 px-4.5">Low Technology</li>
        </a>
        <a href="#price" class="cursor-pointer">
          <li class="text-dark-500 hover:text-orange-500 transition duration-200 py-3 px-4.5">High Price</li>
        </a>
        <li class="ml-4.5">
          <modal-el 
            name="nav-modal"
            buttonText="Buy it" 
            buttonClass="orange">
            <div class="text-center max-w-4xl">
              <img src="./../assets/images/icons/speak-no-evil-monkey.png" class="mb-6 mx-auto" alt="Monkey emoji" />
              <h3 class="text-dark-500 font-medium text-1.5xl lg:text-3.5xl mb-6">Vous y avez (vraiment?) cru ?</h3>
              <p class="text-base lg:text-1.5xl text-dark-500 mb-6">En tout cas, on espère que ça vous a fait sourire, parce qu’on en a bien besoin en ce moment. <span class="font-bold">Et sinon, vous avez sûrement des produits plus intéressants à vendre.</span></p>
              <p class="text-dark-500 text-base lg:text-1.5xl">Ça tombe bien, nos équipes sont plus fortes en communication digitale qu’en innovations en carton.</p>
            </div>
          </modal-el>
        </li>
      </ul>
    </div>
  </navbar>
</template>


<script>
import { ModalEl } from './../components/ui'

export default {
  name: 'App',
  components: {
     ModalEl
  }
}
</script>
