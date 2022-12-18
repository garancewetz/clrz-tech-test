<template>
  <div class="overflow-hidden">
    <!-- navbar -->
    <navbar-el/>

    <!-- header -->
    <header-el/>

    <!-- content page -->
    <section class="container mx-auto px-4 py-12 lg:pt-22 lg:pb-10 max-w-6xl">
      <div class="text-center text-dark-500 lg:font-medium mb-6 lg:mb-8 max-w-4xl mx-auto text-base lg:text-1.5xl">
        <p class="inline lg:block">Vision.R with a grand “R” like in the mot “Revolution” !&nbsp;</p>
        <p class="inline lg:block">You are afraid to feel déstabilized with the futur retour au bureau&nbsp;?&nbsp;</p> 
        <p class="inline lg:block">With <span class="hidden lg:inline">Vision.R</span><span class="lg:hidden">rScreenz</span>, be rassuré.e.s ! Get instant, real time, high resolution, social videocall and feel comme à la maison. Bref, get ready to faire un carton !</p>
      </div>
      <div class="text-center">
        <modal-el 
          name="buy-it-modal"
          buttonText="Buy it now" 
          buttonClass="large orange">
             <div class="text-center max-w-4xl">
              <img src="./assets/images/icons/speak-no-evil-monkey.png" class="mb-6 mx-auto" alt="Monkey emoji" />
              <h3 class="text-dark-500 font-medium text-1.5xl lg:text-3.5xl mb-6">{{modal.title}}</h3>
              <div v-html="modal.paragraph"></div>
            </div>
        </modal-el>
      </div>
    </section>

    <div id="solution"/>
    <section class="relative lg:h-[607px] mb-5 lg:mb-12">
      <div class="container mx-auto h-full px-4 lg:flex items-center max-w-6xl">
        <div class="lg:w-[500px] mb-11 lg:mb-0">
          <h2 class="text-dark-500 font-medium text-1.5xl text-center lg:text-left lg:text-3.5xl mb-3.5 lg:mb-5">The most advanced <span class="block lg:inline">technology</span></h2>
          <p class="text-dark-500 text-base text-center lg:font-medium lg:text-justify lg:text-1.5xl">Only 3mm of Carton-Plume de qualité for une expérience maximale ! We travelled all around the world, we rencontred all the Carton-Plume Masters to rapporter only the best.</p>
        </div>
        <div class="-mx-4 lg:mx-0">
          <img 
            src="./assets/images/illustrations/meet-dolphins.png" 
            alt="Screen meet with dolphins" 
            width="814" 
            height="607"
            class="lg:absolute lg:left-1/2 right-0 lg:inset-y-0"/>
        </div>
      </div>
    </section>

    <carousel-el 
      name="images-carousel"
      height="max-h-[700px] h-auto"
      >
      <div 
        class="carousel-item" 
        v-for="(slide, index) in images" 
        :key="index"
        :class="index === 0 && 'active'" >
        <img 
          :src="slide.src"  
          class="d-block w-100" 
          width="1440" 
          height="700" 
          :alt="slide.alt">
      </div>
    </carousel-el>

    <section class="container mx-auto px-4 max-w-6xl pt-13 pb-5 lg:py-22">
      <div class="text-center">
        <h3 class="text-dark-500 text-xxs lg:text-1.5xl font-medium mb-1 lg:mb-4">With your Vision.R</h3>
        <h2 class="text-orange-500 text-3xl lg:text-5xl font-medium">Get ready to any situation&nbsp;!</h2>
      </div>
    </section>

    <div id="technology"/>
    <section class="relative lg:h-[790px]">
      <div class="container mx-auto h-full px-4 lg:flex items-center max-w-6xl pb-14 lg:pb-0">
         <div class="lg:w-1/2 -mx-4 md:mx-0 mb-7.5 lg:mb-0">
          <img 
          src="./assets/images/photos/meet-black-screen.png" 
          alt="Meet screen" 
          width="710" 
          height="790"
          class="lg:absolute lg:right-1/2 left-0 lg:inset-y-0  md:mx-auto"/>
        </div>
        <div class="lg:w-[500px] lg:pl-40">
          <div>
            <img src="./assets/images/icons/lock.svg" alt="lock icon" width="43" height="45" class="mb-6"/>
          </div>
          <h2 class="text-dark-500 font-medium text-1.5xl lg:text-3.5xl mb-5">
            The pudique (or je suis en pyjama et j’assume pas) 
            effect
              <span class="text-base lg:text-1.5xl align-top">(1)</span>
            </h2>
          <p class="hidden lg:block text-dark-500 font-medium text-justify text-1.5xl">With our no camera mode, you can be wherever you want and be en pyjama in totale discretion with professionnalisme.</p>
          <p class="block lg:hidden text-dark-500 text-justify text-base">Start from zero, choose your background and create your new life while impressing the collègues.</p>
        </div>
      </div>
    </section>

    <section class="bg-grey-200">
      <div class="container mx-auto px-4 max-w-6xl pt-22">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-dark-500 text-3xl lg:text-5xl font-medium mb-5 lg:mb-7.5">Whatever your style, you will forcément find your bonheur</h2>
        </div>
      </div>
      <div class="lg:h-[560px] relative">
        <div class="text-center pointer-events-auto">
          <modal-el 
            name="vision-r-modal"
            buttonText="Choose your Vision.R" 
            buttonClass="large orange">
            <div class="text-center max-w-4xl">
              <img src="./assets/images/icons/speak-no-evil-monkey.png" class="mb-6 mx-auto" alt="Monkey emoji" />
              <h3 class="text-dark-500 font-medium text-1.5xl lg:text-3.5xl mb-6">{{modal.title}}</h3>
              <div v-html="modal.paragraph"></div>
            </div>
          </modal-el>
        </div>
        <div class="flex justify-center lg:absolute inset-0 pointer-events-none">
          <img 
            src="./assets/images/photos/meet-cut-1.png" 
            height="560" 
            width="259" 
            class="w-[10%] h-auto lg:w-auto" 
            alt="Meet screen cut"/>
          <img 
            src="./assets/images/photos/meet-biere.png" 
            height="560" 
            width="922" 
            class="w-4/5 h-auto lg:w-auto" 
            alt="Meet screen"/>
          <img 
            src="./assets/images/photos/meet-cut-2.png" 
            height="560" 
            width="259" 
            class="w-[10%] h-auto lg:w-auto" 
            alt="Meet screen cut"/>
        </div>
      </div>
    </section>

    <section class="bg-orange-500">
      <div class="container py-12 lg:py-24 mx-auto px-4 max-w-6xl flex items-center justify-center h-full">
        <carousel-el 
          name="citation-carousel"
          height="max-h-full h-[200px] lg:h-[250px] pointer-events-none"
          >
          <div 
            v-for="(citation, index) in citations" 
            :key="index"
            class="carousel-item" 
            :class="index === 0 && 'active'" >
              <div class="text-white text-center max-w-4xl mx-auto">
                <h3 class="text-1.5xl lg:text-3.5xl font-medium mb-3.5 lg:mb-5 ">{{citation.title}}</h3>
                <p class="text-base italic">{{citation.author}}</p>
              </div>
          </div>
        </carousel-el>
      </div>
    </section>

    <div id="price"/>
    <section class="container mx-auto px-4 max-w-6xl pt-12 pb-14 lg:py-24">
      <h2 class="text-dark-500 text-3xl lg:text-5xl font-medium text-center max-w-4xl mx-auto mb-10 lg:mb-18">Some indispensables accessoires to optimize your experience</h2>
      <div class="flex md:justify-center overflow-auto -mx-4 lg:mx-0 px-10 lg:px-0">
        <div class="flex justify-center w-fit lg:w-auto lg:grid grid-cols-3 gap-5">
         <a 
          v-for="(product, index) in products" 
          :href="product.link" 
          :key="index">
          <card-el 
            :key="index"
            classes="h-full w-[245px] lg:w-auto"
            :class="index === 1 ? '' : ''"
            :image="product.image" 
            :description="product.description"
            :price="product.price"></card-el>
          </a>
        </div>
      </div>
    </section>

    <!-- footer -->
    <FooterEl/>
  </div>
