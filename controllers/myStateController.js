const Contact = require("./../models/contactModel");

exports.getStateData= async (req, res) => {
  let stateData={};
  let stateGoal={};
  const stateArray = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  let count=0;

  try {

    stateArray.forEach((state)=>{
      try {
        Contact.findOne({ state: state }).exec(function(err,info){
          if (info){
            let governorTargetLeft = parseInt((info.governorGHGCurrent - info.governorGHGTarget) / info.governorGHGCurrent * 100);
            stateData[state] = 100-governorTargetLeft;
            stateGoal[state] = parseInt((info.governorGHGCurrent-info.governorGHGTarget)/info.governorGHGCurrent *100);
          }
          count++;

          if (count===stateArray.length || count>51){
            try{ 
              stateData['US']=100-parseInt((info.countryGHGCurrent - info.countryGHGTarget) / info.countryGHGCurrent * 100);
              stateGoal['US'] = parseInt((info.countryGHGCurrent-info.countryGHGTarget)/info.countryGHGCurrent *100);
            } catch (err) {
              // console.log(err);
              stateData['US']=0;
              stateGoal['US']=0;
            }
            res.status(200).render("myState", { 
              states: stateData, 
              stateGoal:stateGoal,
              searchImagePath: "../../public/images/my-state-search.png"
            });
          }
        });
      } catch (err) {
        // console.log(err);
        count++;
      }

      // stateData[state]=50;
      // stateGoal[state]=100;
      // count++;
      // if (count===stateArray.length){
      //   stateData['US'] = 70;
      //   stateGoal['US'] = 70;
      //   res.status(200).render("myState", { 
      //     states: stateData, 
      //     stateGoal:stateGoal,
      //     searchImagePath: "../../public/images/my-state-search.png"
      //   });
      // }

    });

  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};