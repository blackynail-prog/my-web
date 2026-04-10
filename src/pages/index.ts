import { layout } from './layout'
import w from '../data/weekly'

export function indexPage(): string {

  const stickyBar = /* html */`
  <div class="sticky-bar" id="stickyBar">
    <p class="scarcity-line">⚡ 잔여석 ${w.stats.remaining}자리 — 매주 소수만 받습니다</p>
    <div class="sticky-bar-inner">
      <a href="/free" class="btn btn-gold" style="flex:1;font-size:15px;">문제 풀어보기 →</a>
      <a href="/apply" class="btn btn-danger" style="flex:1;font-size:15px;">해설 신청</a>
    </div>
  </div>`

  const nums = ['①','②','③','④']

  return layout(`${w.week} 문제`, /* html */`

  <!-- NAV -->
  <div class="nav-outer">
    <div class="nav">
      <div class="nav-brand">
        <img src="/images/logo.png" alt="금쪽간호"
          onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
        금쪽간호
      </div>
      <span class="nav-pill">🔥 ${w.week}</span>
    </div>
  </div>

  <div class="page-wrap" style="padding-top:28px;">

    <!-- ① HOOK — Fear + Curiosity -->
    <div class="flex flex-wrap gap8 items-center mt4">
      <span class="badge badge-danger">⚠️ 오답률 ${w.stats.wrongRate}</span>
      <span class="badge badge-muted">${w.subject}</span>
    </div>

    <h1 class="h1 mt12">
      이 판단 틀리면<br />
      실습에서 <em>막힙니다</em>
    </h1>
    <p class="lead mt8">
      간호대생 ${w.stats.wrongRate}가 틀린 문제.<br />
      당신은 맞출 수 있나요?
    </p>

    <!-- ② PROBLEM PREVIEW — Curiosity 자극 -->
    <div class="card mt24" id="questionCard">
      <div class="flex flex-wrap gap8 items-center" style="margin-bottom:14px;">
        <span class="badge badge-danger">이번 주 문제</span>
        <span class="muted" style="font-size:12px;">${w.week} · ${w.subject}</span>
      </div>
      <p style="font-size:17px;font-weight:700;color:var(--text);line-height:1.55;margin-bottom:6px;">
        ${w.question.scenario}
      </p>
      <p style="font-size:14px;color:#AAA;margin-bottom:18px;">${w.question.ask}</p>

      <div class="choices" id="mainChoices">
        ${w.question.choices.map((c, i) => `<button class="choice" data-id="${c.id}" onclick="mainPick(this)">
          <span class="choice-num">${nums[i]}</span>
          ${c.text}
        </button>`).join('')}
      </div>

      <!-- 선택 후 반응 -->
      <div class="reaction-box reaction-wrong" id="reactionWrong">
        😶 ${w.question.wrongReaction}<br />
        <span style="font-size:13px;color:var(--muted);margin-top:6px;display:block;">해설에서 정확한 이유를 확인하세요.</span>
      </div>
      <div class="reaction-box reaction-right" id="reactionRight">
        ✅ ${w.question.rightReaction}<br />
        <span style="font-size:13px;color:var(--muted);margin-top:6px;display:block;">임상 근거까지 설명할 수 있어야 진짜 실력입니다.</span>
      </div>
    </div>

    <!-- 선택 전 스크롤 힌트 -->
    <div id="ctaBefore">
      <div class="scroll-hint mt8">↓</div>
    </div>

    <!-- 선택 후 CTA (JS로 노출) -->
    <div id="ctaAfter" style="display:none;margin-top:16px;">
      <a href="/free" class="btn btn-gold btn-full pulse">
        🔍 해설 라이브 참여하기 →
      </a>
      <a href="/apply" class="btn btn-ghost btn-full mt8">
        신청 페이지 바로가기
      </a>
    </div>

    <hr class="divider" />

    <!-- ③ STATS — Social Proof -->
    <div class="stats">
      <div class="stat">
        <div class="stat-val danger">${w.stats.wrongRate}</div>
        <div class="stat-lbl">오답률</div>
      </div>
      <div class="stat">
        <div class="stat-val">${w.stats.capacity}</div>
        <div class="stat-lbl">이번 기 정원</div>
      </div>
      <div class="stat">
        <div class="stat-val danger">${w.stats.remaining}석</div>
        <div class="stat-lbl">잔여</div>
      </div>
    </div>

    <!-- ④ AUTHORITY — 강사 신뢰 -->
    <div class="instructor-row">
      <img class="instructor-img" src="${w.instructor.img}" alt="${w.instructor.name}"
        onerror="this.onerror=null;this.src='${w.instructor.imgFallback}'" />
      <div>
        <div class="instructor-name">${w.instructor.name} 선생님</div>
        <div class="instructor-title">${w.instructor.title}<br />${w.instructor.sub}</div>
      </div>
    </div>

    <!-- ⑤ SOCIAL PROOF — 후기 -->
    <p style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px;">수강생 후기</p>
    ${w.reviews.map(r => `
    <div class="review">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-meta">
        ${r.name} <span class="review-tag">${r.tag}</span>
      </div>
    </div>`).join('')}

    <!-- ⑥ FINAL CTA -->
    <a href="/free" class="btn btn-gold btn-full mt24">
      ${w.ctaFree}
    </a>
    <a href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener"
      class="btn btn-ghost btn-full mt8">
      💬 카카오 채널 문의
    </a>

    <p class="muted mt12" style="text-align:center;font-size:12px;">
      매주 라이브 진행 · 소수 정예 운영
    </p>

    <!-- 메인 랜딩으로 이동 -->
    <p style="text-align:center;margin-top:20px;">
      <a href="/" style="font-size:12px;color:var(--muted);text-decoration:underline;text-underline-offset:3px;">
        금쪽간호 소개 보기 →
      </a>
    </p>

  </div>

  <script>
    const ANSWER = "${w.question.answerId}";

    function mainPick(btn) {
      // 이미 선택된 경우 무시
      if (document.querySelector('#mainChoices .selected-wrong, #mainChoices .selected-right')) return;

      // 선택 처리
      document.querySelectorAll('#mainChoices .choice').forEach(c => {
        c.style.opacity = '0.5';
        c.style.pointerEvents = 'none';
      });
      btn.style.opacity = '1';

      const isRight = btn.dataset.id === ANSWER;
      btn.classList.add(isRight ? 'selected-right' : 'selected-wrong');

      // 반응 박스
      document.getElementById('reactionWrong').classList.toggle('show', !isRight);
      document.getElementById('reactionRight').classList.toggle('show', isRight);

      // CTA 전환
      document.getElementById('ctaBefore').style.display = 'none';
      document.getElementById('ctaAfter').style.display = 'block';

      // Sticky bar 즉시 등장
      document.getElementById('stickyBar').classList.add('show');

      // 스무스 스크롤
      setTimeout(() => {
        document.getElementById('ctaAfter').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }

    // 스크롤 시 sticky bar
    window.addEventListener('scroll', () => {
      const bar = document.getElementById('stickyBar');
      if (window.scrollY > 180) bar.classList.add('show');
    }, { passive: true });
  </script>
  `, { stickyBar })
}
