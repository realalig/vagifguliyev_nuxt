<script setup>
const formula3 = new URL('@/assets/img/formula3.jpg', import.meta.url).href
</script>

<template>
  <div id="tooplate_main">
    <div id="about" class="main_box">
      <h1>Academic Titles & Work Experience</h1>

      <table style="width: 700px">
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>University</th>
        </tr>
        <tr>
          <td>1978-1983</td>
          <td>Senior Research Scientist</td>
          <td>
            Institute of Cybernetics of NAS of Azerbaijan <br />
            Baku, AZERBAIJAN
          </td>
        </tr>
        <tr>
          <td>1983-1995</td>
          <td>Assistant Professor</td>
          <td>Azerbaijan State University<br />Baku, Azerbaijan</td>
        </tr>
        <tr>
          <td>1995-present</td>
          <td>Full Professor</td>
          <td>Baku State University<br />Baku, Azerbaijan</td>
        </tr>
        <tr>
          <td>2009-present</td>
          <td>Full Professor, Senior Research Scientist</td>
          <td>
            ANAS, Institute of Mathematics and Mechanics<br />
            Baku, Azerbaijan
          </td>
        </tr>
        <tr>
          <td>2014-present</td>
          <td>Head of the department</td>
          <td>
            ANAS, Institute of Mathematics and Mechanics<br />
            Baku, Azerbaijan
          </td>
        </tr>
        <tr>
          <td>2009-2018</td>
          <td>Visitor Professor</td>
          <td>
            Ahi Evran University<br />
            Kirsehir, Turkey
          </td>
        </tr>
        <tr>
          <td>2017-present</td>
          <td>Visitor Professor, Head Researcher</td>
          <td>
            S.M. Nikolskii Institute of Mathematics at RUDN University<br />
            Moscow, Russia
          </td>
        </tr>
        <tr>
          <td>2019-present</td>
          <td>Visitor Professor</td>
          <td>
            Dumlipinar University<br />
            Kutahya, Turkey
          </td>
        </tr>
      </table>

      <img :src="formula3" class="img_float_r img_frame" />

      <div class="cleaner"></div>
    </div>
    <!-- END of about -->
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 5px;
}
</style>
