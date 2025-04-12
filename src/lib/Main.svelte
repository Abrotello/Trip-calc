<script lang="ts">
    let km: number;
    let precioGasolina: number
    const rendimiento: number = 7.5;
    const desgasteKm: number = 3.1;
    const margenGanancia: number = 45;
    let resultado: string = '';
  
    const calcularPrecio = () => {
      const litros = km / rendimiento;
      const costoGasolina = litros * precioGasolina;
      const costoDesgaste = km * desgasteKm;
      const subtotal = costoGasolina + costoDesgaste;
      const ganancia = subtotal * (margenGanancia / 100);
      const total = Math.ceil(subtotal + ganancia);
  
      resultado = `Costo estimado: $${total}`;
    };
  </script>
  
  <main class="min-h-screen bg-gray-100 flex justify-center items-center p-4">
    <div class="max-w-lg w-full bg-white p-6 shadow-xl rounded-2xl">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Cotizador de Viajes 🚗</h1>
  
      <!-- Formulario de entrada -->
      <div class="space-y-4">
        <label class="block">
          <span class="font-semibold text-gray-700">Distancia (km)</span>
          <input
            type="number"
            bind:value={km}
            class="mt-1 w-full border border-gray-300 rounded p-2"
            placeholder="Ej: 40"
          />
        </label>
  
        <label class="block">
          <span class="font-semibold text-gray-700">Precio gasolina (por litro)</span>
          <input
            type="number"
            bind:value={precioGasolina}
            class="mt-1 w-full border border-gray-300 rounded p-2"
            placeholder="Ej: 24.5"
          />
        </label>

        <button
          on:click={calcularPrecio}
          class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mt-4"
        >
          Calcular
        </button>
      </div>
  
      <!-- Resultado -->
      {#if resultado}
        <div class="mt-6 text-center">
          <h2 class="text-xl font-semibold text-gray-800">Resultado</h2>
          <p class="mt-4 text-green-600 font-semibold">{resultado}</p>
        </div>
      {/if}
    </div>
  </main>
  
  <style>
    main {
      font-family: Arial, sans-serif;
    }
  </style>
  