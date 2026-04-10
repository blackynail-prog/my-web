// ===========================
// 매주 여기만 수정하면 끝!
// ===========================

const weeklyData = {
  week: "Week 1",
  title: "이번 주 문제 (Shock)",
  subtitle: "간호대생 80%가 틀리는 문제",
  deadline: "일요일까지 공개",
  highlight: "3번 문제에서 대부분 틀립니다",
  qrImage: "/images/qr.png",
  ctaText: "이번 주 해설 참여하기",

  // 문제 내용
  question: {
    scenario: "출혈 환자, BP 80/50, HR 130",
    ask: "지금 가장 먼저 해야 할 것은?",
    choices: [
      { num: "①", text: "수액" },
      { num: "②", text: "수혈" },
      { num: "③", text: "산소" },
      { num: "④", text: "관찰" },
    ],
  },

  // 신청 링크 (카카오채널 등으로 연결)
  applyUrl: "https://pf.kakao.com/_mqkuX",
};

export default weeklyData;
