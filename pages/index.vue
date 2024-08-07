<script setup>
useHead({
  title: 'Prof. Dr. Vagif S. Guliyev',
})

const downloadpdfbutton1 = new URL('@/assets/img/download-pdf-button-1.png', import.meta.url).href
const VagifGuliyev60yubiley = new URL('@/assets/img/Vagif-Guliyev-60-yubiley.jpg', import.meta.url).href
const amea = new URL('@/assets/img/amea.jpg', import.meta.url).href
const imea = new URL('@/assets/img/imea.jpg', import.meta.url).href
const dumlipinar = new URL('@/assets/img/dumlupinar.png', import.meta.url).href
const rudn = new URL('@/assets/img/rudn.jpg', import.meta.url).href
const bakuuniversity = new URL('@/assets/img/bakustateuniversity.jpg', import.meta.url).href
</script>

<template>
  <div id="tooplate_main">
    <div id="home" class="main_box">
      <h1>Welcome to Official Site</h1>
      <img src="@/assets/img/92-photo.JPG" alt="image" class="img_frame img_float_l" width="221px" height="200px" />

      <p align="justify" style="text-align: right">
        <em>
          "I have always been proud and I am proud today <br />
          that I am Azerbaijani" <br />
          Heydar Aliyev<br />
          Honouring the memory of <br />
          National Leader Heydar Aliyev
        </em>
      </p>

      <hr />
      <p align="justify"></p>
      <H5>Famous Mathematician from Azerbaijan he has made great contribution in the sphere of Mathematics. </H5>

      <h5>Full CV can be downloaded as</h5>

      <a href="/pdf/vagifguliyev_cv.pdf" target="_blank" title="PDF File CV Vagif Guliyev">
        <img :src="downloadpdfbutton1" height="60px" width="60px" />
      </a>

      <h3>
        <em>Useful Links</em>
      </h3>

      <a href="http://www.science.gov.az/forms/chlenyikorrespondentyi/1364" target="_blank"><img :src="amea" /></a>
      <a href="http://www.imm.az/exp/jubilees/corresponding-member-of-anas-vagif-guliyev-is-60/?lang=en" target="_blank"><img :src="VagifGuliyev60yubiley" /><img :src="imea" /></a>
      <a href="http://www.dumlupinar.edu.tr/" target="_blank"><img :src="dumlipinar" /> </a>
      <a href="http://www.rudn.ru/science/research-institutes/matematicheskiy-institut-im-s-nikolskogo" target="_blank"><img :src="rudn" /> </a>
      <a href="http://bsu.edu.az/en/" target="_blank"><img :src="bakuuniversity" /></a>

      <!--
			<h3><em>Related Links</em></h3>
			<a href="http://www.science.gov.az/" target="_blank"|><img src="gallery2/amea2.jpg"></a>
			<a href="http://www.imm.az/exp/?lang=en" target="_blank"| ><img src="gallery2/imea2.jpg"></a>
		
			 <a href="https://en.president.az/" target="_blank"| ><img src="gallery2/president.jpg"></a> -->

      <div class="cleaner h40"></div>
    </div>
    <!-- END of home -->

    <!-- END of about -->

    <!-- END of portfolio -->

    <!-- END of services -->

    <!-- END of contact -->
  </div>
</template>
