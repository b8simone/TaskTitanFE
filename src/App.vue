<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false)
    const showSidebar = ref(false)
    return { show, showSidebar }
  }
}
</script>

<template>
  <main>
    <div :class="{ left_closed: showSidebar, left: !showSidebar }">
      <h1 style="text-align: center; padding-right: 0.5rem">TaskTitan</h1>
      <button
        onmouseover="this.style.fontSize='1.3rem'"
        onmouseout="this.style.fontSize='1rem'"
        class="menu_toggler_close"
        @click="showSidebar = !showSidebar"
      >
        <fa style="background: none; margin-bottom: 1rem" icon="circle-dot" />
      </button>
      <button
        onmouseover="this.style.fontSize='1.2rem'"
        onmouseout="this.style.fontSize='1rem'"
        class="menu_toggler_open"
        @click="showSidebar = !showSidebar"
      >
        <fa style="background: none" icon="bars" size="2x" />
      </button>

      <ul class="nav">
        <li>
          <RouterLink to="/"
            ><fa class="menu_icon" style="background: none; margin-right: .5rem;" icon="house" /><fa
              class="menu_icon_big"
              size="2x"
              style="background: none"
              icon="house"
            />
            <span class="menu_li">Home</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/people"
            ><fa class="menu_icon" style="background: none; margin-right: .5rem;" icon="people-group" /><fa
              class="menu_icon_big"
              size="2x"
              style="background: none"
              icon="people-group"
            />
            <span class="menu_li">People</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/warehouse"
            ><fa class="menu_icon" style="background: none; margin-right: .5rem;" icon="warehouse" /><fa
              class="menu_icon_big"
              size="2x"
              style="background: none"
              icon="warehouse"
            /><span class="menu_li">Warehouse</span>
          </RouterLink>
        </li>
        <div
          class="nav_bottom"
          onmouseover="this.style.fontSize='1.1rem'"
          onmouseout="this.style.fontSize='1rem'"
        >
          <li>
            <RouterLink to="/login">
              <fa class="menu_icon login" style="background: none; transform: scale(1.3); margin-right: .5rem;" icon="person-chalkboard" />
              <fa
                class="menu_icon_big"
                size="2x"
                style="background: none"
                icon="person-chalkboard"
              />
              <span class="menu_li">Login</span>
            </RouterLink>
          </li>
        </div>
        <!-- <li class="dropdown_toggler" @click="show = !show" :class="{ active_btn: show, inactive_btn: !show }">Warehouse</li>
      <span class="dropdown_menu" :class="{ active: show, inactive: !show }">
        <li :class="{ active: show, inactive: !show }"><RouterLink :class="{ active: show, inactive: !show }" to="/warehouse_dashboard">Dashboard</RouterLink></li>
        <li :class="{ active: show, inactive: !show }"><RouterLink :class="{ active: show, inactive: !show }" to="/warehouse">Warehouse</RouterLink></li>
      </span> -->
      </ul>
    </div>

    <div :class="{ right_open: showSidebar, right: !showSidebar }">
      <RouterView class="page_content" />
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
  max-width: 100vw;
  overflow-x: hidden;
}

.left {
  float: left;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 17%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  min-height: 100vh;
  padding-left: 1rem;
  border-right: 3px solid var(--blue3);
}

.left h1 {
  font-size: 3rem;
}

.left .menu_icon_big {
  display: none;
}

.left .menu_toggler_open {
  display: none;
}

.left_closed {
  float: left;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 5%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  min-height: 100vh;
  padding-top: 5rem;
  border-right: 3px solid var(--blue3);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.left_closed .menu_li,
.left_closed h1,
.left_closed .menu_icon {
  display: none;
}

.left_closed .menu_toggler_close {
  display: none;
}

.left_closed .menu_toggler_open {
  margin-bottom: 2rem;
}

.menu_toggler_close {
  width: 0.5rem;
  background: none;
  position: absolute;
  top: 0;
  right: 0;
}

.menu_toggler_open {
  position: absolute;
  top: 0.5rem;
  background: none;
}

body {
  margin: 0;
  padding: 0;
  font-size: 100%;
}

.menu_toggler_close:hover,
.menu_toggler_open:hover {
  cursor: pointer;
}

/* SIDE NAVIGATION BAR */

.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}
.nav li {
  margin: 1px 0;
}
.nav li a {
  display: block;
  width: 100%;
  text-decoration: none;
  margin-bottom: 1rem;
}

.nav_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5rem;
  text-align: center;
}

.nav_bottom span {
  font-size: 1.5rem;
}

.login {
  align-self: flex-end;
}

.menu_li:hover {
  color: var(--blue4);
}

/* PAGE CONTENT */
.right {
  padding: 0 0.5rem;
  width: 87%;
  float: right;
}

.right_open {
  padding: 0 0.5rem;
  width: 95%;
  float: right;
}

.page_content {
  width: 87vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* DROPDOWN */
.active {
  display: block;
  background-color: var(--blue3);
}

.active:hover {
  color: var(--blue);
}

.inactive {
  display: none;
}

.active_btn {
  color: var(--grey);
}

.inactive_btn {
  background: none;
}

.dropdown_menu {
  background-color: var(--blue3);
  border-radius: 5px;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 0.1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  width: 90%;
}

.dropdown_toggler:hover {
  cursor: pointer;
  color: var(--blue4);
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .left {
    padding-top: 15px;
  }
  .left a {
    font-size: 18px;
  }
}
</style>
