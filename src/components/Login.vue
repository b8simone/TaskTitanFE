<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  data() {
    // const doLogin = () => {
    //   alert('not today...')
    // }

    const loginData = ref({
      email: '',
      password: ''
    })

    return {
      loginData
    }
  },

  methods: {
    createPost() {
      axios
        .post('http://113.30.150.109:3000/auth/sign-in', this.loginData)
        .then((response) => console.log(response))
    }
  }
}
</script>

<template>
  <main>
    <div class="login_container">
      <div id="form">
        <form @submit.prevent="createPost">
          <label for="email">Email</label>
          <input id="email" v-model="loginData.email" placeholder="elon@musk.io" />

          <label for="password">Password</label>&nbsp;
          <input id="password" v-model="loginData.password" placeholder="**********" />

          <button @click="createPost">Log in</button>
        </form>
      </div>
    </div>
  </main>
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

main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
  height: 100vh;
}

.login_container {
  /* aspect-ratio: 3 / 4; */
  padding: 1rem;
  border-radius: 5px;
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#form {
  background-color: var(--blue);
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px var(--blue5);
  color: var(--white);
  width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

#form label,
#form input {
  outline: none;
  width: 100%;
}

#form label {
  color: var(--white);
  font-size: 1em;
}

#form input {
  background-color: transparent;
  border: none;
  color: var(--white);
  font-size: 1em;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  box-shadow: 0px 0px 7px 0px var(--blue5);
  border-radius: 5px;
  padding: 0.5rem;
}

#form ::placeholder {
  color: var(--white);
  opacity: 0.3;
}

#form button {
  background-color: var(--white);
  cursor: pointer;
  border: none;
  padding: 1rem;
  transition: background-color 0.2s ease-in-out;
  width: 50%;
}

#form button:hover {
  background-color: var(--blue5);
}

@media screen and (max-width: 600px) {
  #form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  #form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}
</style>
