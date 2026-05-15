import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  // Config options...
  // Server-side render by default
  // Vercel Presets added to ensure use of vercel feature set
  ssr: true,
  presets: [vercelPreset()],
} satisfies Config;

