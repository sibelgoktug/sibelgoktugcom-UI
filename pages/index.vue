<template>
  <Header />
  <TopContent />
</template>

<script>
import Header from '~/components/layout/header.vue';
import TopContent from '~/components/home/TopContent.vue';
export default {
  name: "HomePage",
  components: {
    Header,
    TopContent
  },
};
</script>
