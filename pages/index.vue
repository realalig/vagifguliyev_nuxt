<script setup>
const { data } = await useAsyncData("index", () => queryContent("/").findOne());
console.log(data);
</script>
<template>
  <div id="tooplate_main">
    <div id="index" class="main_box">
      <div>
        <h1>Welcome to Official Site</h1>
        <img
          :src="data.photo92"
          alt="image"
          class="img_frame img_float_l"
          width="221px"
          height="200px"
        />
        <p align="justify" style="text-align: right">
          <em>
            <span v-for="line in data.quoteHeydar" :key="line">
              {{ line }} <br />
            </span>
          </em>
        </p>

        <hr />
        <p align="justify"></p>
        <h5>
          Famous Mathematician from Azerbaijan he has made great contribution in
          the sphere of Mathematics.
        </h5>

        <h5>Full CV can be downloaded as</h5>

        <a
          href="/pdf/vagifguliyev_cv.pdf"
          target="_blank"
          title="PDF File CV Vagif Guliyev"
        >
          <img :src="data.downloadpdfbutton1" height="60px" width="60px" />
        </a>

        <h3>
          <em>Useful Links</em>
        </h3>

        <div class="column-images">
          <a href="http://bsu.edu.az/en/" target="_blank"
            ><img :src="data.bakuuniversity"
          /></a>
          <a href="https://ahievran.edu.tr/" target="_blank"
            ><img :src="data.ahievran" />
          </a>

          <a
            href="http://www.rudn.ru/science/research-institutes/matematicheskiy-institut-im-s-nikolskogo"
            target="_blank"
            ><img :src="data.rudn" />
          </a>
          <div class="row">
            <a
              href="http://www.science.gov.az/forms/chlenyikorrespondentyi/1364"
              target="_blank"
              ><img :src="data.amea"
            /></a>
            <a
              href="http://www.imm.az/exp/jubilees/corresponding-member-of-anas-vagif-guliyev-is-60/?lang=en"
              target="_blank"
              class="vagif-and-imea"
              ><img :src="data.VagifGuliyev60yubiley" /><img :src="data.imea"
            /></a>
          </div>
        </div>

        <!--
			<h3><em>Related Links</em></h3>
			<a href="http://www.science.gov.az/" target="_blank"|><img src="gallery2/amea2.jpg"></a>
			<a href="http://www.imm.az/exp/?lang=en" target="_blank"| ><img src="gallery2/imea2.jpg"></a>
		
			 <a href="https://en.president.az/" target="_blank"| ><img src="gallery2/president.jpg"></a> -->

        <div class="cleaner h40"></div>
      </div>
      <div class="cleaner h40"></div>
    </div>
  </div>
</template>

<style scoped>
.column-images {
  display: flex;
  flex-direction: column;
  width: 550px;
  position: relative;
}

.column-images .row {
  display: flex;
  flex-direction: row;
}

.column-images img {
  width: 100%;
}

.column-images .vagif-and-imea {
  display: flex;
  justify-content: center;
}
</style>
