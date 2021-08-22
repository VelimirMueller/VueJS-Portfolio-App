<template>
  <section id="contact">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="
            text-base
            font-semibold
            text-purple-700
            tracking-wide
            uppercase
          "
        >
          {{ websiteContent.subheadline }}
        </h2>
        <p
          class="
            mt-1
            text-4xl
            font-extrabold
            text-gray-900
            sm:text-5xl
            sm:tracking-tight
            lg:text-6xl
          "
        >
          {{ websiteContent.headline }}
        </p>

        <div class="font-sans leading-tight bg-grey-lighter p-8 mb-0">
          <div
            class="
              max-w-sm
              mx-auto
              bg-white
              rounded-lg
              overflow-hidden
              shadow-lg
            "
          >
            <div
              class="bg-cover h-40"
              style="
                background-image: url('https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80');
              "
            ></div>
            <div class="border-b px-4 pb-6">
              <div class="text-center sm:text-left sm:flex mb-4">
                <img
                  class="
                    h-32
                    w-32
                    rounded-full
                    border-4 border-white
                    -mt-16
                    mr-4
                  "
                  src="../assets/velimir.png"
                  alt=""
                />
                <div class="py-2">
                  <h3 class="font-bold text-2xl mb-1">
                    {{ cardContent.name }}
                  </h3>
                  <div class="inline-flex text-grey-dark sm:flex items-center">
                    <svg
                      class="h-5 w-5 text-grey mr-1"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        class="heroicon-ui"
                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      />
                    </svg>
                    {{ cardContent.location }}
                  </div>
                </div>
              </div>
              <hr class="mb-2" />
              <ul class="text-left">
                <li>
                  <span class="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                      />
                    </svg>
                    <p class="px-2">{{ cardContent.phone }}</p>
                  </span>
                </li>

                <span class="inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p class="px-2">{{ cardContent.email }}</p>
                </span>
                <hr class="mt-2" />
              </ul>
              <div class="grid grid-cols-2 mt-4 items-center">
                <a href="https://github.com/velimirmueller"
                  ><img class="mx-auto" src="../assets/github.svg" alt=""
                /></a>
                <a
                  href="https://de.linkedin.com/in/velimir-m%C3%BCller-07b460175"
                  ><img class="mx-auto" src="../assets/linkedin.svg" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <h2>&#169;{{ websiteContent.copyright }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      websiteContent: {
        headline: "Get in touch with me",
        subheadline: "Contact",
        copyright: "2021 - Velimir Müller",
      },
      cardContent: {
        name: "Velimir Müller",
        location: "Berlin, Germany",
        phone: "+49 177 189 34 23",
        email: "velimir.mueller@gmail.com",
      },
    };
  },
};
</script>
