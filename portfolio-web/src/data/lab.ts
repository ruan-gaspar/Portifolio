export type LabStatus =
  | "EXPERIMENTAL"
  | "LEARNING"
  | "ACTIVE";

export interface LabItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: LabStatus;
  github?: string;
}

export const labItems: LabItem[] = [
  {
    id: "linux",
    number: "01",
    title: "LINUX",
    category: "SERVER ADMINISTRATION",
    description:
      "Hands-on experiments with Linux servers, services, networking, automation and system administration.",
    technologies: [
      "UBUNTU",
      "BASH",
      "SSH",
      "NGINX",
      "NETWORKING",
    ],
    status: "LEARNING",
  },

  {
    id: "cloud",
    number: "02",
    title: "CLOUD",
    category: "INFRASTRUCTURE",
    description:
      "Experiments with virtual machines, cloud infrastructure, networking, deployment and self-hosted services.",
    technologies: [
      "AZURE",
      "VM",
      "LINUX",
      "DNS",
      "FIREWALL",
    ],
    status: "EXPERIMENTAL",
  },

  {
    id: "embedded",
    number: "03",
    title: "EMBEDDED / IoT",
    category: "CONNECTED DEVICES",
    description:
      "Academic and personal experiments involving ESP32, Arduino, sensors and physical automation.",
    technologies: [
      "ESP32",
      "ARDUINO",
      "IoT",
      "SENSORS",
      "AUTOMATION",
    ],
    status: "ACTIVE",
    github:
      "https://github.com/ruan-gaspar/IoT_Arduino-Esp32_Desafios",
  },

  {
    id: "electronics",
    number: "04",
    title: "ELECTRONICS",
    category: "HARDWARE / EXPERIMENTATION",
    description:
      "Hands-on electronics experiments developed through technical training, combining circuits, measurement and physical prototypes.",
    technologies: [
      "ELECTRONICS",
      "HARDWARE",
      "MEASUREMENT",
      "CIRCUITS",
      "PROTOTYPING",
    ],
    status: "LEARNING",
    github:
      "https://github.com/ruan-gaspar/eletronica",
  },
];