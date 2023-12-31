import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      loading: true as boolean,
      api: null as any
    }
  },
  methods: {
    fetchData(url: string): void {
      this.loading = true
      this.api = null
      
      // TODO: usar HTTP apenas quando for desenvolver
      fetch(`https://api-techno.vercel.app${url}`)
        .then((response) => response.json())
        .then((response) => {
          this.api = response
          this.loading = false
        })
    }
  }
})
