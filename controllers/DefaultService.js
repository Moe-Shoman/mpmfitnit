'use strict';

exports.addNewUser = function(args, res, next) {
  /**
   * Creates a new user in the database
   *
   * newUser NewUser new user to add to the database
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123,
  "first_name" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleterUser = function(args, res, next) {
  /**
   * deletes a single user from the database.
   *
   * id Integer ID of the user to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.findExerciseById = function(args, res, next) {
  /**
   * Returns a specific exercise based on a single ID.
   *
   * id Integer ID of exercise to fetch
   * returns exercise
   **/
  var examples = {};
  examples['application/json'] = {
  "bg_id" : 123456789,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "equipment_type" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getAllExercises = function(args, res, next) {
  /**
   * returns all exercises
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "bg_id" : 123456789,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "equipment_type" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getAllRecipes = function(args, res, next) {
  /**
   * returns all recipes
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "description" : "aeiou",
  "id" : 123,
  "title" : "aeiou",
  "bgId" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getRecipeById = function(args, res, next) {
  /**
   * Returns specific recipes based on routine ID
   *
   * id Integer routine ID to fetch
   * returns recipe
   **/
  var examples = {};
  examples['application/json'] = {
  "description" : "aeiou",
  "id" : 123,
  "title" : "aeiou",
  "bgId" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUserById = function(args, res, next) {
  /**
   * Returns a user information based on a single ID. The user must be authorized to access.
   *
   * id Long ID of the user to fetch
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123,
  "first_name" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.patchUserProfile = function(args, res, next) {
  /**
   * updates specified properties of the specific user.
   *
   * id Long ID of specified user
   * jsonPatch UpdateUser 
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123,
  "first_name" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
