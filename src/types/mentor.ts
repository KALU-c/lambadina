type User = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  user_type: "client" | "mentor";
  profile_picture: string;
  is_verified: boolean;
};

type Category = {
  id: number;
  name: string;
  description: string;
  created_at: string;
};

type Availability = {
  id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_available: boolean;
  mentor: number;
};

export type MentorProfile = {
  id: number;
  user: User;
  bio: string;
  categories: Category[];
  price_per_minute: string;
  is_available: boolean;
  rating: string;
  total_sessions: number;
  availabilities: Availability[];
  created_at: string;
  updated_at: string;
};