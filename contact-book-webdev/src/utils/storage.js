export const saveContacts = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };
  
  export const getContacts = () => {
    const contacts = localStorage.getItem('contacts');
    return contacts ? JSON.parse(contacts) : [];
  };
  