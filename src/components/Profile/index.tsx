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
import type { Category } from "@/types/mentor";
import { useAuth } from "@/hooks/useAuth";

const profileFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  currentRole: z.string().min(2, {
    message: "Current role must be at least 2 characters.",
  }),
  experienceLevel: z.string().min(1, {
    message: "Please select your experience level.",
  }),
  expertise: z.string().min(2, {
    message: "Expertise must be at least 2 characters.",
  }),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
});

const Profile = () => {
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



  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (user?.user_type !== "client") {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/mentors/mentors/${user?.id}`);
          const data = await response.json();

          form.reset({
            fullName: `${data.user.first_name} ${data.user.last_name}`,
            username: data.user.username,
            phoneNumber: data.user.phone_number,
            email: data.user.email,
            currentRole: "", // Not provided by API
            experienceLevel: "", // Not provided by API
            expertise: data.categories.map((c: Category) => c.name).join(", "),
            bio: data.bio,
          });
        } else {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/clients/profile/${user?.id}`, {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            }
          });
          const data = await response.json();
          console.log(accessToken)
          console.log(data)

          form.reset({
            fullName: `${data.user.first_name} ${data.user.last_name}`,
            username: data.user.username,
            phoneNumber: data.user.phone_number,
            email: data.user.email,
            currentRole: "", // Not provided by API
            experienceLevel: "", // Not provided by API
            expertise: "", // Not provided by API
            bio: "", // Not provided by API
          });
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
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
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  if (loading) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  return (
    <main className="pt-[10px] flex flex-col">
      <div className="px-[22px] flex flex-col space-y-6 mb-10">
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg flex-wrap">
          <Link to={"/"}>Mentor Profile</Link>/
          <span className="text-muted-foreground">Profile</span>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4">
                <User2 />
                Personal Information
              </div>

              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
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
                      <FormLabel>Username</FormLabel>
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
                      <FormLabel>Phone Number</FormLabel>
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
                      <FormLabel>Email</FormLabel>
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
                Professional Information
              </div>

              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="currentRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Role</FormLabel>
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
                      <FormLabel>Experience Level</FormLabel>
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
                      <FormLabel>Expertise</FormLabel>
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
                Profile Picture and Bio
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex flex-row gap-2 items-center">
                  <div className="p-4 bg-zinc-100 rounded-full">
                    <Camera className="text-muted-foreground" />
                  </div>
                  Upload a profile picture
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
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
                Security
              </div>

              <Button variant="secondary" disabled>Update Password</Button>

              <div className="py-4 flex flex-row w-full items-center gap-2">
                {isEditing ? (
                  <>
                    <Button type="submit" className="flex-4/6" disabled>
                      Save Changes
                    </Button>
                    <Button
                      disabled
                      type="button"
                      variant="secondary"
                      className="flex-2/4"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    disabled
                    type="button"
                    className="w-full"
                    onClick={() => setIsEditing(true)}
                  >
                    Update Profile
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
