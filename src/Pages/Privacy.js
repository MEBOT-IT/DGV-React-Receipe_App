import React from 'react'
import './Privacy.css'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Privacy = () => {
    const one = `1. Overview`
    const two = `2. What does this Privacy Policy cover?`
    const three = `3. What Personal Information do we collect from you?`
    const four = `4. Cookies`
    const five = `5. How do we use Personal Information collected from you?`
    const six = `6. Our legal grounds for processing Personal Information`
    const seven = ` 7. How long do we keep your Personal Information?`
    const eight = `8. How do we secure your Personal Information?`
    const nine = `9. Your rights`
    const ten = `10. Contacting us, further questions and how to make a complaint`
    const PrivacyCover1 = `CookMate, we may collect the following types of information:`;
    const Cookie1 = `We and our third-party partners, such as advertising networks, social media widgets, and analytics providers, use cookies and similar technologies to provide, support and improve Cookmate Service and each of the uses outlined and described in this Privacy Policy. Our partners also may collect information about your online activities over time, on other devices, and on other websites or apps. Those third parties may have their own privacy policies governing their use of your Personal Information. To switch off cookies, you need to change your browser settings. For further information about how to do this please visit http://www.aboutcookies.org/. Please note that if you choose to switch off cookies on your device that will mean certain functions of our Site and App cannot operate properly and the usability of the Cookpad Service will be affected.`;
    const Cookie2 = `Read our Cookie Policy to learn more.`;
    const data = [
        { 
            info: `Visiting our Site or using our App without registration`, 
            uses: `Technical Information (see below)`, 
        },
        {
            info: `If you register with us via our Site or App`, 
            uses: `Username, Email address and password
                    Recipe or food interests that you indicate through your use of the Site or App.`,
        },
        {
            info: `If you sign in via Social Media such as Facebook or Google`, 
            uses: `If you sign into our Site or App via Facebook, we will collect your Facebook ID, email address,
        profile photo and you have the option to allow us to collect the names of your Facebook friends. This is restricted to Facebook friends who use the Cookmate Service and have allowed Cookpad to see their list of Facebook friends.
        If you sign into our Site or App via Google, we will collect your Google ID, name, profile photo and e-mail address.` ,
        },
        {
            info: `If you complete your profile`, 
            uses: `Personal Information you provide including your photo, username, location and biography.`,
        },
        {
            info: `If you want us to sync the photos on your device for food-related photos`, 
            uses: `The Cookmate Service can access and collect images stored in your device's photo storage. By uploading the thumbnail images to the Cookmate Service, the Cookmate Service uses image recognition functionality to try to identify photos that contain food ("Food Photos").
            Uploaded thumbnails may contain information about you, such as your face; however, the image recognition functionality does not perform facial recognition or attempt to identify any individuals in images. After thumbnails are classified, the original images of those identified as Food Photos are uploaded and stored in our server. We automatically delete any thumbnails from our server that the image recognition functionality does not identify as a Food
            Photo or the original images that you manually removed.`,
        },
        {
            info: `If you use the Premium Service`, 
            uses: `If you subscribe to the Premium Service from our App you will need to submit your payment information to Google Inc. and/or Apple Inc. and such information will be used and managed by them in accordance with their own privacy policies as linked below.
                Google: https://privacy.google.com/
                Apple: https://www.apple.com/legal/privacy/en-ww/`,
        },
        {
            info: `If you post recipes or comments`, uses: `Any Personal Information included in any of your recipes, comments or other submissions will be collected and processed by Cookmate.`
        },
        {
            info: `If you contact us`, uses: `Name, phone number or email address and any other Personal
            Information you provide to us in the course of our communication.`
        },
        {
            info: `Technical and Statistical Information`, uses: `The internet protocol (IP) address used to connect your computer or device to the internet and geographical location determined from such;
            Your login information, browser type and version, time zone setting, browser plug-in types and versions, device information such as operating system and platform (as applicable to the device you are using);
            Information about your visit to our Site, the path that you take through and from our Site (including date and time); pages that you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page; and
            In the case of our App, information about your use of our App and the country you are connected from.`
        },
        {
            info: `Special categories of Personal Information`, uses: `Some of the Personal Information that you submit to us about you may be special categories of Personal Information.
             Special categories of Personal Information include, for example, information relating to allergies (e.g. gluten-free recipes) or religion (e.g. kosher meals).
            We treat special categories of Personal Information with extra care.`
        }
    ]
    return (
        <>
        <Header/>
        <div className="privacy-policy">
            <p id='privacy-title'>Privacy Policy</p>
            <div className="contents">
                <h2 className='contents-heading'>Contents</h2>
                <ul className='contents-list'>
                    <li><a href="#overview">{one}</a></li>
                    <li><a href="#policy_cover">{two}</a></li>
                    <li><a href="#perinfo">{three}</a></li>
                    <li><a href="#cookies">{four}</a></li>
                    <li><a href="#collected">{five}</a></li>
                    <li><a href="#legal">{six}</a></li>
                    <li><a href="#personal information">{seven}</a></li>
                    <li><a href="#secure">{eight}</a></li>
                    <li><a href="#rights">{nine}</a></li>
                    <li><a href="#contact">{ten}</a></li>
                </ul>
            </div>
            <div id="overview">
                <h2 className='overview-heading'>1. Overview</h2>
                <p className='pc1'>At CookMate, we take your privacy and the security of your personal information seriously. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal data when you interact with our website.</p>
                <p className='pc2'>By accessing our Site or App, you confirm that you have read and understood the entirety of this Privacy Policy.</p>
                <p className='pc3'>You have various rights in respect of our use of your Personal Information as set out in the ‘Your Rights’ section below.</p>
                <p className='pc4'><span id="bold">Two of the fundamental rights to be aware of are that you may:</span></p>
                <ol className='overview-list'>
                    <li>Ask us to stop using your Personal Information for direct-marketing by email or push notification. If you exercise this right, we will stop using your Personal Information in this regard; and</li>
                    <li>Ask us to consider any valid objections you have to our use of your Personal Information where we process your Personal Information on the basis of our, or a third party's, legitimate interests.</li>
                </ol>
            </div>
            <div id="policy_cover">
                <h2 className='policy-heading'>2. What Information We Collect</h2>
                <p className='pcover1'>{PrivacyCover1}</p>
                <ul className='policy-list'>
                    <li><span id="bold">Personal Information:</span>This may include your name, email address, and other identifying information
                        when you voluntarily provide it for features like newsletter subscriptions or user accounts.</li>
                    <li><span id='bold'>Usage Data:</span> We collect non-personal information about how you interact with our website. This includes data such as your IP address, browser type, device information, and pages visited.
                        We use this information to improve our website's performance and user experience.</li>
                </ul>
            </div>
            <div id="perinfo">
                <h2 className='perinfo-heading'>3. What Personal Information do we collect from you?</h2>
                <div className="table_privacy">
                    <table cellPadding={12} cellSpacing={0}>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td id='col_1'>{val.info}</td>
                                    <td id='col_2'>{val.uses}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <div id="cookies">
                <h2 className='cookies-heading'>4. Cookies</h2>
                <p className='cookies1'>{Cookie1}</p>
                <p className='cookies2'>{Cookie2}</p>
            </div>
            <div id="collected">
                <h2 className='collected-heading'>5. How we use your Information?</h2>
                <p className='collected-desp'>We use your personal information for the following purposes:</p>
                <ul className='collected-list'>
                    <li><span id='bold'>User Accounts:</span> If you choose to create a user account, we use your provided information to personalize your experience and provide access to certain features.</li>
                    <li><span id='bold'>Communication:</span> We may use your email address to send you updates, newsletters, and notifications related to our website, provided you have opted in to receive such communications.</li>
                    <li><span id='bold'>Improvement:</span> Non-personal information is used to analyze website usage patterns, identify areas for improvement, and optimize our content.</li>
                </ul>
                <h3 className='collected-heading1'>Third-Party Services:</h3>
                <p className='collected-desp1'>CookMate may use third-party services, such as analytics tools and advertising networks.
                    These services may collect additional information and have their own privacy policies.
                    We encourage you to review the policies of these third parties.</p>
            </div>
            <div id="legal">
                <h2 className='legal-heading'>6. Our legal grounds for processing Personal Information</h2>
                <p className='legal-desp1'>We may only process your Personal Information if we have a legal basis for doing so. This section sets out the legal grounds on which we rely in order to process your Personal Information.</p>
                <p className='legal-desp2'><span id="bold">We consider that the legal bases for using your Personal Information are as follows:</span></p>
                <ul className='legal-list'>
                    <li>Use of your Personal Information is necessary to perform our obligations under any contract with you (for example, to comply with our Terms of Use which you accept by browsing the Site or by downloading the App);</li>
                    <li>Our use of your Personal Information is necessary for complying with our legal obligations</li>
                    <li>To operate and secure the Site and App;</li>
                    <li>Marketing, market research and business development;</li>
                    <li>To provide the CookMate Services to our users, to provide customer and technical services and to know the users that we are providing the Cookmate Services to.</li>
                </ul>
                <p className='legal-desp3'>If we rely on our (or a third party’s) legitimate interests for using your Personal Information, we will undertake a balancing test to ensure that our (or the third party’s) legitimate interests are not outweighed by your interests or fundamental rights and freedoms which require protection of your Personal Information. You can ask us for information on this balancing test by contacting us.</p>
                <p className='legal-desp4'>Other uses of Personal Information (including special categories of Personal Information and participation in the beta programme) may be subject to your consent (which you may withdraw at any time after giving it).</p>
            </div>
            <div id="personal information">
                <h2 className='pi-heading'>7. How long  we keep your Personal Information?</h2>
                <p className='pi-desp'>The duration for which a website or service keeps user information can vary and is typically outlined in the website's privacy policy. There is no one-size-fits-all answer, as it depends on various factors, including legal requirements, the nature of the information collected, and the purpose for which it is collected.
                    Here are some key considerations:</p>
                <ul className='pi-list'>
                    <li><span id="bold">Legal Requirements:</span> In many jurisdictions, there are legal requirements that dictate how long certain types of information must be retained. For example, financial and tax-related
                        information may need to be retained for a specific number of years to comply with tax laws.</li>
                    <li><span id="bold">Purpose of Data Collection:</span>The duration for which information is retained may also depend on the purpose for which it was collected. Data should not be kept longer than necessary to fulfill the purpose for which it was collected.
                        Once that purpose is fulfilled, the data should be deleted or anonymized.</li>
                    <li><span id="bold">User Consent: </span>Some websites may retain data as long as the user gives their consent.
                        Users might have the option to delete their accounts or request the removal of their data at any time.</li>
                </ul>
            </div>
            <div id="secure">
                <h2 className='secure-heading'>8. How do we secure your Personal Information?</h2>
                <p className='secure-desp1'>We take steps in an effort to treat your information securely and in accordance with this Privacy Policy. Unfortunately though, the internet cannot be guaranteed to be 100% secure and, as such, you acknowledge and accept that we cannot guarantee the security of your Personal Information transmitted to the Site or the App and that such transmission is at your own risk.</p>
                <p className='secure-desp2'>Where we have given you (or where you have chosen) a password which enables you to access your online account, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.</p>
            </div>
            <div id="rights">
                <h2 className='rights-heading'>9. Your rights</h2>
                <p className='rights-desp'>You have various rights in relation to your Personal Information. In particular, you have a right to:</p>
                <ul className='rights-list'>
                    <li>Obtain confirmation that we are processing your Personal Information and request a copy of the Personal Information we hold about you;</li>
                    <li>Ask that we update the Personal Information we hold about you, or correct such Personal Information that you think is incorrect or incomplete;</li>
                    <li>Ask that we delete Personal Information that we hold about you, or restrict the way in which we use such Personal Information;</li>
                    <li>Withdraw consent to our processing of your Personal Information, where we are relying upon your consent as our legal basis for processing such Personal Information;</li>
                    <li>Object to our processing of your Personal Information.</li>
                </ul>
            </div>
            <div id="contact">
                <h2 className='contact-heading'>10. Contacting us, further questions and how to make a complaint</h2>
                <p className='contact-desp1'>If you have any queries about our collection, use or storage of your Personal Information, please contact Cookmate's Data Protection Officer:</p>
                <ul className='contact-list'>
                    <li>By email:<a href="/"> support@cookmate.com</a></li>
                    <li>By post: FAO Data Protection Officer, Silversmiths 1-3 Broad Plain, Bristol BS2 0JP, United Kingdom</li>
                </ul>
                <p className='contact-desp2'>If you are unhappy with the way we handle your Personal Information, or any privacy query or request that you have raised with us, we would always prefer you to <a href="contact">contact us</a> first. However, you have a right to complain to the EU Data Protection Authority (“DPA”) in the country where you usually live or work, or where an alleged infringement of privacy law has taken place. In the UK (for example), the DPA is the Information Commissioner’s Office. If you would like to be directed to the appropriate DPA, please <a href="contact">contact us</a>  at the contact details above. Alternatively, you may seek a remedy through the courts if you believe your rights have been breached.</p>
            </div>
        </div>
        <Footer/>
        </>

    );
};
export default Privacy;