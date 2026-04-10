// 공통 HTML 레이아웃 래퍼
export function layout(title: string, body: string): string {
  return /* html */`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | 금쪽간호</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700;900&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/png" href="/images/logo.png" onerror="this.remove()" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; }
    body {
      font-family: 'Noto Sans KR', sans-serif;
      background: #F9F9F9;
      color: #1A1A1A;
      line-height: 1.75;
      -webkit-font-smoothing: antialiased;
      word-break: keep-all;
      min-height: 100vh;
    }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; display: block; }

    /* NAV */
    .nav {
      position: sticky; top: 0; z-index: 100;
      background: rgba(249,249,249,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #E8E8E4;
      padding: 0 24px;
      height: 56px;
      display: flex; align-items: center; justify-content: space-between;
      max-width: 640px; margin: 0 auto; width: 100%;
    }
    .nav-wrap {
      position: sticky; top: 0; z-index: 100;
      background: rgba(249,249,249,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #E8E8E4;
    }
    .nav-inner {
      max-width: 640px; margin: 0 auto;
      padding: 0 24px; height: 56px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .nav-brand { font-size: 15px; font-weight: 700; color: #1A1A1A; display: flex; align-items: center; gap: 8px; }
    .nav-brand img { width: 28px; height: 28px; border-radius: 6px; object-fit: cover; }
    .nav-back {
      font-size: 13px; font-weight: 600; color: #5A5A5A;
      display: flex; align-items: center; gap: 4px;
      padding: 6px 12px; border-radius: 6px;
      transition: background 0.15s;
    }
    .nav-back:hover { background: #F4F4F0; color: #1A1A1A; }

    /* PAGE WRAPPER */
    .page {
      max-width: 640px; margin: 0 auto;
      padding: 40px 24px 80px;
    }

    /* BADGE */
    .badge {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.04em;
      padding: 4px 10px; border-radius: 4px;
      text-transform: uppercase;
    }
    .badge-dark { background: #1A1A1A; color: #fff; }
    .badge-warm { background: #FFFBEB; color: #B7791F; border: 1px solid #F6D860; }
    .badge-red  { background: #FFF5F5; color: #C53030; border: 1px solid #FEB2B2; }
    .badge-green{ background: #F0FFF4; color: #276749; border: 1px solid #9AE6B4; }

    /* TYPOGRAPHY */
    .h1 { font-size: clamp(24px,6vw,36px); font-weight: 900; line-height: 1.25; letter-spacing: -0.02em; }
    .h2 { font-size: clamp(20px,5vw,28px); font-weight: 800; line-height: 1.3; letter-spacing: -0.01em; }
    .lead { font-size: 16px; color: #5A5A5A; line-height: 1.8; }
    .muted { font-size: 13px; color: #9A9A9A; }

    /* CARD */
    .card {
      background: #fff; border: 1px solid #E8E8E4;
      border-radius: 16px; padding: 28px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .card-dark {
      background: #1A1A1A; color: #fff;
      border-radius: 16px; padding: 28px;
    }

    /* QUESTION CARD */
    .q-card {
      background: #fff; border: 1px solid #E8E8E4;
      border-radius: 16px; padding: 28px;
      margin-top: 28px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .q-scenario {
      font-size: 18px; font-weight: 700; color: #1A1A1A;
      line-height: 1.55; margin-bottom: 8px;
    }
    .q-ask { font-size: 15px; color: #5A5A5A; margin-bottom: 20px; }
    .q-choices { display: flex; flex-direction: column; gap: 10px; }
    .q-choice {
      display: flex; align-items: center; gap: 12px;
      padding: 14px 18px;
      background: #F9F9F9; border: 1.5px solid #E8E8E4;
      border-radius: 10px; font-size: 15px; font-weight: 600;
      cursor: pointer; transition: all 0.15s;
    }
    .q-choice:hover { border-color: #1A1A1A; background: #fff; transform: translateX(3px); }
    .q-choice-num { font-size: 13px; color: #9A9A9A; min-width: 20px; }

    /* BUTTON */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700; font-size: 16px;
      padding: 16px 28px; border-radius: 12px;
      cursor: pointer; border: none;
      transition: all 0.2s ease;
      text-decoration: none; white-space: nowrap;
    }
    .btn-full { width: 100%; }
    .btn-dark { background: #1A1A1A; color: #fff; }
    .btn-dark:hover { background: #333; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
    .btn-accent { background: #2B6CB0; color: #fff; }
    .btn-accent:hover { background: #2558a0; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(43,108,176,0.3); }
    .btn-red { background: #C53030; color: #fff; }
    .btn-red:hover { background: #9B2C2C; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(197,48,48,0.3); }

    /* DIVIDER */
    .divider { border: none; border-top: 1px solid #E8E8E4; margin: 32px 0; }

    /* STAT ROW */
    .stats { display: flex; gap: 0; margin: 28px 0; background: #fff; border: 1px solid #E8E8E4; border-radius: 14px; overflow: hidden; }
    .stat { flex: 1; padding: 20px 16px; text-align: center; border-right: 1px solid #E8E8E4; }
    .stat:last-child { border-right: none; }
    .stat-val { font-size: 22px; font-weight: 900; color: #1A1A1A; line-height: 1.1; }
    .stat-label { font-size: 11px; color: #9A9A9A; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; margin-top: 4px; }

    /* LIST */
    .check-list { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
    .check-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: #1A1A1A; line-height: 1.6; }
    .check-icon { font-size: 16px; flex-shrink: 0; margin-top: 2px; }

    /* URGENCY */
    .urgency-bar {
      background: #FFF5F5; border: 1px solid #FEB2B2;
      border-radius: 10px; padding: 14px 18px;
      display: flex; align-items: center; gap: 10px;
      font-size: 14px; font-weight: 600; color: #C53030;
      margin: 20px 0;
    }

    /* QR */
    .qr-wrap {
      display: flex; flex-direction: column; align-items: center;
      gap: 12px; margin: 28px 0;
    }
    .qr-img {
      width: 180px; height: 180px;
      border-radius: 14px; border: 2px solid #E8E8E4;
      object-fit: cover;
      background: #F4F4F0;
    }
    .qr-placeholder {
      width: 180px; height: 180px;
      border-radius: 14px; border: 2px dashed #D1D1CB;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 8px; background: #F9F9F9;
      font-size: 13px; color: #9A9A9A; text-align: center; line-height: 1.5;
    }
    .qr-placeholder .qr-icon { font-size: 36px; }

    /* PROGRESS BAR */
    .progress-wrap { margin: 20px 0; }
    .progress-label { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: #1A1A1A; margin-bottom: 8px; }
    .progress-bg { background: #E8E8E4; border-radius: 99px; height: 10px; overflow: hidden; }
    .progress-fill { height: 100%; background: #C53030; border-radius: 99px; transition: width 1.5s cubic-bezier(.4,0,.2,1); width: 0; }

    /* FLOATING BTN */
    .float-cta {
      position: fixed; bottom: 0; left: 0; right: 0;
      padding: 12px 20px; padding-bottom: calc(12px + env(safe-area-inset-bottom));
      background: rgba(26,26,26,0.96); backdrop-filter: blur(10px);
      display: flex; gap: 8px;
      transform: translateY(100%); transition: transform 0.3s ease;
      z-index: 200;
    }
    .float-cta.show { transform: translateY(0); }

    @media (max-width: 480px) {
      .page { padding: 28px 16px 80px; }
      .card, .q-card { padding: 20px; }
      .h1 { font-size: 26px; }
      .stats { flex-wrap: wrap; }
      .stat { min-width: 50%; }
    }
  </style>
</head>
<body>
${body}
</body>
</html>`;
}
