<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pastes: []
    }
  },
  mounted () {
    this.$http.get('http://127.0.0.1:8000/api/v1/pastes').then((response) => {
      this.pastes = response.body
    }, (response) => {
      // error callback
    })
  }
}
</script>
</style>
