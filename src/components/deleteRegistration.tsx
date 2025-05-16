// src/api/deleteRegistration.js
import baseURL from "@/Api";
const deleteRegistration = async (id) => {
    try {
      const response = await fetch(`${baseURL}/delete-registration/${id}`, {
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
  