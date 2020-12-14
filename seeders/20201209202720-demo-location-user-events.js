"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let locations = await queryInterface.bulkInsert("Locations", [
      { name: "New York", place: "Alligator Lounge | Brooklyn, NY", guestSpeakers: "No"},
      { name: "Chicago", place: "Lincoln Park Zoo | Chicago, IL, Lincoln Park", guestSpeakers: "No"},
      { name: "Chicago", place: "hicago Botanic Garden | Glencoe, IL, Suburbs", guestSpeakers: "No"},
      { name: "Chicago", place: "Ruth Page Center for the Arts, Rush & Division", guestSpeakers: "No"},
      { name: "Los Angeles", place: "3900 West Manchester Boulevard Inglewood, California 90305", guestSpeakers: "Justin Bieber"},
      { name: "Los Angeles", place: "3900 West Manchester Boulevard Inglewood, California 90305", guestSpeakers: "Doobie Brothers"},
      { name: "Boston", place: "Online | Virtual", guestSpeakers: "Monteverdi Vespers"},
      {name: "Boston", place: "Online | Virtual", guestSpeakers: "Monteverdi Vespers"}

    ]);

    let events = await queryInterface.bulkInsert("Events", [
      { name: "ZooLights", description: "Unless you've got a big budget, your Christmas light display won't hold an LED candle to the 2.5 million bulbs that festoon Lincoln Park Zoo during the annual ZooLights event. While most of the animals will be inside, guests are free to wander through the park, snap photos of the display and take part in a variety of activities throughout the holiday season. This year's exhibit—which, for the first time in more than 20 years, requires a $5 entry fee—will open on November 20 and run through January 3. In addition to the regular ZooLights admission, guests will also be able to snag tickets for an adults-only night out (complete with mulled wine and hot chocolate) and A Charlie Brown Christmas tribute concert from the Chris White Trio.", location: "2001 N Clark St, Chicago", foodServe: "No", capacity: 52, maxCapacity: 100, locationId: 1 },
      { name: "Lightscape", description: "The Chicago Botanic Garden hosts this annual display of festive lights, giving guests a host of shimmering reasons to visit the forest preserve during the holiday season. Set along a one-mile path, the after-dark experience features a series of installations to explore, including a 110-foot tunnel made up of 100,000 lights and a group of trees festooned in bulbs that sing holiday songs.  New this year—in addition to one-way traffic and other safety precautions—are five installations from Chicago artists, like Tanner Woodford's Pride and Promise, a tree decked with glowing stars inspired by the Chicago flag.", location: "1000 Lake-Cook Rd", foodServe: "No", capacity: "20", maxCapacity: "50", locationId: 1 },
      { name: "Visions: A Nutcracker Experience", description: "Generations of dancers have passed through this Chicago institution. Founded by Chicago heiress and historically significant ballerina Ruth Page, the school took over a former Moose Lodge, which now houses several studios and a small theater. Although ballet is the house specialty, jazz, Pilates and yoga are also offered. Morning classes are geared toward professionals and enthusiasts.", location: "1016 N Dearborn St, Chicago", foodServe: "No", capacity: 50, maxCapacity: 70, locationId: 1 },
      { name: "Justin Bieber in Inglewood", description: "There is no description for this event.", location: "3900 West Manchester Boulevard Inglewood, California 90305", foodServe: "No", capacity: 230, maxCapacity: 500, locationId: 2 },
      { name: "Doobie Brothers (Rescheduled from 9/18/2020) in Inglewood", description: "There is no description for this event.", location: "3900 West Manchester Boulevard Inglewood, California 90305", foodServe: "No", capacity: 150, maxCapacity: 500, locationId: 2 },
      { name: "Monteverdi Vespers of 1610 in the Temple of Dendur", description: "Streaming on December 15 and available throughout the holidays, celebrate the season with Claudio Monterverdi’s transcendent Vespers for the Blessed Virgin, an evening prayer service for chorus, soloists, and instrumentalists. In a reprise of this 2017 tour de force, sold-out performance by Boston’s renowned period-instrument ensemble, the Handel and Haydn Society highlights the grace and mystery of this timeless work of praise, under the direction of the esteemed Harry Christophers and led by captivating concertmaster Aisslinn Nosky. The Vespers draws on elements of the sacred and the secular, from sonatas to songs, in a moving display of reverence, passion, and virtuosity that changed the course of polyphonic music. Originally presented in ecclesiastical spaces like the Basilica di San Marco in Venice, this Vespers was staged in the sublime setting of the Temple of Dendur in The Sackler Wing. riginally performed on April 8, 2017 at the Metropolitan Museum of Art, this was H+H’s debut performance at the Museum and its first return to NYC in over 20 years.", location: "Online/Virtual Space", foodServe: "No", capacity: 168, maxCapacity: 250, locationId: 3 },
      { name: "NEC Presents: Beethoven's Complete Works for Piano: Part XII", description: "A virtuoso pianist himself, Beethoven composed dozens of works for the fortepiano, often making use of the new musical resources of the instrument as it developed rapidly throughout the composer’s lifetime. Approximately 1/3 of each concert program will feature rarely performed sets of variations that may offer insight into Beethoven’s own performances as an improviser. The NEC Piano Department dedicates this Beethoven 2020 project to Distinguished Artist-in-Residence Russell Sherman who celebrates his ninetieth birthday in 2020.  Mr. Sherman was the first American musician to record all of Beethoven’s piano sonatas and concertos. He has been a member of the New England Conservatory faculty since 1967.", location: "Online/Virtual Space", foodServe: "No", capacity: 30, maxCapacity: 250, locationId: 3 }
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Elham Azizi", username: "eg92448", password: "hithere" },
      { name: "Marc Locus", username: "marc2020", password: "hithere" },
      { name: "Diesel Smith", username: "smith", password: "hithere" }
    ]);

    let userLocations = await queryInterface.bulkInsert("Userlocations", [
      { userId: 1, locationId: 1 },
      { userId: 2, locationId: 2 },
      { userId: 3, locationId: 3 }
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};