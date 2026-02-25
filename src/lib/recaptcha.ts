const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const SCORE_THRESHOLD = 0.5;

// --------------- client-side ---------------

export async function getRecaptchaToken(action: string): Promise<string> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) throw new Error("reCAPTCHA site key not configured");

  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.grecaptcha) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}

// --------------- server-side ---------------

interface VerifyResult {
  pass: boolean;
  score: number;
}

export async function verifyRecaptcha(
  token: string | undefined
): Promise<VerifyResult> {
  if (!token) return { pass: false, score: 0 };

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error("reCAPTCHA secret key not configured");

  const res = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = await res.json();
  return {
    pass: data.success === true && (data.score ?? 0) >= SCORE_THRESHOLD,
    score: data.score ?? 0,
  };
}
