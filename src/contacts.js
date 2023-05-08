/* import localforage from 'localforage'; */
import { matchSorter } from 'match-sorter';
import sortBy from 'sort-by';
import { graphQLRequest } from './graphql.js';

export async function getContacts(query) {
  /* await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem('contacts');
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] });
  } */

  const graphqlQuery = `
  query GetContactsQuery($search: String) {
  contactsEntries(search:$search) {
    ... on contacts_default_Entry {
      id
      avatar
      last: lastName
      first:title
      twitter
      url
    }
  }
}`;
  //pass in the search functionality
  const contacts = (await graphQLRequest(graphqlQuery, { search: query })).data
    .contactsEntries;
  console.log(JSON.stringify(contacts, null, 2)); //add some formatting to the json structure it logs
  return contacts.sort(sortBy('last', 'createdAt'));
}

export async function createContact() {
  /* await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts); */

  const graphqlQuery = `
  mutation CreateContactMutation(
  $first: String, 
  $last: String, 
  $avatar:String, 
  $notes: String, 
  $twitter: String) {
  save_contacts_default_Entry(
    title:$first, 
    lastName:$last,
    avatar: $avatar, 
    notes: $notes, 
    authorId: "1"
    twitter: $twitter){
    first: title
    avatar
    twitter
    last: lastName
    notes
    title
  }
}`;

  const contact = (
    await graphQLRequest(graphqlQuery, {
      first: 'New Contact',
      last,
    })
  ).data.save_contacts_default_Entry;
  return contact;
}

//create new contacts with with the id ?
export async function getContact(id) {
  /*   await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem('contacts');
  let contact = contacts.find((contact) => contact.id === id); */
  const graphqlQuery = `query GetContactsQuery($id:[QueryArgument]) {
  contactsEntries(id:$id ) {
    ... on contacts_default_Entry {
      id
      avatar
      last: lastName
      first:title
      twitter
      url
    }
  }
}
`;

  const contact = (await graphQLRequest(graphqlQuery, { id })).data
    .contactsEntries[0]; //want to await first and after that's been executed, then it enters the data.entr...
  console.log(JSON.stringify(contact, null, 2)); //add some formatting to the json structure it logs
  return contact ?? null;
}

export async function updateContact(id, updates) {
  /* await fakeNetwork();
  let contacts = await localforage.getItem('contacts');
  let contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error('No contact found for', id);
  Object.assign(contact, updates);
  await set(contacts); */
  /* console.log(id);
  console.log(updates);
  throw new Error('Not implemented'); */

  const graphQlQuery = `mutation UpdateContactMutation($id:ID, $first: String, $last: String, $avatar:String, $notes: String, $twitter: String) {
  save_contacts_default_Entry(
    id:$id, 
    title:$first, 
    lastName:$last, 
    avatar: $avatar, 
    notes: $notes, 
    authorId: "1", 
    twitter: $twitter) {
      id
      avatar
      last:lastName
      notes
      first: title
      twitter
    }
  }`;
  const contact = (await graphQLRequest(graphQlQuery, { id: id, ...updates }))
    .data.save_contacts_default_Entry; //...updates: last: updates.last, twitte: updates:twitter, notes.notes
  return contact;
}

////motifications to  the query to search for things - later
//motifications in the explorer to get the search to work

//my id here is a string, not an itiger. that's why it's not working . It's working with a piece of the URL
export async function deleteContact(id) {
  const graphqlQuery = `mutation DeleteEntryMutation($id: Int!) {
  deleteEntry(id: $id)
}`;
  await graphQLRequest(graphqlQuery, {
    id: parseInt(id),
  });

  //needs to be an intiger(number), that's why I have to pass it in like this (parseInt)

  return true;
}

function set(contacts) {
  return localforage.setItem('contacts', contacts);
}

// fake a cache so we don't slow down stuff we've already seen
/* let fakeCache = {}; */
/* 
async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
 */
