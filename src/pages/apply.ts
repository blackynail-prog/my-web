import { layout } from './layout'
import w from '../data/weekly'

export function applyPage(): string {

  const stickyBar = /* html */`
  <div class="sticky-bar show" id="stickyBar">
    <div class="sticky-bar-inner" style="flex-direction:column;gap:6px;">
      <p class="scarcity-line">⚡ 잔여 ${w.stats.remaining}자리 — 지금 신청 안 하면 다음 주를 기다려야 합니다</p>
      <div style="display:flex;gap:8px;">
        <a href="${w.applyUrl}" target="_blank" rel="noopener"
          class="btn btn-danger btn-full pulse" style="font-size:15px;">
          ${w.ctaApply}
        </a>
      </div>
    </div>
  </div>`

  const faqData = [
    { q: "언제 진행되나요?", a: "매주 카카오채널을 통해 일정을 안내드립니다. 신청 후 자동 공지됩니다." },
    { q: "녹화본도 받을 수 있나요?", a: "라이브 참여자에게는 다시보기 링크를 제공합니다." },
    { q: "국시 준비 중인데 맞나요?", a: "네, 국시 출제 기준과 임상 판단 기준을 함께 설명합니다. 특히 오답 원인 분석이 큰 도움이 됩니다." },
    { q: "환불은 가능한가요?", a: "라이브 시작 전까지 전액 환불 가능합니다. 카카오채널로 문의주세요." },
  ]

  return layout('해설 클래스 신청', /* html */`

  <!-- NAV -->
  <div class="nav-outer">
    <div class="nav">
      <div class="nav-brand">
        <img src="/images/logo.png" alt="금쪽간호"
          onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
        금쪽간호
      </div>
      <a class="nav-back" href="/free">← 문제 보기</a>
    </div>
  </div>

  <div class="page-wrap" style="padding-top:24px;">

    <!-- ① 배지 + 헤드라인 -->
    <div class="flex flex-wrap gap8 items-center">
      <span class="badge badge-danger">⏰ 마감 임박</span>
      <span class="badge badge-muted">${w.week}</span>
    </div>

    <h1 class="h2 mt12">
      정답 알아도<br />
      <span style="color:var(--accent);">설명 못하면 의미 없습니다</span>
    </h1>
    <p class="lead mt8">
      해설 라이브에서 <strong>왜 그렇게 판단해야 하는지</strong><br />
      임상 근거와 함께 처음으로 이해됩니다.
    </p>

    <!-- ② COUNTDOWN — 긴박감 -->
    <div class="countdown-wrap mt20">
      <div class="countdown-label">⏰ 마감까지</div>
      <div class="countdown-timer" id="applyTimer">--:--:--</div>
    </div>

    <!-- ③ SCARCITY + PROGRESS -->
    <div class="progress-wrap">
      <div class="progress-head">
        <span style="color:var(--danger);font-weight:700;">🔥 신청 현황</span>
        <span style="color:var(--danger);font-weight:700;">잔여 ${w.stats.remaining}자리</span>
      </div>
      <div class="progress-bg">
        <div class="progress-fill" id="applyFill"></div>
      </div>
      <p class="muted mt4" style="font-size:11px;">
        정원 ${w.stats.capacity} 기준 · 소수 정예만 받습니다
      </p>
    </div>

    <!-- ④ 메인 CTA — 최상단 -->
    <a href="${w.applyUrl}" target="_blank" rel="noopener"
      class="btn btn-danger btn-full pulse mt4">
      ${w.ctaApply}
    </a>
    <p class="muted mt8" style="text-align:center;font-size:12px;">
      결제 후 카카오채널로 자동 안내됩니다
    </p>

    <hr class="divider" />

    <!-- ⑤ 포함 내용 — 가치 증명 -->
    <div class="card">
      <p style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px;">
        이번 해설 클래스에 포함되는 것
      </p>
      <div class="check-list">
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>전체 문제 정답 + 완전 해설</strong>
            <p style="font-size:13px;color:#888;margin-top:3px;">라이브에서만 공개 — 녹화 미제공</p>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>임상 판단 기준 프레임</strong>
            <p style="font-size:13px;color:#888;margin-top:3px;">실습·국시 모두 통하는 사고 구조</p>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>오답 원인 패턴 분석</strong>
            <p style="font-size:13px;color:#888;margin-top:3px;">${w.stats.wrongRate}가 같은 이유로 틀리는 구조</p>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>실시간 Q&A</strong>
            <p style="font-size:13px;color:#888;margin-top:3px;">라이브 중 질문 바로 답변</p>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✅</span>
          <div>
            <strong>수강 후 DM 1:1 질문</strong>
            <p style="font-size:13px;color:#888;margin-top:3px;">이해 안 된 부분 카카오 DM 답변</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="divider" />

    <!-- ⑥ AUTHORITY -->
    <p style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">강사 소개</p>
    <div class="instructor-row">
      <img class="instructor-img" src="${w.instructor.img}" alt="${w.instructor.name}"
        onerror="this.onerror=null;this.src='${w.instructor.imgFallback}'" />
      <div>
        <div class="instructor-name">${w.instructor.name} 선생님</div>
        <div class="instructor-title">${w.instructor.title}<br />${w.instructor.sub}</div>
      </div>
    </div>

    <!-- ⑦ SOCIAL PROOF -->
    <p style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">수강생 후기</p>

    <div class="stats" style="margin-bottom:16px;">
      <div class="stat">
        <div class="stat-val accent">${w.stats.review}</div>
        <div class="stat-lbl">수강 만족도</div>
      </div>
      <div class="stat">
        <div class="stat-val">${w.stats.participants}</div>
        <div class="stat-lbl">현재 기수</div>
      </div>
      <div class="stat">
        <div class="stat-val danger">${w.stats.remaining}</div>
        <div class="stat-lbl">잔여석</div>
      </div>
    </div>

    ${w.reviews.map(r => `
    <div class="review">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-meta">${r.name} <span class="review-tag">${r.tag}</span></div>
    </div>`).join('')}

    <!-- ⑧ 두 번째 CTA -->
    <a href="${w.applyUrl}" target="_blank" rel="noopener"
      class="btn btn-danger btn-full pulse mt20">
      ${w.ctaApply}
    </a>
    <a href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener"
      class="btn btn-ghost btn-full mt8">
      💬 결제 전 카카오로 문의하기
    </a>
    <p class="muted mt8" style="text-align:center;font-size:12px;">
      잔여 ${w.stats.remaining}자리 · 마감 후 신청 불가
    </p>

    <hr class="divider" />

    <!-- ⑨ FAQ -->
    <p style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">
      자주 묻는 질문
    </p>
    <div id="faqList">
      ${faqData.map((f, i) => `
      <div class="faq-item">
        <button class="faq-btn" onclick="toggleFaq(${i})">
          ${f.q}
          <span class="faq-arrow" id="faqArrow${i}">▼</span>
        </button>
        <div class="faq-body" id="faqBody${i}">${f.a}</div>
      </div>`).join('')}
    </div>

  </div>

  <script>
    const DEADLINE = new Date("${w.countdownEnd}").getTime();

    // ── 카운트다운 ──────────────────────────────
    function updateTimer() {
      const diff = DEADLINE - Date.now();
      if (diff <= 0) { document.getElementById('applyTimer').textContent = '마감됨'; return; }
      const h = Math.floor(diff/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      document.getElementById('applyTimer').textContent =
        String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    }
    updateTimer(); setInterval(updateTimer, 1000);

    // ── 진행 바 ────────────────────────────────
    window.addEventListener('load', () => {
      setTimeout(() => {
        const f = document.getElementById('applyFill');
        if (f) f.style.width = '88%';
      }, 400);
    });

    // ── FAQ 토글 ────────────────────────────────
    function toggleFaq(i) {
      const body = document.getElementById('faqBody'+i);
      const arrow = document.getElementById('faqArrow'+i);
      const open = body.style.display === 'block';
      body.style.display = open ? 'none' : 'block';
      arrow.style.transform = open ? '' : 'rotate(180deg)';
    }
  </script>
  `, { stickyBar })
}
