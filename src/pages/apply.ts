import { layout } from './layout'
import weeklyData from '../data/weekly'

export function applyPage(): string {
  const { week, applyUrl } = weeklyData

  return layout('해설 클래스 신청', /* html */`

  <!-- NAV -->
  <div class="nav-wrap">
    <div class="nav-inner">
      <a class="nav-brand" href="/">
        <img src="/images/logo.png" alt="금쪽간호" onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
        금쪽간호
      </a>
      <a class="nav-back" href="/free">← 무료 문제</a>
    </div>
  </div>

  <div class="page">

    <!-- 배지 -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
      <span class="badge badge-dark">${week}</span>
      <span class="badge badge-red">⏰ 마감 임박</span>
    </div>

    <!-- 헤드라인 -->
    <h1 class="h2">이번 주 해설 클래스</h1>
    <p class="lead" style="margin-top:10px;">
      정답만 아는 게 아니라, <strong>임상에서 쓸 수 있는 판단력</strong>을 기릅니다
    </p>

    <!-- 긴박감 바 -->
    <div class="urgency-bar">
      <span style="font-size:20px;">🔥</span>
      <span>소수 정예 운영 — 지금 신청하지 않으면 다음 기회를 기다려야 합니다</span>
    </div>

    <!-- 포함 내용 -->
    <div class="card">
      <p style="font-size:13px;font-weight:700;color:#9A9A9A;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px;">이번 주 해설에 포함되는 것</p>
      <div class="check-list">
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>실제 문제 해설</strong>
            <p style="font-size:13px;color:#5A5A5A;margin-top:2px;">오답이 나오는 이유를 단계별로 분석</p>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>임상 판단 기준 설명</strong>
            <p style="font-size:13px;color:#5A5A5A;margin-top:2px;">실습·국시 모두 통하는 판단 프레임 제공</p>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>틀리는 이유 분석</strong>
            <p style="font-size:13px;color:#5A5A5A;margin-top:2px;">왜 80%가 틀리는지 심층 해부</p>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>DM 질문 답변</strong>
            <p style="font-size:13px;color:#5A5A5A;margin-top:2px;">수강 후 궁금한 점 1:1 답변 제공</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="divider" />

    <!-- 강사 소개 -->
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:28px;">
      <img
        src="/images/profile.png"
        alt="김민수 선생님"
        style="width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid #E8E8E4;"
        onerror="this.onerror=null;this.src='https://mskim.online/images/profile.png'"
      />
      <div>
        <p style="font-size:15px;font-weight:700;color:#1A1A1A;">김민수 선생님</p>
        <p style="font-size:12px;color:#9A9A9A;margin-top:2px;">前 서울여자간호대학교 조교수 · 권역외상센터 PM</p>
      </div>
    </div>

    <!-- 통계 -->
    <div class="stats">
      <div class="stat">
        <div class="stat-val">⭐⭐⭐⭐⭐</div>
        <div class="stat-label">1기 후기</div>
      </div>
      <div class="stat">
        <div class="stat-val">소수 정예</div>
        <div class="stat-label">운영 방식</div>
      </div>
    </div>

    <!-- CTA -->
    <a href="${applyUrl}" target="_blank" rel="noopener"
      class="btn btn-red btn-full" style="margin-top:24px;">
      신청하고 결제하기 →
    </a>

    <p class="muted" style="text-align:center;margin-top:12px;">
      결제 후 카카오채널로 자동 안내됩니다
    </p>

    <a href="/free" class="btn btn-full" style="margin-top:10px;background:#F9F9F9;color:#1A1A1A;border:1.5px solid #E8E8E4;font-size:14px;">
      ← 문제 다시 보기
    </a>

    <hr class="divider" />

    <!-- FAQ -->
    <div>
      <p style="font-size:13px;font-weight:700;color:#9A9A9A;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px;">자주 묻는 질문</p>
      <div id="faq-list"></div>
    </div>

  </div>

  <script>
    // FAQ 데이터
    const faqs = [
      { q: "언제 진행되나요?", a: "매주 카카오채널을 통해 일정을 공지합니다." },
      { q: "녹화본을 받을 수 있나요?", a: "라이브 참여자에게는 다시보기 링크를 제공합니다." },
      { q: "국시 준비 중인데 도움이 될까요?", a: "네! 국시 출제 기준과 임상 판단 기준을 함께 설명합니다." },
    ];

    const faqList = document.getElementById('faq-list');
    faqs.forEach(f => {
      const el = document.createElement('div');
      el.style.cssText = 'margin-bottom:10px;border:1px solid #E8E8E4;border-radius:10px;overflow:hidden;';
      el.innerHTML = \`
        <button onclick="toggleFaq(this)"
          style="width:100%;padding:14px 18px;background:#fff;border:none;cursor:pointer;text-align:left;font-family:inherit;font-size:14px;font-weight:600;color:#1A1A1A;display:flex;justify-content:space-between;align-items:center;gap:8px;">
          \${f.q} <span class="faq-arrow" style="font-size:12px;color:#9A9A9A;transition:transform 0.2s;">▼</span>
        </button>
        <div class="faq-body" style="display:none;padding:0 18px 14px;font-size:13px;color:#5A5A5A;line-height:1.7;">\${f.a}</div>
      \`;
      faqList.appendChild(el);
    });

    function toggleFaq(btn) {
      const body = btn.nextElementSibling;
      const arrow = btn.querySelector('.faq-arrow');
      const isOpen = body.style.display !== 'none';
      body.style.display = isOpen ? 'none' : 'block';
      arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
    }

    // CTA 버튼 펄스
    setTimeout(() => {
      const cta = document.querySelector('.btn-red');
      if (cta) {
        cta.style.animation = 'pulse 1s ease 3';
      }
    }, 1000);
  </script>
`)
}
