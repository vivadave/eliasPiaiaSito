<script lang="ts">
  import Button from "../components/Button.svelte";

  import { _t } from '../helper/translations'
  import { languageStore } from '../store/translation'
  export let translations: unknown[];

</script>

<section class="background-light">
  <article>
      <div class="text-container">
        <div class="title pb-10">{_t(translations, 'contattiTitle', $languageStore)}</div>
        <div class="description pb-14">          
          {@html _t(translations, 'contattiDesc', $languageStore) }
        </div>
        <form action="" method="POST">
          <input type="text" name="name" placeholder="{_t(translations, 'formNome', $languageStore)}" required>
          <input type="text" name="name" placeholder="{_t(translations, 'formCognome', $languageStore)}" required>
          <input type="email" name="_replyto" placeholder="{_t(translations, 'formEmail', $languageStore)}" required>
          <input type="tel" name="phone" placeholder="{_t(translations, 'formCellulare', $languageStore)}" required>
          <textarea name="message" placeholder="{_t(translations, 'formMessaggio', $languageStore)}" required></textarea>
          <div class="buttons">
            <Button>{_t(translations, 'buttonInvia', $languageStore)}</Button>
          </div>
      </div>
  </article>
</section>

<style lang="scss">
  @import '../style/variables.scss';
  @import '../style/pantone.scss';
  @import '../style/typography.scss';

  section {
    overflow: hidden;
    article {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: 1200px){
        padding: 11rem 5rem ;
      }
    .text-container {
      display: flex;
      background-color: $background;
      flex-direction: column;
      justify-content: center;
      padding: 6rem 4rem;
      border-radius: $border-radius;
      height: 100%;
      position: relative;
      @media (min-width: 1200px){
        padding: 4rem;
      }
      .title {
        color: $primary;
        z-index: 1;
        margin-left: auto;
        margin-right: auto;
      }
      .description {
        z-index: 1;
        color: $primary;
      }

      $gap : 50px;
      form {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: $gap;
        input {
          width: calc(50% - $gap/2);
        }
        textarea {
          width: 100%;
          height: 150px;
        }
        .buttons {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }

  input {
    background-color: transparent;
    padding-bottom: 10px;
    border: none;
    line-height: 150%;
    border-bottom: 1px solid $primary;
    outline: none !important;
    color: $primary;
    &::placeholder {
      color: $primary;
      opacity: 1; /* Firefox */
    }
  }

  textarea {
    background-color: transparent;
    padding-bottom: 10px;
    border: none;
    line-height: 150%;
    border-bottom: 1px solid $primary;
    outline: none !important;
    color: $primary;
    &::placeholder {
      color: $primary;
      opacity: 1; /* Firefox */
    }
  }
}
</style>