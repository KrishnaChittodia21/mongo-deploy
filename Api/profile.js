const express = require('express');
const Profile = require('../DB/Profile');
const router = express.Router();

router.get('/profile', (req, res) => {
  let filters = req.query;
  if(req.query.age != null) {
    filters = {
      age: {$gte: req.query.age}
    }
  }
  Profile.find(filters)
  .then( profiles => {
    res.json({
      confirmation: 'success',
      data: profiles
    })
  })
  .catch( err => {
    res.json({
      confirmation: 'failure1',
      message: err
    })
  })
})

router.get('/profile/update', (req, res) => {
  const query = req.query;
  const profileId = query.id;
  delete query['id'];

  Profile.findByIdAndUpdate(profileId, query, {new:true}) // by default mongoose will return record prior to update but normally want record after update
  .then( updatedProfile => {
    res.json({
      confirmation: 'success',
      data: updatedProfile
    })
  })
  .catch( err => {
    res.json({
      confirmation: 'failure2',
      message: err.message
    })
  })
})

router.get('/profile/remove', (req, res) => {
  const query = req.query;
  Profile.findByIdAndRemove(query.id)
  .then( data => {
    res.json({
      confirmation: 'success',
      data: 'Profile with id = ' + query.id + ' successfully removed.'
    })
  })
  .catch( err => {
    res.json({
      confirmation: 'failure3',
      message: err.message
    })
  })
})

router.get('/profile/:id', (req, res) => {``
  const id = req.params.id;
  Profile.findById(id)
  .then( profile => {
    res.json({
      confirmation: 'success',
      data: profile
    })
  })
  .catch( err => {
    res.json({
      confirmation: 'fail4',
      message: 'Profile with ' + id + ' not found'
    })
  }) 
})

router.post('/profile', (req, res) => {
  Profile.create(req.body)
  .then( profile => {
    res.json({
      confirmation: 'success',
      data: profile
    })
  })
  .catch( err => {
    res.json({
      confirmation: 'Failure5',
      message: err.message
    })
  })
})

module.exports = router;
