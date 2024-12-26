class App {
    constructor() {
        this.centerWidth = 1000;

        
        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('scroll', this.scroll.bind(this));
        this.resize();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.blank1 = document.getElementById("blank1");
        this.blank1.style.width = (this.width - 220) / 2 +'px';


        this.textVer = document.getElementById("textVer");
        let computedStyle = window.getComputedStyle(this.textVer);
        let textVerH = parseFloat(computedStyle.height);

        this.blank3 = document.getElementById("blank3");
        this.blank3.style.height = (this.height - textVerH) / 2 +'px';
        this.blank5 = document.getElementById("blank5");
        this.blank5.style.height = (this.height - textVerH) / 2 + 60 + 'px';


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
    }
}

window.onload = () => {
    new App();
}