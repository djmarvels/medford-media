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
    </div>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.team {
  margin-top: 375px;

  &-title {
    @include text('white', 'headbutton');
  }

  &-persons {
    margin-top: 82px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 90px 20px;
  }

  &-person {
    @include exact-col(calc(100% / 4 - 16px));

    &-text {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
      gap: 10px;
      flex-grow: 0;
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
        max-width: 100%;
        height: auto;
      }
    }
  }
}

</style>