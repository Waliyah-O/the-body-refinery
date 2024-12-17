import React, { useState, useEffect } from 'react';

const CalorieLossComponent = () => {
  const [activity, setActivity] = useState('');
  const [calorieLossData, setCalorieLossData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://vitality.us-east-1.elasticbeanstalk.com/api/calories/loss?activity=${activity}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        const data = await response.json();
        setCalorieLossData(data);
      } catch (error) {
        setError('An error occurred while fetching data.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (activity) {
      fetchData();
    }
  }, [activity]);

  const handleInputChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <div>
      <h1>Calorie Loss Component</h1>
      <form>
        <div>
          <label htmlFor="activity">Activity:</label>
          <input
            type="text"
            id="activity"
            value={activity}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {calorieLossData && (
        <div>
          <h2>Calorie Loss Data:</h2>
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Calories Burned</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {calorieLossData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.total_calories}</td>
                  <td>{item.duration_minutes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CalorieLossComponent;