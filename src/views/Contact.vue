<template>
  <div id="wrapper">
    <!-- Content
    ================================================== -->

    <!-- Container / Start -->
    <div class="container" style="padding-top: 80px">
      <div class="row">
        <!-- Contact Details -->
        <div class="col-md-4">
          <h4 class="headline margin-bottom-30">Find Us There</h4>

          <!-- Contact Details -->
          <div class="sidebar-textbox">
            <p>
              Collaboratively administrate channels whereas virtual. Objectively
              seize scalable metrics whereas proactive e-services.
            </p>

            <ul class="contact-details">
              <li>
                <i class="im im-icon-Phone-2"></i> <strong>Phone:</strong>
                <span>0868761196 </span>
              </li>
              <li>
                <i class="im im-icon-Envelope"></i> <strong>E-Mail:</strong>
                <span><a href="#">ngo.huy.van.2001@gmail.com</a></span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-md-8">
          <section id="contact">
            <h4 class="headline margin-bottom-35">Contact Form</h4>

            <div id="contact-message"></div>

            <form
              method="post"
              action="contact.php"
              name="contactform"
              id="contactform"
              autocomplete="on"
            >
              <div class="row">
                <div class="col-md-6">
                  <div>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                      required="required"
                    />
                  </div>
                </div>
              </div>

              <div>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                />
              </div>

              <div>
                <textarea
                  name="comments"
                  cols="40"
                  rows="3"
                  id="comments"
                  placeholder="Message"
                  spellcheck="true"
                  required="required"
                ></textarea>
              </div>

              <input
                type="submit"
                class="submit button"
                id="submit"
                value="Submit Message"
              />
            </form>
          </section>
        </div>
        <!-- Contact Form / End -->
      </div>
    </div>
    <!-- Container / End -->

    <!-- Footer
    ================================================== -->
    <div id="footer" class="margin-top-55">
      <!-- Main -->
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-6">
            <img class="footer-logo" src="images/logo.png" alt="" />
            <br /><br />
            <p>
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
              libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
              laoreet ullamcorper phasellus semper.
            </p>
          </div>

          <div class="col-md-4 col-sm-6">
            <h4>Helpful Links</h4>
            <ul class="footer-links">
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Add Listing</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

            <ul class="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Our Partners</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>

          <div class="col-md-3 col-sm-12">
            <h4>Contact Us</h4>
            <div class="text-widget">
              <span>12345 Little Lonsdale St, Melbourne</span> <br />
              Phone: <span>(123) 123-456 </span><br />
              E-Mail:<span> <a href="#">office@example.com</a> </span><br />
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

        <!-- Copyright -->
        <div class="row">
          <div class="col-md-12">
            <div class="copyrights">© 2021 Listeo. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer / End -->

    <!-- Back To Top Button -->
    <div id="backtotop" class=""><a href="#"></a></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
};
</script>

<style lang="scss" scoped></style>
