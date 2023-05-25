<template>
  <div class="services">
    <div class="container">
      <div class="row">
        <div class="col col-12 col-md-9 offset-md-1">
          <h3 class="services-title">Услуги и цены</h3>
          <p class="services-subtitle">Придумываем концепции, планируем бюджет, пишем сценарии, снимаем и&nbsp;записываем, анимируем, рендерим и&nbsp;монтируем</p>
        </div>
      </div>
    </div>

    <div class="services-rows">
      <the-services-row
          v-for="service in services" :key="`services-row-${service.id}`"
          :title="service.title"
          :subtitle="service.subtitle"
          :text="service.text"
          :items="service.items"
      />
    </div>

    <div class="container">
      <div class="row">
        <div class="col col-12 col-md-9 offset-md-1">
          <button type="button" class="services-button">Заказать услуги</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TheServicesRow from './TheServicesRow.vue';

export default {
  name: 'TheServices',
  data: () => ({
    services: [
      {
        id: 1,
        title: 'Имиджевый видеоролик',
        subtitle: 'Съемка и&nbsp;монтаж, от&nbsp;150&nbsp;000&nbsp;₽',
        text: 'Имиджевый ролик используется для презентации: бренда, продуктов и&nbsp;услуг. Помогает рассказать аудитории об&nbsp;истории, ценностях и&nbsp;философии, технических особенностях и&nbsp;достижениях компании',
        items: [
          { id: 1, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/image-video/cover1.png' },
          { id: 2, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/image-video/cover2.png' },
          { id: 3, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/image-video/cover3.png' },
          { id: 4, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/image-video/cover4.png' },
        ]
      },
      {
        id: 2,
        title: 'Корпоративный видеоблог',
        subtitle: 'Производство и&nbsp;техподдержка, от&nbsp;100&nbsp;000&nbsp;₽',
        text: 'Корпоративный видеоблог используется для коммуникации между сотрудниками компании, обмена опытом, обучения, освещения новых событий, укрепления ценностей и&nbsp;культуры компании. Обычно такие видеоблоги доступны к&nbsp;просмотру только внутри компании',
        items: [
          { id: 1, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/corporate-video/cover1.png' },
          { id: 2, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/corporate-video/cover2.png' },
          { id: 3, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/corporate-video/cover3.png' },
          { id: 4, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/corporate-video/cover4.png' },
        ]
      },
      {
        id: 3,
        title: 'Вебинар',
        subtitle: 'Организация и&nbsp;проведение, от&nbsp;80&nbsp;000&nbsp;₽',
        text: 'Вебинар&nbsp;&mdash; это форма онлайн-обучения, для проведения курсов, семинаров, тренингов, конференций и&nbsp;других мероприятий в&nbsp;интернете',
        items: [
          { id: 1, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/webinar/cover1.png' },
          { id: 2, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/webinar/cover2.png' },
          { id: 3, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/webinar/cover3.png' },
        ]
      },
      {
        id: 4,
        title: 'Подкаст',
        subtitle: 'Запись и&nbsp;монтаж выпуска, от&nbsp;15&nbsp;000&nbsp;₽',
        text: 'Подкасты&nbsp;&mdash; это тематические аудиоблоги. Выпуск подкаста может быть отдельной темой или продолжением истории. По&nbsp;сути, это выложенное в&nbsp;интернет обращение к&nbsp;аудитории',
        items: [
          { id: 1, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/podkast/cover1.png' },
          { id: 2, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/podkast/cover2.png' },
          { id: 3, href: 'https://youtu.be/V9hGEdt0a88', src: 'services/podkast/cover3.png' },
        ]
      }
    ]
  }),
  components: {
    TheServicesRow
  },
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.services {
  @media (min-width: 992px) {
    margin-top: 125px;
  }
  @media (max-width: 991px) {
    margin-top: 80px;
  }

  &-title {
    @media (min-width: 992px) {
      @include text('white', 'headbutton');
    }
    @media (max-width: 991px) {
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 111.5%;
      color: #FFFFFF;
    }
  }
  &-subtitle {
    font-weight: 350;

    @media (min-width: 992px) {
      margin-top: 35px;
      @include text('white', 'subheadline');
    }
    @media (max-width: 991px) {
      margin-top: 32px;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.02em;
      color: #FFFFFF;
    }
  }

  &-rows {
    @media (min-width: 992px) {
      margin-top: 93px;
    }
    @media (max-width: 991px) {
      margin-top: 80px;
    }
  }

  &-button {
    background-color: $lightblue;

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
  }
}

</style>