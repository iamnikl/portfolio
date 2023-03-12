<script>
  import { page } from '$app/stores';
</script>

<div style="padding-top: 4rem;">
  <center>
      <hgroup>
          <h1><code>{$page.status} ({$page.error.message})</code></h1>
          <h2>Looks like an error occured</h2>
      </hgroup>
      <small>Go back to the <a href="/">homepage</a></small>
  </center>
</div>