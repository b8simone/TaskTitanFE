<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup() {
    const facts = ref([])
    const coins = ref([])
    const poems = ref([])
    const lines = ref([])
    // expose to template and other options API hooks
    return {
      facts,
      coins,
      poems,
      lines
    }
  },

  mounted() {
    axios.get('https://cat-fact.herokuapp.com/facts').then((response) => {
      this.facts = response.data
      console.log(response.data)
    }),
      axios.get('https://api.coinlore.net/api/ticker/?id=90,80').then((response) => {
        this.coins = response.data
        console.log(response.data)
      }),
      axios.get('https://poetrydb.org/title/The Fox').then((response) => {
        this.poems = response.data
        this.lines = response.data
        console.log(this.lines)
        console.log(response.data[0].lines)
      })
    // axios.get('https://api.coingecko.com/api/v3/coins/list').then((response) => {
    //   this.coins = response.data
    //   console.log(response.data)
    // })
  }
}
</script>

<template>
  <div class="home">
    <h1>HOME</h1>

    <div class="container">
      <div class="http_card">
        <h1>GET - CAT FACTS</h1>
        <div v-for="fact in facts" :key="fact._id">
          <h2>{{ facts.indexOf(fact) + 1 }}</h2>
          <p>{{ fact.text }}</p>
        </div>
      </div>

      <div class="http_card">
        <h1>GET - CRYPTO PRICE</h1>
        <div v-for="coin in coins" :key="coin._id">
          <h4>{{ coins.indexOf(coin) + 1 }}</h4>
          <p>{{ coin.name }}</p>
          <p>$ {{ coin.price_usd }}</p>
        </div>
      </div>

      <div class="http_card">
        <h1>GET - POETRY</h1>
        <div v-for="poem in poems" :key="poem.id">
          <h4>{{ poems.indexOf(poem) + 1 }}</h4>
          <p>{{ poem.author }}</p>
          <p>{{ poem.title }}</p>
          <p>{{ poem.lines }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  background-color: var(--blue);
  color: var(--white);
}

.home {
  width: 95%;
  float: right;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid white;
}

.container {
  width: 95%;
  float: right;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 3px solid white;
}

.http_card {
  border: 3px solid white;
  padding: 1rem;
  width: 30%;
}
</style>
