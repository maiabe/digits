import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Mai',
    last: 'Abe',
    address: '1680 East-West Rd, Honolulu, HI',
    telephone: '808-123-1234',
    email: 'maimai@hawaii.edu'
  },
  {
    first: 'Mia',
    last: 'Abe',
    address: '1680 East-West Rd, Honolulu, HI',
    telephone: '808-123-1234',
    email: 'miia@hawaii.edu'
  },
  {
    first: 'Nao',
    last: 'Abe',
    address: '1680 East-West Rd, Honolulu, HI',
    telephone: '808-123-1234',
    email: 'nao@hawaii.edu'
  },
  {
    first: 'Kai',
    last: 'Abe',
    address: '1680 East-West Rd, Honolulu, HI',
    telephone: '808-123-1234',
    email: 'kaikai@hawaii.edu'
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
