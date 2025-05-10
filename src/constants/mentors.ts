import type { Category, MentorProfile } from "@/types/mentor";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Software Engineering",
    description: "Building and maintaining software systems.",
    created_at: "2023-01-01T00:00:00Z"
  },
  {
    id: 6,
    name: "Cloud Engineering",
    description: "Working with cloud infrastructure and services.",
    created_at: "2023-01-01T00:00:00Z"
  },
  {
    id: 9,
    name: "Career Coaching",
    description: "Helping individuals grow in their careers.",
    created_at: "2023-01-01T00:00:00Z"
  }
];

export const MENTORS: MentorProfile[] = [
  {
    id: 1,
    user: {
      id: 1,
      username: "user1",
      email: "user1@example.com",
      first_name: "First1",
      last_name: "Last1",
      phone_number: "+123456789001",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/10.jpg",
      is_verified: true
    },
    bio: "This is the bio of mentor 1.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "45",
    is_available: true,
    rating: "4.7",
    total_sessions: 502,
    availabilities: [
      {
        id: 101,
        day_of_week: 0,
        start_time: "09:00",
        end_time: "17:00",
        is_available: true,
        mentor: 1
      },
      {
        id: 102,
        day_of_week: 3,
        start_time: "09:00",
        end_time: "17:00",
        is_available: true,
        mentor: 1
      }
    ],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 2,
    user: {
      id: 2,
      username: "user2",
      email: "user2@example.com",
      first_name: "First2",
      last_name: "Last2",
      phone_number: "+123456789002",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/5.jpg",
      is_verified: false
    },
    bio: "This is the bio of mentor 2.",
    categories: [
      {
        id: 3,
        name: "UI/UX Design",
        description: "Designing user interfaces and experiences.",
        created_at: "2023-01-01T00:00:00Z"
      },
      {
        id: 2,
        name: "Product Management",
        description: "Managing product lifecycles and roadmaps.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "32",
    is_available: true,
    rating: "4.2",
    total_sessions: 801,
    availabilities: [
      {
        id: 201,
        day_of_week: 2,
        start_time: "10:00",
        end_time: "16:00",
        is_available: true,
        mentor: 2
      }
    ],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 3,
    user: {
      id: 3,
      username: "user3",
      email: "user3@example.com",
      first_name: "First3",
      last_name: "Last3",
      phone_number: "+123456789003",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/15.jpg",
      is_verified: true
    },
    bio: "Mentor 3 specializes in mobile app development.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "40",
    is_available: false,
    rating: "4.5",
    total_sessions: 623,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 4,
    user: {
      id: 4,
      username: "user4",
      email: "user4@example.com",
      first_name: "First4",
      last_name: "Last4",
      phone_number: "+123456789004",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/22.jpg",
      is_verified: false
    },
    bio: "Mentor 4 loves teaching UI/UX and graphic design.",
    categories: [
      {
        id: 3,
        name: "UI/UX Design",
        description: "Designing user interfaces and experiences.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "30",
    is_available: true,
    rating: "4.0",
    total_sessions: 430,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 5,
    user: {
      id: 5,
      username: "user5",
      email: "user5@example.com",
      first_name: "First5",
      last_name: "Last5",
      phone_number: "+123456789005",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/3.jpg",
      is_verified: true
    },
    bio: "Mentor 5 is a product strategy expert.",
    categories: [
      {
        id: 2,
        name: "Product Management",
        description: "Managing product lifecycles and roadmaps.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "50",
    is_available: true,
    rating: "4.9",
    total_sessions: 910,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 6,
    user: {
      id: 6,
      username: "user6",
      email: "user6@example.com",
      first_name: "First6",
      last_name: "Last6",
      phone_number: "+123456789006",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/10.jpg",
      is_verified: false
    },
    bio: "Mentor 6 loves mentoring new developers.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "35",
    is_available: false,
    rating: "3.8",
    total_sessions: 305,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 7,
    user: {
      id: 7,
      username: "user7",
      email: "user7@example.com",
      first_name: "First7",
      last_name: "Last7",
      phone_number: "+123456789007",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/8.jpg",
      is_verified: true
    },
    bio: "Mentor 7 is a seasoned engineer with 15 years of experience.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "60",
    is_available: true,
    rating: "5.0",
    total_sessions: 1200,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 8,
    user: {
      id: 8,
      username: "user8",
      email: "user8@example.com",
      first_name: "First8",
      last_name: "Last8",
      phone_number: "+123456789008",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/3.jpg",
      is_verified: false
    },
    bio: "Mentor 8 teaches beginner coding bootcamps.",
    categories: [
      {
        id: 3,
        name: "UI/UX Design",
        description: "Designing user interfaces and experiences.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "25",
    is_available: true,
    rating: "3.9",
    total_sessions: 410,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 9,
    user: {
      id: 9,
      username: "user9",
      email: "user9@example.com",
      first_name: "First9",
      last_name: "Last9",
      phone_number: "+123456789009",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/11.jpg",
      is_verified: true
    },
    bio: "Mentor 9 focuses on system architecture.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "55",
    is_available: false,
    rating: "4.3",
    total_sessions: 600,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 10,
    user: {
      id: 10,
      username: "user10",
      email: "user10@example.com",
      first_name: "First10",
      last_name: "Last10",
      phone_number: "+123456789010",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/18.jpg",
      is_verified: false
    },
    bio: "Mentor 10 is passionate about teaching clean code principles.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "38",
    is_available: true,
    rating: "4.1",
    total_sessions: 502,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 11,
    user: {
      id: 11,
      username: "user11",
      email: "user11@example.com",
      first_name: "First11",
      last_name: "Last11",
      phone_number: "+123456789011",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/30.jpg",
      is_verified: true
    },
    bio: "Mentor 11 mentors junior backend engineers.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "42",
    is_available: true,
    rating: "4.6",
    total_sessions: 300,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 12,
    user: {
      id: 12,
      username: "user12",
      email: "user12@example.com",
      first_name: "First12",
      last_name: "Last12",
      phone_number: "+123456789012",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/31.jpg",
      is_verified: false
    },
    bio: "Mentor 12 guides aspiring product managers.",
    categories: [
      {
        id: 2,
        name: "Product Management",
        description: "Managing product lifecycles and roadmaps.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "48",
    is_available: false,
    rating: "4.0",
    total_sessions: 370,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 13,
    user: {
      id: 13,
      username: "user13",
      email: "user13@example.com",
      first_name: "First13",
      last_name: "Last13",
      phone_number: "+123456789013",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/25.jpg",
      is_verified: true
    },
    bio: "Mentor 13 is a systems design expert.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "55",
    is_available: true,
    rating: "5.0",
    total_sessions: 900,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 14,
    user: {
      id: 14,
      username: "user14",
      email: "user14@example.com",
      first_name: "First14",
      last_name: "Last14",
      phone_number: "+123456789014",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/28.jpg",
      is_verified: false
    },
    bio: "Mentor 14 focuses on UI/UX and user research.",
    categories: [
      {
        id: 3,
        name: "UI/UX Design",
        description: "Designing user interfaces and experiences.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "29",
    is_available: true,
    rating: "4.1",
    total_sessions: 460,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 15,
    user: {
      id: 15,
      username: "user15",
      email: "user15@example.com",
      first_name: "First15",
      last_name: "Last15",
      phone_number: "+123456789015",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/35.jpg",
      is_verified: true
    },
    bio: "Mentor 15 enjoys helping engineers crack tech interviews.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "40",
    is_available: true,
    rating: "4.8",
    total_sessions: 750,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 16,
    user: {
      id: 16,
      username: "user16",
      email: "user16@example.com",
      first_name: "First16",
      last_name: "Last16",
      phone_number: "+123456789016",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/42.jpg",
      is_verified: false
    },
    bio: "Mentor 16 guides designers transitioning to product management.",
    categories: [
      {
        id: 2,
        name: "Product Management",
        description: "Managing product lifecycles and roadmaps.",
        created_at: "2023-01-01T00:00:00Z"
      },
      {
        id: 3,
        name: "UI/UX Design",
        description: "Designing user interfaces and experiences.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "36",
    is_available: true,
    rating: "4.3",
    total_sessions: 510,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 17,
    user: {
      id: 17,
      username: "user17",
      email: "user17@example.com",
      first_name: "First17",
      last_name: "Last17",
      phone_number: "+123456789017",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/12.jpg",
      is_verified: true
    },
    bio: "Mentor 17 coaches DevOps engineers.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "50",
    is_available: false,
    rating: "4.4",
    total_sessions: 670,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 18,
    user: {
      id: 18,
      username: "user18",
      email: "user18@example.com",
      first_name: "First18",
      last_name: "Last18",
      phone_number: "+123456789018",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/14.jpg",
      is_verified: false
    },
    bio: "Mentor 18 teaches agile software methodologies.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "33",
    is_available: true,
    rating: "4.2",
    total_sessions: 390,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 19,
    user: {
      id: 19,
      username: "user19",
      email: "user19@example.com",
      first_name: "First19",
      last_name: "Last19",
      phone_number: "+123456789019",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/40.jpg",
      is_verified: true
    },
    bio: "Mentor 19 focuses on cloud architecture.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "45",
    is_available: false,
    rating: "4.7",
    total_sessions: 850,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 20,
    user: {
      id: 20,
      username: "user20",
      email: "user20@example.com",
      first_name: "First20",
      last_name: "Last20",
      phone_number: "+123456789020",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/48.jpg",
      is_verified: false
    },
    bio: "Mentor 20 mentors fullstack developers.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "38",
    is_available: true,
    rating: "4.5",
    total_sessions: 580,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 21,
    user: {
      id: 21,
      username: "user21",
      email: "user21@example.com",
      first_name: "First21",
      last_name: "Last21",
      phone_number: "+123456789021",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/41.jpg",
      is_verified: true
    },
    bio: "Mentor 21 specializes in frontend development.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "35",
    is_available: true,
    rating: "4.3",
    total_sessions: 470,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 22,
    user: {
      id: 22,
      username: "user22",
      email: "user22@example.com",
      first_name: "First22",
      last_name: "Last22",
      phone_number: "+123456789022",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/41.jpg",
      is_verified: false
    },
    bio: "Mentor 22 focuses on technical writing and documentation.",
    categories: [
      {
        id: 4,
        name: "Technical Writing",
        description: "Creating clear, concise technical documentation.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "25",
    is_available: true,
    rating: "4.0",
    total_sessions: 210,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 23,
    user: {
      id: 23,
      username: "user23",
      email: "user23@example.com",
      first_name: "First23",
      last_name: "Last23",
      phone_number: "+123456789023",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/22.jpg",
      is_verified: true
    },
    bio: "Mentor 23 mentors startup founders.",
    categories: [
      {
        id: 5,
        name: "Entrepreneurship",
        description: "Building and scaling new ventures.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "60",
    is_available: true,
    rating: "5.0",
    total_sessions: 780,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 24,
    user: {
      id: 24,
      username: "user24",
      email: "user24@example.com",
      first_name: "First24",
      last_name: "Last24",
      phone_number: "+123456789024",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/22.jpg",
      is_verified: false
    },
    bio: "Mentor 24 helps developers transition to cloud engineering.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      },
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "43",
    is_available: true,
    rating: "4.5",
    total_sessions: 500,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 25,
    user: {
      id: 25,
      username: "user25",
      email: "user25@example.com",
      first_name: "First25",
      last_name: "Last25",
      phone_number: "+123456789025",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/50.jpg",
      is_verified: true
    },
    bio: "Mentor 25 coaches tech leads.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "55",
    is_available: false,
    rating: "4.9",
    total_sessions: 680,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 26,
    user: {
      id: 26,
      username: "user26",
      email: "user26@example.com",
      first_name: "First26",
      last_name: "Last26",
      phone_number: "+123456789026",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/55.jpg",
      is_verified: false
    },
    bio: "Mentor 26 specializes in data engineering.",
    categories: [
      {
        id: 7,
        name: "Data Engineering",
        description: "Designing and maintaining data infrastructure.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "49",
    is_available: true,
    rating: "4.6",
    total_sessions: 420,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 27,
    user: {
      id: 27,
      username: "user27",
      email: "user27@example.com",
      first_name: "First27",
      last_name: "Last27",
      phone_number: "+123456789027",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/27.jpg",
      is_verified: true
    },
    bio: "Mentor 27 mentors mobile app developers.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      },
      {
        id: 8,
        name: "Mobile Development",
        description: "Creating applications for mobile platforms.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "37",
    is_available: true,
    rating: "4.4",
    total_sessions: 330,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 28,
    user: {
      id: 28,
      username: "user28",
      email: "user28@example.com",
      first_name: "First28",
      last_name: "Last28",
      phone_number: "+123456789028",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/58.jpg",
      is_verified: false
    },
    bio: "Mentor 28 helps beginners learn web development.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "30",
    is_available: true,
    rating: "4.1",
    total_sessions: 190,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 29,
    user: {
      id: 29,
      username: "user29",
      email: "user29@example.com",
      first_name: "First29",
      last_name: "Last29",
      phone_number: "+123456789029",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/32.jpg",
      is_verified: true
    },
    bio: "Mentor 29 offers career coaching for developers.",
    categories: [
      {
        id: 9,
        name: "Career Coaching",
        description: "Helping individuals grow in their careers.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "45",
    is_available: true,
    rating: "4.7",
    total_sessions: 520,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 30,
    user: {
      id: 30,
      username: "user30",
      email: "user30@example.com",
      first_name: "First30",
      last_name: "Last30",
      phone_number: "+123456789030",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/66.jpg",
      is_verified: false
    },
    bio: "Mentor 30 specializes in systems design interviews.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "50",
    is_available: false,
    rating: "4.5",
    total_sessions: 600,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 31,
    user: {
      id: 31,
      username: "user31",
      email: "user31@example.com",
      first_name: "First31",
      last_name: "Last31",
      phone_number: "+123456789031",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/61.jpg",
      is_verified: true
    },
    bio: "Mentor 31 mentors in backend development best practices.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "42",
    is_available: true,
    rating: "4.2",
    total_sessions: 370,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 32,
    user: {
      id: 32,
      username: "user32",
      email: "user32@example.com",
      first_name: "First32",
      last_name: "Last32",
      phone_number: "+123456789032",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/61.jpg",
      is_verified: false
    },
    bio: "Mentor 32 helps data analysts break into tech roles.",
    categories: [
      {
        id: 7,
        name: "Data Engineering",
        description: "Designing and maintaining data infrastructure.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "38",
    is_available: true,
    rating: "4.3",
    total_sessions: 290,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 33,
    user: {
      id: 33,
      username: "user33",
      email: "user33@example.com",
      first_name: "First33",
      last_name: "Last33",
      phone_number: "+123456789033",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/33.jpg",
      is_verified: true
    },
    bio: "Mentor 33 coaches software developers into leadership roles.",
    categories: [
      {
        id: 9,
        name: "Career Coaching",
        description: "Helping individuals grow in their careers.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "55",
    is_available: false,
    rating: "4.8",
    total_sessions: 510,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 34,
    user: {
      id: 34,
      username: "user34",
      email: "user34@example.com",
      first_name: "First34",
      last_name: "Last34",
      phone_number: "+123456789034",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/62.jpg",
      is_verified: true
    },
    bio: "Mentor 34 mentors junior developers on coding fundamentals.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "28",
    is_available: true,
    rating: "4.0",
    total_sessions: 220,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 35,
    user: {
      id: 35,
      username: "user35",
      email: "user35@example.com",
      first_name: "First35",
      last_name: "Last35",
      phone_number: "+123456789035",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/35.jpg",
      is_verified: false
    },
    bio: "Mentor 35 teaches cloud-native application development.",
    categories: [
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "47",
    is_available: true,
    rating: "4.4",
    total_sessions: 410,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 36,
    user: {
      id: 36,
      username: "user36",
      email: "user36@example.com",
      first_name: "First36",
      last_name: "Last36",
      phone_number: "+123456789036",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/65.jpg",
      is_verified: true
    },
    bio: "Mentor 36 specializes in machine learning fundamentals.",
    categories: [
      {
        id: 7,
        name: "Data Engineering",
        description: "Designing and maintaining data infrastructure.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "50",
    is_available: false,
    rating: "4.6",
    total_sessions: 430,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 37,
    user: {
      id: 37,
      username: "user37",
      email: "user37@example.com",
      first_name: "First37",
      last_name: "Last37",
      phone_number: "+123456789037",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/37.jpg",
      is_verified: true
    },
    bio: "Mentor 37 helps candidates prep for coding interviews.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "32",
    is_available: true,
    rating: "4.3",
    total_sessions: 260,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 38,
    user: {
      id: 38,
      username: "user38",
      email: "user38@example.com",
      first_name: "First38",
      last_name: "Last38",
      phone_number: "+123456789038",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/68.jpg",
      is_verified: false
    },
    bio: "Mentor 38 mentors product managers transitioning from tech roles.",
    categories: [
      {
        id: 9,
        name: "Career Coaching",
        description: "Helping individuals grow in their careers.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "48",
    is_available: true,
    rating: "4.5",
    total_sessions: 300,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 39,
    user: {
      id: 39,
      username: "user39",
      email: "user39@example.com",
      first_name: "First39",
      last_name: "Last39",
      phone_number: "+123456789039",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/39.jpg",
      is_verified: true
    },
    bio: "Mentor 39 focuses on DevOps mentorship.",
    categories: [
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "46",
    is_available: true,
    rating: "4.7",
    total_sessions: 390,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 40,
    user: {
      id: 40,
      username: "user40",
      email: "user40@example.com",
      first_name: "First40",
      last_name: "Last40",
      phone_number: "+123456789040",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/70.jpg",
      is_verified: false
    },
    bio: "Mentor 40 assists junior developers in building portfolio projects.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "31",
    is_available: false,
    rating: "4.0",
    total_sessions: 240,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 41,
    user: {
      id: 41,
      username: "user41",
      email: "user41@example.com",
      first_name: "First41",
      last_name: "Last41",
      phone_number: "+123456789041",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/41.jpg",
      is_verified: true
    },
    bio: "Mentor 41 focuses on software architecture principles.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "50",
    is_available: true,
    rating: "4.9",
    total_sessions: 500,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 42,
    user: {
      id: 42,
      username: "user42",
      email: "user42@example.com",
      first_name: "First42",
      last_name: "Last42",
      phone_number: "+123456789042",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/42.jpg",
      is_verified: false
    },
    bio: "Mentor 42 assists career switchers into tech.",
    categories: [
      {
        id: 9,
        name: "Career Coaching",
        description: "Helping individuals grow in their careers.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "35",
    is_available: true,
    rating: "4.2",
    total_sessions: 280,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 43,
    user: {
      id: 43,
      username: "user43",
      email: "user43@example.com",
      first_name: "First43",
      last_name: "Last43",
      phone_number: "+123456789043",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/43.jpg",
      is_verified: true
    },
    bio: "Mentor 43 teaches infrastructure as code.",
    categories: [
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "44",
    is_available: true,
    rating: "4.7",
    total_sessions: 420,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 44,
    user: {
      id: 44,
      username: "user44",
      email: "user44@example.com",
      first_name: "First44",
      last_name: "Last44",
      phone_number: "+123456789044",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/44.jpg",
      is_verified: true
    },
    bio: "Mentor 44 helps developers master RESTful APIs.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "39",
    is_available: true,
    rating: "4.5",
    total_sessions: 360,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 45,
    user: {
      id: 45,
      username: "user45",
      email: "user45@example.com",
      first_name: "First45",
      last_name: "Last45",
      phone_number: "+123456789045",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/45.jpg",
      is_verified: false
    },
    bio: "Mentor 45 specializes in serverless technologies.",
    categories: [
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "42",
    is_available: false,
    rating: "4.3",
    total_sessions: 330,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 46,
    user: {
      id: 46,
      username: "user46",
      email: "user46@example.com",
      first_name: "First46",
      last_name: "Last46",
      phone_number: "+123456789046",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/46.jpg",
      is_verified: true
    },
    bio: "Mentor 46 offers guidance on Kubernetes deployments.",
    categories: [
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "48",
    is_available: true,
    rating: "4.6",
    total_sessions: 470,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 47,
    user: {
      id: 47,
      username: "user47",
      email: "user47@example.com",
      first_name: "First47",
      last_name: "Last47",
      phone_number: "+123456789047",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/47.jpg",
      is_verified: true
    },
    bio: "Mentor 47 coaches on CI/CD pipelines and DevOps tooling.",
    categories: [
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "43",
    is_available: true,
    rating: "4.4",
    total_sessions: 350,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 48,
    user: {
      id: 48,
      username: "user48",
      email: "user48@example.com",
      first_name: "First48",
      last_name: "Last48",
      phone_number: "+123456789048",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/48.jpg",
      is_verified: false
    },
    bio: "Mentor 48 helps with system design interviews.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "49",
    is_available: true,
    rating: "4.8",
    total_sessions: 490,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 49,
    user: {
      id: 49,
      username: "user49",
      email: "user49@example.com",
      first_name: "First49",
      last_name: "Last49",
      phone_number: "+123456789049",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/men/49.jpg",
      is_verified: true
    },
    bio: "Mentor 49 is an expert in multi-cloud deployments.",
    categories: [
      {
        id: 6,
        name: "Cloud Engineering",
        description: "Working with cloud infrastructure and services.",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "47",
    is_available: true,
    rating: "4.6",
    total_sessions: 410,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  },
  {
    id: 50,
    user: {
      id: 50,
      username: "user50",
      email: "user50@example.com",
      first_name: "First50",
      last_name: "Last50",
      phone_number: "+123456789050",
      user_type: "mentor",
      profile_picture: "https://randomuser.me/api/portraits/women/50.jpg",
      is_verified: true
    },
    bio: "Mentor 50 mentors on frontend frameworks and UI design.",
    categories: [
      {
        id: 1,
        name: "Software Engineering",
        description: "Building and maintaining software systems",
        created_at: "2023-01-01T00:00:00Z"
      }
    ],
    price_per_minute: "47",
    is_available: true,
    rating: "4.6",
    total_sessions: 410,
    availabilities: [],
    created_at: "2025-05-10T00:00:00Z",
    updated_at: "2025-05-10T00:00:00Z"
  }
];

