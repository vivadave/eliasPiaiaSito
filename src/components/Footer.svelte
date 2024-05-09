<script lang="ts">
  import Logo from "./Logo.svelte";

</script>

<footer>
  <div class="container">
    <div class="footer-content">
      <button class="footer-logo" on:click={() => {window.location.href = '/'}}>
        <Logo />
      </button>
      <div class="footer-text">
        <p>© 2024 - Tutti i diritti riservati</p>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @import '../style/variables.scss';
  @import '../style/pantone.scss';

  footer {
    background-color: $background;
    padding: 2rem 0;
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .footer-logo {
          width: 200px;
          cursor: pointer;
      }
      .footer-text {
        p {
          color: $primary;
          font-size: 1.2rem;
        }
      }
    }
  }
</style>