const handlesDates = {
  methods: {
    formatAMPM(date = new Date()) {
      // const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + minutes + " " + ampm;
    },

    currentTimeAmPm(date = new Date()) {
      // const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + minutes + " " + ampm;
    },

    scrollToElement(refname) {
      // const element = this.$refs[refname];
      // if (element) {
      //   element.scroll({ top: element.scrollHeight, behavior: "smooth" });
      // }
      // const el = document.getElementById("test-scroll");
      // if (el) {
      //   // Use el.scrollIntoView() to instantly scroll to the element
      //   el.scrollIntoView({ behavior: "smooth" });
      // }
    },
  },
};

export default handlesDates;
