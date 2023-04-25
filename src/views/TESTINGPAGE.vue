<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/validate`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
        },
      })
      .then((response) => {
        response;
        document
          .querySelector(`div`)
          .insertAdjacentHTML(`beforeend`, `<h1>${response.data.message}<h1>`);
      })
      .catch((error) => {
        error;
        // Failure code here
      });
  },
};
</script>

<style scoped>
</style>