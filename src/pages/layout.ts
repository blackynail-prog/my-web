// 공통 HTML 레이아웃 — 모바일 전환 퍼널 최적화
export function layout(
  title: string,
  body: string,
  opts: { stickyBar?: string } = {}
): string {
  return /* html */`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#0A0A0A" />
  <meta name="description" content="간호대생 78%가 틀리는 임상 문제, 이유까지 완전 정복 — 금쪽간호." />

  <!-- Open Graph (카카오톡·SNS 공유 미리보기) -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="금쪽간호" />
  <meta property="og:title" content="${title} | 금쪽간호" />
  <meta property="og:description" content="간호대생 78%가 틀리는 임상 문제, 이유까지 완전 정복. 매주 소크라티브 퀴즈 + 해설 라이브 무료 제공." />
  <meta property="og:image" content="https://mskim.online/images/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title} | 금쪽간호" />
  <meta name="twitter:image" content="https://mskim.online/images/og-image.png" />

  <!-- 파비콘 -->
  <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
  <link rel="apple-touch-icon" href="/images/logo.png" />

  <title>${title} | 금쪽간호</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
  <style>
    /* ── RESET ──────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; -webkit-text-size-adjust: 100%; }
    body {
      font-family: 'Noto Sans KR', -apple-system, sans-serif;
      background: #0A0A0A;
      color: #F0F0F0;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
      word-break: keep-all;
      overflow-wrap: break-word;
      /* sticky bar 높이만큼 하단 여백 */
      padding-bottom: calc(72px + env(safe-area-inset-bottom));
    }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; display: block; }
    button { font-family: inherit; cursor: pointer; border: none; }

    /* ── VARIABLES ───────────────────────────────── */
    :root {
      --bg:        #0A0A0A;
      --surface:   #141414;
      --surface-2: #1E1E1E;
      --border:    #2A2A2A;
      --text:      #F0F0F0;
      --muted:     #888;
      --accent:    #FACC15;   /* 골든 옐로우 — 간호 브랜드 */
      --accent-bg: rgba(250,204,21,0.1);
      --danger:    #FF4444;
      --danger-bg: rgba(255,68,68,0.1);
      --green:     #22C55E;
      --green-bg:  rgba(34,197,94,0.1);
      --radius:    14px;
      --max-w:     480px;     /* 모바일 퍼스트 — 폭 좁게 */
    }

    /* ── LAYOUT ──────────────────────────────────── */
    .page-wrap {
      max-width: var(--max-w);
      margin: 0 auto;
      padding: 0 20px 40px;
    }

    /* ── NAV ─────────────────────────────────────── */
    .nav-outer {
      background: rgba(10,10,10,0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      position: sticky; top: 0; z-index: 90;
    }
    .nav {
      max-width: var(--max-w); margin: 0 auto;
      padding: 0 20px; height: 52px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .nav-brand {
      display: flex; align-items: center; gap: 8px;
      font-size: 15px; font-weight: 700; color: var(--text);
    }
    .nav-brand img {
      width: 26px; height: 26px; border-radius: 6px; object-fit: cover;
    }
    .nav-pill {
      font-size: 12px; font-weight: 700;
      background: var(--accent); color: #0A0A0A;
      padding: 4px 12px; border-radius: 99px;
    }
    .nav-back {
      font-size: 13px; font-weight: 600; color: var(--muted);
      display: flex; align-items: center; gap: 4px;
      padding: 6px 10px; border-radius: 8px;
      transition: color 0.15s;
    }
    .nav-back:hover { color: var(--text); }

    /* ── BADGE ────────────────────────────────────── */
    .badge {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
      padding: 4px 10px; border-radius: 6px;
    }
    .badge-gold   { background: var(--accent-bg);  color: var(--accent); border: 1px solid rgba(250,204,21,0.3); }
    .badge-danger { background: var(--danger-bg);  color: var(--danger); border: 1px solid rgba(255,68,68,0.3); }
    .badge-green  { background: var(--green-bg);   color: var(--green);  border: 1px solid rgba(34,197,94,0.3); }
    .badge-muted  { background: var(--surface-2);  color: var(--muted);  border: 1px solid var(--border); }

    /* ── TYPOGRAPHY ───────────────────────────────── */
    .h1 {
      font-size: clamp(26px, 7vw, 36px);
      font-weight: 900; line-height: 1.22;
      letter-spacing: -0.025em; color: var(--text);
    }
    .h1 em { font-style: normal; color: var(--accent); }
    .h2 {
      font-size: clamp(20px, 5vw, 26px);
      font-weight: 800; line-height: 1.3;
      letter-spacing: -0.02em; color: var(--text);
    }
    .lead { font-size: 15px; color: #AAA; line-height: 1.75; }
    .muted { font-size: 13px; color: var(--muted); }
    strong { color: var(--text); }

    /* ── CARD ─────────────────────────────────────── */
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px 20px;
    }
    .card-accent {
      background: var(--accent-bg);
      border: 1px solid rgba(250,204,21,0.25);
      border-radius: var(--radius);
      padding: 20px;
    }
    .card-danger {
      background: var(--danger-bg);
      border: 1px solid rgba(255,68,68,0.25);
      border-radius: var(--radius);
      padding: 20px;
    }

    /* ── CHOICE BUTTONS ───────────────────────────── */
    .choices { display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
    .choice {
      display: flex; align-items: center; gap: 14px;
      padding: 16px 18px;
      background: var(--surface-2); border: 1.5px solid var(--border);
      border-radius: 12px; font-size: 15px; font-weight: 600; color: var(--text);
      cursor: pointer;
      transition: all 0.18s ease;
      -webkit-tap-highlight-color: transparent;
      /* Thumb zone — 최소 높이 보장 */
      min-height: 56px;
    }
    .choice:active { transform: scale(0.98); }
    .choice.selected-wrong {
      border-color: var(--danger);
      background: var(--danger-bg);
    }
    .choice.selected-right {
      border-color: var(--accent);
      background: var(--accent-bg);
    }
    .choice-num { font-size: 12px; color: var(--muted); min-width: 18px; }

    /* ── BUTTONS ──────────────────────────────────── */
    .btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      font-weight: 700; font-size: 16px;
      padding: 17px 24px; border-radius: 12px;
      cursor: pointer; border: none;
      transition: all 0.2s ease;
      text-decoration: none; white-space: nowrap;
      /* Thumb zone 최소 높이 */
      min-height: 56px;
    }
    .btn-gold {
      background: var(--accent); color: #0A0A0A;
      box-shadow: 0 4px 20px rgba(250,204,21,0.25);
    }
    .btn-gold:hover { background: #FDE047; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(250,204,21,0.4); }
    .btn-danger {
      background: var(--danger); color: #fff;
      box-shadow: 0 4px 20px rgba(255,68,68,0.25);
    }
    .btn-danger:hover { background: #FF2020; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255,68,68,0.4); }
    .btn-ghost {
      background: transparent; color: var(--muted);
      border: 1.5px solid var(--border); font-size: 14px;
    }
    .btn-ghost:hover { border-color: var(--muted); color: var(--text); }
    .btn-full { width: 100%; }

    /* ── DIVIDER ──────────────────────────────────── */
    .divider {
      border: none; border-top: 1px solid var(--border);
      margin: 28px 0;
    }

    /* ── STAT ROW ─────────────────────────────────── */
    .stats {
      display: grid; grid-template-columns: repeat(3, 1fr);
      background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); overflow: hidden;
      margin: 20px 0;
    }
    .stat { padding: 16px 10px; text-align: center; border-right: 1px solid var(--border); }
    .stat:last-child { border-right: none; }
    .stat-val { font-size: 18px; font-weight: 900; color: var(--text); line-height: 1.1; }
    .stat-val.accent { color: var(--accent); }
    .stat-val.danger { color: var(--danger); }
    .stat-lbl { font-size: 10px; font-weight: 600; color: var(--muted); letter-spacing: 0.05em; text-transform: uppercase; margin-top: 4px; }

    /* ── COUNTDOWN ────────────────────────────────── */
    .countdown-wrap {
      background: var(--danger-bg); border: 1px solid rgba(255,68,68,0.3);
      border-radius: var(--radius); padding: 16px 18px;
      display: flex; align-items: center; justify-content: space-between;
      margin: 20px 0;
    }
    .countdown-label { font-size: 13px; font-weight: 700; color: var(--danger); display: flex; align-items: center; gap: 6px; }
    .countdown-timer { font-size: 22px; font-weight: 900; color: var(--danger); font-variant-numeric: tabular-nums; letter-spacing: 0.04em; }

    /* ── QR ───────────────────────────────────────── */
    .qr-section { text-align: center; margin: 28px 0; }
    .qr-img {
      width: min(220px, 65vw); height: min(220px, 65vw);
      border-radius: 16px; border: 3px solid var(--accent);
      object-fit: cover; margin: 0 auto;
      box-shadow: 0 0 40px rgba(250,204,21,0.2);
    }
    .qr-placeholder {
      width: min(220px, 65vw); height: min(220px, 65vw);
      border-radius: 16px; border: 2px dashed var(--border);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 10px; background: var(--surface); margin: 0 auto;
      font-size: 13px; color: var(--muted); text-align: center; line-height: 1.6;
    }

    /* ── PROGRESS ─────────────────────────────────── */
    .progress-wrap { margin: 16px 0; }
    .progress-head { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: var(--muted); margin-bottom: 8px; }
    .progress-bg { background: var(--surface-2); border-radius: 99px; height: 8px; overflow: hidden; }
    .progress-fill { height: 100%; background: var(--danger); border-radius: 99px; width: 0; transition: width 1.4s cubic-bezier(.4,0,.2,1); }

    /* ── REVIEW CARD ──────────────────────────────── */
    .review {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 18px 20px; margin-bottom: 10px;
    }
    .review-stars { color: var(--accent); font-size: 13px; letter-spacing: 2px; margin-bottom: 8px; }
    .review-text { font-size: 14px; color: #CCC; line-height: 1.75; }
    .review-meta { font-size: 11px; color: var(--muted); margin-top: 10px; display: flex; align-items: center; gap: 6px; }
    .review-tag { background: var(--green-bg); color: var(--green); border: 1px solid rgba(34,197,94,0.25); font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }

    /* ── REACTION BOX ─────────────────────────────── */
    .reaction-box {
      margin-top: 16px; padding: 16px 18px;
      border-radius: 12px; font-size: 14px; line-height: 1.7;
      font-weight: 600;
      display: none;
    }
    .reaction-box.show { display: block; }
    .reaction-wrong { background: var(--danger-bg); border: 1px solid rgba(255,68,68,0.3); color: #FCA5A5; }
    .reaction-right { background: var(--accent-bg); border: 1px solid rgba(250,204,21,0.3); color: var(--accent); }

    /* ── MINI HINT BOX ────────────────────────────── */
    .hint-box {
      margin-top: 20px; padding: 18px 20px;
      background: var(--surface-2); border: 1px solid var(--border);
      border-left: 3px solid var(--accent);
      border-radius: 12px; font-size: 14px; color: #CCC; line-height: 1.75;
      display: none;
    }
    .hint-box.show { display: block; }
    .hint-box .hint-label { font-size: 11px; font-weight: 700; color: var(--accent); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 8px; }
    .hint-blur { filter: blur(4px); user-select: none; transition: filter 0.3s; }

    /* ── INSTRUCTOR ───────────────────────────────── */
    .instructor-row {
      display: flex; align-items: center; gap: 14px;
      padding: 16px 18px; background: var(--surface);
      border: 1px solid var(--border); border-radius: var(--radius);
      margin: 20px 0;
    }
    .instructor-img {
      width: 48px; height: 48px; border-radius: 50%;
      object-fit: cover; border: 2px solid var(--border); flex-shrink: 0;
    }
    .instructor-name { font-size: 15px; font-weight: 700; color: var(--text); }
    .instructor-title { font-size: 12px; color: var(--muted); margin-top: 2px; line-height: 1.5; }

    /* ── CHECK LIST ───────────────────────────────── */
    .check-list { display: flex; flex-direction: column; gap: 12px; }
    .check-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: #CCC; line-height: 1.6; }
    .check-icon { font-size: 16px; flex-shrink: 0; margin-top: 2px; }
    .check-item strong { color: var(--text); }

    /* ── FAQ ──────────────────────────────────────── */
    .faq-item {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 10px; overflow: hidden; margin-bottom: 8px;
    }
    .faq-btn {
      width: 100%; padding: 16px 18px;
      background: transparent; border: none; cursor: pointer;
      text-align: left; font-size: 14px; font-weight: 600; color: var(--text);
      display: flex; justify-content: space-between; align-items: center; gap: 8px;
      -webkit-tap-highlight-color: transparent;
    }
    .faq-arrow { font-size: 11px; color: var(--muted); transition: transform 0.2s; flex-shrink: 0; }
    .faq-body {
      padding: 0 18px 14px; font-size: 13px; color: #AAA; line-height: 1.7;
      display: none;
    }

    /* ── STICKY CTA BAR ────────────────────────────── */
    .sticky-bar {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
      background: rgba(10,10,10,0.96);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-top: 1px solid var(--border);
      padding: 12px 20px;
      padding-bottom: calc(12px + env(safe-area-inset-bottom));
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(.4,0,.2,1);
    }
    .sticky-bar.show { transform: translateY(0); }
    .sticky-bar-inner {
      max-width: var(--max-w); margin: 0 auto;
      display: flex; gap: 10px;
    }
    .sticky-bar .scarcity-line {
      font-size: 11px; font-weight: 700; color: var(--danger);
      text-align: center; margin-bottom: 8px;
      max-width: var(--max-w); margin: 0 auto 8px;
    }

    /* ── SCROLL INDICATOR ─────────────────────────── */
    .scroll-hint {
      text-align: center; margin-top: 12px; animation: bounce 2s infinite;
      font-size: 20px;
    }
    @keyframes bounce {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
    }

    /* ── PULSE ANIMATION ──────────────────────────── */
    @keyframes pulse-gold {
      0%,100% { box-shadow: 0 4px 20px rgba(250,204,21,0.25); }
      50% { box-shadow: 0 4px 32px rgba(250,204,21,0.55); }
    }
    .pulse { animation: pulse-gold 2s ease-in-out infinite; }

    /* ── SPACING UTILS ────────────────────────────── */
    .mt4 { margin-top: 4px; }
    .mt8 { margin-top: 8px; }
    .mt12 { margin-top: 12px; }
    .mt16 { margin-top: 16px; }
    .mt20 { margin-top: 20px; }
    .mt24 { margin-top: 24px; }
    .mt28 { margin-top: 28px; }
    .mt32 { margin-top: 32px; }
    .gap8  { gap: 8px; }
    .flex  { display: flex; }
    .flex-wrap { flex-wrap: wrap; }
    .items-center { align-items: center; }

    /* ── RESPONSIVE ───────────────────────────────── */
    @media (max-width: 360px) {
      .h1 { font-size: 23px; }
      .choice { padding: 14px 14px; }
      .btn { font-size: 15px; padding: 15px 18px; }
      .page-wrap { padding: 0 14px 40px; }
    }
  </style>
</head>
<body>
${body}
${opts.stickyBar ? opts.stickyBar : ''}
</body>
</html>`;
}
