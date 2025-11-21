import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import { DiscordIcon } from "../components/icons/DiscordIcon";
import { InstagramIcon } from "lucide-react";
import { KofiIcon } from "../components/icons/KofiIcon";

import projectData from "./data/projects.json";
import underDevelopmentData from "./data/underdev.json";

export const RESUME_DATA = {
  name: "Kurizu",
  initials: "KV",
  location: "",
  locationLink: "",
  about:
    "As curious as a cat (with a keyboard), Eager to learn new things !",
  summary: "I make stuff. Mostly code that miraculously runs (on a good day). Occasionally I draw questionable art. Frequently distracted by cats.",
  avatarUrl: "https://avatars.githubusercontent.com/u/83665497?v=4",
  personalWebsiteUrl: "https://kurizu.vercel.app/",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/crizmo",
        icon: GitHubIcon,
      },
      {
        name: "Discord",
        url: "https://discord.gg/drunkbetch-782646778347388959",
        icon: DiscordIcon,
      },
      {
        name: "Ko-fi",
        url: "https://ko-fi.com/kurizu",
        icon: KofiIcon,
      },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "TypeScript", "C", "Java"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Redux", "Svelte", "Node.js", "Express", "WebRTC", "WebSockets", "Electron"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "Supabase", "Firebase"]
    },
    {
      category: "Tools & Platforms",
      items: ["Linux", "Git", "GitHub", "Godot", "Blender"]
    },
    {
      category: "Other",
      items: ["Drawing"]
    }
  ],
  projects: projectData,
  underDevelopment: underDevelopmentData,
  interests: [
    "Programming",
    "Japanese",
    "Music",
    "Drawing",
    "Anime",
    "Manga",
  ],
} as const;
