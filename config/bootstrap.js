/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    // Create a new Foo with an associated Bar.  Then update that Foo to have a *new* Bar.
    // The result should be *two* Bar models in the database, and one Foo.  The newer Bar should be associated to the Foo.
    // However, there are *three* Bar models in the database.  This is a bug.


    // Create the Foo model with an associated Bar.
    console.log('Creating a Foo...');
    Foo.create({bar: {}}).exec(function(err, data) {

        // Update that Foo model to have a *new* Bar.
        console.log('Updating the Foo...');
        Foo.update(data.id, {bar: {}, myFavoriteBars: [1]}).exec(function(err, data) {

            Bar.update(1, {myFavoriteFoos: [1]}).exec(function(err, data) {

                // Log a list of all Foo models
                Foo.find().exec(function(err, data) {
                    console.log('There are ' + data.length + ' Foo models in the database.');
                    console.dir(data);

                    // Log a list of all Bar models
                    Bar.find().exec(function(err, data) {
                        console.log('There are ' + data.length + ' Bar models in the database.');
                        console.dir(data);

                        cb();
                    });
                });
            });
        });
    });

};
