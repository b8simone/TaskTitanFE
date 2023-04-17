<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    // make Foods variable reactive with the ref() function
    const products = ref([
      { id: '1', name: 'Frank', code: 'XHEF456', price: '10$', type: 'Food' },
      { id: '2', name: 'Vic', code: 'XHEF456', price: '10$', type: 'Packaging' },
      { id: '3', name: 'Gina', code: 'XHEF456', price: '10$', type: 'Food' },
      { id: '4', name: 'Jessi', code: 'XHEF456', price: '10$', type: 'Food' },
      { id: '5', name: 'Jay', code: 'XHEF456', price: '10$', type: 'Food' },
      { id: '6', name: 'Frank', code: 'XHEF456', price: '10$', type: 'Food' },
      { id: '7', name: 'Vic', code: 'XHEF456', price: '10$', type: 'Packaging' },
      { id: '8', name: 'Gina', code: 'XHEF456', price: '10$', type: 'Packaging' },
      { id: '9', name: 'Jessi', code: 'XHEF456', price: '10$', type: 'Food' },
      { id: '10', name: 'Jay', code: 'XHEF456', price: '10$', type: 'Food' }
    ])

    const showModal_Movements = ref(false)
    const showModal_NewProduct = ref(false)

    const movements = ref([
    { id: '1', quantity: '34', direction: 'IN', date: new Date(), product_code: 'XKJ453J' },
    { id: '2', quantity: '24', direction: 'OUT', date: new Date(), product_code: 'XKJ453J' },
    { id: '3', quantity: '56', direction: 'IN', date: new Date(), product_code: 'XKJ453J' },
    { id: '4', quantity: '2', direction: 'IN', date: new Date(), product_code: 'XKJ453J' }
    ])

    return {
      products,
      movements,
      showModal_Movements,
      showModal_NewProduct
    }
  }
}
</script>

<template>
  <main>
    <!-- SINGLE PRODUCT MOVEMENTS -->
    <div v-if="showModal_Movements" class="overlay">
      <div class="modal">
          <h1 style="text-align: center;">Product Code: {{ movements[0].product_code }}</h1>
       
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Quantity</th>
                <th>Direction</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="movement in movements" :key="movement.id">
                <td>{{ movement.id }}</td>
                <td>{{ movement.quantity }}</td>
                <td>{{ movement.direction }}</td>
                <td>
                  {{
                    new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(movement.date)
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        <button class="close" @click="showModal_Movements = false">Close</button>
      </div>
    </div>

    <!-- NEW PRODUCT FORM -->
    <div v-if="showModal_NewProduct" class="overlay">
      <div class="add_product">
         
        <button class="close_btn" @click="showModal_NewProduct = false">X</button>

         <h1>Add a Product</h1>

         <form class="product_form" method="GET" action="" id="add-product" name="add-product" >
            <!-- PRODUCT INFO -->
          <fieldset>
              <legend>Product Information</legend>
               <label for="name" id="name-label">
               Name *
               <br>
               <input type="text" id="name" name="name" placeholder="Enter product name (required)" required />
               </label>
               <br>
               <label for="text" id="code-label">
               Code *
               <br>
               <input  type="text" id="code" name="code" placeholder="Enter product code (required)" required />
               </label>
               <br>
               <label for="price" id="price-label">
               Price *
               <br>
               <input  type="number" id="price" name="price" placeholder="Enter product price (required)" required />
               </label>
               <br>
               <label for="type" id="type-label">
               Type
               <br> 
               <select id="type" name="type">
                     <option value="admin" selected>Food</option>
                     <option value="manager">Packaging</option>
                     <option value="other">Other</option>
                  </select>
               </label>
            </fieldset>
            
            <!-- NOTE -->
            <fieldset>
              <legend>Note</legend>
               <label for="note">
               Note
               <br> 
               <textarea id="note" maxlength="194"></textarea>
               </label>
               <p>(*) indicates required field</p>
            </fieldset>
            

            <button class="btn_add_product" id="submit" type="submit">Add Product</button>
         
          </form>
      </div>
    </div>

    <!-- PRODUCT LIST -->
    <div class="warehouse">
      <div class="panel">
        <!-- <RouterLink style="background: none" to="/new_product"> -->
          <div style="background: none" class="tooltip">
            <fa class="fa-icon" @click="showModal_NewProduct = true" style="background: none" icon="cart-plus" size="4x" />
            <span class="tooltiptext">Add a new product</span>
          </div>
        <!-- </RouterLink> -->
        <!-- <div style="background: none; margin-left: 1rem;">
                    <fa style="background: none;" icon="square-check" size="4x"/>
                    <span class="tooltiptext">Select All</span>
                </div> -->
      </div>

      <div class="title">
        <h1>Products</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Price</th>
            <th>Type</th>
            <th>Movements</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td style="display: flex; justify-content: center"><input type="checkbox" /></td>
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.code }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.type }}</td>
            <td><button @click="showModal_Movements = true"><fa style="background: none" icon="right-left" class="fa-icon" /></button></td>
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

.fa-icon:hover {
  cursor: pointer;
}

.warehouse {
  width: 100%;
}

table {
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  margin: 2rem auto;
  text-align: center;
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

.warehouse th:first-child, .warehouse th:last-child {
  width: 5%;
}

td {
  padding: 1rem 1.5rem;
  transition: all 300ms;
}

.title {
  display: flex;
  justify-content: center;
}

main .overlay {
  position: absolute;
  width: 83%;
  height: 100%;
  min-height: 170%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
}

.add_product {
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  padding-bottom: 2rem;
}

.product_form {
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.btn_add_product {
  margin-top: 2rem;
}

.modal {
  width: 75%;
  background-color: var(--blue);
  border-radius: 5px;
  padding: 2rem;
  position: fixed;
  top: 20%;
  right: 5%;
  display: flex;
  flex-direction: column;
}

.close_btn {
  width: 1rem;
  background: none;
  background-color: var(--red);
  position: sticky;
  top: .5rem;
  right: 0;
  margin-top: 1rem;
  margin-left: 60rem;
}

</style>
