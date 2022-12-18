<template>
   <div 
   :class="color" 
   class="h-[154px] w-[154px] lg:h-[227px] lg:w-[227px] rounded-full flex items-center justify-center relative shadow p-5">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'bg-dark-500'
      }
    }
  }
</script>
