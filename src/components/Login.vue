<script>
import { ref } from 'vue';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const key = '@McQfTjWnZr4u7x!A%D*F-JaNdRgUkXp';
const iv = 'aL?;+EWW9iaCPp{e';

export default {
  setup() {

    let loginData = {
      email: "",
      password: ""
    }

    return {
      loginData
    }
  },

  methods: {

    aesEncrypt(txt) {
      const cipher = CryptoJS.AES.encrypt(txt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        format: CryptoJS.format.Hex,
        padding: CryptoJS.pad.Pkcs7
      })

      //this.stringa_tre = cipher.toString()

      return cipher.toString()
    },
    aesDencrypt(txt) {
      const cipher = CryptoJS.AES.decrypt(txt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        format: CryptoJS.format.Hex,
        padding: CryptoJS.pad.Pkcs7
      })

      //this.stringa_quattro = CryptoJS.enc.Utf8.stringify(cipher).toString()

      return cipher.toString(CryptoJS.enc.Utf8)
    },
    createPost() {
      console.log('Dio porco');
      axios
        .post('http://113.30.150.109:3000/auth/sign-in', this.aesEncrypt(JSON.stringify(this.loginData)), {headers: {"Content-Type": "text/plain"}})
        .then((res) => {
          console.log(JSON.parse(this.aesDencrypt(res.data)));
        })
        .catch((error) => {
          console.log(this.aesDencrypt(error.response.data));
        })
    }
  }
}
</script>

<template>
  <main>
    <!-- <div style="position: absolute; top: 200px; left: 300px; background-color: white; padding: 3rem;">
              <input type="text" v-model="stringa_uno">
              <input type="text" v-model="stringa_due">

              <button @click="aesEncrypt(stringa_uno)">Crypta</button>
              <button @click="aesDencrypt(stringa_tre)">Decrypta</button>

              <p>{{ stringa_tre }}</p>
              <p>{{ stringa_quattro }}</p>
            </div> -->

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
