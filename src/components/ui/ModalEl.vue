<template>
  <div>
    <!-- Button trigger modal -->
      <div data-bs-toggle="modal" :data-bs-target="`#${name}`">
          <ButtonEl :class="buttonClass">{{buttonText}}</ButtonEl>
      </div>

      <!-- Modal -->
      <div class="modal fade" :id="name" tabindex="-1" :aria-labelledby="name" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered lg:max-w-[910px]">
          <div class="bg-white shadow rounded max-h-full max-w-full px-5 py-5 lg:px-40 lg:py-20 relative">
            <div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                class="h-5 w-5 absolute top-10 right-10 cursor-pointer pointer-events-auto" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import ButtonEl from './ButtonEl.vue'

export default {
  components: {
    ButtonEl
  },
  props: {
    name: { type: String, default: 'modal-name'},
    buttonText: {
      type: String,
      default: 'Click here'
    },
    buttonClass: {
      type: String
    }
  }
}
</script>
