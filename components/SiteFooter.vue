
<script setup>
const links = [
{ name: 'Github', href: 'https://github.com/furkannkilicc', icon:'uil:github'},
{ name: 'Linkedin', href: 'https://www.linkedin.com/in/kilicfurkank/', icon: 'uil:linkedin'},

]
</script>

<template>
    <footer class="bg-gray-800">
        <section class="mx-auto max-w-7xl px-2 sm:px-4  lg:py-6 text-gray-300 flex flex-row">
                <p class="flex-1">&copy; Furkan Kilic 2023. All Rights Reserved</p>
                <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
                        <a v-for="link in links" :key="link.name" :href="link.href" >
                             <Icon :name="link.icon" size="1.1rem" class="text-gray-300  "></Icon>
                        </a>

                </div>
        </section>
    </footer>
</template>