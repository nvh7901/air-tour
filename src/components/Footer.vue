<template>
  <!-- Footer
    ================================================== -->
  <div id="footer" class="sticky-footer">
    <!-- Main -->
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-6">
          <img class="footer-logo" src="images/logo.png" alt="" />
          <br /><br />
          <p>
            {{ $t("footerDescription") }}
          </p>
        </div>

        <div class="col-md-4 col-sm-6">
          <h4>{{ $t("footerHelpfulLinks") }}</h4>
          <ul class="footer-links">
            <li>
              <a href="#">{{ $t("footerHelpLogin") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footerHelpRegister") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footerHelpPricing") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footerHelpPrivacyPolicy") }}</a>
            </li>
          </ul>

          <ul class="footer-links">
            <li>
              <a href="#">{{ $t("footerHelpFAQ") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footerHelpOurPartners") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footerHelpHowItWork") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footerHelpContact") }}</a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>

        <div class="col-md-3 col-sm-12">
          <h4>{{ $t("footerContact") }}</h4>
          <div class="text-widget">
            <span>{{ $t("footerContactAddress") }}</span> <br />
            {{ $t("footerContactPhone") }}<br />
          </div>

          <ul class="social-icons margin-top-20">
            <li>
              <a class="facebook" href="#"><i class="icon-facebook"></i></a>
            </li>
            <li>
              <a class="twitter" href="#"><i class="icon-twitter"></i></a>
            </li>
            <li>
              <a class="gplus" href="#"><i class="icon-gplus"></i></a>
            </li>
            <li>
              <a class="vimeo" href="#"><i class="icon-vimeo"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer / End -->

  <!-- Back To Top Button -->
  <div id="backtotop"><a href="#"></a></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style lang="scss" scoped></style>
