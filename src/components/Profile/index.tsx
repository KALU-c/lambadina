import { useEffect, useState } from "react";
import { Link } from "react-router";
import DetailsNavbar from "../Details/layout/navbar";
import Footer from "../Footer";
import { Camera, User2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import type { Category } from "@/types/mentor";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

const profileFormSchema = z.object({
  fullName: z.string().min(2, {
    message: i18n.t("zod_full_name_min"),
  }),
  username: z.string().min(2, {
    message: i18n.t("zod_username_min"),
  }),
  phoneNumber: z.string().min(10, {
    message: i18n.t("zod_phone_number_min"),
  }),
  email: z.string().email({
    message: i18n.t("zod_email_invalid"),
  }),
  currentRole: z.string().min(2, {
    message: i18n.t("zod_current_role_min"),
  }),
  experienceLevel: z.string().min(1, {
    message: i18n.t("zod_experience_level_required"),
  }),
  expertise: z.string().min(2, {
    message: i18n.t("zod_expertise_min"),
  }),
  bio: z.string().min(10, {
    message: i18n.t("zod_bio_min"),
  }),
});

const Profile = () => {
  const { t } = useTranslation()

  const { user, accessToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);


  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "",
      username: user?.username,
      phoneNumber: "",
      email: "",
      currentRole: "",
      experienceLevel: "",
      expertise: "",
      bio: "",
    },
  });


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // if (user?.user_type !== "client") {
        //   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/profile`);
        //   const data = await response.json();

        //   form.reset({
        //     fullName: `${data.first_name || ''} ${data.last_name || ''}`,
        //     username: data.username,
        //     phoneNumber: data.phone_number ?? '',
        //     email: data.email,
        //     currentRole: "", // Not provided by API
        //     experienceLevel: "", // Not provided by API
        //     expertise: data.categories.map((c: Category) => c.name).join(", "),
        //     bio: data.bio,
        //   });
        // } else {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/profile/`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        console.log(accessToken)
        console.log(data)

        form.reset({
          fullName: `${data.first_name || ''} ${data.last_name || ''}`,
          username: data.username,
          phoneNumber: data.phone_number || '',
          email: data.email,
          currentRole: "", // Not provided by API
          experienceLevel: "", // Not provided by API
          expertise: "", // Not provided by API
          bio: "", // Not provided by API
        });
        // }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile", err);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [form, user?.id, user?.user_type, accessToken]);

  const onSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    try {
      const response = await fetch(`/api/mentors/mentors/${user?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bio: values.bio,
          categories: values.expertise.split(",").map((name) => ({ name })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }

      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch {
      console.error("Error updating profile");
      alert("Failed to update profile.");
    }
  };

  if (loading) {
    return <div className="p-10 text-center">{t("loading_profile")}</div>;
  }

  return (
    <main className="pt-[10px] flex flex-col">
      <div className="px-[22px] flex flex-col space-y-6 mb-10">
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg flex-wrap">
          <Link to={"/"} className="text-muted-foreground">{t("profile")}</Link>/
          <span>{user?.username}</span>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4">
                <User2 />
                {t("personal_information")}
              </div>

              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("full_name")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("username")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("phone_number")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4">
                <User2 />
                {t("profession_information")}
              </div>

              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="currentRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("current_role")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("experience_level")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expertise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("expertise")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Profile Picture and Bio */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4">
                <User2 />
                {t("profile_picture_and_bio")}
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex flex-row gap-2 items-center">
                  <div className="p-4 bg-zinc-100 rounded-full">
                    <Camera className="text-muted-foreground" />
                  </div>
                  {t("upload_profile_picture")}
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("bio")}</FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-zinc-100 h-52"
                          disabled={!isEditing}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Security */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4">
                <User2 />
                {t("security")}
              </div>

              <Button variant="secondary" disabled>{t("update_password")}</Button>

              <div className="py-4 flex flex-row w-full items-center gap-2">
                {isEditing ? (
                  <>
                    <Button type="submit" className="flex-4/6" disabled>
                      {t("save_changes")}
                    </Button>
                    <Button
                      disabled
                      type="button"
                      variant="secondary"
                      className="flex-2/4"
                      onClick={() => setIsEditing(false)}
                    >
                      {t("cancel")}
                    </Button>
                  </>
                ) : (
                  <Button
                    disabled
                    type="button"
                    className="w-full"
                    onClick={() => setIsEditing(true)}
                  >
                    {t("update_profile")}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>

      <Footer />
    </main>
  );
};

export default Profile;
