import { useEffect, useState } from 'react';
import './App.css';
import { getContacts } from './services/axios';
import { Response } from './types/response';

function App() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const columns = ['Contact', 'Total Value', 'Location', 'Deals', 'Tags'];

  useEffect(() => {
    getContacts()
      .then((response: Response) => {
        setContacts(response.data)
      })
      .catch((error: Response) => {
        setError(error.error)
      });
  }, []);

  return (
    <div className="app">
      <table id="contacts">
        <tr>
          {columns.map(column => <th>{column}</th>)}
        </tr>
        {contacts.map((contact: any) => {
          return <tr>
            <td>
              <div className="contactInfo">
                <div className="circle">
                  {contact.firstName[0]}{contact.lastName[0]}
                </div>&nbsp;&nbsp;
                <a href="#" target="_blank">{contact.firstName} {contact.lastName}</a>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>;
        })}
      </table>
    </div>
  );
}

export default App;
