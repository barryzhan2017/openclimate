const Contact = require("./../models/contactModel");



exports.getContactsByZipCode = async (req, res) => {
  try {
    const contact = await Contact.find({ zipCode: req.body.zipCode });
    // const contact=[{zipCode:'94087', city:'Sunnyvale', county:'', state:'California', countryGHGCurrent:75, countryGHGTarget:15}];
    //percentage calc
    let percentageCountry = 0;
    let percentageGovernor = 0;
    let targetLeft=0;
    let governorTargetLeft=0;

    if (contact.length > 0) {
      try { 
        const targetLeft = parseInt((contact[0].countryGHGCurrent - contact[0].countryGHGTarget) / contact[0].countryGHGCurrent * 100);
        if (targetLeft){
          percentageCountry = 100 - targetLeft;
        }
      } catch {
        console.log("Couldn't load country GHG data");
      }

      try{
        const governorTargetLeft = parseInt((contact[0].governorGHGCurrent - contact[0].governorGHGTarget) / contact[0].governorGHGCurrent * 100);
        if (governorTargetLeft){
          percentageGovernor = 100 - governorTargetLeft;
        }
      } catch {
        console.log("Couldn't load state GHG data");
      }

      // percentageMayor = 100 - mayorTargetLeft;

      if(percentageCountry>100){
        percentageCountry = 100;
      }
      if(percentageGovernor>100){
        percentageGovernor = 100;
      }

      res.status(200).render("base", { 
        data: contact, 
        percentageCountry: percentageCountry, 
        percentageGovernor: percentageGovernor, 
        searchImagePath: "../../public/images/question-answers-search.jpg"
      });
    }
    else {
      res.render('index', { error: true });
    }
  } catch (err) {

    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};