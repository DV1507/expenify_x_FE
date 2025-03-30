import { usePost } from "@/hooks/axios";

const authBasePath = "authentication";

export const useHandleRegisterUser = () => {
  const { isError, isLoading, postData } = usePost();
  const handleRegisterUser = async (data: {
    email: string;
    password: string;
  }) => {
    const response = await postData(`${authBasePath}/register`, data);
    return response;
  };
  return { handleRegisterUser, isError, isLoading };
};

export const useLoginUser = () => {
  const { isError, isLoading, postData } = usePost();
  const handleLoginUser = async (data: { email: string; password: string }) => {
    const response = await postData(`${authBasePath}/login`, data);
    return response;
  };
  return { handleLoginUser, isError, isLoading };
};

export const useGoogleLoginService = () => {
  const { isError, isLoading, postData } = usePost();
  const handleGoogleLoginUser = async (data: { credential: string }) => {
    const response = await postData(`${authBasePath}/google`, data);
    return response;
  };
  return { handleGoogleLoginUser, isError, isLoading };
};
