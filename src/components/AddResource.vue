<template>
  <BaseDialog
    v-if="inputIsInvalid"
    title="Input is invalid"
    @close="closeDialog"
  >
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <BaseButton @click="closeDialog">OK</BaseButton>
    </template>
  </BaseDialog>

  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>

        <textarea
          name="description"
          id="description"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" v-model="link" />
      </div>
      <div>
        <BaseButton type="submit">Add Resource</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
import BaseDialog from './BaseDialog.vue';
export default {
  inject: ['addNewRes'],
  components: {
    BaseDialog,
  },
  data() {
    return {
      title: '',
      description: '',
      link: '',
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      if (
        this.title.trim() === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addNewRes(this.title, this.description, this.link);
      this.title = '';
      this.description = '';
      this.link = '';
    },
    closeDialog() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
