/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
// Define API Response Type
interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  isError: string | null;
  refetch: () => void;
}
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Backend API URL from .env
  withCredentials: true, // Allows sending cookies with requests
  headers: {
    "Content-Type": "application/json",
  },
});

export function useGet<T>(
  url: string,
  options?: AxiosRequestConfig
): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  // Function to fetch data
  const fetchData = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response: AxiosResponse<T> = await axiosInstance.get(url, options);
      setData(response.data);
    } catch (error: any) {
      setIsError(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on mount and when the URL changes
  useEffect(() => {
    fetchData();
  }, [url]); // Re-run when URL changes

  return { data, isLoading, isError, refetch: fetchData };
}
// 🟡 POST Request Hook
export function usePost<T>() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  async function postData(
    url: string,
    payload: any,
    options?: AxiosRequestConfig
  ): Promise<T | null> {
    setIsLoading(true);
    setIsError(null);
    try {
      const response: AxiosResponse<T> = await axiosInstance.post(
        url,
        payload,
        options
      );
      return response.data;
    } catch (error: any) {
      setIsError(error.response?.data || error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { postData, isLoading, isError };
}

// 🟠 PUT Request Hook
export function usePut<T>() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  async function putData(
    url: string,
    payload: any,
    options?: AxiosRequestConfig
  ): Promise<T | null> {
    setIsLoading(true);
    setIsError(null);
    try {
      const response: AxiosResponse<T> = await axiosInstance.put(
        url,
        payload,
        options
      );
      return response.data;
    } catch (error: any) {
      setIsError(error.response?.data || error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { putData, isLoading, isError };
}

// 🔴 DELETE Request Hook
export function useDelete<T>() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  async function deleteData(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<T | null> {
    setIsLoading(true);
    setIsError(null);
    try {
      const response: AxiosResponse<T> = await axiosInstance.delete(
        url,
        options
      );
      return response.data;
    } catch (error: any) {
      setIsError(error.response?.data || error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { deleteData, isLoading, isError };
}
