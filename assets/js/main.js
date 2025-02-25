/// inserting HTML with JS
function insertHTML(html, parentElementID) {
  // parentElement.innerHTML = html;
  const parentElement = document.getElementById(parentElementID);
  if (!parentElement) return false;
  parentElement.insertAdjacentHTML('afterEnd', html);
  return true;
}
const headerSection = `    <!-- headr  -->
    <header
      class="theme-header-graper sticky left-0 top-0 z-50 h-[90px] pt-[40px] transition-all duration-300"
      id="header"
      role="banner"
    >
      <nav
        class="theme-container flex h-full items-center justify-between py-4"
        role="navigation"
        aria-label="Main Navigation"
      >
        <!-- Logo -->
        <a
          href="./index.html"
          class="inline-block w-[100px] sm:w-[130px] sm:flex-shrink-0"
          aria-label="Homepage"
        >
          <img
            class="w-full"
            src="./assets/image/logo_blue.svg"
            alt="أربَاحْ"
          />
        </a>

        <!-- Navigation Links -->
        <div class="flex items-center gap-4">
          <ul
            id="navigation-ul"
            class="p-normal hidden items-center justify-between gap-4 text-blue-950 lg:flex"
            role="menu"
            aria-label="Primary Navigation"
          >
            <li
              class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
              role="menuitem"
            >
              <div class="pointer-events-auto w-full">
                <a href="./index.html" class="inline-block w-full">
                  الرئيسية
                </a>
              </div>
            </li>
            <li
              class="contain-sub-menu group relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>خدماتنا</span>
              <!-- sub menu -->
              <ul
                class="sub-menu absolute right-0 top-full hidden max-w-max rounded-md bg-white px-4 py-2 shadow-lg group-hover:block"
                role="menu"
                aria-label="Our Services"
              >
                <li
                  class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                  role="menuitem"
                >
                  <div class="pointer-events-auto w-full">
                    <a href="./service.html" class="inline-block w-full"
                      >مسك الدفاتر</a
                    >
                  </div>
                </li>
                <li
                  class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                  role="menuitem"
                >
                  <div class="pointer-events-auto w-full">
                    <a href="./service2.html" class="inline-block w-full"
                      >المراجعة و التدقيق</a
                    >
                  </div>
                </li>
                <li
                  class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                  role="menuitem"
                >
                  <div class="pointer-events-auto w-full">
                    <a href="./service3.html" class="inline-block w-full"
                      >تشغيل الانظمة المحاسبية</a
                    >
                  </div>
                </li>
              </ul>
            </li>
            <li
              class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
              role="menuitem"
            >
              <div class="pointer-events-auto w-full">
                <a href="./about.html" class="inline-block w-full">من نحن</a>
              </div>
            </li>
            <li
              class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
              role="menuitem"
            >
              <div class="pointer-events-auto w-full">
                <a href="./contact.html" class="inline-block w-full"
                  >تواصل معنا</a
                >
              </div>
            </li>
            <li
              class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
              role="menuitem"
            >
              <div class="pointer-events-auto w-full">
                <a href="./blogs.html" class="inline-block w-full">المدونة</a>
              </div>
            </li>
          </ul>
          <!-- Try Now Button -->
          <div class="hidden lg:block">
            <a
              href="./freeConsultation.html"
              class="p-normal group relative whitespace-nowrap rounded-lg px-2 py-1 text-themeBlue"
              aria-label="Request Free Consultation"
            >
              أستشارة مجانية
              <span
                class="absolute inset-0 -z-10 block size-full rounded-lg bg-gradient-to-r from-themeGreen via-themeGreen/60 to-themeGreen opacity-100 transition duration-300 group-hover:opacity-0"
              ></span>
              <span
                class="absolute inset-0 -z-10 block size-full rounded-lg bg-gradient-to-r from-themeGreen/60 via-themeGreen to-themeGreen/60 opacity-0 transition duration-300 group-hover:opacity-100"
              ></span>
            </a>
          </div>
          <div class="flex items-center gap-1 lg:hidden">
            <!-- Try Now Button -->
            <a
              href="./freeConsultation.html"
              class="p-normal group relative whitespace-nowrap rounded-lg px-2 py-1 text-themeBlue"
              aria-label="Request Free Consultation"
            >
              أستشارة مجانية
              <span
                class="absolute inset-0 -z-10 block size-full rounded-lg bg-gradient-to-r from-themeGreen via-themeGreen/60 to-themeGreen opacity-100 transition duration-300 group-hover:opacity-0"
              ></span>
              <span
                class="absolute inset-0 -z-10 block size-full rounded-lg bg-gradient-to-r from-themeGreen/60 via-themeGreen to-themeGreen/60 opacity-0 transition duration-300 group-hover:opacity-100"
              ></span>
            </a>
            <!-- Hamburger Icon -->
            <button
              id="menu-btn"
              class="cursor-pointer rounded-sm p-2 text-themeBlue transition-colors duration-150 hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
              aria-label="Open Menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div
          id="mobile-menu"
          class="fixed -left-full top-0 h-[100svh] w-screen transition-all duration-300 lg:hidden"
          aria-label="Mobile Navigation"
          role="dialog"
          aria-hidden="true"
        >
          <div
            id="mobile-menu-ul-parent"
            class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-between overflow-y-auto bg-slate-50 pb-6 pt-8 shadow-lg sm:w-1/2 sm:pt-0"
            role="menu"
            aria-label="mobile Navigation"
          >
            <!-- close the mobile menu button  -->
            <button
              id="mobile-menu-close-button"
              class="absolute left-2 top-2 block cursor-pointer rounded-sm p-2 text-themeBlue transition-colors duration-150 hover:bg-gray-200 hover:text-gray-700 focus:outline-none sm:hidden"
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-6"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <!-- mobile menu ul  -->
            <ul class="h5 w-full space-y-2 px-6 py-4" role="menu">
              <li
                class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                role="menuitem"
              >
                <div class="pointer-events-auto w-full">
                  <a href="./index.html" class="inline-block w-full"
                    >الرئيسية</a
                  >
                </div>
              </li>
              <li class="group relative whitespace-nowrap" role="menuitem">
                <span class="inline-block w-full p-2">خدماتنا</span>
                <ul class="px-4 py-2" role="menu">
                  <li
                    class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                    role="menuitem"
                  >
                    <div class="pointer-events-auto w-full">
                      <a href="./service.html" class="inline-block w-full"
                        >مسك الدفاتر</a
                      >
                    </div>
                  </li>
                  <li
                    class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                    role="menuitem"
                  >
                    <div class="pointer-events-auto w-full">
                      <a href="./service2.html" class="inline-block w-full"
                        >المراجعة و التدقيق</a
                      >
                    </div>
                  </li>
                  <li
                    class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                    role="menuitem"
                  >
                    <div class="pointer-events-auto w-full">
                      <a href="./service3.html" class="inline-block w-full"
                        >تشغيل الانظمة المحاسبية</a
                      >
                    </div>
                  </li>
                </ul>
              </li>
              <li
                class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                role="menuitem"
              >
                <div class="pointer-events-auto w-full">
                  <a href="./about.html" class="inline-block w-full">من نحن</a>
                </div>
              </li>
              <li
                class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                role="menuitem"
              >
                <div class="pointer-events-auto w-full">
                  <a href="./contact.html" class="inline-block w-full"
                    >تواصل معنا</a
                  >
                </div>
              </li>
              <li
                class="group pointer-events-none relative cursor-pointer whitespace-nowrap rounded-sm p-2 transition-colors duration-150 hover:bg-gray-200"
                role="menuitem"
              >
                <div class="pointer-events-auto w-full">
                  <a href="./blogs.html" class="inline-block w-full">المدونة</a>
                </div>
              </li>
            </ul>

            <div class="flex flex-wrap justify-center gap-2">
              <a href="#" aria-label="Facebook">
                <img
                  src="./assets/image/icons/facebook.png"
                  class="w-8 lg:w-10"
                  alt="Facebook Icon"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="./assets/image/icons/instagram.png"
                  class="w-8 lg:w-10"
                  alt="Instagram Icon"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src="./assets/image/icons/linkedin.png"
                  class="w-8 lg:w-10"
                  alt="LinkedIn Icon"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="./assets/image/icons/x.png"
                  class="w-8 lg:w-10"
                  alt="X Twitter Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>`;
