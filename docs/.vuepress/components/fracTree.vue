<template>
<div>
  <vue-p5
  class="sk"
  ref="sk"
  :style="{width: p5CanvasWidth + 'px', height: p5CanvasHeight + 'px'}"
  @sketch="sketch"
  @setup="setup"
  @draw="draw"
  >
  </vue-p5>
  <vue-slider
    v-model="angle" 
    v-bind="options" />
</div>
<!-- <div class="container border">
    <div class="d-flex justify-content-center" id="p5canvas"></div>
    <div class="message d-flex justify-content-center">
      {{message}}
    </div>
  </div> -->
</template>

<script>
import VueP5 from "vue-p5";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/material.css";
// var radar = require('../js/Radar')
// var fractree = require('../js/fracTree')

export default {
  name: "fracTree",
  components: {
    "vue-p5": VueP5,
    VueSlider
  },
  data() {
    return {
      p5CanvasWidth: 740,
      p5CanvasHeight: 480,
      stemHeight: 480 * 0.34,
      angle: Math.PI * 0,
      angleT: Math.PI * 0.5,
      message: "",
      len: 300,
      options: {
        min: -Math.PI,
        max: Math.PI,
        interval: Math.PI / 100
      }
    };
  },
  // updated() {
  //   this.test =  this.$parent.$el.offsetWidth
  // },
  // mounted() {
  //   this.$nextTick(function() {
  //     window.addEventListener('resize', this.getWindowWidth);
  //     window.addEventListener('resize', this.getWindowHeight);
  //     //Init
  //     this.getWindowWidth()
  //     this.getWindowHeight()
  //   })
  // },
  methods: {
    getWidth(width) {
      this.$nextTick(() => {
        // console.log('this refs', this.$refs)
        if (this.$refs.sk !== undefined) {
          this.p5CanvasWidth = this.$refs.sk.$parent.$el.clientWidth
        }
        // this.p5CanvasHeight = this.$refs.sk.$parent.$el.clientHeight
        // this.p5CanvasWidth = this.$refs.sk.$parent.$el.clientWidth;
        // this.p5CanvasHeight = this.$refs.sk.$parent.$el.clientHeight;
        // this.branchesHeight = this.$refs.sk.$parent.$el.clientHeight * 0.25;
        return 0;
      });
    },
    branch(sketch, len) {
      let thickness = 4;
      sketch.strokeWeight(thickness);
      sketch.line(0, 0, 0, -len);
      sketch.translate(0, -len);
      if (len > 4) {
        sketch.push();
        sketch.rotate(this.angle);
        this.branch(sketch, len * 0.67);
        sketch.pop();
        sketch.push();
        sketch.rotate(-this.angle);
        this.branch(sketch, len * 0.67);
        sketch.pop();
        thickness *= 0.82;
      }
    },
    sketch(sketch) {
      sketch.draw = () => {
        sketch.background(51);
        sketch.stroke(255);
      };
      sketch.windowResized = () => {
        this.getWidth(this.p5CanvasWidth)
        this.p5CanvasHeight = this.p5CanvasWidth / 3 * 2
        this.stemHeight = this.p5CanvasHeight * 0.34
        sketch.resizeCanvas(
          this.p5CanvasWidth,
          this.p5CanvasHeight
        );
      };
    },
    setup(sketch) {
      // const { PI } = sketch
      // let angle;
      sketch.createCanvas(this.p5CanvasWidth, this.p5CanvasHeight);
      // var slider = createSlider(-1 * Math.PI, Math.PI, Math.PI/4, 0.001)
    },
    draw(sketch) {
      // const angle = this.angle;
      const { width, height } = sketch;
      sketch.translate(width / 2, height);
      this.branch(sketch, this.stemHeight);
      if (this.angle !== this.angleT) {
        sketch.frameRate(20);
        const that = this;
        clearTimeout();
      } else {
        sketch.frameRate(1);
        setTimeout((that.angleT = that.angle), 10);
      }
      // this.test = test
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

export default {        
    mounted() {
      this.loadData();
    },
    methods: {
        loadData() {
            // This syntax may be wrong, too. But the function isn't
            // even running, so I haven't started to debug this yet
            this.$http.get("https://icanhazip.com")
                .then(xhr => this.text = xhr.body);
        }
    }
};