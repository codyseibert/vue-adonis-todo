<template>
  <Panel title="Projects">
    <div
      class="project mt-2"
      v-for="project in projects"
      :key="project.id"
    >
      <EditableRecord
        :isEditMode="project.isEditMode"
        :title="project.title"
        @onInput="setProjectTitle({
          project,
          title: $event,
        })"
        @onEdit="setEditMode(project)"
        @onSave="saveProject(project)"
        @onDelete="deleteProject(project)"
      />
    </div>
    <CreateRecord
      placeholder="My project name...."
      @onInput="setNewProjectName"
      :value="newProjectName"
      @create="createProject"
    />
  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  mounted() {
    this.fetchProjects();
  },
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
  },
};
</script>

<style>
.project {
  font-size: 24px;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  color: #333;
}
</style>
