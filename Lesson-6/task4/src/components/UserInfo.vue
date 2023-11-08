<template>
  <div>Ім'я користувача</div>
  <input type="text" ref="userNameInput" v-model.lazy="userName" />
  <div>Вік</div>
  <input type="number" ref="userAgeInput" v-model="userAge" />
</template>

<script>
export default {
  name: "UserInfo",

  props: {
    userNameValue: {
      type: String,
    },
    userAgeValue: {
      type: Number,
    },
    userAgeValueModifiers: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    userName: {
      get() {
        return this.userNameValue;
      },
      set(val) {
        if (this.userNameValue)
          this.$refs.userNameInput.style.backgroundColor = "red";
        else this.$refs.userNameInput.style.backgroundColor = "";
        this.$emit("update:userNameValue", val);
      },
    },
    userAge: {
        get(){
            return this.userAgeValue
        },
        set(val){
            if(this.userAgeValueModifiers.check) {
                console.log('tes');
                if(val < 18) this.$refs.userAgeInput.style.backgroundColor = 'red'
                else this.$refs.userAgeInput.style.backgroundColor = 'green'
            }
            this.$emit('update:userAgeValue', val)
        }
    }
  },
};
</script>

<style lang="scss" scoped></style>
