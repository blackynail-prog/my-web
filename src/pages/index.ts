import { layout } from './layout'

export function indexPage(): string {
  return layout('문제 풀기', /* html */`

  <!-- NAV -->
  <div class="nav-wrap">
    <div class="nav-inner">
      <a class="nav-brand" href="/">
        <img src="/images/logo.png" alt="금쪽간호" onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
        금쪽간호
      </a>
      <a href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener"
        style="font-size:13px;font-weight:600;background:#1A1A1A;color:#fff;padding:7px 14px;border-radius:6px;">
        💬 카톡 상담
      </a>
    </div>
  </div>

  <div class="page">

    <!-- 배지 -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
      <span class="badge badge-dark">🎓 금쪽간호</span>
      <span class="badge badge-red">🔥 이번 주 문제</span>
    </div>

    <!-- 헤드라인 -->
    <h1 class="h1">
      이 문제 틀리면<br />
      실습에서 막힙니다
    </h1>

    <p class="lead" style="margin-top:14px;">
      지금 풀어보면 당신 위치가 보입니다
    </p>

    <!-- 통계 -->
    <div class="stats">
      <div class="stat">
        <div class="stat-val">80%</div>
        <div class="stat-label">오답률</div>
      </div>
      <div class="stat">
        <div class="stat-val">Week 1</div>
        <div class="stat-label">현재 주차</div>
      </div>
      <div class="stat">
        <div class="stat-val">일요일</div>
        <div class="stat-label">마감</div>
      </div>
    </div>

    <!-- 문제 미리보기 카드 -->
    <div class="q-card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
        <span class="badge badge-red">간호대생 80%가 틀린 문제</span>
      </div>
      <div class="q-scenario">
        출혈 환자, BP 80/50, HR 130
      </div>
      <div class="q-ask">지금 가장 먼저 해야 할 것은?</div>
      <div class="q-choices" id="choices">
        <div class="q-choice" onclick="choicePick(this)"><span class="q-choice-num">①</span> 수액</div>
        <div class="q-choice" onclick="choicePick(this)"><span class="q-choice-num">②</span> 수혈</div>
        <div class="q-choice" onclick="choicePick(this)"><span class="q-choice-num">③</span> 산소</div>
        <div class="q-choice" onclick="choicePick(this)"><span class="q-choice-num">④</span> 관찰</div>
      </div>
      <div id="pick-msg" style="display:none;margin-top:16px;padding:14px 16px;background:#FFFBEB;border:1px solid #F6D860;border-radius:10px;font-size:14px;font-weight:600;color:#B7791F;line-height:1.6;">
        💡 정답인지 확인하고 싶으신가요? 해설 클래스에서 <strong>왜 그렇게 판단해야 하는지</strong> 임상 근거와 함께 설명해 드립니다.
      </div>
    </div>

    <!-- CTA -->
    <a href="/free" class="btn btn-dark btn-full" style="margin-top:24px;">
      무료 문제 풀어보기 →
    </a>

    <hr class="divider" />

    <!-- 소개 -->
    <div style="text-align:center;padding:8px 0;">
      <p class="muted" style="margin-bottom:8px;">금쪽간호 · 전 서울여자간호대학교 조교수 김민수</p>
      <p style="font-size:14px;color:#5A5A5A;line-height:1.8;">
        실습에서 본 것들이 케이스·국시로 연결되도록<br/>
        매주 핵심 문제와 해설을 함께합니다.
      </p>
      <a href="/" style="display:inline-block;margin-top:12px;font-size:13px;color:#2B6CB0;font-weight:600;">
        랜딩페이지 전체 보기 →
      </a>
    </div>

  </div>

  <!-- Floating CTA -->
  <div class="float-cta" id="floatCta">
    <a href="/free" class="btn btn-dark" style="flex:1;font-size:14px;padding:13px;">무료 문제 →</a>
    <a href="/apply" class="btn btn-red" style="flex:1;font-size:14px;padding:13px;">해설 신청 →</a>
  </div>

  <script>
    // 선택지 클릭
    function choicePick(el) {
      document.querySelectorAll('.q-choice').forEach(c => {
        c.style.borderColor = '#E8E8E4';
        c.style.background = '#F9F9F9';
      });
      el.style.borderColor = '#1A1A1A';
      el.style.background = '#fff';
      document.getElementById('pick-msg').style.display = 'block';
    }

    // 스크롤 시 플로팅 CTA
    const floatCta = document.getElementById('floatCta');
    window.addEventListener('scroll', () => {
      floatCta.classList.toggle('show', window.scrollY > 200);
    });

    // 진입 시 fade-in
    document.querySelectorAll('.q-choice').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 80);
    });
  </script>
`)
}
