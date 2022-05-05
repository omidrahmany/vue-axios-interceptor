<template>
  <v-container>
    <v-card class="px-5 py-5" outlined>
      <v-row>
        <v-col cols="12">
          <form @submit.prevent="onSubmit">
            <v-text-field v-model="person.firstName" outlined label="First Name"></v-text-field>
            <v-text-field v-model="person.lastName" outlined label="Last Name"></v-text-field>
            <v-text-field v-model="person.email" outlined label="Email"></v-text-field>
            <v-btn
                color="success"
                dark
                class="mr-4"
                style="width: 100%"
                type="submit"
            >
              submit
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "@/interceptors/auth-interceptor";

export default {
  name: "appRoot",
  data: () => {
    return {
      person:{
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit() {
      axios.post("/save-person", this.person)
          .then(res => console.log(res))
          .catch(err => console.log(err));
    }
  },
  created() {
    axios.get("/get-people")
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
