import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tweak Profiles — CodeWinOptimizer Docs",
  description:
    "Save and load tweak profiles in CodeWinOptimizer — Standard, Gaming, Minimal presets and custom profiles.",
};

const profileDefs = [
  {
    name: "Standard",
    color: "blue",
    count: 15,
    desc: "Safe essential tweaks recommended for any user. Focuses on privacy, performance, and removing unnecessary Windows features without risking system stability.",
    tweaks: [
      "Disable ConsumerFeatures",
      "Disable Activity History",
      "Disable Hibernation",
      "Disable Telemetry",
      "Disable Widgets",
      "Disable Background Apps",
      "Disable OneDrive",
      "Optimize Visual Effects",
      "Disable News & Interests",
      "Disable Advertising ID",
      "Disable Startup Delay",
      "Disable Cortana",
      "Remove Temporary Files",
      "Set Services to Manual",
      "Enable End Task Right Click",
    ],
  },
  {
    name: "Gaming",
    color: "green",
    count: 21,
    desc: "Maximum gaming performance tweaks. Disables background services, optimizes network and GPU settings, prioritizes foreground apps, and removes bloatware that consumes resources while gaming.",
    tweaks: [
      "Disable ConsumerFeatures",
      "Disable Activity History",
      "Disable Hibernation",
      "Disable Telemetry",
      "Disable Widgets",
      "Disable Background Apps",
      "Disable OneDrive",
      "Optimize Visual Effects",
      "Disable Xbox Game Bar",
      "Disable Fullscreen Optimizations",
      "Disable HPET",
      "Disable Dynamic Tick",
      "Disable Network Throttling",
      "Set System Responsiveness to Zero",
      "Enable Large System Cache",
      "GPU Hardware Scheduling",
      "Ultimate Power Plan",
      "Disable IPv6",
      "CTCP Congestion Provider",
      "Disable Memory Compression",
      "NVIDIA Performance Tuning",
    ],
  },
  {
    name: "Minimal",
    color: "purple",
    count: 19,
    desc: "Cleanest possible Windows install. Removes bloatware, tracking, notifications, and unnecessary UI elements for a distraction-free experience. Some features like Copilot and Widgets are permanently removed.",
    tweaks: [
      "Disable ConsumerFeatures",
      "Disable Activity History",
      "Disable Hibernation",
      "Disable Telemetry",
      "Disable Widgets",
      "Disable Background Apps",
      "Disable OneDrive",
      "Optimize Visual Effects",
      "Disable Cortana",
      "Disable News & Interests",
      "Disable Advertising ID",
      "Disable Lockscreen",
      "Disable Startup Delay",
      "Disable Location Tracking",
      "Disable Store Search Results",
      "Disable Notifications",
      "Disable Copilot",
      "Disable Gallery",
      "Remove Bloatware",
    ],
  },
];

export default function ProfilesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Tweak Profiles</h1>
      <p className="text-text-muted mb-10 leading-relaxed">
        Tweak profiles let you save and load your tweak selections as named
        configurations. Switch between different optimization strategies with one click.
      </p>

      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-2">How It Works</h2>
        <ol className="list-decimal list-inside text-sm text-text-muted space-y-2 leading-relaxed">
          <li>Select tweaks in the Tweaks tab using toggle switches</li>
          <li>Click <strong className="text-white">Save Profile</strong> and give it a name</li>
          <li>The profile is saved as JSON to <code className="text-neon text-xs">Documents\CodeWinOptimizer\profiles\</code></li>
          <li>Later, click <strong className="text-white">Load Profile</strong> or use a preset button to restore that configuration</li>
          <li>Profiles can be deleted from the Load Profile dropdown</li>
        </ol>
      </div>

      <h2 className="text-lg font-semibold mb-4">Default Profiles</h2>
      <p className="text-text-muted text-sm mb-6">
        Three profiles come pre-installed. Click any button in the Tweaks tab to apply
        instantly.
      </p>

      <div className="grid gap-4">
        {profileDefs.map((p) => (
          <div key={p.name} className="rounded-lg border border-border bg-bg-card p-5">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  p.color === "green"
                    ? "bg-neon"
                    : p.color === "blue"
                      ? "bg-blue-400"
                      : "bg-purple-400"
                }`}
              />
              {p.name}
              <span className="text-xs text-text-muted font-normal">
                ({p.count} tweaks)
              </span>
            </h3>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tweaks.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 text-[10px] text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
