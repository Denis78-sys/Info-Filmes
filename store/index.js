// store/index.js
import axios from "~/plugins/axios";

export default {
  state: {
    todos: [],
    todo: [],
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    SET_FILME(state, todo){
      state.todo = todo
    },
    
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const response = await axios.get(`?s=SERIES&MOVIES&apikey=6b193e03`); // Adicionei o caractere & antes de "page"
        commit("SET_TODOS", response.data.Search.sort((a, b) => a.Title.localeCompare(b.Title)));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Erro ao obter todos:", error);
        this.$router.push('/error')
      }
    },
    // Buscando por palavra chave
    async fetchBusca({commit, error}, palavraChave){
      try{
        const response = await axios.get(`?apikey=6b193e03&s=${palavraChave}`)
        // eslint-disable-next-line no-console
        console.log('Resposta da API:', response.data);
        if(response.data.Response === "True"){
          commit('SET_TODOS', response.data.Search.sort((a, b) => a.Title.localeCompare(b.Title)))
          // eslint-disable-next-line no-console
        }else{
          // eslint-disable-next-line no-console
          this.$router.push('/nao-encontrado') 
          /* error({ statusCode: 404, message: 'Filme não encontrado' }); */

        }
      }catch (error){
        // eslint-disable-next-line no-console
        console.error("Erro ao obter todos:", error);
        this.$router.push('/error')
      }
    },
    // Buscando página
    async fetchTodoPag({commit}, nPag){
      try{
        const response = await axios.get(`/?s=SERIES&MOVIES&apikey=6b193e03&page=${nPag}`)
    
        commit("SET_TODOS", response.data.Search)
      }catch (error){
        // eslint-disable-next-line no-console
        console.error("Erro ao obter todo:", error);
        this.$router.push('/error')
      }
    },
    // Buscando por ID
    async fetchTodo({ commit }, filmeId) {
      try {
        const response = await axios.get(`/?i=${filmeId}&apikey=6b193e03`);
        commit("SET_FILME", response.data);
        // eslint-disable-next-line no-console
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Erro ao obter todo:", error);
        this.$router.push('/error')
      }
    },
  },
  getters: {
    $allTodos(state) {
      return state.todos;
    },
    $todo(state){
        return state.todo;
    },
    $todoPage(state){
      return state.todos;
    },
  },
}; 
