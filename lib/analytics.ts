import type { AnalyticsEvent, GameEvents } from "@/types/game";

export function trackEvent(
  eventName: GameEvents,
  properties: Record<string, unknown> = {}
) {
  const event: AnalyticsEvent = {
    eventName,
    properties,
    timestamp: new Date().toISOString(),
  };

  // Log the analytics to the console
  console.log("Analytics Event:", event);
}
