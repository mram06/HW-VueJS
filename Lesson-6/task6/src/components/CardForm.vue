<template>
  <div class="card">
    <div class="card__title">somebank</div>
    <input
      type="text"
      v-model="cardNumberValue"
      maxlength="19"
      class="card__input-number"
    />
    <input
      type="text"
      v-model="cardExpiryDateValue"
      maxlength="7"
      placeholder="MM / YY"
      class="card__input-date"
      @keydown="onKeyDown"
    />
    <input
      type="text"
      v-model="secureCodeValue"
      maxlength="3"
      class="card__input-code"
    />
    <div class="card__paysystem-logo" v-if="paySystemLogo">
      <img :src="paySystemLogo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardForm",
  props: {
    cardNumber: {
      type: String,
    },
    cardNumberModifiers: {
      default: () => ({}),
    },
    secureCode: {
      type: String,
    },
    secureCodeModifiers: {
      default: () => ({}),
    },
  },
  data() {
    return {
      cardExpiryDateValue: "",
    };
  },
  computed: {
    cardNumberValue: {
      get() {
        return (this.cardNumber ?? "")
          .toString()
          .replace(/(\d{4}(?=\S+))/g, "$1 ");
      },
      set(val) {
        val = val.replace(/\D/g, "");
        this.$emit("update:cardNumber", val);
      },
    },
    secureCodeValue: {
      get() {
        return (this.secureCode ?? "").toString();
      },
      set(val) {
        val = val.replace(/\D/g, "");
        this.$emit("update:secureCode", val);
      },
    },
    paySystemLogo() {
      if (this.cardNumber) {
        let firstCharacter = parseInt(this.cardNumber[0]);
        switch (firstCharacter) {
          case 3:
            return "https://assets.stickpng.com/images/620670b9d7b91b0004122617.png";
          case 4:
            return "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg";
          case 5:
            return "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";
        }
      }
      return false;
    },
  },
  watch: {
    cardExpiryDateValue(newValue, oldValue) {
      if (newValue.length === 2 && oldValue.length === 1)
        this.cardExpiryDateValue = newValue + " / ";
      else if (newValue.length === 4 && oldValue.length === 5)
        this.cardExpiryDateValue = newValue[0];
    },
  },
  methods: {
    onKeyDown(event) {
      const key = event.key;
      const isDigit = key >= "0" && key <= "9";
      const isBackspace = key === "Backspace";
      if (!isDigit && !isBackspace) event.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Iceland&display=swap");
input {
  font-family: "Iceland", sans-serif;
  display: block;
  font-size: 24px;
  height: 40px;
  padding: 5px;
  border: 2px solid rgb(75, 75, 75);
  border-radius: 5px;
  background: none;
  color: rgb(149, 149, 149);
  margin: 5px 0 0 10%;
}
.card {
  position: relative;
  padding: 20px 10px 10px 10px;
  width: 400px;
  height: 250px;

  border-radius: 25px;
  background-color: rgb(43, 43, 43);
  &__title {
    font-size: 26px;
    color: white;
    margin: 0 0 40px 5%;
  }
  &__input {
    &-number {
      width: 240px;
    }
    &-date {
      width: 100px;
    }
    &-code {
      width: 50px;
    }
  }
  &__paysystem-logo {
    position: absolute;
    right: 20px;
    bottom: 20px;
    & img {
      width: 80px;
    }
  }
}
</style>
