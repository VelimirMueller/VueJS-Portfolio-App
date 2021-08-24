<template>
  <section id="" class="bg-white relative">
    <h2 class="pt-4 pb-8 text-5xl underline">{{ headline }}</h2>

    <ul
      role="list"
      class="space-y-3 pb-8"
      v-for="(entry, id) in cv.experience.careerStations"
      :key="id"
    >
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="md:w-3/4 w-full mx-auto border-t border-gray-300"></div>
        </div>

        <div class="relative flex justify-center">
          <span class="px-2 bg-white text-sm text-gray-500">
            {{ entry.startDate }} - {{ entry.endDate }}
          </span>
        </div>
      </div>

      <div
        class="
          hover:bg-indigo-100
          transition-full
          duration-1000
          flex
          items-center
          lg:m-20
					m-2
          rounded
          p-3
        "
      >
        <span class="mx-auto w-full">
          <div class="text-gray-700">
            <h2
              class="font-bold text-2xl text-gray-900 mb-4"
              style="margin: -7px"
            >
              {{ entry.title }}
            </h2>
            <p class="text-sm text-lg font-medium text-purple-700 mt-2">
              {{ entry.activitiesOverview }}
            </p>
            <p class="mt-4 mb-2">{{ descriptionHeadline }}</p>
            <p
              class="text-sm font-medium text-gray-900"
              v-for="(details, index) in entry.activitiesDetails"
              :key="index"
            >
              {{ details }}
            </p>
          </div>
        </span>
      </div>
    </ul>

    <div class="h-40"></div>
  </section>
</template>

<script>
import CVdata from "../component_data/cvdata.js";
export default {
  data() {
    return {
      cv: CVdata,
      headline: "Biography",
      descriptionHeadline: "Details",
    };
  },
};
</script>

<style scoped>
</style>