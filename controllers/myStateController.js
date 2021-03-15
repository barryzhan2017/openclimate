const Contact = require("./../models/contactModel");



exports.getStateData= async (req, res) => {

  let stateData={}
  const stateArray = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  let count=0;

  try {

     stateArray.forEach(async (state)=>{
      try {
        let contact = await Contact.findOne({ state: state }).exec(function(err,info){
          if (info){
            let governorTargetLeft = parseInt((info.governorGHGCurrent - info.governorGHGTarget) / info.governorGHGCurrent * 100);
            stateData[state] = governorTargetLeft;
          }
          count++;
          if (count===stateArray.lenght){
            res.status(200).render("myState", { 
              states: stateData, 
              searchImagePath: "../../public/images/my-state-search.png"
            });
          }
        });

      } catch {
        console.log(`A problem occurred finding data on ${state}`);
      }

    });

    // stateData['teststate']=85;

  } catch (err) {

    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};