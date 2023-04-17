<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    // make users variable reactive with the ref() function
    const people = ref([
      {
        id: '1',
        name: 'Frank',
        last_name: 'Murphy',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '2',
        name: 'Vic',
        last_name: 'Reynolds',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '3',
        name: 'Gina',
        last_name: 'Jabowski',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '4',
        name: 'Jessi',
        last_name: 'Glaser',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '5',
        name: 'Jay',
        last_name: 'Bilzerian',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '6',
        name: 'Frank',
        last_name: 'Murphy',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '7',
        name: 'Vic',
        last_name: 'Reynolds',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '8',
        name: 'Gina',
        last_name: 'Jabowski',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '9',
        name: 'Jessi',
        last_name: 'Glaser',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '10',
        name: 'Jay',
        last_name: 'Bilzerian',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '11',
        name: 'Frank',
        last_name: 'Murphy',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '12',
        name: 'Vic',
        last_name: 'Reynolds',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '13',
        name: 'Gina',
        last_name: 'Jabowski',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '14',
        name: 'Jessi',
        last_name: 'Glaser',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '15',
        name: 'Jay',
        last_name: 'Bilzerian',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '16',
        name: 'Frank',
        last_name: 'Murphy',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '17',
        name: 'Vic',
        last_name: 'Reynolds',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '18',
        name: 'Gina',
        last_name: 'Jabowski',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '19',
        name: 'Jessi',
        last_name: 'Glaser',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '20',
        name: 'Jay',
        last_name: 'Bilzerian',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '21',
        name: 'Frank',
        last_name: 'Murphy',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '22',
        name: 'Vic',
        last_name: 'Reynolds',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '23',
        name: 'Gina',
        last_name: 'Jabowski',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'Admin'
      },
      {
        id: '24',
        name: 'Jessi',
        last_name: 'Glaser',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      },
      {
        id: '25',
        name: 'Jay',
        last_name: 'Bilzerian',
        mobile: '3792266163',
        dob: '19/07/1993',
        type: 'User'
      }
    ])

    const showModal_NewPerson = ref(false)

    return {
      people,
      showModal_NewPerson
    }
  }
}
</script>

