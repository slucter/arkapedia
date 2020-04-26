<template>
    <div class="co-section">
        <ShipSection />
        <PaySection />
    </div>
</template>

<script>
import ShipSection from './ShipSection.vue';
import PaySection from './PaySection.vue';

export default {
  name: 'CoMain',
  components: {
    ShipSection,
    PaySection,
  },
};
</script>

<style scoped>
.co-section{
    width: 100%;
    /* background-color: rgba(199, 199, 199, 0.3); */
    display: flex;
}
</style>
