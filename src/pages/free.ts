import { layout } from './layout'
import w from '../data/weekly'

export function freePage(): string {

  const stickyBar = /* html */`
  <div class="sticky-bar show" id="stickyBar">
    <p class="scarcity-line">🔥 잔여석 ${w.stats.remaining}자리 — 지금 마감 직전입니다</p>
    <div class="sticky-bar-inner">
      <a href="/apply" class="btn btn-danger btn-full pulse">${w.ctaFree}</a>
    </div>
  </div>`

  const choicesHtml = w.question.choices.map((c, i) => {
    const nums = ['①','②','③','④']
    return `<button class="choice" data-id="${c.id}" onclick="freePick(this)">
      <span class="choice-num">${nums[i]}</span>${c.text}
    </button>`
  }).join('\n')

  return layout('무료 문제풀기', /* html */`

  <!-- NAV -->
  <div class="nav-outer">
    <div class="nav">
      <div class="nav-brand">
        <img src="/images/logo.png" alt="금쪽간호"
          onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
        금쪽간호
      </div>
      <a class="nav-back" href="/question">← 홈</a>
    </div>
  </div>

  <div class="page-wrap" style="padding-top:24px;">

    <!-- ① 배지 + 타이틀 -->
    <div class="flex flex-wrap gap8 items-center">
      <span class="badge badge-danger">⏰ ${w.deadline}</span>
      <span class="badge badge-muted">${w.week}</span>
    </div>

    <h1 class="h2 mt12">${w.title}</h1>
    <p class="lead mt8">${w.subtitle} — 당신은?</p>

    <!-- ② COUNTDOWN — Scarcity -->
    <div class="countdown-wrap">
      <div class="countdown-label">⏰ 마감까지</div>
      <div class="countdown-timer" id="timer">--:--:--</div>
    </div>

    <!-- ③ PROGRESS — Social Proof + Scarcity -->
    <div class="progress-wrap">
      <div class="progress-head">
        <span>🔥 이번 주 참여 현황</span>
        <span id="progPct" style="color:var(--danger);">잔여 ${w.stats.remaining}석</span>
      </div>
      <div class="progress-bg">
        <div class="progress-fill" id="progFill"></div>
      </div>
      <p class="muted mt4" style="font-size:11px;">정원 ${w.stats.capacity} 중 ${w.stats.remaining}자리만 남았습니다</p>
    </div>

    <!-- ④ 문제 카드 — 도전 유도 -->
    <div class="card" id="qCard">
      <div class="flex flex-wrap gap8 items-center" style="margin-bottom:14px;">
        <span class="badge badge-danger">문제 풀기</span>
        <span class="muted" style="font-size:12px;">${w.subject}</span>
      </div>
      <p style="font-size:16px;font-weight:700;color:var(--text);line-height:1.55;margin-bottom:6px;">
        ${w.question.scenario}
      </p>
      <p style="font-size:14px;color:#AAA;margin-bottom:4px;">${w.question.ask}</p>
      <p class="muted" style="font-size:12px;margin-bottom:0;">✱ 정답은 라이브에서만 공개됩니다</p>

      <div class="choices" id="freeChoices">
        ${choicesHtml}
      </div>

      <!-- 반응 박스 (선택 후) -->
      <div class="reaction-box reaction-wrong" id="reactWrong">
        😶 ${w.question.wrongReaction}
      </div>
      <div class="reaction-box reaction-right" id="reactRight">
        ✅ ${w.question.rightReaction}
      </div>
    </div>

    <!-- ⑤ 미니 힌트 — 결핍 자극 (선택 후 표시) -->
    <div class="hint-box" id="hintBox">
      <div class="hint-label">💡 미니 힌트 (완전 해설은 라이브에서)</div>
      <p>${w.question.miniHint}</p>
      <p style="margin-top:10px;color:var(--muted);font-size:13px;">
        ↳ 이 판단을 실습에서 적용하는 방법은 해설 클래스에서 공개됩니다.
      </p>
    </div>

    <!-- ⑥ 결핍 문구 — 선택 후 노출 -->
    <div id="deficitBlock" style="display:none;margin-top:16px;">
      <div class="card-danger" style="text-align:center;">
        <p style="font-size:22px;margin-bottom:8px;">🚫</p>
        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;">
          정답을 알아도 설명 못하면<br />실습·국시에서 또 막힙니다
        </p>
        <p style="font-size:13px;color:#AAA;line-height:1.7;">
          ${w.stats.wrongRate}의 학생이 같은 이유로 틀립니다.<br />
          <strong>왜 그런 판단을 해야 하는지</strong> — 라이브에서 처음으로 이해됩니다.
        </p>
      </div>
    </div>

    <!-- ⑦ CTA (선택 전) -->
    <div id="ctaBefore2">
      <hr class="divider" />
      <!-- QR 섹션 -->
      <p style="font-size:13px;font-weight:700;color:var(--text);text-align:center;margin-bottom:4px;">
        ${w.qrLabel}
      </p>
      <p class="muted mt4" style="text-align:center;font-size:12px;">${w.qrSubLabel}</p>
      <div class="qr-section mt16">
        <img class="qr-img" src="${w.qrImage}" alt="소크라티브 QR"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="qr-placeholder" style="display:none;">
          <span style="font-size:40px;">📲</span>
          <span>QR 이미지를<br />/public/images/qr.png에<br />업로드하세요</span>
        </div>
        <p class="muted mt12" style="font-size:12px;">스캔하면 소크라티브 퀴즈에 바로 참여할 수 있어요</p>
      </div>
      <a href="/apply" class="btn btn-danger btn-full mt20 pulse">
        ${w.ctaFree}
      </a>
      <a href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener"
        class="btn btn-ghost btn-full mt8">
        💬 카카오로 먼저 문의하기
      </a>
    </div>

    <!-- ⑦ CTA (선택 후 교체) -->
    <div id="ctaAfter2" style="display:none;">
      <a href="/apply" class="btn btn-danger btn-full pulse mt20">
        ${w.ctaFree}
      </a>
      <a href="/question" class="btn btn-ghost btn-full mt8">
        ← 다시 풀기
      </a>

      <hr class="divider" />

      <!-- QR (선택 후에도 표시) -->
      <p style="font-size:13px;font-weight:700;color:var(--text);text-align:center;margin-bottom:4px;">
        ${w.qrLabel}
      </p>
      <div class="qr-section mt16">
        <img class="qr-img" src="${w.qrImage}" alt="소크라티브 QR"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="qr-placeholder" style="display:none;">
          <span style="font-size:40px;">📲</span>
          <span>QR 이미지를<br />/public/images/qr.png에<br />업로드하세요</span>
        </div>
      </div>
    </div>

    <hr class="divider" />

    <!-- ⑧ AUTHORITY + SOCIAL PROOF -->
    <div class="instructor-row">
      <img class="instructor-img" src="${w.instructor.img}" alt="${w.instructor.name}"
        onerror="this.onerror=null;this.src='${w.instructor.imgFallback}'" />
      <div>
        <div class="instructor-name">${w.instructor.name} 선생님</div>
        <div class="instructor-title">${w.instructor.title}<br />${w.instructor.sub}</div>
      </div>
    </div>

    ${w.reviews.map(r => `
    <div class="review">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-meta">${r.name} <span class="review-tag">${r.tag}</span></div>
    </div>`).join('')}

    <a href="/apply" class="btn btn-danger btn-full mt20">
      ${w.ctaFree}
    </a>
    <p class="muted mt8" style="text-align:center;font-size:12px;">
      잔여 ${w.stats.remaining}자리 · ${w.stats.capacity} 소수 정예 운영
    </p>

  </div>

  <script>
    const ANSWER = "${w.question.answerId}";
    const DEADLINE = new Date("${w.countdownEnd}").getTime();
    let picked = false;

    // ── 카운트다운 ──────────────────────────────
    function updateTimer() {
      const now = Date.now();
      const diff = DEADLINE - now;
      if (diff <= 0) {
        document.getElementById('timer').textContent = '마감됨';
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      document.getElementById('timer').textContent =
        String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    }
    updateTimer();
    setInterval(updateTimer, 1000);

    // ── 진행 바 ────────────────────────────────
    window.addEventListener('load', () => {
      setTimeout(() => {
        const fill = document.getElementById('progFill');
        if (fill) fill.style.width = '82%';
      }, 500);
    });

    // ── 선택지 클릭 ────────────────────────────
    function freePick(btn) {
      if (picked) return;
      picked = true;

      document.querySelectorAll('#freeChoices .choice').forEach(c => {
        c.classList.remove('selected-wrong','selected-right');
        c.style.opacity = '0.5';
        c.style.pointerEvents = 'none';
      });
      btn.style.opacity = '1';

      const isRight = btn.dataset.id === ANSWER;
      btn.classList.add(isRight ? 'selected-right' : 'selected-wrong');

      document.getElementById('reactWrong').classList.toggle('show', !isRight);
      document.getElementById('reactRight').classList.toggle('show', isRight);

      // 미니 힌트 + 결핍 블록 노출
      setTimeout(() => {
        document.getElementById('hintBox').classList.add('show');
        document.getElementById('deficitBlock').style.display = 'block';
        document.getElementById('ctaBefore2').style.display = 'none';
        document.getElementById('ctaAfter2').style.display = 'block';
      }, 500);

      // 스크롤
      setTimeout(() => {
        document.getElementById('hintBox').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 700);
    }
  </script>
  `, { stickyBar })
}
