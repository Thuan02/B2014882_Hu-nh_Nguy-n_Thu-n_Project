<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
      <ul class="social-media">
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            >Facebook</a
          >
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            >Twitter</a
          >
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            >Instagram</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss">
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.social-media {
  list-style: none;
  padding: 0;
}

.social-media li {
  display: inline;
  margin: 0 10px;
}
</style>
