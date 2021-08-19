<template>
    <header id="static-navbar" class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 border-b border-gray-400 transition-full duration-1000 static-nav">
            <div class="flex-1 flex justify-between items-center">
                <!-- logo section -->
                <a href="/">
                    <img src="../assets/vlm_logo_blue_figma.svg" alt="" />  
                </a>
                <!-- logo section end-->
            </div>

                <!-- Hamburger menu only visible on mobile -->
                <label for="menu-toggle" class="cursor-pointer lg:hidden block">
                    <svg viewBox="0 0 100 80" width="30" height="30" class="fill-current text-gray-700">
                        <title>Menu</title>
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </label>
                <input type="checkbox" class="hidden" id="menu-toggle" /> 
                <!-- Hamburger menu only visible on mobile -->
                
                <div class="mt-8 lg:mt-0 hidden lg:flex lg:items-center lg:w-auto w-full bg-clip-text text-transparent text-gray-700 text-4xl font-black" id="menu">
                    <h2 class="lg:hidden text-center text-center text-gray-600 mb-2">Menu</h2>
                    
                    <nav class="transition-full duration-500">
                        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-2 lg:pt-0 text-center">
                            <li><a href="#welcome" class="w-2/3 mx-auto lg:w-full lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-600 transition-all duration-500s">Who I am</a></li>
                            <li><a href="#technologies" class="w-2/3 mx-auto lg:w-full lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-600 transition-all duration-500s">Technologies</a></li>
                            <li><a href="#charts" class="w-2/3 mx-auto lg:w-full lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-600 transition-all duration-500s">Charts</a></li>
                            <li><a href="#contact" class="w-2/3 mx-auto lg:w-full lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-600 transition-all duration-500s">Contact</a></li>
                            
                            <span class="inline-block relative mt-4 lg:mt-0 hover:opacity-75 cursor-pointer text-center">
                                <a href="#hero">
                                    <img class="h-16 w-16 rounded-full" src="../assets/alien_figma.png" alt="Gundam" />
                                    <span class="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400" />
                                </a>
                            </span>
                        </ul>
                    </nav>
                    
                </div>
    </header>
</template>

<script>

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato');
    #menu-toggle:checked + #menu {
        display: block;
      }

      #static-navbar{
          position:fixed;
          width:100%;
      }
</style>