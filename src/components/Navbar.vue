<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
        <a class="pr-4" href="https://www.bariagestion.com">
          <img
            class="w-16 flex inline-block"
            src="../assets/logo_blanco.png"
            alt="Logo BariaGestion"
          />
        </a>
        <a class="hidden sm:inline mr-4 py-1" href="https://www.bariagestion.com">
          <img
            class="w-40 flex inline-block"
            src="../assets/logo_texto.png"
            alt="Logo BariaGestion"
          />
        </a>
        <div class="lg:hidden" @click="toggleNavbar">
          <font-awesome-icon
            v-if="!showMenu"
            icon="bars"
            style="color:#DDDDDD; height:3em; width: 1.5em;"
          />
          <font-awesome-icon
            v-if="showMenu"
            icon="times"
            style="color:#DDDDDD; height:3em; width: 1.5em;"
          />
        </div>
      </div>

      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#servicios"
            >
              <span class="inline-block ml-2">servicios</span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#enlaces"
            >
              <span class="inline-block ml-2">enlaces</span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#encuentranos"
            >
              <span class="inline-block ml-2">encuentranos</span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#empresa"
            >
              <span class="inline-block ml-2">empresa</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="bg-red-900 text-white active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style="transition: all 0.15s ease 0s;"
              href="#contacto"
            >Ponte en Contacto</a>
          </li>
          <li class="flex items-center">
            <a
              class="pl-2 text-gray-800 px-3 py-4"
              href="https://www.facebook.com/bariagestion/"
              target="_blank"
              rel="noopener"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                class="svg-inline--fa fa-facebook-f fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="#4267b2"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              <span v-if="showMenu" class="inline-block ml-2">facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
