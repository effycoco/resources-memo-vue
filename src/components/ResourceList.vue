<template>
  <ul>
    <ResourceListItem
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
      :id="resource.id"
    ></ResourceListItem>
  </ul>
</template>

<script>
import ResourceListItem from './ResourceListItem.vue';
export default {
  components: {
    ResourceListItem,
  },
  inject: ['storedResources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
