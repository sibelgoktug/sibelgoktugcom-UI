<template>
  <Header />
  <TopContent />
  <CenterContent />
</template>

<script>
import Header from '~/components/layout/header.vue';
import TopContent from '~/components/home/TopContent.vue';
import CenterContent from '~/components/home/CenterContent.vue';
export default {
  name: "HomePage",
  components: {
    Header,
    TopContent,
    CenterContent
  },
};
</script>
