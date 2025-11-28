import { useState, useEffect } from 'react';

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  picture: string;
  dob: string;
  gender: string;
  registered: string;
}

const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://randomuser.me/api/?results=20');
        const data = await response.json();

        interface RandomUserResult {
          login: { uuid: string };
          name: { first: string; last: string };
          email: string;
          phone: string;
          location: { city: string; country: string };
          nat: string;
          picture: { medium: string };
          dob: { date: string };
          gender: string;
          registered: { date: string };
        }
        const formattedEmployees: Employee[] = (data.results as RandomUserResult[]).map(
          (user: RandomUserResult, index: number) => ({
            id: `${user.login.uuid}-${index}`,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            phone: user.phone,
            location: `${user.location.city}, ${user.location.country}`,
            nationality: user.nat,
            picture: user.picture.medium,
            dob: new Date(user.dob.date).toLocaleDateString(),
            gender: user.gender,
            registered: new Date(user.registered.date).toLocaleDateString(),
          })
        );
        
        setEmployees(formattedEmployees);
        setError(null);
      } catch (err) {
        setError('Failed to fetch employees');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, error };
};

export default useEmployees;
