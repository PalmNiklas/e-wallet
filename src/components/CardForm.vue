<template>
  <div>
    <select id="vendor" v-model="tempVendor" placeholder="Vendor" @input="updatePlaceholder">
      <option value="bitcoin">Bitcoin</option>
      <option value="blockchain">Blockchain</option>
      <option value="evil">Evil</option>
      <option value="ninja">Ninja</option>
    </select>
    <input id="number" v-model="tempNumber" placeholder="Card number" @input="updatePlaceholder" />
    <input id="name" v-model="tempName" placeholder="Cardholder Name" @input="updatePlaceholder" />
    <input id="validDate" v-model="tempValidDate" placeholder="Valid thru" @input="updatePlaceholder" />
    <input id="ccv" v-model="tempCcv" placeholder="CCV" @input="updatePlaceholder" />

    <button v-on:click="addCard">Add a new card</button>
  </div>
</template>
<script>
import store from "../store";

export default {
  name: "CardForm",
  data: () => ({
    tempNumber: null,
    tempName: null,
    tempValidDate: null,
    tempCcv: null,
    tempVendor: null,

    tempCard: {
      number: Number,
      name: String,
      valid: String,
      ccv: Number,
      vendor: String
    }
  }),

  methods: {
    addCard() {
      let valid = this.validateForm();
      if (valid) {
        this.tempCard.number = this.tempNumber;
        this.tempCard.name = this.tempName;
        this.tempCard.valid = this.tempValidDate;
        this.tempCard.vendor = this.tempVendor;
        this.tempCard.ccv = this.tempCcv;
        store.commit("addCard", this.tempCard);      
        }
      
    },

    updatePlaceholder() {
        // document.getElementById("number").classList.remove("invalid")
        // document.getElementById("name").classList.remove("invalid")
        // document.getElementById("validDate").classList.remove("invalid")
        // document.getElementById("vendor").classList.remove("invalid")
        // document.getElementById("ccv").classList.remove("invalid")


      this.tempCard.number = this.tempNumber;
      this.tempCard.name = this.tempName;
      this.tempCard.valid = this.tempValidDate;
      this.tempCard.vendor = this.tempVendor;
      this.tempCard.ccv = this.tempCcv;
      this.$emit("updateCard", this.tempCard);
    },
    validateForm() {
      if (
        this.tempNumber &&
        this.tempName &&
        this.tempValidDate &&
        this.tempVendor &&
        this.tempCcv
      ) {
        console.log("true");
        return true;
      }
      this.errors = [];

      if (!this.tempNumber) {
          document.getElementById("number").classList.add("invalid")
      }
      if (!this.tempName) {
         document.getElementById("name").classList.add("invalid")

      }
      if (!this.tempValidDate) {
           document.getElementById("validDate").classList.add("invalid")
      }
      if (!this.tempVendor) {
           document.getElementById("vendor").classList.add("invalid")
      }
      if (!this.tempCcv) {
                   document.getElementById("ccv").classList.add("invalid")

      }
    }
  }
};
</script>

<style lang="scss" scoped>
input,
select {
  margin: 0.5rem;
  font-size: 1rem;
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  // font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
}

select {
  margin-bottom: 2rem;
}

.invalid{
    border-color: red;
}
</style>