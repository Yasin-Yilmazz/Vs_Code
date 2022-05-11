// dict, json a benziyor

let user = {
  name: "Yasin",
  last: "Yilmaz",
  age: "23",
  address: {
    city: "Istanbul",
    town: "Esenler",
  },
  hobies: ["cinema", "sport"],
};

let sonuc;

sonuc = user.name;
sonuc = user.last;
sonuc = user.address.town;
sonuc = user.hobies[0];
console.log(sonuc);
