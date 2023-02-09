<template>
  <div>
    <svg height="10rem" viewBox="0 0 160 160" class="donut-chart">
      <g v-for="(value, index) in sortedValues" :key="index">
        <circle
          v-if="index === 0"
          :cx="cx"
          :cy="cy"
          :r="radius"
          :stroke="colors[index]"
          :stroke-width="strokeWidth + 10"
          :stroke-dasharray="adjustedCircumference"
          :stroke-dashoffset="calculateStrokeDashOffset(value, circumference)"
          fill="transparent"
          :transform="returnCircleTransformValue(index)"
        />
        <circle
          v-else
          :cx="cx"
          :cy="cy"
          :r="radius"
          :stroke="colors[index]"
          :stroke-width="strokeWidth - 10"
          :stroke-dasharray="adjustedCircumference"
          :stroke-dashoffset="calculateStrokeDashOffset(value, circumference)"
          fill="transparent"
          :transform="returnCircleTransformValue(index)"
        />
      </g>
    </svg>
    <h3 class="value">
      {{ sortedValues[0] }}k
      <span
        ><br />
        <h4 class="text-gray-400 font-light text-xs capitalize">
          Total sold
        </h4></span
      >
    </h3>
  </div>
</template>

<script>
export default {
  props: ["initialValues"],
  data() {
    return {
      angleOffset: -90,
      chartData: [],
      colors: ["royalblue", "green", "purple", "tomato", "lightgray"],
      cx: 80,
      cy: 80,
      radius: 60,
      sortedValues: [],
      strokeWidth: 30,
    };
  },
  computed: {
    totalValues() {},
    // adjust the circumference to add small white gaps
    adjustedCircumference() {
      return this.circumference - 2;
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    dataTotal() {
      return this.sortedValues.reduce((acc, val) => acc + val);
    },
    calculateChartData() {
      this.sortedValues.forEach((dataVal, index) => {
        const { x, y } = this.calculateTextCoords(dataVal, this.angleOffset);
        // start at -90deg so that the largest segment is perpendicular to top
        const data = {
          degrees: this.angleOffset,
          textX: x,
          textY: y,
        };
        this.chartData.push(data);
        this.angleOffset =
          this.dataPercentage(dataVal) * 360 + this.angleOffset;
      });
    },
    sortInitialValues() {
      return (this.sortedValues = this.initialValues);
    },
  },
  methods: {
    calculateStrokeDashOffset(dataVal, circumference) {
      const strokeDiff = this.dataPercentage(dataVal) * circumference;
      return circumference - strokeDiff;
    },
    calculateTextCoords(dataVal, angleOffset) {
      // t must be radians
      // x(t) = r cos(t) + j
      // y(t) = r sin(t) + j

      const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
      const radians = this.degreesToRadians(angle);

      const textCoords = {
        x: this.radius * Math.cos(radians) + this.cx,
        y: this.radius * Math.sin(radians) + this.cy,
      };
      return textCoords;
    },
    degreesToRadians(angle) {
      return angle * (Math.PI / 180);
    },
    dataPercentage(dataVal) {
      return dataVal / this.dataTotal;
    },
    percentageString(dataVal) {
      return `${Math.round(this.dataPercentage(dataVal) * 100)}%`;
    },
    returnCircleTransformValue(index) {
      return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`;
    },
    segmentBigEnough(dataVal) {
      return Math.round(this.dataPercentage(dataVal) * 100) > 5;
    },
  },
  mounted() {
    this.sortInitialValues;
    this.calculateChartData;
  },
};
</script>

<style scoped>
div {
  @apply relative;
}
.value {
  @apply absolute top-16 font-bold text-sm font-sans tracking-tighter text-gray-600 text-center dark:text-gray-100;
  right: 7.5rem;
}
</style>
