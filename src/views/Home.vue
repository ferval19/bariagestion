<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        >
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">Estamos cerca de tí.</h1>
                <p
                  class="mt-4 text-lg text-gray-300"
                >Si tienes algún tipo de duda para gestionar tus tramites con la adminstración, Baria Gestión es tu sitio de confianza, ofreciendo un trato personalizado, así como soluciones rápidas y ágiles para tus tramites.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
      <servicios-component></servicios-component>
      <national-component></national-component>
      <enlaces-component></enlaces-component>
      <encuentranos-component></encuentranos-component>
      <empresa-component></empresa-component>
      <contacto-component></contacto-component>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import ServiciosComponent from "../components/Servicios.vue";
import EmpresaComponent from "../components/Empresa.vue";
import EncuentranosComponent from "../components/Encuentranos.vue";
import NationalComponent from "../components/NationalNederlanden.vue";
import ContactoComponent from "../components/Contacto.vue";
import EnlacesComponent from "../components/Enlaces.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "home-page",
  components: {
    NavbarComponent,
    FooterComponent,
    EnlacesComponent,
    EmpresaComponent,
    ContactoComponent,
    EncuentranosComponent,
    NationalComponent,
    ServiciosComponent
  }
};
</script>
