const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    zipCode: {
      type: Number,
      required: [true, "A contact must have a zipCode"]
    },
    city: {
      type: String,
      required: [true, "A contact must have a city"]
    },
    county: {
      type: String,
      required: [true, "A contact must have a county"]
    },
    countyFIPS: {
      type: Number
    },
    stateAcronym: {
      type: String
    },
    stateFIPS: {
      type: Number
    },
    state: {
      type: String,
      required: [true, "A contact must have a state"]
    },
    repName: {
      type: String
    },
    congressionalDistrict: {
      type: String
    },
    repYearElected: {
      type: String
    },
    repNextElection: {
      type: String
    },
    repEmailAddress: {
      type: String
    },
    repOnlineMessgae: {
      type: String
    },
    repParty: {
      type: String
    },
    repCommitteeAssignment: {
      type: String
    },
    repAddress: {
      type: String
    },
    repOfficeRoom: {
      type: String
    },
    repTwitter: {
      type: String
    },
    repPhone: {
      type: String
    },
    senator1Name: {
      type: String
    },
    senator1YearElected: {
      type: String
    },
    senator1NextElection: {
      type: String
    },
    senator1EmailAddress: {
      type: String
    },
    senator1OnlineMessgae: {
      type: String
    },
    senator1Party: {
      type: String
    },
    senator1CommitteeAssignment: {
      type: String
    },
    senator1Address: {
      type: String
    },
    senator1Twitter: {
      type: String
    },
    senator1Phone: {
      type: String
    },
    senator2Name: {
      type: String
    },
    senator2YearElected: {
      type: String
    },
    senator2NextElection: {
      type: String
    },
    senator2EmailAddress: {
      type: String
    },
    senator2OnlineMessgae: {
      type: String
    },
    senator2Party: {
      type: String
    },
    senator2CommitteeAssignment: {
      type: String
    },
    senator2Address: {
      type: String
    },
    senator2Twitter: {
      type: String
    },
    senator2Phone: {
      type: String
    },
    governorName: {
      type: String
    },
    governorYearElected: {
      type: String
    },
    governorNextElection: {
      type: String
    },
    governorEmailAddress: {
      type: String
    },
    governorOnlineMessgae: {
      type: String
    },
    governorParty: {
      type: String
    },
    governorAddress: {
      type: String
    },
    governorTwitter: {
      type: String
    },
    governorPhone: {
      type: String
    },
    mayorName: {
      type: String
    },
    mayorYearElected: {
      type: String
    },
    mayorNextElection: {
      type: String
    },
    mayorEmailAddress: {
      type: String
    },
    mayorOnlineMessgae: {
      type: String
    },
    mayorParty: {
      type: String
    },
    mayorAddress: {
      type: String
    },
    mayorTwitter: {
      type: String
    },
    mayorPhone: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  { collection: "contact" }
);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
