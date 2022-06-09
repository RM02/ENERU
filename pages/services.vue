<template>
  <div class="wrapper">
    <div class="screen">
      <div class="box1">
        <h1>Servicios</h1>
        <div class="description">
          <h3 class="subtitle1">
            Enerü Tecnology ofrece sus servicios realizando el acompañamiento personalizado para garantizar los requerimientos y la satisfaccion del cliente a través de los estandares de alta calidad con base a la estructura ISO:9001-2015, sumando valor en el cremiento de tu organización.
          </h3>
        </div>
      </div>
    </div>
    <div>
      <div class="block">
        <h3 class="subtitle">Desarrollo de software</h3>
        <p>Nos preocupamos por garantizar un servicio de calidad, es por ello que todos nuestros productos comerciales e industriales están diseñados bajo los estandares de alta calidad esto através ISO-IEC:30000, 25000, 27000. </p>
        <ul>
          <li>Desarrollo de aplicaciones moviles</li>
          <li>Desarrollo de aplicaciones web</li>
          <li>Administración de redes</li>
          <li>Seguridad informatica</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="block">
        <h3 class="subtitle">Diseño gráfico</h3>
        <p>Observamos el diseño como una manera de crear un nuevo arte hacia la innovación de tus marcas. Enerü Technology aborda cada detalle convirtiendo en oportunidades de transmitir lo que quieres proyectar.</p>
        <ul>
          <li>Diseño de ilustraciones</li>
          <li>Marketing digital</li>
          <li>Diseño de marcas</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="block">
        <h3 class="subtitle">Gestión de proyectos</h3>
        <p>Visualizamos oportunidades en situaciones de alta complejidad para dar soluciones, esto a través de la gestión de proyectos el cual forma parte de uno de nuestros pilares dentro de Enerü Technology, abordando los requerimiento de nuestros clientes con un equipo multidisciplinario.</p>
        <ul>
          <li>Diagnostico situacional</li>
          <li>Planificación estrategica</li>
          <li>Ejecución de las fases</li>
          <li>Verificación y control de las operaciones planificadas</li>
          <li>Auditoría para la mejora continua</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
  .wrapper {
    width: 100%;
    background: white;
  }
  .screen {
    background: rgb(10, 10, 10);
    padding: 100px;

  }
  .screen h1 {
    color: white;
    font-size: 3.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .description {
    color: rgb(250, 250, 250);
    margin-right: 10%;
    text-align: justify;
  }
  .block p {
    color: rgb(70, 70, 70);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
  }
  .block li {
    color: rgb(70, 70, 70);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
  }
  .block {
    border-bottom: 2px solid rgb(240, 240, 240);
    padding: 80px;
    min-width: 300px;
  }
  .title {
    font-size: 3.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(0, 5, 78);
  }
  .subtitle {
    font-size: 2.2em;
    padding-top: 10px;

    padding-bottom: 10px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(0, 40, 53);
  }
  .subtitle1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
    padding-top: 10px;

    padding-bottom: 10px;
    color: rgb(150, 150, 150);
  }
  @media screen and (max-width: 500px) {
    .subtitle1 {
      font-size: 1.5em;
      padding-top: 10px;
      padding-bottom: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #c5c5c5
    }
  }
</style>
