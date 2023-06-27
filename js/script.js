// controllo Vue
console.log(`Vue OK`, Vue);

const endlink = `https://flynn.boolean.careers/exercises/api/random/mail`;

// Installo Vue
const { createApp } = Vue;

// Vue
const app = createApp({
  data() {
    return {
      userEmails: [],
    };
  },
  methods: {
    getUserEmail() {
      for (let i = 1; i <= 10; i++) {
        axios.get(endlink).then((res) => {
          this.userEmails.push(res.data.response);
          console.log(this.userEmails);
        });
      }
    },
  },
  created() {
    this.getUserEmail();
  },
});

// Stampa Vue
app.mount("#root");
