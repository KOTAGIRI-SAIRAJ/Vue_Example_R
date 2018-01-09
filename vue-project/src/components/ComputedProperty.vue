<template>
  <div>
    <ul>
      <li v-for="product in products">
        <input type="number" v-model.number ="product.quantity" >
        {{ product.quantity }} ,{{ product.name }}
        <span v-if="product.quantity <= 0"> -OUT OF STOCK</span>
        <button @click=" product.quantity = product.quantity+1 "> ADD </button>
        <button @click=" product.quantity = product.quantity-1 "> DELETE</button>
      </li>
      <h2> Total Products Available {{ totalProductCost }}</h2>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: []
      }
    },
    computed: {
      totalProductCost () {
        return this.products.reduce((sum, product) => {
          return sum + product.quantity
        }, 0)
      }
    },
    created () {
      this.products = [
        {id: 1, name: 'Max', quantity: 0},
        {id: 2, name: 'Anna', quantity: 1},
        {id: 3, name: 'Chris', quantity: 2},
        {id: 4, name: 'Sven', quantity: 3}
      ]
    }
  }
</script>
