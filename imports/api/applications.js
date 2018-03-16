import { Mongo } from 'meteor/mongo';

export const Applications = new Mongo.Collection('applications');

if (Meteor.isServer) {
    Meteor.publish('applications', function () {
        const userId = this.userId;
        return Applications.find({});
    })
}