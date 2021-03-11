const Contact = require("./../models/contactModel");



exports.getStateData= async (req, res) => {

  let stateData={}
  const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


  try {
    states.forEach(async (state)=>{
      try {
        let contact = await Contact.findOne({ state: state });
        let governorTargetLeft = parseInt((contact.governorGHGCurrent - contact.governorGHGTarget) / contact.governorGHGCurrent * 100);
        stateData[state] = governorTargetLeft;

      } catch {
        console.log(`A problem occurred finding data on ${state}`);
      }

    });

    // stateData={'California':75, "Arizone":50, "New York":65}

    res.status(200).render("myState", { 
      states: stateData, 
      searchImagePath: "../../public/images/my-state-search.png"
    });

  } catch (err) {

    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};