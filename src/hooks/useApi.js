import { useState, useEffect, useCallback } from 'react';
import { apiService } from '../services/api';

export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { immediate = true, ...apiOptions } = options;

  const execute = useCallback(async (customEndpoint, customOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.request(
        customEndpoint || endpoint,
        { ...apiOptions, ...customOptions }
      );
      setData(response);
      return response;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [endpoint, apiOptions]);

  useEffect(() => {
    if (immediate && endpoint) {
      execute();
    }
  }, [execute, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    refetch: () => execute()
  };
};

// Specialized hooks for common operations
export const useFetch = (endpoint, options = {}) => {
  return useApi(endpoint, { method: 'GET', ...options });
};

export const usePost = (endpoint, options = {}) => {
  return useApi(endpoint, { method: 'POST', immediate: false, ...options });
};

export const usePut = (endpoint, options = {}) => {
  return useApi(endpoint, { method: 'PUT', immediate: false, ...options });
};

export const useDelete = (endpoint, options = {}) => {
  return useApi(endpoint, { method: 'DELETE', immediate: false, ...options });
};

// Hook for managing list data with CRUD operations
export const useApiList = (endpoint) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.get(endpoint);
      setItems(response);
    } catch (err) {
      setError(err.message || 'Failed to fetch items');
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const createItem = useCallback(async (itemData) => {
    try {
      const newItem = await apiService.post(endpoint, itemData);
      setItems(prev => [...prev, newItem]);
      return newItem;
    } catch (err) {
      setError(err.message || 'Failed to create item');
      throw err;
    }
  }, [endpoint]);

  const updateItem = useCallback(async (id, itemData) => {
    try {
      const updatedItem = await apiService.put(`${endpoint}/${id}`, itemData);
      setItems(prev => prev.map(item => 
        item.id === id ? updatedItem : item
      ));
      return updatedItem;
    } catch (err) {
      setError(err.message || 'Failed to update item');
      throw err;
    }
  }, [endpoint]);

  const deleteItem = useCallback(async (id) => {
    try {
      await apiService.delete(`${endpoint}/${id}`);
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete item');
      throw err;
    }
  }, [endpoint]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    items,
    loading,
    error,
    fetchItems,
    createItem,
    updateItem,
    deleteItem,
    refetch: fetchItems
  };
};