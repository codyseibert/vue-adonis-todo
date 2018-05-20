// import router from '../router';
import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    projects: [],
    currentProject: null,
    newProjectName: null,
  },
  actions: {
    saveProject({ commit }, project) {
      return HTTP().patch(`projects/${project.id}`, project)
        .then(() => {
          commit('unsetEditMode', project);
        });
    },
    deleteProject({ commit }, project) {
      return HTTP().delete(`projects/${project.id}`)
        .then(() => {
          commit('removeProject', project);
        });
    },
    fetchProjects({ commit }) {
      return HTTP().get('/projects')
        .then(({ data }) => {
          commit('setProjects', data);
        });
    },
    createProject({ commit, state }) {
      return HTTP().post('/projects', {
        title: state.newProjectName,
      })
        .then(({ data }) => {
          commit('appendProject', data);
          commit('setNewProjectName', null);
        });
    },
  },
  getters: {
  },
  mutations: {
    setCurrentProject(state, project) {
      state.currentProject = project;
    },
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProject(state, project) {
      state.projects.push(project);
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProjectTitle(state, { project, title }) {
      project.title = title;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
    unsetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
    removeProject(state, project) {
      state.projects.splice(state.projects.indexOf(project), 1);
    },
  },
};
