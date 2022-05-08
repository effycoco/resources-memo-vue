<template>
  <BaseCard>
    <BaseButton @click="currentTab = 'ResourceList'" :mode="resourceListMode">
      Stored Resources
    </BaseButton>
    <BaseButton @click="currentTab = 'AddResource'" :mode="addResourceMode">
      Add Resource
    </BaseButton>
  </BaseCard>
  <KeepAlive>
    <component :is="currentTab"></component>
  </KeepAlive>
</template>

<script>
import BaseButton from './BaseButton.vue';
import ResourceList from './ResourceList.vue';
import AddResource from './AddResource.vue';
export default {
  components: { BaseButton, ResourceList, AddResource },

  data() {
    return {
      currentTab: 'ResourceList',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  computed: {
    addResourceMode() {
      return this.currentTab === 'AddResource' ? '' : 'flat';
    },
    resourceListMode() {
      return this.currentTab === 'ResourceList' ? '' : 'flat';
    },
  },
  methods: {
    addNewRes(title, description, link) {
      const newRes = {
        id: Math.random().toFixed(4),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newRes);
      this.currentTab = 'ResourceList';
    },
    deleteResource(id) {
      const resIndex = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIndex, 1);
    },
  },
  provide() {
    return {
      deleteResource: this.deleteResource,
      storedResources: this.storedResources,
      addNewRes: this.addNewRes,
    };
  },
};
</script>

<style></style>
