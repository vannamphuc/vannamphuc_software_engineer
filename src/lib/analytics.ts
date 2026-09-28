declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Safely track custom GA4 events.
 *
 * @param eventName The name of the event (e.g. 'contact_form_submit', 'social_click', 'project_click')
 * @param params Additional event parameters (no PII allowed)
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/**
 * Convenience helper to track contact attempts
 */
export function trackContactEvent(method: "email" | "form_submit" | "phone"): void {
  trackEvent("contact_attempt", { method });
}

/**
 * Convenience helper to track social link clicks
 */
export function trackSocialClick(platform: string): void {
  trackEvent("social_click", { platform });
}

/**
 * Convenience helper to track project views / repository clicks
 */
export function trackProjectClick(projectTitle: string, action: "view_repo" | "view_demo"): void {
  trackEvent("project_click", { project_title: projectTitle, action });
}
