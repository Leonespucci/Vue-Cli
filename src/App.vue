<template>
  <div id="app" class="container mt-5">
        <h1>RFshop</h1>
        <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
        <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>
  </div>
</template>

<script>
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import PriceSlider from "./components/PriceSlider.vue";
import ProductList from "./components/ProductList.vue"

export default {
  name: "app",
  data: function(){
    return {
      maximum: 50,
      products: [],
      cart: [],
      sliderStatus: true
    }
  },
  components: {
    // FontAwesomeIcon,
    PriceSlider,
    ProductList
  },
  mounted: function() {
    fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
  },

  methods: {
    toggleSliderStatus: function() {
      this.style.sliderStatus = !this.style.sliderStatus;
    },
    addItem: function(product) {
        let productIndex;
        let productExist = this.cart.filter(function(item, index) {
            if (item.product.id == Number(product.id)) {
                productIndex = index;
                return true;
            } else {
                return false;
            }
        });

        if (productExist.length) {
            this.cart[productIndex].qty++
        } else {
            this.cart.push({product: product, qty: 1});
        }
    },
    deleteItem: function(id) {
      if(this.cart[id].qty > 1) {
          this.cart[id].qty--;
      } else {
          this.cart.splice(id, 1);
      }
    }
  }
};
</script>
