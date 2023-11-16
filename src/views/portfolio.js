import DesktopIcons from "../components/DesktopIcons";
import DesktopWindow from "../components/DesktopWindow";
import WindowsNavbar from "../components/WindowsNavbar";
import "./portfolio.css";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import image5 from "../img/image5.png";
import image6 from "../img/image6.png";
import welcome from "../img/welcome4.gif";
import hand from "../img/haut_page.gif";
import newGif from "../img/new.gif";
import phone from "../img/phone.gif";
import email from "../img/email.gif";

export default () => {
  return (
    <div class="wrapper">
      <div class="desktop">
        <DesktopIcons />
        <DesktopWindow title="portfolio.rtf">
          <h1>Hey!, welcome to my website!</h1>
          <br />
          <hr />
          <br />
          <p align="center">
            <img alt="WELCOME!" src={welcome} />
          </p>
          <br />
          <hr />
          <p>
            I'm <span class="flash">OPEN FOR WORK</span>, keep reading to find
            out more about me and if interested, send me a{" "}
            <a href="https://wa.me/573044503724/">
              Whatsapp!
              <img alt="Phone" src={phone} width="60px" />
            </a>
            OR{" "}
            <a href="mailto:ceo@bugs.com.co">
              <img alt="EMAIL ME" src={email} />
            </a>
            <br />
            <br />
            <hr />
            <p align="center">
              <img alt="IMPORTANT!" src={hand} />
            </p>
            <br />
            <h2>About</h2>
            <br />
            <p>
              I am a seasoned full stack engineer with a background in web
              development, boasting over 10 years of experience in the field.
              Previously, I held the position of a full stack engineer at
              Skillshare, a prominent online learning platform that facilitates
              connections between millions of learners and teachers globally.
            </p>
            <p>
              During my time at Skillshare, I played a pivotal role in enhancing
              the user experience and delivering value to clients. My
              responsibilities included refining solutions for external clients,
              particularly those offering Skillshare as a perk to their
              employees. I utilized my extensive expertise in PHP, JavaScript,
              React, and various cloud-based tools to migrate services to a
              Dockerized environment, develop new features and tools, and
              contribute to the growth of revenue and platform usage.
            </p>
            <p>
              Collaborating seamlessly with a cross-functional team of
              engineers, designers, and product managers, I ensured the quality
              and performance of the solutions delivered. My overarching goal
              was to contribute to Skillshare's mission of inspiring creativity,
              curiosity, and lifelong learning.
            </p>
            As of Dec 2023, I find myself in a transitional phase after a recent
            layoff from Skillshare. I am actively seeking new opportunities to
            apply my skills and expertise in a dynamic and innovative
            environment, continuing to contribute to the ever-evolving landscape
            of web development.
          </p>

          <br />
          <br />
          <table border="1" cellPadding="5">
            <tr class="c37">
              <td class="c18" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c3"></span>
                </p>
                <p class="c0">
                  <span class="c3"></span>
                </p>
                <p class="c13">
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0.00px 0.00px",
                      border: "0.00px solid #000000",
                      transform: "rotate(0.00rad) translateZ(0px)",
                      WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      width: "77.50px",
                      height: "77.50px",
                    }}
                  >
                    <img
                      alt=""
                      src={image2}
                      style={{
                        width: "77.50px",
                        height: "77.50px",
                        marginLeft: "0.00px",
                        marginTop: "0.00px",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
              <td class="c2" colspan="1" rowspan="1">
                <h3 class="c4" id="h.vq1a7a33ikzj">
                  <img alt="NEW" src={newGif} />
                  <span class="c26 c20">Staff Engineer at Skillshare</span>
                </h3>
                <p class="c11">
                  <span class="c14">Skillshare.com</span>
                </p>
                <p class="c11">
                  <span class="c10">Sep</span>
                  <span class="c6">&nbsp;2021 &ndash; Nov 2023</span>
                </p>
                <p class="c11">
                  <span class="c6">US (remote)</span>
                </p>
                <br />
                <p class="c11">
                  <span class="c5">
                    As a Staff (full stack) Engineer at Skillshare, I was
                    responsible for improving the company's solutions for
                    external clients, including companies that offer Skillshare
                    as a perk to their employees. In this role, I leveraged my
                    expertise to enhance the platform's capabilities and provide
                    better experiences for users.
                  </span>
                </p>
                <br />
                <p class="c11">
                  <span class="c5">
                    As a member of Skillshare's Enterprise team, I worked
                    closely with various cloud-based tools, migrating services
                    to a Dockerized environment and creating new features and
                    tools to increase revenue and usage of the platform. Using
                    PHP for the backend and JavaScript for developing new
                    services, I was able to deliver effective solutions that met
                    the needs of the project.
                  </span>
                </p>
                <br />
                <p class="c11">
                  <span class="c8">
                    Currently, I'm part of the discovery team, where I focus on
                    providing solutions to help users find the right content
                    more easily. In this role, I work to develop tools that
                    streamline the search process and better understand users'
                    needs through data and machine learning. My contributions to
                    the discovery team have helped Skillshare to improve its
                    user experience and provide better solutions for its
                    customers.
                  </span>
                </p>
              </td>
            </tr>
            <tr class="c37">
              <td class="c18" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c3"></span>
                </p>
                <p class="c0">
                  <span class="c3"></span>
                </p>
                <p class="c13">
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0.00px 0.00px",
                      border: "0.00px solid #000000",
                      transform: "rotate(0.00rad) translateZ(0px)",
                      WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      width: "58.46px",
                      height: "58.46px",
                    }}
                  >
                    <img
                      alt=""
                      src={image1}
                      style={{
                        width: "58.46px",
                        height: "58.46px",
                        marginLeft: "0.00px",
                        marginTop: "0.00px",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
              <td class="c2" colspan="1" rowspan="1">
                <h3 class="c4" id="h.poeft2kkl02">
                  <span class="c26 c20">Backend Developer at Bunch</span>
                </h3>
                <p class="c11">
                  <span class="c16 c20">Bunch AI</span>
                  <span class="c20">
                    <br />
                  </span>
                  <span class="c6">
                    Feb 2021 &ndash; July 2021 | 5 mos
                    <br />
                    Berlin (remote)
                  </span>
                </p>
                <p class="c1">
                  <span class="c6"></span>
                </p>
                <p class="c11">
                  <span class="c8">
                    As part of the Bunch team, I had the opportunity to
                    contribute to the redesign of the backend infrastructure to
                    support their improved virtual coaching app. In this role, I
                    made performance fixes and general improvements to the
                    platform.
                  </span>
                </p>
                <br />
                <p class="c11">
                  <span class="c8">
                    The backend was built using NodeJS and TypeScript, and it
                    heavily relied on microservices and serverless architecture.
                    My experience with these technologies allowed me to quickly
                    adapt to the project and deliver high-quality results.
                  </span>
                </p>{" "}
                <br />
                <p class="c11">
                  <span class="c8">
                    Overall, my work with Bunch helped to improve the app's
                    backend infrastructure, providing a more seamless experience
                    for users seeking to improve their leadership skills. My
                    skills in NodeJS and TypeScript, coupled with my experience
                    in microservices and serverless architecture, enabled me to
                    deliver effective solutions that met the needs of the
                    project.
                  </span>
                </p>
              </td>
            </tr>
            <tr class="c37">
              <td class="c18" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c3"></span>
                </p>
                <p class="c13">
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0.00px 0.00px",
                      border: "0.00px solid #000000",
                      transform: "rotate(0.00rad) translateZ(0px)",
                      WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      width: "71.04px",
                      height: "71.04px",
                    }}
                  >
                    <img
                      alt=""
                      src={image6}
                      style={{
                        width: "71.04px",
                        height: "71.04px",
                        marginLeft: "0.00px",
                        marginTop: "0.00px",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
              <td class="c2" colspan="1" rowspan="1">
                <h3 class="c4" id="h.49dkonv5f2d9">
                  <span class="c20 c26">
                    Full-stack Developer at Instructure
                  </span>
                </h3>
                <p class="c11">
                  <span class="c16 c20">BairesDev</span>
                  <span class="c20">
                    <br />
                  </span>
                  <span class="c10">
                    Jun 2018 &ndash; Jan 2021 | 2 yrs 8 mos
                    <br />
                    Colombia
                  </span>
                  <span class="c20">
                    <br />
                    <br />
                  </span>
                  <p>
                    <span class="c8">
                      I began my journey with Instructure Inc through my role as
                      a Node Developer for Commons, an online platform for
                      educational content sharing. As part of the development
                      team at Baires, I helped to update the application's user
                      interface by migrating to Instructure Design components on
                      React. Additionally, I leveraged ElasticSearch to enhance
                      search functionality and implemented new features while
                      providing support for reported bugs.
                    </span>
                  </p>
                  <br />
                  <p class="c11">
                    <span class="c8">
                      After a year of contributing to the development of
                      Commons, I joined Instructure's Professional Services
                      team, where I worked on Canvas reports and custom tools
                      for Instructure's customers. In this role, I honed my
                      skills with a mix of Rails and React, while also delving
                      into the world of Postgres to deliver custom reports.
                      Working with AWS allowed me to gain valuable experience
                      with cloud services and infrastructure.
                    </span>
                  </p>
                  <br />
                  <p class="c11">
                    <span class="c8">
                      Throughout my time at Instructure, I demonstrated a strong
                      work ethic and a commitment to delivering high-quality
                      results. I was able to collaborate effectively with
                      cross-functional teams and build solutions that improved
                      the user experience for our customers.
                    </span>
                  </p>
                </p>
              </td>
            </tr>
            <tr class="c27">
              <td class="c18" colspan="1" rowspan="1">
                <p class="c21">
                  <span class="c3"></span>
                </p>
                <p class="c13">
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0.00px 0.00px",
                      border: "0.00px solid #000000",
                      transform: "rotate(0.00rad) translateZ(0px)",
                      WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      width: "71.04px",
                      height: "71.04px",
                    }}
                  >
                    <img
                      alt=""
                      src={image4}
                      style={{
                        width: "71.04px",
                        height: "71.04px",
                        marginLeft: "0.00px",
                        marginTop: "0.00px",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
              <td class="c2" colspan="1" rowspan="1">
                <h3 class="c4" id="h.tqo8id57k94g">
                  <span class="c26 c20">
                    Full-stack Developer at Domicilios.com
                  </span>
                </h3>
                <p class="c11">
                  <span class="c16 c20">
                    ClickDelivery | Domicilios.com | DeliveryHero
                  </span>
                  <span class="c16">
                    <br />
                  </span>
                  <span class="c10">Feb</span>
                  <span class="c6">
                    &nbsp;2012 &ndash; Dec 2017 | 5 yrs 9 mos
                  </span>
                </p>
                <p class="c25">
                  <span class="c10">Bogot&aacute;, Colombia</span>
                  <span class="c24">
                    <br />
                    <br />
                  </span>
                  <p class="c11">
                    <span class="c8">
                      At Domicilios.com, I played an instrumental role in the
                      company's growth from a coupon service to a leading online
                      food delivery platform in Colombia. From the very
                      beginning, I was part of the team that oversaw the
                      transition and worked on key components that contributed
                      to our success.
                    </span>
                  </p>
                  <br />
                  <p class="c11">
                    <span class="c8">
                      As the company grew, I took on more responsibilities and
                      designed several critical systems that improved our
                      operations. For example, I developed an admin panel that
                      helped us manage platform content and integrated JQuery
                      and Bootstrap 2 to ensure the panel's efficiency.
                    </span>
                  </p>
                  <br />
                  <p class="c11">
                    <span class="c8">
                      Another significant challenge was managing the influx of
                      orders, which required a reliable system to notify
                      restaurants and customers alike. I designed a solution
                      that could assign orders to different agents while
                      balancing the workload, ensuring that all agents had at
                      least one order while grouping multiple orders from the
                      same restaurant to minimize communication efforts.
                    </span>
                  </p>
                  <br />
                  <p class="c11">
                    <span class="c8">
                      As the company continued to expand and attract more tech
                      talent, I played an active role in collaborating with the
                      team to develop solutions that improved our operations.
                      When we were acquired by DeliveryHero, I led the
                      development of a new website that delivered a superior
                      user experience, utilizing modern tools such as React.
                    </span>
                  </p>
                  <br />
                  <p class="c11">
                    <span class="c8">
                      Overall, my contributions to Domicilios.com helped shape
                      the company's success, and I am proud to have been a part
                      of such a transformative period in the online food
                      delivery industry in Colombia.
                    </span>
                  </p>
                  <br />
                </p>
              </td>
            </tr>
            <tr class="c23">
              <td class="c18" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c3"></span>
                </p>
                <p class="c13">
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0.00px 0.00px",
                      border: "0.00px solid #000000",
                      transform: "rotate(0.00rad) translateZ(0px)",
                      WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      width: "71.04px",
                      height: "71.04px",
                    }}
                  >
                    <img
                      alt=""
                      src={image5}
                      style={{
                        width: "71.04px",
                        height: "71.04px",
                        marginLeft: "0.00px",
                        marginTop: "0.00px",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
              <td class="c2" colspan="1" rowspan="1">
                <h3 class="c4" id="h.u22kgysuoru">
                  <span class="c26 c20">
                    Web and hardware development for Ecopuntos
                  </span>
                </h3>
                <p class="c11">
                  <span class="c14">VerdeMedia Latina S.A.S</span>
                </p>
                <p class="c11">
                  <span class="c6">Sep 2012 &ndash; Apr 2013 | 8 mos</span>
                </p>
                <p class="c11">
                  <span class="c10">
                    Bogot&aacute;, Colombia
                    <br />
                    <br />
                  </span>
                  <span class="c8">
                    VerdeMedia was a company that revolutionized the way people
                    recycled by delivering machines that turned recycled
                    material into points. <br />
                    <br />I was in charge of the bridge between the machine and
                    the user, I designed a finite state machine that talked to a
                    hardware in order to give points for each recycled material,
                    having a database of products we could identify the type of
                    material being recycled and using a set of sensors we knew
                    if the product entered completely the machine to avoid
                    scams. <br />
                    <br />
                    You can see a video of the UI I designed and developed here:
                    <br />
                    https://www.youtube.com/watch?v=ULntjcleXcw
                  </span>
                </p>
              </td>
            </tr>
            <tr class="c23">
              <td class="c18" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c3"></span>
                </p>
                <p class="c13">
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0.00px 0.00px",
                      border: "0.00px solid #000000",
                      transform: "rotate(0.00rad) translateZ(0px)",
                      WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      width: "71.04px",
                      height: "71.04px",
                    }}
                  >
                    <img
                      alt=""
                      src={image3}
                      style={{
                        width: "71.04px",
                        height: "71.04px",
                        marginLeft: "0.00px",
                        marginTop: "0.00px",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
              <td class="c2" colspan="1" rowspan="1">
                <h3 class="c4" id="h.96d3ha823fk1">
                  <span class="c26 c20">
                    Full-stack Developer for PideFarma
                  </span>
                </h3>
                <p class="c11">
                  <span class="c14">PideFarma.com</span>
                </p>
                <p class="c11">
                  <span class="c6">Apr 2013 &ndash; Apr 2014 | 1 yr 1 mo</span>
                </p>
                <p class="c11">
                  <span class="c10">Bogot&aacute;, Colombia</span>
                </p>
                <p class="c1">
                  <span class="c6"></span>
                </p>
                <p class="c11">
                  <span class="c5">
                    PideFarma started as a side company of Domicilios.com with a
                    focus on pharmacy deliveries. I helped design and ship the
                    website that also worked as a mobile app at the time.
                    Designed different tools within the app that gave the
                    customer an extra reason to use the website increasing the
                    orders.
                    <br />
                    <br />
                    This was also based on PHP with CakePHP and Bootstrap and
                    jQuery for the front end.
                  </span>
                </p>
                <p class="c1">
                  <span class="c5"></span>
                </p>
                <p class="c1">
                  <span class="c5"></span>
                </p>
                <p class="c1">
                  <span class="c5"></span>
                </p>
                <p class="c1">
                  <span class="c5"></span>
                </p>
              </td>
            </tr>
            <tr class="c23">
              <td class="c18" colspan="1" rowspan="1">
                <p class="c21">
                  <span class="c3"></span>
                </p>
                <p class="c13">
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0.00px 0.00px",
                      border: "0.00px solid #000000",
                      transform: "rotate(0.00rad) translateZ(0px)",
                      WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      width: "71.04px",
                      height: "71.04px",
                    }}
                  >
                    <img
                      alt=""
                      src={image5}
                      style={{
                        width: "71.04px",
                        height: "71.04px",
                        marginLeft: "0.00px",
                        marginTop: "0.00px",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                      }}
                      title=""
                    />
                  </span>
                </p>
              </td>
              <td class="c2" colspan="1" rowspan="1">
                <h3 class="c4" id="h.6p8ky2ukc3uc">
                  <span class="c26 c20">Freelance at a Digital Agency</span>
                </h3>
                <p class="c11">
                  <span class="c16 c20">MDS Digital</span>
                </p>
                <p class="c11">
                  <span class="c6">Dec 2012 &ndash; Aug 2014 | 1 yr 9 mos</span>
                </p>
                <p class="c11">
                  <span class="c6">Bogot&aacute;, Colombia</span>
                </p>
                <p class="c1">
                  <span class="c6"></span>
                </p>
                <p class="c25">
                  <span class="c8">
                    At MDS I helped with the development of different websites
                    (mostly responsive sites) using Drupal as the backend. I
                    also had the opportunity of creating a mobile web app
                    experience shipped as a Cordova application that is being
                    used by a pharmaceutical company in Colombia.
                  </span>
                </p>
              </td>
            </tr>
          </table>
        </DesktopWindow>
        <WindowsNavbar />
      </div>
    </div>
  );
};
