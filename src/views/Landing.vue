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
      <section id="servicios" class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-800"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Fiscal y contable</h6>
                  <p
                    class="mt-2 mb-4 text-gray-600"
                  >Realizamos declaraciones de IVA, IRPF, impuesto de sociedades y declaraciones de la Renta. Así como todo tipo de tributaciones: estimacion directa, directa simplificada u objetiva.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-800"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Laboral</h6>
                  <p
                    class="mt-2 mb-4 text-gray-600"
                  >Podemos asesorarte en todo lo relacionado con nominas, contrataciones y seguros sociales. Representacion jurídica, despidos, recalamaciones de cantidad, procedimientos monitorios...</p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-800"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Extranjería</h6>
                  <p
                    class="mt-2 mb-4 text-gray-600"
                  >Obtencion de permiso de trabajo tanto por cuenta ajena como por cuenta propia, permisos de residencia, tramites con la oficina de extranjeria.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-800"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Tráfico</h6>
                  <p
                    class="mt-2 mb-4 text-gray-600"
                  >Nos encargamos de las altas o bajas, asi como de las transmisiones de vehículos.</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-800"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Catastro</h6>
                  <p
                    class="mt-2 mb-4 text-gray-600"
                  >Impuesto de sucesiones, donaciones y actos jurídicos documentados. Tramitaciones del resgistro de la propiedad como de notaria registral.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nn" class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
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
            <polygon class="text-white fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
        <div class="flex flex-wrap items-center mt-32">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <img
              class="w-56"
              src="https://www.nnespana.es/Style%20Library/Umbrella/assets/images/logo.png"
              alt="National Nederlanden"
            />

            <h3 class="text-3xl mb-2 font-semibold leading-normal">Asesoramiento financiero</h3>
            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Incorporamos a nuestra cartera de productos la gestion de activos financieros a través
              de una de las mayores empresas a nivel internacional, National Nederlanden.
            </p>
            <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              Por medio de su cartera de productos podrás acceder a una gran cantidad de productos: desde
              prestamos hipoticarios hasta fondos de inversion rentables.
            </p>
          </div>
          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-orange-600"
            >
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block"
                  style="height: 95px; top: -94px;"
                >
                  <polygon points="-30,95 583,95 583,65" class="text-orange-600 fill-current" />
                </svg>
                <h4 class="text-xl font-bold text-white">National Nederlanden</h4>
                <p
                  class="text-md font-light mt-2 text-white"
                >Nationale-Nederlanden ofrece diferentes seguros y soluciones de ahorro e inversión a medio y largo plazo a más de medio millón de clientes en toda España.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section id="enlaces" class="pt-12 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Enlaces de interes</h2>
              <p
                class="text-lg leading-relaxed m-4 text-gray-600"
              >Te proporcionamos un acceso rápido a los sitios webs mas utilizados para poder realizar tus tramites a través de internet. Recuerda que si tienes alguna duda o consulta puede ponerte en contactos con nosotros y aatenderemos tu caso de manera personalizada.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="encuentranos" class="pt-12 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <div class="pt-6 text-center">
                  <img src="http://www.bariagestion.com/images/lorenzo.jpg" alt />
                  <h5 class="text-xl font-bold">Lorenzo Carmona Alonso</h5>
                  <p
                    class="mt-1 text-sm text-gray-500 uppercase font-semibold"
                  >Diplomado en Relaciones Laborales</p>
                  <p
                    class="mt-1 text-sm text-gray-500 uppercase font-semibold"
                  >Graduado social Nº 784</p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">Teléfono: 678414 477</p>
                  <p
                    class="mt-1 text-sm text-gray-500 uppercase font-semibold"
                  >Email: lorenzo@bariagestion.com</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3175.9277719157863!2d-1.872153834697396!3d37.2494211298585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad502ed3fe381%3A0xcfb40f9e04ca1497!2sBARIAGESTION%20Asesoria%2FGestoria!5e0!3m2!1ses!2ses!4v1582452612107!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="empresa" class="pb-20 relative block bg-red-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
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
            <polygon class="text-red-900 fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">La tranquilidad de tu negocio</h2>
              <p
                class="text-lg leading-relaxed mt-4 mb-4 text-white"
              >Desde BariaGestión nos encargamos de que tu negocio tenga cubiertas todas las necesidades administrativas. Nuestra profesionalidad, atención personalizada y evitar que distraigas tu atención de lo que importa, tu negocio, son nuestros pilares para ofrecerte el mejor servicio.</p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">Atención personalizada</h6>
              <p
                class="mt-2 mb-4 text-white"
              >Ante cualquier duda estudiaremos su caso y le ofreceremos la solucion que mas se adecúe a su problema.</p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">Profesionalidad</h5>
              <p
                class="mt-2 mb-4 text-white"
              >Tras varios años en el sector, ofrecemos a nuestros clientes un servicio profesional para solventar sus problemas.</p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">Ahorra tiempo</h5>
              <p
                class="mt-2 mb-4 text-white"
              >Nos encargamos de que todos tus trámites esten entregados en tiempo y forma.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" class="relative block py-24 lg:pt-0 bg-red-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">¿Quieres consultarnos algo?</h4>
                  <p
                    class="leading-relaxed mt-1 mb-4 text-gray-600"
                  >Completa el formulario, intentaremos ponernos en contacto contigo lo antes posible.</p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                    >Nombre y Apellidos</label>
                    <input
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                    >Teléfono</label>
                    <input
                      type="number"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Telefono"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                    >Email</label>
                    <input
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                    >Mensaje</label>
                    <textarea
                      rows="4"
                      cols="80"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Cuentame..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >Enviar Mensaje</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent
  }
};
</script>
