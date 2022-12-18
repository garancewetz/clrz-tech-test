<template>
  <div 
    class="button-el inline-block cursor-pointer duration transition-200 rounded-full">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    modal: {
      type: Boolean,
      default: false
    }
  }
}
</script>