<template>
  <main>
    <!-- NEW PERSON FORM -->
    <div v-if="showModal_NewPerson" class="overlay">
      <div class="modal">
        <div class="add_person">
          <button class="close_btn" @click="showModal_NewPerson = false">X</button>

          <h1>Add a Person</h1>

          <form class="person_form" method="GET" action="" id="add-person" name="add-person">
            <!-- PERSONAL INFO -->
            <fieldset>
              <legend>Personal Information</legend>
              <label for="name" id="name-label">
                Name *
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name (required)"
                  required
                />
              </label>
              <br />
              <label for="last-name" id="last-name-label">
                Last Name *
                <br />
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Enter your last name (required)"
                  required
                />
              </label>
              <br />
              <label for="email" id="email-label">
                Email *
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email (required)"
                  required
                />
              </label>
              <br />
              <label for="mobile" id="mobile-label">
                Mobile *
                <br />
                <input
                  type="mobile"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile (required)"
                  required
                />
              </label>
              <br />
              <label for="date" id="date-label">
                DOB *
                <br />
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Enter you date of birth (required)"
                  required
                />
              </label>
              <br />
              <label for="type" id="type-label">
                Type
                <br />
                <select id="type" name="type">
                  <option value="admin" selected>Admin</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </fieldset>

            <!-- PLACE OF BIRTH  -->
            <fieldset>
              <legend>Place of Birth</legend>
              <label for="country" id="country-label">
                Country
                <br />
                <select id="country" name="country">
                  <option value="italy" selected>Italy</option>
                  <option value="england">England</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <label for="region" id="region-label">
                Region
                <br />
                <select id="region" name="region">
                  <option value="piemonte" selected>Piemonte</option>
                  <option value="lombardia">Lombardia</option>
                  <option value="emilia-romagna">Emilia Romagna</option>
                  <option value="liguria">Liguria</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <label for="provence" id="provence-label">
                Provence
                <br />
                <select id="provence" name="provence">
                  <option value="torino" selected>Torino</option>
                  <option value="asti">Asti</option>
                  <option value="novara">Novara</option>
                  <option value="cuneo">Cuneo</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <label for="town" id="town-label">
                Town
                <br />
                <input type="text" id="town" name="town" placeholder="Enter the town" />
              </label>
            </fieldset>

            <!-- RESIDENCE -->
            <fieldset>
              <legend>Residence</legend>
              <label for="country_r" id="country_r-label">
                Country
                <br />
                <select id="country_r" name="country_r">
                  <option value="italy" selected>Italy</option>
                  <option value="england">England</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <label for="region_r" id="region_r-label">
                Region
                <br />
                <select id="region_r" name="region_r">
                  <option value="piemonte" selected>Piemonte</option>
                  <option value="lombardia">Lombardia</option>
                  <option value="emilia-romagna">Emilia Romagna</option>
                  <option value="liguria">Liguria</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <label for="provence_r" id="provence_r-label">
                Provence
                <br />
                <select id="provence_r" name="provence_r">
                  <option value="torino" selected>Torino</option>
                  <option value="asti">Asti</option>
                  <option value="novara">Novara</option>
                  <option value="cuneo">Cuneo</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <label for="town_r" id="town_r-label">
                Town
                <br />
                <input type="text" id="town_r" name="town_r" placeholder="Enter the town" />
              </label>
              <br />
              <label for="address" id="address-label">
                Address
                <br />
                <input type="text" id="address" name="address" placeholder="Enter the address" />
              </label>
              <br />
              <label for="postal_code" id="postal_code-label">
                Postal Code
                <br />
                <input
                  type="text"
                  id="postal_code"
                  name="postal_code"
                  placeholder="Enter the postal code"
                />
              </label>
            </fieldset>

            <!-- NOTE -->
            <fieldset>
              <legend>Note</legend>
              <label for="note">
                Note
                <br />
                <textarea id="note" maxlength="194"></textarea>
              </label>
              <p>(*) indicates required field</p>
            </fieldset>

            <button class="btn_add_person" id="submit" type="submit">Add Person</button>
          </form>
        </div>
      </div>
    </div>

    <!-- PEOPLE LIST -->
    <div class="people">
      <div class="panel">
        <div style="background: none" class="tooltip">
          <fa
            @click="showModal_NewPerson = true"
            class="fa-icon"
            style="background: none"
            icon="user-plus"
            size="4x"
          />
          <span class="tooltiptext">Add a new person</span>
        </div>
      </div>

      <div class="title">
        <h1>People</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>DOB</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person.id">
            <td style="display: flex; justify-content: center"><input type="checkbox" /></td>
            <td>{{ person.id }}</td>
            <td>{{ person.name }}</td>
            <td>{{ person.last_name }}</td>
            <td>{{ person.mobile }}</td>
            <td>{{ person.dob }}</td>
            <td>{{ person.type }}</td>
          </tr>
        </tbody>
      </table>
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

.people {
  width: 100%;
}

table {
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  margin: 2rem auto;
  text-align: left;
  width: 90%;
  color: var(--blue);
}

th {
  background: linear-gradient(var(--blue2), var(--blue));
  color: var(--white);
  font-weight: bold;
  padding: 10px 15px;
  position: relative;
  text-shadow: 0 1px 0 #000;
}

td {
  padding: 1rem 1.5rem;
  transition: all 300ms;
}

.title {
  display: flex;
  justify-content: center;
}

.overlay {
  position: absolute;
  width: 83%;
  height: 100%;
  min-height: 350%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
}

.modal {
  width: 90%;
  height: fit-content;
  background-color: var(--blue);
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.close_btn {
  width: 1rem;
  background: none;
  background-color: var(--red);
  position: sticky;
  top: .5rem;
  right: 0;
  margin-top: 1rem;
  margin-left: 65rem;
}

.add_person {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
}

.person_form {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.btn_add_person {
  margin-top: 2rem;
}

fieldset {
   margin-top: 1rem;
   margin-bottom: 1rem;
}

</style>
