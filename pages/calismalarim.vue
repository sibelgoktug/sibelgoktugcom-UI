<template>
  <Header />
  <Works />
</template>

<script>
import Header from "~/components/layout/header.vue";
import Works from "~/components/studies/MyWorks.vue";
export default {
  name: "worksPage",
  components: {
    Header,
    Works,
  },
};
</script>
