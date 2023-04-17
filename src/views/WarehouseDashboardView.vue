<script></script>

<template>
  <main>
    <div class="dashboard">
      <div class="dashboard_card">
        <div class="card_header">
          <h1>PRIMA</h1>
        </div>
        <div class="card_body">
          <h1>DURANTE</h1>
        </div>
        <div class="card_footer">
          <h1>DOPO</h1>
        </div>
      </div>
      <div class="dashboard_card"><h2>Seconda</h2></div>
      <div class="dashboard_card"><h3>let's go</h3></div>
      <div class="dashboard_card"><h4>come on</h4></div>
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
  max-width: 95%;
  float: right;
  margin-top: 1rem;
}

.dashboard {
  width: 100%;
  border: 3px solid var(--blue4);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.dashboard_card {
  aspect-ratio: 1 / 1;
  border: 3px solid var(--blue4);
  width: 20%;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
}

.card_header {
  height: 20%;
  border-bottom: 3px solid var(--blue4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card_body {
  height: 60%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_body h1 {
  background-color: red;
}

.card_footer {
  height: 20%;
  border-top: 3px solid var(--blue4);
  bottom: 10px;
}
</style>
