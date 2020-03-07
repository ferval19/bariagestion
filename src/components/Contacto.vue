<template>
  <section id="contacto" class="relative block py-24 lg:pt-0 bg-red-900">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
          >
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">¿Quieres consultarnos algo?</h4>
              <div class="flex justify-center lg:hidden my-4">
                <a
                  class="bg-yellow-600 text-white text-xl active:bg-gray-100 text-xs font-bold uppercase px-8 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none"
                  type="button"
                  style="transition: all 0.15s ease 0s;"
                  href="tel:+34678414477"
                >Llámame</a>
              </div>

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
                  placeholder="Nombre completo"
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
</template>