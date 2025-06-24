 import { useState, useEffect } from 'react';

export function UsersPage() {
  // État pour stocker les utilisateurs
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Tableau de labels pour les colonnes
  const columnLabels = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nom Complet' },
    { key: 'username', label: 'Pseudo' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Téléphone' }
  ];

  // Chargement des données
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Erreur de chargement:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="users-container">
      <h1>Liste des Utilisateurs</h1>
      
      <table className="users-table">
        <thead>
          <tr>
            {columnLabels.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {columnLabels.map((column) => (
                <td key={`${user.id}-${column.key}`}>
                  {user[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;