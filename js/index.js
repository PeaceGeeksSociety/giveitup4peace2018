
  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#howitworks"})
          .setClassToggle("#high1", "active")
          // .addIndicators()
          .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#about"})
          .setClassToggle("#high2", "active")
          // .addIndicators()
          .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#corporate"})
          .setClassToggle("#high3", "active")
          // .addIndicators()
          .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#participant"})
          .setClassToggle("#high4", "active")
          // .addIndicators()
          .addTo(controller);
