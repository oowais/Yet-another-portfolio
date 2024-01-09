<template>
  <UContainer>
    <UButton
      id="edu"
      :icon="isDark ? `i-heroicons-sun` : `i-heroicons-moon`"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <div class="flex flex-wrap gap-4">
      <template v-for="proj in projects">
        <ProjectCard :project="proj" />
      </template>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const projects = ref<ProjectInfoType[]>([
  {
    title: "Jaadu - An Alien in a Terrarium",
    teamSize: 3,
    date: "Oct 2018 - Jan 2019",
    languages: ["Python", "C++"],
    desc: "Jaadu is an alien in the FabTerrarium, an open space with different animals/plants interacting with their environment or external users. It crawls in the terrarium reading the emotions of the other entities and displaying those emotions in itself. The materialization of Jaadu is a combination of Arduino, RasPI, 3D Modelling, Sensors, comm modes and LEDs.",
    link: "https://github.com/oowais/Jaadu",
  },
  {
    title: "LabChain",
    teamSize: 5,
    date: "Apr 2018 - Aug 2018",
    languages: ["Python"],
    desc: "Created a Blockchain core called LabChain as part of a lab held by Fraunhofer FIT Blockchain Lab. Components developed: Blockchain Core component (Blocks, Branches, Transactions handling); Automatic Peer Discovery using DNS Seeding; Database store and recovery of Blocks",
    link: "https://github.com/oowais/LabChain",
  },
  {
    title: "Muses",
    teamSize: 1,
    date: "Oct 2018 - Feb 2019",
    languages: ["Python"],
    desc: "Music recommendation system using content based music similarity. An audio comparison system which compares features of sound/music and recommends the closest song.",
    link: "https://github.com/oowais/Muses",
  },
  {
    title: "Trajectory Tracking of a Laser Beam",
    teamSize: 2,
    date: "2013",
    languages: ["C++"],
    desc: "Tracking of a laser beam and rendering it on the display screen using projector using OpenCV.",
  },
  {
    title: "Master Thesis",
    teamSize: 1,
    date: "Nov 2020 - Jun 2021",
    languages: ["Python"],
    desc: "Unsupervised Link Discovery Between Unstructured Text and Taxonomy",
    link: "https://github.com/rwth-acis/Unsupervised-Link-Discovery-Between-Unstructured-Text-and-Taxonomy/tree/master/profile-discovery",
  },
  {
    title: "GitHub User Search",
    teamSize: 1,
    date: "Nov 2021",
    languages: ["Angular", "Typescript"],
    desc: "Input any GitHub username to see their details. Live demo link is located in REAMDE of the GitHub repo.",
    link: "https://github.com/oowais/coding-challenge-user-search",
  },
  {
    title: "Sock it Up",
    teamSize: 5,
    date: "2018",
    desc: "A robot built using 'MakeBlock Ultimate Robot Kit' to help physically impaired or older people to wear socks without using any hands. Made as part of UIST Student Innovation Contest 2018 ",
  },
]);
</script>
