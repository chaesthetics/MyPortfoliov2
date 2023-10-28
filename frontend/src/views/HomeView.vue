<script setup>
  import { onMounted } from 'vue';
  import useAccount from "@/components/composables/account";

  const { getUser, user } = useAccount();

        var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

      onMounted( () => {
        getUser();
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    }
    );
  
</script>
<template>
  <div class="w-auto h-auto mt-[20%] md:mt-[10%] flex justify-around shrink mr-auto ml-auto pb-20x">
    <div class="card items-center md:grid md:grid-cols-2">
      <div class="w-100 space-y-1 md:space-y-4 mb-10 text-center md:text-left">
        <p class="text-yellow-300 text-2xl font-semibold">Hello World, I'm</p>
        <div>
          <p class="text-white leading-10 text-[50px] font-semibold">{{ user.firstname }}</p>
          <p class="text-white leading-10 text-[50px] font-semibold">{{ user.lastname }}</p>
        </div>
        <div class="leading-10">
          <p class="typewrite text-white text-xl font-semibold leading-10 break-words w-[300px]" data-period="2000"
            data-type='["Fullstack Web Developer", "Software QA Engineer"]'
          ></p>
        </div>
        <p class="text-zinc-300 font-semibold text-md">{{ user.description }}</p>
      </div>
      <div class="items-center justify-center">
      <img :src="user.avatar" class="h-[200px] w-[200px] md:w-[280px] md:h-[280px] rounded-full border border-2 border-yellow-300 ml-auto mr-auto" style="box-shadow: 0px 0px 104px -16px rgba(211,255,16,0.75);
        -webkit-box-shadow: 0px 0px 104px -16px rgba(211,255,16,0.75);
        -moz-box-shadow: 0px 0px 104px -16px rgba(211,255,16,0.75);">
      <div class="flex space-x-3 justify-center mt-10 ml-1">
          <a :href="user.githublink" class="border border-yellow-300 text-white font-semibold pl-4 pr-4 pt-1 pb-1 flex items-center space-x-2 hover:border-yellow-300 animation duration-300 hover:shadow hover:shadow-yellow-500/50 hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>
            <p>GitHub</p>
          </a>
          <a :href="user.contactlink" class="border border-yellow-300 text-white font-semibold pl-4 pr-4 pt-1 pb-1 flex items-center space-x-2 hover:border-yellow-300 animation duration-300 hover:shadow hover:shadow-yellow-500/50 hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/> </svg>
            <p>Contact</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
