import { faker } from "@faker-js/faker";

export default {
  displaySortAndFilter: false,
  sortingCriterion: "name",
  sortingAscending: true,
  filtering: null,
  showInfo: false,
  selectedEstablishment: 0,
  establishments: new Array(faker.datatype.number({ min: 1, max: 20 }))
    .fill("")
    .map((element, index) => ({
      id: index,
      establishment: {
        name: faker.company.name(),
        address: {
          streetAddress: `${faker.address.street()} ${faker.address.buildingNumber()}`,
          zipCode: faker.address.zipCode("### ##"),
          city: faker.address.city(),
        },
        phone: faker.phone.number("+46 (0) 8## ### ###"),
        web: `www.${faker.internet.domainName()}`,
        rating: {
          score: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
          numberOfRatings: faker.datatype.number(500),
        },
        pitch: faker.lorem.paragraphs(3),
      },
      appointment: {
        time: faker.date.soon(),
        price: faker.datatype.number(1000),
        duration: faker.datatype.number(240),
      },
    })),
};
