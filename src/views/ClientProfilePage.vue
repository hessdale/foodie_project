<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    // get existing user info with id figure out how to pass number on request not string
    let clientId = this.$refs.idNum[`value`];
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/client`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
        },
        method: `GET`,
        data: {
          client_id: clientId,
        },
      })
      .then((response) => {
        response;
        console.log(response);
      })
      .catch((error) => {
        error;
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>