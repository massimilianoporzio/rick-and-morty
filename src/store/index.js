import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFiltered: []
  },
  mutations: {
    setCharacters(state,payload){
      console.log('characters',payload)
      state.characters = payload
      console.log('characters',state.characters)
    },
    setCharactersFiltered(state,payload){
      state.charactersFiltered = payload
    }
  },
  actions: {
    async getCharacters({commit}) {
      await fetch('https://rickandmortyapi.com/api/character').then(async (response)=>{
        await response.json().then((data)=>{
          commit('setCharacters', data.results)
          commit('setCharactersFiltered', data.results)
        })

      }).catch((error)=>{
        console.log(error)
      })

    },
    filterByStatus({commit,state},status){
      const results = state.characters.filter(c=>c.status.toLowerCase().includes(status.toLowerCase()))
      commit('setCharactersFiltered', results)
    },
    filterByName({commit,state},name)
    {
      const results = state.characters.filter(c=>c.name.toLowerCase().includes(name.toLowerCase()))
      commit('setCharactersFiltered', results)
    }
  },

  modules: {
  }
})
