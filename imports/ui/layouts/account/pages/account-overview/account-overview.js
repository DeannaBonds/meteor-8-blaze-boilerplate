import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './account-overview.css';
import './account-overview.html';


Template.accountOverview.helpers( {
    user() {
        if ( Meteor.user() ) {
            return Meteor.user();
        }
        return undefined;
    },
} );
