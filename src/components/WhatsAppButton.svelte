<script lang="ts">
  import whatsApp from '../lib/images/whatsapp.svg'
  import whatsAppLight from '../lib/images/whatsappLight.svg'
  export let invertColor = false;
</script>

<a class="whatsapp-button" href="https://wa.me/+393292918803">
  <img src={invertColor ? whatsApp : whatsAppLight} class:invertColor alt="whatsapp icon"/>
</a>

<style lang="scss">
  @import '../style/pantone.scss';
  .whatsapp-button {
    border-radius: 50%;
    padding: 10px;
    display: flex;
    cursor: pointer;
    transition: background-color 0.3s;
    img {
      width: 30px;
    }
    &:hover {
      background-color: $primary-dark;
    }
  }
</style>