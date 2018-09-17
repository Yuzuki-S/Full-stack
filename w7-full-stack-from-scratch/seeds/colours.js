
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colours').del()
    .then(function () {
      // Inserts seed entries
      return knex('colours').insert([
        {
          color: "black",
          category: "hue",
          type: "primary",
          code: JSON.stringify({
            rgba: [255,255,255,1],
            hex: "#000"
          })
        },
        {
          color: "white",
          category: "value",
          code: JSON.stringify({
            rgba: [0,0,0,1],
            hex: "#FFF"
          })
        },
        {
          color: "red",
          category: "hue",
          type: "primary",
          code: JSON.stringify({
            rgba: [255,0,0,1],
            hex: "#FF0"
          })
        },
        {
          color: "blue",
          category: "hue",
          type: "primary",
          code: JSON.stringify({
            rgba: [0,0,255,1],
            hex: "#00F"
          })
        },
        {
          color: "yellow",
          category: "hue",
          type: "primary",
          code: JSON.stringify({
            rgba: [255,255,0,1],
            hex: "#FF0"
          })
        },
        {
          color: "green",
          category: "hue",
          type: "secondary",
          code: JSON.stringify({
            rgba: [0,255,0,1],
            hex: "#0F0"
          })
        },
      ]
      );
    });
};
