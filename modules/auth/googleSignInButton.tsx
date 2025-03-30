"use client";

import { CredentialResponse, useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/button"; // your custom UI component
import { toast } from "sonner";
import { useGoogleLoginService } from "./repo-service";
import { useRouter } from "next/navigation";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function GoogleLoginButton() {
  const router = useRouter();
  const { handleGoogleLoginUser } = useGoogleLoginService();

  const navigateToDashboard = () => {
    // Navigate to the dashboard
    router.push("/dashboard");
  };

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const credential = credentialResponse.credential;
    if (!credential) {
      toast.error("Login Failed");
      return;
    }
    const res = await handleGoogleLoginUser({ credential });
    if (res) navigateToDashboard();
  };
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await handleSuccess({
          credential: tokenResponse.access_token,
        });
      } catch (e) {
        console.error(e);
        toast.error("Login failed");
      }
    },
    onError: () => {
      toast.error("Google login failed");
    },
  });

  return (
    <Button variant="outline" className="w-full" onClick={() => login()}>
      <IconBrandGoogle className="text-xl" />
      Login with Google
      {/* You can add a Google icon here too */}
    </Button>
  );
}
