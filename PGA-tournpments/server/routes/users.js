let express = require('express');
let router = express.Router();
let db = require('../db');

router.get( '/', async function ( req, res, next ) {

  try {
    const users = await db.any( 'SELECT * FROM users', [ true ] );
    console.log( "logging  users", users );
    res.send( users );

  } catch ( e ) {
    console.log( 'catch anything wrong', e );
    return res.status( 400 ).json( { e } );
  }
} )

router.get( '/', async function ( req, res, next ) {

  try { //res.send('respond with a resource');
    console.log( req.body, 'the body' );
    res.json( { users: mockUsers } );

  } catch ( err ) {
  console.log(err)

  }

  } );

  //to add users
router.post( "/", async function ( req, res, next ) {

    mockUsers.push( req.body );
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    console.log( user );
    try {
      const createdUser = await db.one(
        'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
        [ user.name, user.email ]
      );
      console.log( createdUser );
    } catch ( e ) {
      return res.status( 400 ).json( { e } );
    }
  } );


router.delete( "/:id", async ( req, res ) => {
    //: acts as a placeholder
    const userId = req.params.id;
    try {
      const deleteUser = await db.none( "DELETE FROM users WHERE id=$1", [ userId ] );

      res.send( { status: "success" } );
    } catch ( e ) {
      return res.status( 400 ).json( { e } );
    }
  } );


  module.exports = router;


  let mockUsers = [
    { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
    { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
    { id: 3, name: 'Dory', email: 'dory@gmail.com' }
  ]
