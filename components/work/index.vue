<template>
  <UAlert
    class="shadow-2xl mt-10 mb-4"
    icon="i-mdi-company"
    title="Work Experience"
  />
  <UTabs :items="workInfo" class="w-full">
    <template #item="{ item }">
      <WorkCard :work="item" />
    </template>
  </UTabs>
</template>

<script setup lang="ts">
const workInfo = ref<WorkInfoType[]>([
  {
    key: "einhundert",
    title: "Fronend Developer",
    label: "Einhundert Energie",
    link: "https://einhundert.de/",
    date: "Dec 2021 - Current",
    skills: ["Vue", "Typescript", "Vuetifty", "Node.js", "Python"],
    info: [
      "Developed and maintained web app for internal administrative purposes",
      "Developed and maintained web app for external customers",
      "Created python scripts in django for batch CRUD operations",
      "Created automated PDF from using Python libararies",
      "Development and deployment for web apps",
      "And apparently I am not good at writing stuff like this anymore T.T",
    ],
  },
  {
    key: "fraunhofer",
    title: "Student Research Scientist",
    label: "Fraunhofer FKIE",
    link: "https://www.fkie.fraunhofer.de/",
    date: "Sep 2018 - Sep 2021",
    skills: [
      "Angular",
      "Python",
      "Django",
      "Typescript",
      "XML",
      "Java EE",
      "Docker",
    ],
    info: [
      "Created and delivered UI services for demo purposes.",
      "Developed and maintained XML validation software in Java EE.",
      "Developed REST services using Django framework in Python.",
      "Successfully finished master thesis 'Unsupervised Link Discovery Between Unstructured Text and Taxonomy' during the student research scientist job.",
      "Developed and maintained map related UI in Angular 8 allowing to modify elements on the map using mouse and voice recognition.",
      "Prepared a variety of different written communications, reports and documents to ensure smooth operations.",
      "Proved successful working within tight deadlines and fast-paced atmosphere.",
    ],
  },
  {
    key: "tcs",
    title: "Systems Engineer",
    label: "Tata Consultancy Services",
    link: "https://www.tcs.com/",
    date: "Aug 2014 - Oct 2017",
    skills: [
      "Java",
      "Java EE",
      "Javascript",
      "Node.js",
      "REST",
      "Versant database",
      "Docker",
      "Agile",
    ],
    info: [
      "Ericsson Network Manager(ENM): ENM is a collection of virtual management tools based on a single software platform designed to provide unified network management capability across Radio access, Transport, and Core networks.",
      "Developed the UI of “Link Management” module for creating and managing links between network elements as part of ENM.",
      "Developed software functionalities using Node.js, the JavaScript runtime environment, Java EE and REST.",
      "Produced Integration tests for the modules created using Arquillian and later on tested the same on Docker images.",
      "Helped pass on the knowledge to the new hires by training them in aforementioned modules and regarding coding practices/guidelines.",
      "Worked on minimizing the resources held by Jboss EAP servers in a cluster environment to increase the efficiency.",
      "Managed development milestones from initial steps through final delivery.",
      "Coordinated with other engineers to evaluate and improve software interfaces.",
      "Consulted with engineering team members to determine system loads and develop improvement plans.",
    ],
  },
  {
    key: "dion",
    title: "Computer Engineer (Trainee)",
    label: "Dion Global Solutions",
    link: "https://www.dionglobal.com/",
    date: "May 2013 - Jun 2013",
    skills: ["Java", "Oracle databse"],
    info: [
      "Aided in analyzing and migrating the code from Java SE 5 to 6.",
      "Learnt basics of Android programming and database management.",
      "Created product design modifications.",
    ],
  },
]);
</script>
