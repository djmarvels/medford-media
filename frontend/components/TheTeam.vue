<template>
  <div class="team">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h3 class="team-title">
            Команда
          </h3>
        </div>
        <div class="col col-12">
          <div class="team-persons">
            <div v-for="person in team" :key="person.id" class="team-person">
              <div class="team-person-image">
                <img :src="person.image" :alt="person.name">
              </div>
              <div class="team-person-text">
                <h6 class="team-person-name" v-html="person.name" />
                <p class="team-person-job" v-html="person.job" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="team-persons-carousel">
          <client-only>
            <owl-carousel :nav="false" :dots="false" :autoWidth="true" :margin="27">
              <div v-for="person in team" :key="person.id" class="team-person">
                <div class="team-person-image">
                  <img :src="person.image" :alt="person.name">
                </div>
                <div class="team-person-text">
                  <h6 class="team-person-name" v-html="person.name" />
                  <p class="team-person-job" v-html="person.job" />
                </div>
              </div>
            </owl-carousel>
          </client-only>
        </div>
      </div>
      <div class="row">
        <div class="col col-12">
          <button type="button" class="team-button" @click="setOrderPopup(true)">Заказать услуги</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TheTeam',
  data: () => ({
    team: [
      { id: 1, name: 'Пётр Понсов', job: 'Продюсер,<br>арт-директор', image: 'team/petr.png' },
      { id: 2, name: 'Максим Челеков', job: 'Линейный продюсер', image: 'team/maxim.png' },
      { id: 3, name: 'Мария Смирнова', job: 'Финансовый директор', image: 'team/maria.png' },
      { id: 4, name: 'Вера Михалёва', job: 'Маркетолог', image: 'team/vera.png' },
      { id: 5, name: 'Константин Давыдкин', job: 'Режиссёр постановщик', image: 'team/kostya.png' },
      { id: 6, name: 'Дмитрий Челеков', job: 'Оператор, режиссёр монтажа, таргетолог', image: 'team/dima.png' },
      { id: 7, name: 'Василий Дубовой', job: 'Дизайнер', image: 'team/vasya.png' }
    ]
  }),
  created() {
    this.team = this.team.map(item => ({...item, image: require(`../assets/images/${item.image}`)}));
  },
  methods: {
    ...mapMutations({
      setOrderPopup: 'page/SET_ORDER_POPUP',
    }),
  },
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.team {
  @media (min-width: 992px) {
    margin-top: 375px;
  }
  @media (max-width: 991px) {
    margin-top: 162px;
  }

  &-title {
    @media (min-width: 992px) {
      @include text('white', 'headbutton');
    }
    @media (max-width: 991px) {
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      color: #FFFFFF;
    }
  }

  &-persons {
    @media (min-width: 992px) {
      margin-top: 82px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 90px 20px;
    }
    @media (max-width: 991px) {
      display: none;
    }

    &-carousel {
      @media (min-width: 992px) {
        display: none;
      }
      @media (max-width: 991px) {
        margin-top: 23px;
        max-width: 100%;
      }
      @media (max-width: 575px) {
        margin-left: 15px;
        max-width: calc(100% - 15px);
      }
    }
  }

  &-person {
    @media (min-width: 992px) {
      @include exact-col(calc(100% / 4 - 16px));
    }

    &-text {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
      gap: 10px;
      flex-grow: 0;
      @media (max-width: 991px) {
        max-width: 250px;
      }
    }

    &-name, &-job {
      letter-spacing: 0.02em;
      align-self: stretch;
      flex-grow: 0;
      line-height: 26px;
      color: #FFFFFF;
      text-align: center;
    }

    &-name {
      font-weight: 400;
      font-size: 24px;
    }
    &-job {
      font-weight: 350;
      font-size: 20px;
    }

    &-image {
      img {
        @media (min-width: 992px) {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
        }
        @media (max-width: 991px) {
          @include exact-size(250px, 385px);
          object-fit: cover;
          border-radius: 20px;
        }
      }
    }
  }
  &-button {
    background-color: $lightblue;
    margin-left: auto;
    margin-right: auto;
    display: block;

    @media (min-width: 992px) {
      margin-top: 100px;
      @include text('white', 'headbutton');
      border-radius: 20px;
      padding: 24px 60px 30px;
    }

    @media (max-width: 991px) {
      margin-top: 59px;
      padding: 19px 38px 22px;
      border-radius: 18px;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      text-align: center;
      color: #FFFFFF;
    }

    @media (max-width: 575px) {
      white-space: nowrap;
      max-width: max-content;
      font-size: 28px;
    }

    @media (max-width: 374px) {
      font-size: 24px;
      padding: 14px 34px 14px;
    }
  }
}

</style>