</template>

<script>
import { NavbarEl, FooterEl } from './layouts'
import { CarouselEl, CardEl, ModalEl } from './components/ui'
import HeaderEl from './components/content/HeaderEl.vue'

export default {
  name: 'App',
  components: {
    NavbarEl, 
    FooterEl,
    HeaderEl, 
    CarouselEl,
    CardEl,
    ModalEl
  },
  data() {
    return {
      images: [
        {
          src: require('./assets/images/photos/team-meet-1.png'),
          alt: 'Vision.R team'
        },
        {
          src: require('./assets/images/photos/team-meet-2.png'),
          alt: 'Vision.R team'
        },
        {
          src: require('./assets/images/photos/team-meet-3.png'),
          alt: 'Vision.R team'
        }
      ],
      citations: [
        {
          title: '“ Le grand écart technologique que tout le monde attendait ! ”',
          author: 'Jean-Claude Van Damme'
        },
        {
          title: '“C\'est une belle chose d\'être honnête, mais il est également important d\'avoir raison.”',
          author: 'Winston Churchill'
        },
        {
          title: '“ Hakuna Matata ! ”',
          author: 'Timon & Pumba'
        }
      ],
      products:  [
        {
          image: require('./assets/images/photos/products/dog-hat.png'),
          description: "The funny filter kit (D’jeuns friendly)" ,
          price: "199,00 €",
          link: "https://www.amazon.com/dog-hats/b?ie=UTF8&node=2975321011"
        },
        {
          image: require('./assets/images/photos/products/meet-screen.png'),
          description:"Screen camera off" ,
          price: "229,00 €",
          link: "https://en.wikipedia.org/wiki/Black_screen_of_death"
        },
        {
          image: require('./assets/images/photos/products/charentaise.png'),
          description: "The Charentaiz (Yeuv Friendly)",
          price: "349,95 €",
          link: "https://fr.wikipedia.org/wiki/Charentaise"
        }
      ],
      modal: {
        image : require('./assets/images/icons/speak-no-evil-monkey.png'),
        title: "Vous y avez (vraiment?) cru ?",
        paragraph: '<p class="text-base lg:text-1.5xl text-dark-500 mb-6">En tout cas, on espère que ça vous a fait sourire, parce qu’on en a bien besoin en ce moment. <span class="font-bold">Et sinon, vous avez sûrement des produits plus intéressants à vendre.</span></p><p class="text-dark-500 text-base lg:text-1.5xl">Ça tombe bien, nos équipes sont plus fortes en communication digitale qu’en innovations en carton.</p>'
      }
    }
  }
}
</script>