insertHTML(headerSection, 'header-section');

const faqSection = `    <!-- FAQ -->
    <section
      class="relative flex min-h-[calc(100svh-90px)] items-center justify-center overflow-hidden bg-slate-100 py-10"
      data-aos="fade-in"
      data-aos-offset="-10"
      aria-labelledby="faq-heading"
      role="region"
      id="home-faq-section"
    >
      <div class="theme-container">
        <h2
          class="h5 text-center text-themeBlue md:absolute md:left-1/2 md:top-10 md:-translate-x-1/2"
          id="faq-heading"
        >
          كل ما تحتاج معرفته - الأسئلة الشائعة
        </h2>
        <div
          class="mx-auto mt-8 grid max-h-[80%] grid-cols-1 gap-8 transition-all sm:grid-cols-2"
          role="list"
        >
          <!-- card -->
          <div
            class="group h-fit transform rounded-lg border bg-white px-4 py-2 shadow-md transition hover:scale-110"
            role="listitem"
            aria-labelledby="faq-question-1"
            aria-describedby="faq-answer-1"
          >
            <h3
              class="p-normal line-clamp-1 text-gray-700 group-hover:line-clamp-none"
              id="faq-question-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 inline-block size-6 transition-all duration-150 group-hover:-rotate-90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              ما الفرق بين شركة أرباح والمحاسب التقليدي؟
            </h3>
            <p
              class="p-small mt-2 line-clamp-3 min-h-12 text-gray-500 transition-all group-hover:line-clamp-none sm:line-clamp-2"
              id="faq-answer-1"
            >
              مع أرباح، تحصل على فريق محاسبي محترف يضم خبراء في مختلف مجالات
              المحاسبة، مما يوفر لك خدمات شاملة بتكلفة أقل من تكلفة تعيين محاسب
              واحد بدوام كامل. نحن نعمل على ضمان الامتثال، الدقة، والكفاءة في
              إدارة عملياتك المحاسبية.
            </p>
          </div>

          <!-- card -->
          <div
            class="group h-fit transform rounded-lg border bg-white px-4 py-2 shadow-md transition hover:scale-110"
            role="listitem"
            aria-labelledby="faq-question-2"
            aria-describedby="faq-answer-2"
          >
            <h3
              class="p-normal line-clamp-1 text-gray-700 group-hover:line-clamp-none"
              id="faq-question-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 inline-block size-6 transition-all duration-150 group-hover:-rotate-90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              هل تقدمون نظامًا محاسبيًا خاصًا بكم؟
            </h3>
            <p
              class="p-small mt-2 line-clamp-3 min-h-12 text-gray-500 transition-all group-hover:line-clamp-none sm:line-clamp-2"
              id="faq-answer-2"
            >
              نحن لسنا شركة برمجيات أو SaaS، ولكننا نمتلك شبكة واسعة من الشراكات
              مع أفضل مقدمي البرامج والأنظمة المحاسبية. هذا يمكننا من تقديم
              خدمات محاسبية متكاملة ومتوافقة مع احتياجات نشاطك التجاري.
            </p>
          </div>

          <!-- card -->
          <div
            class="group h-fit transform rounded-lg border bg-white px-4 py-2 shadow-md transition hover:scale-110"
            role="listitem"
            aria-labelledby="faq-question-3"
            aria-describedby="faq-answer-3"
          >
            <h3
              class="p-normal line-clamp-1 text-gray-700 group-hover:line-clamp-none"
              id="faq-question-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 inline-block size-6 transition-all duration-150 group-hover:-rotate-90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              ما الفائدة من استخدام خدمات أرباح؟
            </h3>
            <p
              class="p-small mt-2 line-clamp-3 min-h-12 text-gray-500 transition-all group-hover:line-clamp-none sm:line-clamp-2"
              id="faq-answer-3"
            >
              باختيار أرباح، تحصل على شريك محاسبي يعتمد على التكنولوجيا الحديثة،
              الكفاءة، والخبرة لضمان إدارة مثالية لعملياتك المالية والمحاسبية،
              مما يسمح لك بالتركيز على تنمية نشاطك التجاري.
            </p>
          </div>

          <!-- card -->
          <div
            class="group h-fit transform rounded-lg border bg-white px-4 py-2 shadow-md transition hover:scale-110"
            role="listitem"
            aria-labelledby="faq-question-4"
            aria-describedby="faq-answer-4"
          >
            <h3
              class="p-normal line-clamp-1 text-gray-700 group-hover:line-clamp-none"
              id="faq-question-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 inline-block size-6 transition-all duration-150 group-hover:-rotate-90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              هل أنتم شركة سعودية؟
            </h3>
            <p
              class="p-small mt-2 line-clamp-3 min-h-12 text-gray-500 transition-all group-hover:line-clamp-none sm:line-clamp-2"
              id="faq-answer-4"
            >
              نعم، نحن جزء من مجموعة شركات سعودية تعمل تحت مظلة شركة موجة
              الوسائط. نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية،
              بالإضافة إلى فروعنا في الكويت والإمارات العربية المتحدة.
            </p>
          </div>
        </div>
        <p
          class="p-extra-small mt-8 text-center text-gray-700 underline md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2"
        >
          <a href="./FAQ.html"> المزيد من الاسئلة </a>
        </p>
      </div>
    </section>`;
