const Contact = require("./../models/contactModel");



exports.getContactsByZipCode = async (req, res) => {
  try {
    const contact = await Contact.find({ zipCode: req.body.zipCode });
    // const contact=[{zipCode:'94087', city:'Sunnyvale', county:'', state:'California'}]
    //percentage calc
    let percentageCountry = 0;
    let percentageGovernor = 0;
    let percentageMayor = 0;

    if (contact.length > 0) {
      const targetLeft = parseInt((contact[0].countryGHGCurrent - contact[0].countryGHGTarget) / contact[0].countryGHGCurrent * 100);
      const governorTargetLeft = parseInt((contact[0].governorGHGCurrent - contact[0].governorGHGTarget) / contact[0].governorGHGCurrent * 100);
      const mayorTargetLeft = parseInt((contact[0].mayorGHGCurrent - contact[0].mayorGHGTarget) / contact[0].mayorGHGCurrent * 100);
      // const targetLeft = 10;
      // const governorTargetLeft = 15;
      // const mayorTargetLeft = 20;


      percentageCountry = 100 - targetLeft;
      percentageGovernor = 100 - governorTargetLeft;
      percentageMayor = 100 - mayorTargetLeft;

      if(percentageCountry>100){
        percentageCountry = 100;
      }
      if(percentageGovernor>100){
        percentageGovernor = 100;
      }
       if(percentageMayor>100){
        percentageMayor = 100;
      }


      res.status(200).render("base", { 
        data: contact, 
        percentageCountry: percentageCountry, 
        percentageGovernor: percentageGovernor, 
        percentageMayor: percentageMayor, 
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