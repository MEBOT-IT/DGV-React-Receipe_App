import React from 'react'
import './TermsCond.css'

function TermsCond() {
    return (
      <div className='header-offset content-wrapper about-wrapper'>
        <div class="terms-container container-terms">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <section class="terms-title">
              <h1 class="term-head1">Terms & Conditions</h1>
            </section>
            <div class="terms-body">
              <p id="terms-heading">
                Welcome to our Recipe Sharing App. Please review the following basic terms that govern your use
                of, and participation in, our platform. Your use of our app constitutes your agreement to follow 
                and be bound by these terms.</p>
              <div class="term image-left general-section">
                <h3 id="term-h3" >General</h3>
                <p id="term-p" >
                  By using our app, you agree to the Terms & Conditions. We may change or update these terms, so please check
                  this page regularly. We do not represent or warrant that the information on our app is accurate,
                  complete, or current. This includes recipe information and availability. We reserve the right to correct
                  any errors or omissions and to change or update information at any time without prior notice.
                </p>
              </div>
             
              <div class="term image-right errors-section">
                <h3 id="term-h3" >Correction of Errors and Inaccuracies</h3>
  
                <p id="term-p" >The information on the app may contain typographical errors or inaccuracies
                  and may not be
                  complete or
                  current. We therefore reserve the right to correct any errors, inaccuracies, or omissions and to change
                  or update information at any time with or without prior notice (including after recipes have been
                  submitted). Please note that such errors, inaccuracies, or omissions may relate to recipe descriptions,
                  ingredients, or otherwise.
                </p>
              </div>
             
              <div class="term image-left user-content-section">
                <h3 id="term-h3" >User-Generated Content</h3>
  
                <p id="term-p" >As a user, you are responsible for the recipes and content you share on our
                  app. Please
                  ensure that
                  your submissions do not violate our content guidelines and any applicable laws and regulations. We
                  reserve the right to remove or moderate user-generated content that violates our policies.
                </p>
              </div>
             
              <div class="term image-right privacy-section">
                <h3 id="term-h3" >Privacy</h3>
                <p id="term-p" >
                  At Cook Mate, we are committed to safeguarding your privacy and ensuring the security of your personal information. 
                  Our <a href="/privacy" id='privacy-link'>Privacy Policy</a> outlines how we collect, use, disclose, and protect your data when you use our platform. 
                  We prioritize transparency and seek to build trust with our users. 
                  By using Cook Mate, you agree to our Privacy Policy, so please review it carefully. 
                  Your continued use of our platform signifies your consent to the terms outlined therein. 
                  Your privacy matters to us, and we are here to address any questions or concerns you may have.             
                </p>
              </div>
             
              <div class="term image-left intellectual-section">
                <h3 id="term-h3" >Intellectual Property</h3>
                <p id="term-p" >The Cook Mate and its entire content, features, and functionality, including but not limited to logos, text, graphics, images, 
                and the arrangement thereof, are the intellectual property of Cook Mate and protected by applicable copyright, 
                trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not modify, reproduce, distribute, create derivative works, publicly display, publicly perform, republish, 
                download, store, or transmit any of the material on our app, except as necessary for your personal, non-commercial use, 
                and provided you agree to keep intact all copyright and other proprietary notices. 
                Any use of the materials on our app not expressly permitted by these Terms is a breach of these Terms and may violate copyright, trademark, and other laws.
                </p>
              </div>
             
              <div class="term image-left user-conduct-section">
                <h3 id="term-h3" >User Conduct</h3>
  
                <p id="term-p" >When using our App, you agree to:
                  <ol>
                    <li>Abide by all applicable laws and regulations.</li>
                    <li>Refrain from posting harmful, offensive, or inappropriate content.</li>
                    <li>Respect the intellectual property rights of others.</li>
                    <li>Not engage in any activity that disrupts or harms the app's functionality or security.</li>
                  </ol>
                  We reserve the right to suspend or terminate access to the app for users who violate these guidelines.
                </p>
              </div>
             
              <div class="term image-left termination-section">
                <h3 id="term-h3" >Termination</h3>
                <p id="term-p" >
                    We reserve the right to terminate or suspend your access to the Recipe Sharing App at our discretion, 
                    without prior notice, for any breach of these terms or for any other reason we deem appropriate. 
                    This includes, but is not limited to, violations of user conduct, intellectual property rights, or 
                    any illegal activities. Upon termination, 
                    you must cease using the app, and any content or data associated with your account may be deleted.
                </p>
              </div>
             
              <div class="term image-left disclaimer-section">
                <h3 id="term-h3" >Disclaimers</h3>
                <p id="term-p" >
                    The Cook Mate App and its content are provided "as is" without any warranties, expressed or implied. 
                    We make no representations or warranties regarding the accuracy or reliability of the information provided within the app. 
                    Users are solely responsible for their interactions and use of the recipes shared on the platform.
                </p>
              </div>
             
              <div class="term image-left governing-section">
                <h3 id="term-h3" >Governing Law</h3>
                <p id="term-p" >
                    These Terms of Service shall be governed and construed in accordance with the laws of Indian legal system. 
                    Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Indian legal system. 
                    Users agree that any legal action or proceedings 
                    related to the use of the Recipe Sharing App shall be brought exclusively in the aforementioned courts.
                </p>
              </div>
              <div class="term image-left contact-section">
                <h3 id="term-h3">Contact Us</h3>
                <p id="term-p">
                  If you have any questions about these Terms and Conditions, please contact us at <a
                    href="/" id='privacy-link'>support@cookmate.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* container*/}
      </div>
    )
  }
  
  export default TermsCond