insertHTML(faqSection, 'faq-section');
const contactSection = `   <!-- contact form & info section  -->
    <section
      class="relative -mb-px flex items-center justify-center lg:min-h-[calc(100svh)]"
      aria-labelledby="contact-us-heading"
      role="region"
      id="contact-us-section"
    >
      <h2 class="sr-only" id="contact-us-heading">تواصل معنا</h2>
      <div
        class="absolute left-0 top-0 hidden h-[40%] w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:block"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2706.818885228106!2d46.8064832739359!3d24.692441786543665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f076b9f00817b%3A0x44614f2741d977db!2ssky%20mall!5e0!3m2!1sen!2seg!4v1735985198660!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          title="Arbah Location on the map"
        ></iframe>
      </div>
      <div
        class="bottom-0 left-0 w-full bg-themeBlue py-6 lg:absolute lg:h-[60%]"
      >
        <div class="theme-container rounded-lg bg-white">
          <div
            class="mx-auto grid w-full grid-cols-1 place-items-stretch gap-4 p-8 lg:-mt-[5%] lg:grid-cols-2"
          >
            <!-- form -->
            <form
              id="contact-us-form"
              class="flex flex-col gap-6"
              aria-labelledby="contact-form-heading"
              role="form"
            >
              <h2 id="contact-form-heading" class="sr-only">Contact Us Form</h2>

              <div class="relative" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="p-normal peer block w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-themeBlue outline-themeGreen transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 lg:min-h-[auto]"
                  id="exampleInput90"
                  aria-labelledby="name-label"
                  required
                />
                <label
                  class="p-normal pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:text-sm peer-focus:font-bold peer-focus:text-themeBlue peer-data-[te-input-state-active]:-translate-y-[1.5rem] peer-data-[te-input-state-active]:text-sm motion-reduce:transition-none"
                  for="exampleInput90"
                  id="name-label"
                >
                  الأسم
                </label>
              </div>

              <div class="flex flex-col gap-6 lg:flex-row">
                <div class="relative" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="p-normal peer block w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-themeBlue outline-themeGreen transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none lg:min-h-[auto]"
                    id="exampleInput91"
                    aria-labelledby="email-label"
                    required
                  />
                  <label
                    class="p-normal pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:text-sm peer-focus:font-bold peer-focus:text-themeBlue peer-data-[te-input-state-active]:-translate-y-[1.5rem] peer-data-[te-input-state-active]:text-sm motion-reduce:transition-none"
                    for="exampleInput91"
                    id="email-label"
                  >
                    البريد الألكتروني
                  </label>
                </div>

                <div class="relative" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="p-normal peer block w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-themeBlue outline-themeGreen transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none lg:min-h-[auto]"
                    id="exampleInput81"
                    aria-labelledby="phone-label"
                    required
                  />
                  <label
                    class="p-normal pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:text-sm peer-focus:font-bold peer-focus:text-themeBlue peer-data-[te-input-state-active]:-translate-y-[1.5rem] peer-data-[te-input-state-active]:text-sm motion-reduce:transition-none"
                    for="exampleInput81"
                    id="phone-label"
                  >
                    رقم الجوال
                  </label>
                </div>
              </div>

              <div class="relative" data-te-input-wrapper-init>
                <textarea
                  class="p-normal peer block w-full resize-none rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-themeBlue outline-themeGreen transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none lg:min-h-[auto]"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  aria-labelledby="message-label"
                  required
                ></textarea>
                <label
                  for="exampleFormControlTextarea1"
                  class="p-normal pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:text-sm peer-focus:font-bold peer-focus:text-themeBlue peer-data-[te-input-state-active]:-translate-y-[1.5rem] peer-data-[te-input-state-active]:text-sm motion-reduce:transition-none"
                  id="message-label"
                >
                  نص الرسالة
                </label>
              </div>

              <button
                type="submit"
                class="p-normal block w-full rounded-md bg-themeBlue px-6 py-3 font-bold leading-normal text-white transition-colors duration-150 hover:bg-indigo-700"
                aria-label="Send message"
              >
                أرسال
              </button>
            </form>

            <!-- contact info -->
            <div
              class="flex flex-wrap justify-center gap-4"
              role="region"
              aria-labelledby="contact-info-heading"
            >
              <h2 id="contact-info-heading" class="sr-only">
                Contact Information
              </h2>

              <!-- card: Email -->
              <div
                class="flex min-w-max max-w-full flex-1 items-start gap-2"
                role="contentinfo"
              >
                <div class="text-primary rounded-md bg-sky-200 p-4">
                  <img
                    src="./assets/image/icons/email_icon.svg"
                    alt="Email Icon"
                    class="size-6"
                    aria-hidden="true"
                  />
                </div>
                <div class="p-normal">
                  <p class="mb-2 text-themeBlue">البريد الألكتروني:</p>
                  <a
                    class="inline-block text-neutral-500"
                    href="mailto:info@arbah.sa"
                    aria-label="Send email to info@arbah.sa"
                  >
                    info@arbah.sa
                  </a>
                </div>
              </div>

              <!-- card: Address -->
              <div
                class="flex min-w-max max-w-full flex-1 items-start gap-2"
                role="contentinfo"
              >
                <div class="text-primary rounded-md bg-sky-200 p-4">
                  <img
                    src="./assets/image/icons/address_icon.svg"
                    alt="Address Icon"
                    class="size-6"
                    aria-hidden="true"
                  />
                </div>
                <div class="p-normal">
                  <p class="mb-2 text-themeBlue">العنوان:</p>
                  <p
                    class="line-clamp-3 text-neutral-500"
                    title="الرياض - حي الروابي - الطريق الدائري الشرقي مخرج 15 تقاطع طريق الأمير سعد بن عبدالرحمن الأول مع الإمام الشافعي مبنى سكاي مول - مركز نيلوفز للأعمال - الدور الأول"
                    aria-label="Address: Riyadh - Al Rawabi District - Eastern Ring Road, Exit 15, Intersection of Prince Saad Bin Abdulrahman and Imam Al-Shafi'i Road, Sky Mall Building - Nilufaz Business Center - First Floor"
                  >
                    الرياض - حي الروابي
                  </p>
                </div>
              </div>

              <!-- card: Landline phone -->
              <div
                class="flex min-w-max max-w-full flex-1 items-start gap-2"
                role="contentinfo"
              >
                <div class="text-primary rounded-md bg-sky-200 p-4">
                  <img
                    src="./assets/image/icons/landline_phone_icon.svg"
                    alt="Landline phone icon"
                    class="size-6"
                    aria-hidden="true"
                  />
                </div>
                <div class="p-normal">
                  <p class="mb-2 text-themeBlue">للأتصال:</p>
                  <a
                    class="inline-block text-neutral-500"
                    href="tel:+966920031093"
                    style="direction: ltr"
                    aria-label="Call the landline number +966 92 003 1093"
                  >
                    +966 92 003 1093
                  </a>
                </div>
              </div>

              <!-- card: WhatsApp -->
              <div
                class="flex min-w-max max-w-full flex-1 items-start gap-2"
                role="contentinfo"
              >
                <div class="text-primary rounded-md bg-sky-200 p-4">
                  <img
                    src="./assets/image/icons/whatsapp_icon_dark.svg"
                    alt="WhatsApp Icon"
                    class="size-6"
                    aria-hidden="true"
                  />
                </div>
                <div class="p-normal">
                  <p class="mb-2 text-themeBlue">واتس اب:</p>
                  <a
                    class="inline-block text-neutral-500"
                    style="direction: ltr"
                    href="https://api.whatsapp.com/send/?phone=966553510931&text&type=phone_number&app_absent=0"
                    target="_blank"
                    aria-label="Send message on WhatsApp to +966 55 351 0931"
                  >
                    +966 55 351 0931
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
insertHTML(contactSection, 'contact-section');
const footerSection = `    <!-- footer section -->
    <footer
      class="relative flex flex-col items-center justify-between bg-themeBlue pb-1 pt-32"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="sr-only">Footer Section</h2>

      <div
        class="theme-container flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between"
      >
        <!-- right side -->
        <div>
          <a href="./index.html">
            <img
              src="./assets/image/logo_white.png"
              alt="أربَاحْ"
              class="mx-auto max-w-[15rem] lg:mx-0"
            />
          </a>
          <h2 class="h4 mt-4 pr-8 text-center text-themeGreen lg:text-start">
            حِينَما تتحدَّثُ الأرقَامُ
          </h2>
        </div>

        <!-- center side -->
        <div class="p-small hidden gap-4 text-themeLightBlue lg:flex">
          <ul
            class="flex flex-col items-start gap-4"
            role="navigation"
            aria-label="Footer Navigation"
          >
            <li
              class="group relative cursor-pointer whitespace-nowrap rounded-sm"
              role="menuitem"
            >
              <a href="./index.html">الرئيسية</a>
            </li>
            <li
              class="group relative cursor-pointer whitespace-nowrap rounded-sm"
              role="menuitem"
            >
              <a href="./about.html">من نحن</a>
            </li>
            <li
              class="group relative cursor-pointer whitespace-nowrap rounded-sm"
              role="menuitem"
            >
              <a href="./contact.html">تواصل معنا</a>
            </li>
            <li
              class="group relative cursor-pointer whitespace-nowrap rounded-sm"
              role="menuitem"
            >
              <a href="./contact.html">المدونة</a>
            </li>
          </ul>
          <ul
            class="flex flex-col items-start gap-4"
            role="navigation"
            aria-label="Footer Services"
          >
            <li
              class="group relative cursor-pointer whitespace-nowrap rounded-sm"
              role="menuitem"
            >
              <a href="./service.html">مسك الدفاتر</a>
            </li>
            <li
              class="group relative cursor-pointer whitespace-nowrap rounded-sm"
              role="menuitem"
            >
              <a href="./service2.html">المراجعة و التدقيق</a>
            </li>
            <li
              class="group relative cursor-pointer whitespace-nowrap rounded-sm"
              role="menuitem"
            >
              <a href="./service3.html">تشغيل الانظمة المحاسبية</a>
            </li>
          </ul>
        </div>

        <!-- left side: social media -->
        <div
          class="max-w-sm rounded-lg border-2 border-gray-300 bg-slate-100 p-4 text-lg"
          aria-labelledby="social-media-heading"
        >
          <h3 id="social-media-heading" class="p-small mb-2 px-2 text-center">
            تابعنا
          </h3>
          <div class="flex flex-wrap justify-center gap-2">
            <a href="#" aria-label="Visit Facebook">
              <img
                src="./assets/image/icons/facebook.png"
                class="w-8 lg:w-10"
                alt="Facebook"
              />
            </a>
            <a href="#" aria-label="Visit Instagram">
              <img
                src="./assets/image/icons/instagram.png"
                class="w-8 lg:w-10"
                alt="Instagram"
              />
            </a>
            <a href="#" aria-label="Visit LinkedIn">
              <img
                src="./assets/image/icons/linkedin.png"
                class="w-8 lg:w-10"
                alt="LinkedIn"
              />
            </a>
            <a href="#" aria-label="Visit Twitter">
              <img
                src="./assets/image/icons/x.png"
                class="w-8 lg:w-10"
                alt="X Twitter"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- footer bottom section -->
      <div class="theme-container py-4 font-semibold text-gray-100 sm:text-sm">
        <hr />
        <div class="p-extra-small flex items-center justify-between">
          <p>جميع الحقوق محفوظة © 2025</p>
          <div
            class="flex gap-2 lg:gap-4"
            role="navigation"
            aria-label="Footer legal links"
          >
            <a href="./404.html" class="">الشروط والأحكام</a>
            |
            <a href="./404.html" class="">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>`;
insertHTML(footerSection, 'footer-section');
const whatsappButton = `<!-- WhatsApp contact button -->
    <a
      href="https://api.whatsapp.com/send/?phone=966553510931&text&type=phone_number&app_absent=0"
      target="_blank"
      class="fixed bottom-6 right-6 box-border size-12 animate-bounce cursor-pointer rounded-full border border-themeGreen bg-themeBlue p-2 transition-all duration-300 hover:-translate-y-4 hover:animate-none hover:shadow-xl hover:shadow-gray-900 md:size-14 md:p-3 lg:size-16 lg:p-4"
      role="button"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="./assets/image/icons/whatsapp.png"
        class="size-full"
        alt="WhatsApp logo"
      />
    </a>`;
insertHTML(whatsappButton, 'whatsapp-button');

//---------------------------------------------------------------

function handleNavBarFunctionality() {
  // header scroll effect
  document.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    const progress = document.querySelector('#progress');

    if (window.scrollY > 0) {
      header.classList.add('shadow-theme');
      header.classList.add('bg-slate-50');
      header.classList.remove('pt-[40px]');
      if (progress) progress.classList.remove('hidden');
    } else {
      header.classList.remove('shadow-theme');
      header.classList.remove('bg-slate-50');
      header.classList.add('pt-[40px]');
      if (progress) progress.classList.add('hidden');
    }
  });

  // handle submenus
  const navUl = document.getElementById('navigation-ul');

  // Helper function to hide an element
  const hideElement = (element) => {
    element.classList.add('hidden');
  };

  // Helper function to hide an element if clicked outside
  const hideElementOnClickOutside = (element, event) => {
    if (!element.contains(event.target)) {
      hideElement(element);
      document.removeEventListener('click', element._outsideClickHandler); // Clean up listener
    }
  };

  // Function to hide all submenus
  const hideAllSubMenus = () => {
    const subMenus = document.querySelectorAll('.sub-menu');
    subMenus.forEach((menu) => hideElement(menu));
  };

  if (navUl) {
    // Loop over all <li> children of the navigation-ul
    const liChildren = navUl.children;
    for (let i = 0; i < liChildren.length; i++) {
      const li = liChildren[i];

      // Check if <li> has the class 'contain-sub-menu'
      if (li.classList.contains('contain-sub-menu')) {
        const subMenu = li.querySelector('.sub-menu');

        li.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent click from bubbling up

          // Toggle submenu visibility
          if (subMenu.classList.contains('hidden')) {
            hideAllSubMenus(); // Close all other submenus
            subMenu.classList.remove('hidden');

            // Add a one-time event listener for clicks outside the submenu
            const outsideClickHandler = (e) =>
              hideElementOnClickOutside(subMenu, e);
            document.addEventListener('click', outsideClickHandler);

            // Store the reference to the handler so it can be removed later
            subMenu._outsideClickHandler = outsideClickHandler;
          }
        });
      }
    }

    // Add scroll event to hide submenus
    window.addEventListener('scroll', () => {
      hideAllSubMenus();
    });
  } else {
    console.error('The ul element with the specified ID was not found.');
  }
}
handleNavBarFunctionality();
// mobile menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileUlParent = document.getElementById('mobile-menu-ul-parent');
const mobileCloseBtn = document.getElementById('mobile-menu-close-button');
menuBtn.addEventListener('click', () => {
  menu.classList.add('left-0');
  menu.classList.remove('-left-full');
});
menu.addEventListener('click', () => {
  menu.classList.remove('left-0');
  menu.classList.add('-left-full');
});
mobileCloseBtn.addEventListener('click', () => {
  menu.classList.remove('left-0');
  menu.classList.add('-left-full');
});
mobileUlParent.addEventListener('click', (e) => {
  e.stopPropagation();
});

function initContactUsForm() {
  // Select the form by its ID
  const form = document.getElementById('contact-us-form');
  if (!form) return;
  // Get all input fields inside the form
  const inputs = form.querySelectorAll('input, textarea'); // Includes both input and textarea elements

  // Loop over each input field
  inputs.forEach((input) => {
    // Add an event listener for the 'input' event
    input.addEventListener('input', (e) => {
      if (e.target.value.trim() !== '') {
        // If input has a value, add the data-te-input-state-active attribute
        e.target.setAttribute('data-te-input-state-active', '');
      } else {
        // If input is empty, remove the attribute
        e.target.removeAttribute('data-te-input-state-active');
      }
    });

    // Handle state on page load (e.g., prefilled values)
    if (input.value.trim() !== '') {
      input.setAttribute('data-te-input-state-active', '');
    } else {
      input.removeAttribute('data-te-input-state-active');
    }
  });
}

initContactUsForm();
