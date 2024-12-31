class App {
    constructor() {
        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('scroll', this.scroll.bind(this));
        this.resize();
        this.scroll();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.textVer = document.getElementById("textVer");
        let computedStyle = window.getComputedStyle(this.textVer);
        let textVerH = parseFloat(computedStyle.height);

        this.hyeon = document.getElementById("hyeon");
        this.hyeon.style.top = (this.height - textVerH) / 2 +'px';
        this.gung = document.getElementById("gung");
        this.gung.style.top = (this.height - textVerH) / 2 + 160 + 'px';
        this.hyeonCh = document.getElementById("hyeonCh");
        this.hyeonCh.style.top = (this.height - textVerH) / 2 + 60 + 'px';
        this.gungCh = document.getElementById("gungCh");
        this.gungCh.style.top = (this.height - textVerH) / 2 + 220 +'px'

        this.paper = document.getElementById("paper");

        if(this.height < 800) {
            this.paper.style.marginTop = "0px";
        }

        this.notice = document.getElementById("notice");
        if(this.width <= 380) {
            this.notice.style.width = "380px";
        } else if(this.width > 600) {
            this.notice.style.width = "600px";
        } else {
            this.notice.style.width = this.width + "px";
        }


        console.log(this.width, this.height);
    }

    scroll() {
        this.bar = document.getElementById("bar");
        const scrollTop = window.scrollY;
        const topPos = window.innerHeight - this.bar.offsetHeight;

        if (scrollTop >= topPos) {
            this.bar.style.position = "fixed";
            this.bar.style.top = "0";
            this.bar.style.bottom = "unset";
        } else {
            this.bar.style.position = "absolute";
            this.bar.style.bottom = "0";
            this.bar.style.top = "unset";
        }


        this.slide0 = document.getElementById('slide0');
        this.slide1 = document.getElementById('slide1');
        this.slide2 = document.getElementById('slide2');
        this.slide3 = document.getElementById('slide3');
    }
}

window.onload = () => {
    new App();
}