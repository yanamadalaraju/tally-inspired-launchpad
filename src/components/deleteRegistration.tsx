// src/api/deleteRegistration.js

const deleteRegistration = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/delete-registration/${id}`, {
        method: 'DELETE',
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting registration:', error);
      return { success: false, message: 'Network error' };
    }
  };
  
  export default deleteRegistration;
  