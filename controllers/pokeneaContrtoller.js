const os = require('os')
const pokeneaModel = require('../models/pokenea')

class pokeneaContrtoller {
   static sendInfoPokenea = (req, res) => {
      const pokeneas = pokeneaModel.pokeneas;
      const number = Math.floor(Math.random() * 7);
      const viewData = {
         pokenea: pokeneas[number],
         docker: os.hostname
      };
      res.json({ viewData });
   }
       
   static sendPhrasePokenea = (req, res) => {
      const pokeneas = pokeneaModel.pokeneas;
      const number = Math.floor(Math.random() * 7);
      const viewData = {
         pokenea: pokeneas[number],
         docker: os.hostname
      };
      res.render('show', viewData);
   }
}


module.exports = pokeneaContrtoller;