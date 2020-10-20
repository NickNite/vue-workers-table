import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        workers: [],
        loading: true,
        workerDepartment: [],
    },
    actions: {
        getWorkers({ commit }) {
            return axios.get('https://vue-table-518ce.firebaseio.com/tableWorkers/-MJvqDDwQcJ4OCG92F87.json',)
                .then(response =>
                    commit('setWorkers', response.data))
        },
        addWorkers({ commit }, worker) {
            commit('addNewWorker', worker)
            return axios.put('https://vue-table-518ce.firebaseio.com/tableWorkers/-MJvqDDwQcJ4OCG92F87.json', this.state.workers)
        },
    },
    mutations: {
        setWorkers(state, workers) {
            state.workers = workers;
            state.loading = false;

        },
        addNewWorker(state, worker) {
            state.workers.push(worker)
        },
    },
    getters: {
        workerInfo(state) {
            return { workers: state.workers, loading: state.loading, workerDepartment: state.workerDepartment }
        },
        getDeportaments(state) {
            const itemArr = [];
            for (let item of state.workers) {
                let i = Object.values(item);
                itemArr.push(i[0]);
            }
            let result = [];

            for (let str of itemArr) {
                if (!result.includes(str)) {
                    result.push(str);
                }
            }
            return state.workerDepartment = result;

        }
    }
})
export default store;