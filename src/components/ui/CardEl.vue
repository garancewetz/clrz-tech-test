<template>
    <div :class="classes" class="border border-grey-200">
      <header class="mt-12 mx-10 mb-11">
        <img :src="image" :alt="description" width="315" height="315"/>
      </header>
      <main class="text-center mb-9">
        <h3 class="font-medium text-1.5xl text-black mb-2.5">{{description}}</h3>
        <p class="text-black">{{price}}</p>
      </main>
    </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    description: {
      type: String
    },
    price: {
      type: String
    },
    classes: {
      type: String
    }
  }
}
</script>