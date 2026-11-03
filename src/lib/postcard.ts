import { z } from "zod";

export const STAMPS = ["stamp-1", "stamp-2", "stamp-3", "stamp-4"] as const;
export type StampId = (typeof STAMPS)[number];

/** Fill-in-the-blank fields: key -> max length. Single source of truth for UI + API. */
export const BLANK_FIELDS = {
  name: 40,
  interesting: 80,
  because: 120,
  echoville: 120,
  mind: 100,
  eat: 100,
  rest: 100,
  move: 100,
  dream: 120,
  question: 140,
  contact: 120,
  signoff: 40,
} as const;
export type BlankKey = keyof typeof BLANK_FIELDS;

export const OPEN_MESSAGE_MAX = 1200;

/**
 * Plain-text cleaner. We deliberately do NOT strip "<" or ">" (kids write "<3").
 * Safety comes from: (1) storing/rendering as plain text only (React escapes),
 * (2) never using dangerouslySetInnerHTML, (3) whitelisting keys + types,
 * (4) removing invisible/control/bidi characters that enable spoofing.
 */
const INVISIBLES =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF]/g;

export function cleanLine(s: string): string {
  return s.normalize("NFKC").replace(INVISIBLES, "").replace(/\s+/g, " ").trim();
}

export function cleanMultiline(s: string): string {
  return s
    .normalize("NFKC")
    .replace(/\r\n?/g, "\n")
    .replace(INVISIBLES, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const line = (max: number) =>
  z.string().max(max * 2).transform(cleanLine).pipe(z.string().max(max));

const blankShape = Object.fromEntries(
  Object.entries(BLANK_FIELDS).map(([k, max]) => [k, line(max)])
) as Record<BlankKey, ReturnType<typeof line>>;

const common = {
  stamp: z.enum(STAMPS),
  showcaseConsent: z.boolean(),
  website: z.string().max(0).optional(), // honeypot: must stay empty
  elapsedMs: z.number().int().min(0).max(1000 * 60 * 60 * 6),
};

export const submissionSchema = z.discriminatedUnion("style", [
  z
    .object({
      style: z.literal("blank"),
      message: z
        .string()
        .max(OPEN_MESSAGE_MAX * 2)
        .transform(cleanMultiline)
        .pipe(z.string().min(1).max(OPEN_MESSAGE_MAX)),
      ...common,
    })
    .strict(),
  z
    .object({
      style: z.literal("template"),
      fields: z
        .object(blankShape)
        .strict()
        .refine((f) => Object.values(f).some((x) => x.length > 0), {
          message: "Fill in at least one blank",
        }),
      ...common,
    })
    .strict(),
]);

export type Submission = z.infer<typeof submissionSchema>;