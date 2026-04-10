// ============================================================
//  매주 여기만 수정하면 끝! (3분 컷)
//  ① week / title / subtitle
//  ② question (scenario, ask, choices, answer, miniHint)
//  ③ countdownEnd (마감 타이머)
//  ④ qrImage (/public/images/qr.png 덮어쓰기 or URL)
//  ⑤ applyUrl (카카오채널 or 결제 링크)
// ============================================================

const weeklyData = {
  // ── 기본 정보 ──────────────────────────────────────────────
  week: "Week 1",
  subject: "Shock",
  title: "출혈 환자, 이 판단 틀리면 실습 A 없습니다",
  subtitle: "간호대생 78%가 틀린 문제",
  deadline: "이번 주 일요일 자정 마감",

  // ── 타이머: ISO 날짜 문자열 (매주 일요일 23:59:59) ─────────
  countdownEnd: "2026-04-13T23:59:59",

  // ── 문제 ──────────────────────────────────────────────────
  question: {
    scenario: "출혈 환자 / BP 80/50 / HR 130 / SpO₂ 94%",
    ask: "지금 가장 먼저 해야 할 간호중재는?",
    choices: [
      { id: "a", text: "수액 빠르게 투여" },
      { id: "b", text: "산소 투여" },
      { id: "c", text: "수혈 준비" },
      { id: "d", text: "V/S 재측정" },
    ],
    // 정답 id (free 페이지에서는 절대 노출 안 함)
    answerId: "b",
    // 오답 선택 시 보여줄 결핍 문장 (정답 힌트 절대 금지)
    wrongReaction: "많은 학생이 같은 선택을 합니다. 왜 틀리는지 패턴이 있어요.",
    // 정답 선택 시 보여줄 결핍 문장
    rightReaction: "정답을 골랐어도 — 시험에서 근거 쓸 수 있으세요?",
    // 미니 해설 (완전 해설 금지 — 궁금증만 자극)
    miniHint: "Airway → Breathing → Circulation 순서를 실습에서 적용하면 답이 달라집니다. SpO₂ 수치가 핵심 단서입니다.",
  },

  // ── QR / 소크라티브 ────────────────────────────────────────
  qrImage: "/images/qr.png",          // 매주 qr.png 덮어쓰기
  qrFallback: "https://mskim.online/images/qr.png",
  qrLabel: "소크라티브 참여 QR",
  qrSubLabel: "스캔하면 전체 문제 풀이 가능",
  socrativeUrl: "https://b.socrative.com/login/student/",  // 매주 소크라티브 방 링크로 교체

  // ── CTA 텍스트 ─────────────────────────────────────────────
  ctaFree: "해설 라이브 신청하기 →",
  ctaApply: "지금 바로 신청하기 →",

  // ── 신청/결제 링크 ─────────────────────────────────────────
  applyUrl: "https://pf.kakao.com/_mqkuX",

  // ── Social Proof ──────────────────────────────────────────
  stats: {
    wrongRate: "78%",      // 오답률
    participants: "1기",   // 수강 기수
    review: "★★★★★",      // 평점
    capacity: "10명",      // 이번 기수 정원
    remaining: "3",        // 잔여석 (숫자 낮게 유지 = 희소성)
  },

  // ── 후기 (2개 이상) ────────────────────────────────────────
  reviews: [
    {
      name: "간호학과 4학년 A",
      text: "실습에서 막히던 판단 기준이 이 수업 하나로 잡혔어요. 케이스 과제 A+ 받았습니다.",
      tag: "케이스 A+",
    },
    {
      name: "국시 준비생 B",
      text: "왜 틀리는지 이유를 처음 알았어요. 단순 암기가 아니라 판단 로직을 배웠습니다.",
      tag: "국시 합격",
    },
  ],

  // ── 강사 ──────────────────────────────────────────────────
  instructor: {
    name: "김민수",
    title: "前 서울여자간호대학교 조교수",
    sub: "권역외상센터 외상PM · 한양대 간호학 박사수료",
    img: "/images/profile.png",
    imgFallback: "https://mskim.online/images/profile.png",
  },
};

export default weeklyData;
