<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <hero-component></hero-component>
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
import HeroComponent from "../components/Hero.vue";
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
    HeroComponent,
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
