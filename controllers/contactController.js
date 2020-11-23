const Contact = require("./../models/contactModel");



exports.getContactsByZipCode = async (req, res) => {
  try {
    const contact = await Contact.find({ zipCode: req.body.zipCode });
    //percentage calc
    let percentage = 0;
    if (contact.length > 0) {
      const targetLeft = parseInt((contact[0].countryGHGCurrent - contact[0].countryGHGTarget) / contact[0].countryGHGCurrent * 100);
      percentage = 100 - targetLeft;
      if(percentage>100){
        percentage = 100;
      }
      res.status(200).render("base", { data: contact, percentage: percentage});
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



