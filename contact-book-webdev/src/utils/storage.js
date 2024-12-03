const STORAGE_KEY = 'contacts';

// Default contacts (modify these as needed)
const defaultContacts = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    description: 'A passionate coder.',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    description: 'Loves photography and traveling.',
  },
  {
    id: '3',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    description: 'Avid reader and coffee enthusiast.',
  },
];

export function getContacts() {
  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!contacts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContacts));
    return defaultContacts;
  }
  return contacts;
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}
