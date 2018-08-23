<script>
  // init controller
  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#howitworks"})
          .setClassToggle("#high1", "active") // add class toggle
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#about"})
          .setClassToggle("#high2", "active") // add class toggle
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#corporate"})
          .setClassToggle("#high3", "active") // add class toggle
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#participant"})
          .setClassToggle("#high4", "active") // add class toggle
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
</script>
