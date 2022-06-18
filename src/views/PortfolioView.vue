<template>
  <div class="portfolio">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  data: function () {
    return {
      pageName: "Portfolio",
      pageDesc: "This is Portfolio page",
    };
  },
};
</script>
