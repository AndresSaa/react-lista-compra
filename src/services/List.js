/*
Service List
*/
class ServiceList  {
  constructor() {
    this.url = 'https://www.mocky.io/v2/5e66606c3100005100239f27'
  }
  async getItems() {
    const response = await fetch(this.url)
    if (response)
      return response.json()
  }
}

export default ServiceList