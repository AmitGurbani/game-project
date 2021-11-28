<template>
  <div class="quotes">
    <div class="quotes-text">
      <h5>WHAT PEOPLE THINK?</h5>
      <h1>PRESS QUOTES</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta
        explicabo et fuga mollitia quisquam eveniet non unde nam, vero libero
        quo necessitatibus minus dicta aperiam quidem sed rem! Neque.
      </p>
      <v-btn color="primary" class="black--text">Read more testimonials</v-btn>
    </div>
    <div class="quotes-cards">
      <v-row v-for="(quote, q) in quotes" :key="q">
        <v-spacer v-if="q % 2 == 0"></v-spacer>
        <v-col cols="8">
          <QuoteCard
            :avatar="quote.avatar"
            :designation="quote.designation"
            :message="quote.message"
            :name="quote.name"
            :when="quote.when"
          />
        </v-col>
        <v-spacer v-if="q % 2 != 0"></v-spacer>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import QuoteCard from "./QuoteCard.vue";

@Component({
  components: {
    QuoteCard,
  },
})
export default class Quotes extends Vue {
  quotes = [
    {
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      name: "EVAN LAHTI",
      designation: "PC Gamer",
      message: "One of my car highlights of the year.",
      when: "October 18, 2018",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
      name: "JADA GRIFFIN",
      designation: "Nerdreactor",
      message:
        "The next big thing in the world of streaming and survival games",
      when: "Deceber 21, 2018",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "AARON WILLIAMS",
      designation: "Uproxx",
      message:
        "Snoop Dogg Playing The Wildly Entertaining 'SOS' is Ridiculous.",
      when: "December 24, 2018",
    },
  ];
}
</script>

<style lang="scss" scoped>
.quotes {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &-text {
    position: absolute;
    top: 40%;
    left: 5%;
    width: 30%;
    color: white;
    h1 {
      font-size: 60px;
    }
    h5 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }
  &-cards {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 40%;
    color: white;
  }
}
</style>
