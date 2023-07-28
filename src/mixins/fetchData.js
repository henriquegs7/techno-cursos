export default {
  data() {
    return {
      loading: true,
      api: null
    }
  },
  methods: {
    fetchData(url) {
      this.loading = true
      this.api = null

      fetch(`http://api-techno.vercel.app${url}`)
        .then((response) => response.json())
        .then((response) => {
          this.api = response
          this.loading = false
        })
    }
  }
}
