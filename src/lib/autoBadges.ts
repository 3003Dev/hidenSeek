import { supabase } from "./supabase";
import { logger } from "./logger";

export const checkAutoBadges = async (action: string) => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.access_token) return null;

    const { data, error } = await supabase.functions.invoke('auto-badges', {
      body: { action },
    });

    if (error) {
      logger.error(`Badge check failed:`, error.message);
      return null;
    }

    return data;
  } catch (err) {
    logger.error("checkAutoBadges error:", err);
    return null;
  }
};

export const checkAllAutoBadges = async () => {
  try {
    const actions = [
      "check_early_user",
      "check_beta_tester",
      "check_buyer",
      "check_premium",
      "check_vip",
    ];

    const granted: string[] = [];

    for (const action of actions) {
      const res = await checkAutoBadges(action);
      if (res?.success && Array.isArray(res.badgesGranted)) {
        granted.push(...res.badgesGranted);
      }
    }

    return granted;
  } catch (err) {
    return [];
  }
};

export const logSearchAndCheckVIP = async (
  query: string,
  resultCount: number = 0
) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      logger.warn("Cannot log search: no authenticated user");
      return;
    }

    const { error } = await supabase.from("search_history").insert({
      user_id: user.id,
      query,
      result_count: resultCount,
    });

    if (error) {
      logger.error("Failed to log search:", error.message);
    }

    await checkAutoBadges("check_vip");
  } catch (err) {
    logger.error("logSearchAndCheckVIP error:", err);
  }
};