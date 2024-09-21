const Therapist = require('../models/Therapist');

const resolvers = {
  Query: {
    therapists: async () => await Therapist.find(),
    therapist: async (_, { id }) => await Therapist.findById(id),
  },
  Mutation: {
    addTherapist: async (_, {
      name, experience, price, expertise, languages, sessionMode, location, availableSlots, profileImage
    }) => {
      const newTherapist = new Therapist({
        name, experience, price, expertise, languages, sessionMode, location, availableSlots, profileImage
      });
      return await newTherapist.save();
    }
  },
};

module.exports = resolvers;
