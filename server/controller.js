module.exports = {
  logout: (req, res, next) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getAllIcons: (req, res, next) => {
    const db = req.app.get('db');
    db.get_all_icons().then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error from controller.getAllIcons: ', error))
  },
  addIcon: (req, res, next) => {
    const db = req.app.get('db');
    db.add_icon([className, tags]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error from controller.addIcon: ', error))
  },
  addIconTags: (req, res, next) => {
    const db = req.app.get('db');
    db.add_icon_tags([id, tags]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error from controller.editIcon: ', error))
  },
  deleteIcon: (req, res, next) => {
    const db = req.app.get('db');
    db.delete_icon_tags([tags, id]).then(result => {
      res.status(200).send(result)
    }).catch(error => console.log('Error fron controller.deleteIcon: ', error))
  }
}