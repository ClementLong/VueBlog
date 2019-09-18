<template>
  <header role="heading" class="header container f fdc fjc-b fai-c m-t-2">
    <a href="https://wissew.com/"><img class="logo f" src="/images/wissew.svg" alt="Wissew"></a>
    <div class="f fjc-b m-v-3 s:fdc s:fai-c m:fdc m:fai-c">
      <div class="openner" @click="open">
        <svg viewBox="0 0 19 19" width="100%" height="100%">
          <path d="M0,15.5h19v-2H0V15.5z M0,10.5h19v-2H0V10.5z M0,3.5v2h19v-2H0z"></path>
        </svg>
      </div>
      <nav role="navigation" class="nav tf-text ts-small tf-upper tsp-extend f fai-c s:fdc m:fdc" :class="{'nav-open': isOpen}">
          <a class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" href="https://wissew.com/2-nos-patrons">NOS PATRONS</a>
          <a class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" href="https://wissew.com/createurs">CRÉATEURS</a>
          <router-link class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" :to="{ name : 'home' }">BLOG</router-link>
          <router-link class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" :to="{ name : 'listing', params: { filter: 'tutos-couture' }}">TUTOS COUTURE</router-link>
          <a class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" href="https://wissew.com/2-nos-patrons">NOS BOX</a>
          <a class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" href="https://wissew.com/2-nos-patrons">COMMUNAUTÉ</a>
          <a class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" href="https://wissew.com/2-nos-patrons">NOTRE VISION</a>
          <a class="button td-none tw-bold c-black p-h-2 p-v-1 s:m-v-2 m:m-v-2" href="https://wissew.com/2-nos-patrons">Devenir créateur</a>
      </nav>
    </div>
  </header>
</template>

<script src="./Nav.js"></script>
<style scoped lang="scss" src="./Nav.scss"></style>
