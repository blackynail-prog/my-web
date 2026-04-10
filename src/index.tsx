import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { indexPage } from './pages/index'
import { freePage } from './pages/free'
import { applyPage } from './pages/apply'

const app = new Hono()

// ===========================
// Static files
// ===========================
app.use('/static/*', serveStatic({ root: './' }))
app.use('/images/*', serveStatic({ root: './' }))

// ===========================
// Weekly Pages
// ===========================
app.get('/question', (c) => c.html(indexPage()))
app.get('/free', (c) => c.html(freePage()))
app.get('/apply', (c) => c.html(applyPage()))

// ===========================
// Main landing page
// ===========================
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="간호학 A+ 전략의 라이브클래스 — 금쪽간호. 국시 합격, 임상실습 A+, 간호과정 완전정복." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="금쪽간호 | 간호학 A+ 전략 라이브클래스" />
  <meta property="og:description" content="맞춤형 간호 교육. 국시 합격, 임상실습 A+" />
  <meta property="og:image" content="/images/logo.png" />
  <link rel="icon" type="image/png" href="/images/logo.png" />
  <title>금쪽간호 | 간호학 A+ 전략 라이브클래스</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
  <link href="/static/styles.css" rel="stylesheet" />
</head>
<body>

  <!-- NAV -->
  <nav class="nav">
    <div class="nav-inner">
      <a class="nav-brand" href="#">
        <div class="nav-logo">
          <img src="/images/logo.png" alt="금쪽간호 로고" onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
        </div>
        <span class="nav-name">금쪽간호</span>
      </a>
      <div class="nav-links">
        <a href="#about">강사 소개</a>
        <a href="#curriculum">커리큘럼</a>
        <a href="#reviews">후기</a>
        <a class="nav-cta" href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener">💬 카톡 상담</a>
      </div>
      <a class="nav-cta" href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener" id="mobile-nav-cta" style="display:none;">💬 카톡 상담</a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="top">
    <div class="hero-inner">
      <div class="hero-content fade-up">
        <div class="hero-eyebrow">
          <span class="hero-badge">🎓 금쪽간호</span>
          <span class="hero-badge-warm">✨ 2기 모집 중</span>
        </div>
        <h1 class="hero-title">
          열심히 했는데<br />
          제자리인 것 같다면,<br />
          <em>느려도 괜찮아요.</em><br />
          방향만 맞으면 됩니다
        </h1>
        <div style="margin-top: 28px; display:flex; flex-direction:column; gap:12px; max-width:340px;">
          <a href="/question"
            class="hero-socrative-btn">
            <span class="hero-btn-badge">이번 주</span>
            🩺 문제 풀어보기 →
          </a>
          <a href="https://live-nursing.liveklass.com/cu/byPGxrFP" target="_blank" rel="noopener"
            class="btn btn-outline" style="font-size:14px; padding:13px 24px;">
            📄 무료 템플릿 다운받기
          </a>
        </div>
      </div>

      <!-- Profile card -->
      <div class="hero-profile-wrap fade-up" style="transition-delay:0.15s">
        <div class="hero-profile-card">
          <img
            src="/images/profile2.jpg"
            alt="김민수 선생님"
            style="width:100%;aspect-ratio:3/4;object-fit:cover;object-position:top;display:block;"
            onerror="this.onerror=null;this.src='https://mskim.online/images/profile2.jpg'"
          />
          <div class="hero-profile-placeholder" style="display:none;">
            <span class="emoji">👩‍⚕️</span>
            <span class="name-text">김민수 선생님</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PAIN SECTION -->
  <section class="pain" id="pain">
    <div class="container">
      <p class="section-label fade-up">간호대학생의 현실</p>
      <h2 class="section-title fade-up">실습에서 많이 배웠는데,<br />막상 정리하려면 막막하죠</h2>
      <div class="pain-grid">
        <div class="pain-item fade-up">
          <span class="pain-emoji">🔍</span>
          <div class="pain-text">
            <strong>환자 상태를 어떻게 해석해야 할지 모르겠어요</strong>
            <span class="pain-sub">어떤 기준으로 해석하고 과제에 써야 하는지 감이 없어요.</span>
          </div>
        </div>
        <div class="pain-item fade-up" style="transition-delay:0.05s">
          <span class="pain-emoji">📊</span>
          <div class="pain-text">
            <strong>검사 수치와 모니터링을 어떻게 정리해야 하죠?</strong>
            <span class="pain-sub">수치는 봤는데, 어떤 기준으로 정리해야 할지 모르겠어요.</span>
          </div>
        </div>
        <div class="pain-item fade-up" style="transition-delay:0.1s">
          <span class="pain-emoji">💊</span>
          <div class="pain-text">
            <strong>약물과 간호중재 연결이 너무 어려워요</strong>
            <span class="pain-sub">약은 알겠는데, 간호중재로 어떻게 이어야 할지 막막해요.</span>
          </div>
        </div>
        <div class="pain-item fade-up" style="transition-delay:0.15s">
          <span class="pain-emoji">📝</span>
          <div class="pain-text">
            <strong>컨퍼런스·QI 과제 구조를 어떻게 잡아야 하나요?</strong>
            <span class="pain-sub">어디서 시작해야 하는지, 무엇을 강조해야 하는지 모르겠어요.</span>
          </div>
        </div>
        <div class="pain-item fade-up" style="transition-delay:0.2s">
          <span class="pain-emoji">🗂️</span>
          <div class="pain-text">
            <strong>케이스 스터디·간호과정으로 연결이 안 돼요</strong>
            <span class="pain-sub">실습에서 본 것들이 케이스나 간호과정으로 이어지지 않아요.</span>
          </div>
        </div>
        <div class="pain-item fade-up" style="transition-delay:0.25s">
          <span class="pain-emoji">😮‍💨</span>
          <div class="pain-text">
            <strong>공부량 문제가 아닌 것 같은데, 뭐가 문제일까요?</strong>
            <span class="pain-sub">경험을 학습의 언어로 정리하는 게 아직 익숙하지 않은 거예요.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT / INSTRUCTOR -->
  <section class="about" id="about">
    <div class="container" style="max-width:680px;">

      <!-- ① 스토리 -->
      <div class="fade-up" style="margin-bottom:56px;">
        <div class="about-tag-row">
          <span class="tag tag-blue">前 서울여자간호대학교 조교수</span>
          <span class="tag tag-warm">금쪽간호 대표</span>
        </div>
        <h2 class="section-title">금쪽간호가<br />시작된 이유</h2>
        <div class="about-body">
          <p>
            금쪽간호의 시작은 제가 교수로 재직하던 시절 만든
            <strong>외상환자 간호 프로그램</strong>에서 출발했습니다.
            당시 강의의 부제는 <strong>"금쪽같은 내 환자"</strong>였고,
            이후 제자의 조언을 통해 지금의 "금쪽간호"라는 이름이 탄생했습니다.
          </p>
          <p>
            저에게 <strong>금쪽</strong>은 단지 특별한 누군가를 뜻하는 말이 아닙니다.
            외상간호에서 가장 중요한 <strong>Golden Time</strong>처럼,
            시간을 놓치지 않고 생명을 붙드는 간호의 의미를 담고 있습니다.
          </p>
          <p>
            동시에 그 말은, 한때 편입생으로 학교에 잘 적응하지 못하고
            늘 뒤처진다고 느끼던 <strong>제 자신을 가리키는 말</strong>이기도 합니다.
            저는 빠르게 잘하는 사람이 아니라, 여러 번 흔들리고 늦게 배우며
            겨우 앞으로 나아가던 사람이었습니다.
          </p>
          <p>
            그래서 저는 <strong>잘하는 학생보다,
            힘겹게 버티며 따라오는 학생의 마음</strong>을 더 잘 이해합니다.
          </p>
          <p>
            금쪽간호는 바로 그런 학생들을 돕기 위해 시작되었습니다.
            실습의 경험이 단순한 고생으로 끝나지 않고 <strong>학습으로 연결</strong>되도록,
            느리더라도 <strong>자기 속도로 성장</strong>할 수 있도록 함께하고 싶습니다.
          </p>
          <p class="about-footer-note">
            금쪽간호는 소중한 환자를 위한 마음에서 시작되었고,
            한때 금쪽 같았던 저 자신을 지나,
            이제는 누군가의 성장을 끝까지 응원하는 이름이 되었습니다.
          </p>
        </div>
      </div>

      <!-- ② 강사 사진 -->
      <div class="fade-up" style="display:flex;flex-direction:column;align-items:center;gap:20px;margin-bottom:40px;">
        <div style="width:min(220px, 60vw);border-radius:20px;overflow:hidden;box-shadow:var(--shadow-sm);border:1px solid var(--border);">
          <img
            src="/images/profile.png"
            alt="김민수 선생님"
            style="width:100%;aspect-ratio:3/4;object-fit:cover;object-position:top;display:block;"
            onerror="this.onerror=null;this.src='https://mskim.online/images/profile.png'"
          />
        </div>
      </div>

      <!-- ③ 프로필 카드 -->
      <div class="fade-up" style="transition-delay:0.1s;">
        <div class="notion-page-preview">
          <div class="npp-title">📋 김민수 선생님 프로필</div>
          <div class="npp-row">
            <span class="npp-label">🎓 학력</span>
            <span class="npp-value" style="font-size:12px;line-height:1.6">
              가톨릭대 간호학 학사<br/>한양대 간호학 석사<br/>한양대 간호학 박사수료
            </span>
          </div>
          <div class="npp-row">
            <span class="npp-label">🏫 前 직위</span>
            <span class="npp-value" style="font-size:12px">서울여자간호대학교 조교수</span>
          </div>
          <div class="npp-row">
            <span class="npp-label">🚑 임상경력</span>
            <span class="npp-value" style="font-size:12px;line-height:1.6">
              권역외상센터 외상프로그램매니저<br/>권역응급의료센터 간호사
            </span>
          </div>
          <div class="npp-row">
            <span class="npp-label">📚 강의 분야</span>
            <div style="display:flex;gap:5px;flex-wrap:wrap;">
              <span class="npp-chip">케이스스터디</span>
              <span class="npp-chip">간호과정</span>
              <span class="npp-chip">임상실습</span>
              <span class="npp-chip">국시전략</span>
            </div>
          </div>
          <div class="npp-row">
            <span class="npp-label">📖 저서</span>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span class="npp-value" style="font-size:12px;line-height:1.6">핵심기본술기 가이드북 <span style="color:var(--text-muted)">(대한나래출판사)</span></span>
              <span class="npp-value" style="font-size:12px;line-height:1.6">성인간호학 <span style="color:var(--text-muted)">(대한나래출판사)</span></span>
              <span class="npp-value" style="font-size:12px;line-height:1.6">비판적 사고와 간호과정 제2판 <span style="color:var(--text-muted)">(계축문화사)</span></span>
            </div>
          </div>
          <div class="npp-row" style="flex-direction:column;gap:10px;">
            <span class="npp-label">📚 저서 이미지</span>
            <img
              src="/images/books.jpg"
              alt="저서 3권 - 핵심기본술기 가이드북, 성인간호학, 비판적 사고와 간호과정"
              style="width:100%;border-radius:8px;border:1px solid var(--border);"
              onerror="this.onerror=null;this.src='https://mskim.online/images/books.jpg'"
            />
          </div>
          <div class="npp-row">
            <span class="npp-label">📩 이메일</span>
            <span class="npp-value" style="font-size:12px;color:var(--text-muted)">nurseminsu@naver.com</span>
          </div>
          <div class="npp-row">
            <span class="npp-label">📸 인스타</span>
            <a href="https://www.instagram.com/sop.mskim" target="_blank" rel="noopener" style="font-size:13px;color:var(--accent);font-weight:600;">@sop.mskim →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BELIEF SECTION -->
  <section style="padding: 80px 0; background: var(--text-primary);">
    <div class="container">
      <div class="fade-up" style="text-align:center; max-width:640px; margin:0 auto;">
        <p style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;">
          금쪽간호가 믿는 배움의 방식
        </p>
        <h2 style="font-size:clamp(22px,4vw,34px);font-weight:900;color:#fff;line-height:1.45;margin-bottom:20px;">
          실습은 단순히 버티는 시간이 아니라,<br />
          <span style="color:#F6D860;">스스로의 실력을 키우는 성장의 과정</span>입니다.
        </h2>
        <p style="font-size:clamp(14px,2vw,15px);color:rgba(255,255,255,0.65);line-height:1.9;">
          좋은 배움은 많은 경험에서 시작되지만,<br />
          더 중요한 것은 그 경험을 어떻게 이해하고 정리하느냐에 있습니다.
        </p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:48px;">
        <div class="fade-up" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px 24px;">
          <div style="font-size:28px;margin-bottom:12px;">🔗</div>
          <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:8px;">경험과 학습을 연결</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.52);line-height:1.7;">실습에서 본 상황을 케이스 스터디, 간호과정, 보고서로 연결하는 법을 알려드립니다.</div>
        </div>
        <div class="fade-up" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px 24px;transition-delay:0.08s">
          <div style="font-size:28px;margin-bottom:12px;">🎯</div>
          <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:8px;">더 명확하게, 더 실제적으로</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.52);line-height:1.7;">더 어렵게 설명하기보다 더 명확하게 정리하고, 더 실제적으로 적용할 수 있도록 돕습니다.</div>
        </div>
        <div class="fade-up" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px 24px;transition-delay:0.16s">
          <div style="font-size:28px;margin-bottom:12px;">🌱</div>
          <div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:8px;">1,000시간 실습의 가치</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.52);line-height:1.7;">간호대학생은 1,000시간의 임상실습을 경험합니다. 그 시간이 진짜 배움이 되도록 함께합니다.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CURRICULUM SECTION -->
  <section class="curriculum" id="curriculum">
    <div class="container">
      <p class="section-label fade-up">무엇을 배우나요?</p>
      <h2 class="section-title fade-up">금쪽간호 커리큘럼</h2>
      <p class="section-subtitle fade-up">항목을 눌러 세부 내용을 확인하세요.</p>

      <div class="curr-categories" role="list">

        <!-- ① 학습 관리 -->
        <div class="curr-cat open fade-up" data-curr>
          <div class="curr-cat-header" aria-expanded="true">
            <div class="curr-cat-icon curr-cat-icon-amber">💛</div>
            <div class="curr-cat-info">
              <div class="curr-cat-title">학습 관리</div>
              <div class="curr-cat-sub">DM 상담 · 줌 스터디 · 인스타 라이브 · 학습 설계</div>
            </div>
            <div class="curr-cat-meta">
              <span class="curr-count">4개</span>
              <span class="curr-chevron">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </div>
          </div>
          <div class="curr-panel">
            <div class="curr-panel-inner">
              <ul class="curr-items">
                <li class="curr-item">
                  <span class="curr-item-dot dot-amber"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">DM 1:1 상담</div>
                    <div class="curr-item-desc">공부 방향, 실습 고민, 국시 불안 — 모든 질문에 선생님이 직접 답변드립니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-green">무료 상담</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-amber"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">월·수·금 줌 스터디룸</div>
                    <div class="curr-item-desc">출석 체크 루틴으로 꾸준함을 만들고, 함께 공부하며 집중력을 3배 높입니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-blue">줌 스터디</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-amber"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">인스타 라이브 참여</div>
                    <div class="curr-item-desc">매주 핵심 개념 강의 + 실시간 Q&amp;A — 라이브에서 질문하고 바로 해결하세요.</div>
                    <div class="curr-item-tags"><span class="tag tag-green">무료 라이브</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-amber"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">학습 목표 함께 설계</div>
                    <div class="curr-item-desc">나의 상황을 먼저 파악하는 초기 미팅 — 맞춤형 학습 플랜으로 막막함을 없앱니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-purple">맞춤 설계</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ② 과제·케이스 -->
        <div class="curr-cat fade-up" style="transition-delay:0.06s" data-curr>
          <div class="curr-cat-header" aria-expanded="false">
            <div class="curr-cat-icon curr-cat-icon-teal">📋</div>
            <div class="curr-cat-info">
              <div class="curr-cat-title">과제·케이스 꿀팁</div>
              <div class="curr-cat-sub">간호과정 · 케이스스터디 · 레포트 · 컨퍼런스</div>
            </div>
            <div class="curr-cat-meta">
              <span class="curr-count">4개</span>
              <span class="curr-chevron">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </div>
          </div>
          <div class="curr-panel">
            <div class="curr-panel-inner">
              <ul class="curr-items">
                <li class="curr-item">
                  <span class="curr-item-dot dot-teal"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">간호과정 완전정복</div>
                    <div class="curr-item-desc">사정 → 진단 → 계획 → 수행 → 평가까지, 케이스에서 막히는 구간을 단계별로 해결합니다.</div>
                    <div class="curr-item-tags"><span class="tag" style="background:#E6F7F5;color:#1A6B5E;">케이스스터디</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-teal"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">A+ 레포트 작성법</div>
                    <div class="curr-item-desc">교수님이 원하는 구조와 표현 방식, 레포트 점수를 올리는 실전 작성 전략을 알려드립니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-orange">레포트</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-teal"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">케이스 선정 &amp; 구조화</div>
                    <div class="curr-item-desc">어떤 환자를 케이스로 잡을지, 어떻게 정보를 구조화할지 — 처음부터 방향을 잡아드립니다.</div>
                    <div class="curr-item-tags">
                      <span class="tag" style="background:#E6F7F5;color:#1A6B5E;">케이스스터디</span>
                      <span class="tag tag-green">FREE 자료</span>
                    </div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-teal"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">무료 템플릿 제공</div>
                    <div class="curr-item-desc">간호과정 양식, 요약 노트, 실습 체크리스트 — DM 한 통으로 바로 받을 수 있습니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-green">FREE</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ③ 국시 전략 -->
        <div class="curr-cat fade-up" style="transition-delay:0.12s" data-curr>
          <div class="curr-cat-header" aria-expanded="false">
            <div class="curr-cat-icon curr-cat-icon-blue">📝</div>
            <div class="curr-cat-info">
              <div class="curr-cat-title">국시 전략</div>
              <div class="curr-cat-sub">5개년 분석 · 과목별 핵심 · 모의고사 · D-day 플랜</div>
            </div>
            <div class="curr-cat-meta">
              <span class="curr-count">4개</span>
              <span class="curr-chevron">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </div>
          </div>
          <div class="curr-panel">
            <div class="curr-panel-inner">
              <ul class="curr-items">
                <li class="curr-item">
                  <span class="curr-item-dot dot-blue"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">5개년 빈출 문제 분석</div>
                    <div class="curr-item-desc">최근 5년 국시 출제 패턴을 분석해, 어디에 집중해야 하는지 명확하게 알려드립니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-blue">국시 분석</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-blue"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">과목별 핵심 포인트</div>
                    <div class="curr-item-desc">성인·아동·정신·모성·지역사회 — 과목마다 반드시 잡아야 할 핵심 개념을 정리합니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-blue">핵심 요약</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-blue"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">실전 모의고사 &amp; 오답 교정</div>
                    <div class="curr-item-desc">단순 풀이가 아닌 오답 원인 분석 — 왜 틀렸는지 알아야 실력이 올라갑니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-orange">실전 연습</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-blue"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">국시 D-day 학습 플랜</div>
                    <div class="curr-item-desc">시험 날짜부터 역산한 단기 합격 플랜 — 지금 어디서 시작해야 할지 함께 설계합니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-purple">플래닝</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ④ 임상 실습 -->
        <div class="curr-cat fade-up" style="transition-delay:0.18s" data-curr>
          <div class="curr-cat-header" aria-expanded="false">
            <div class="curr-cat-icon curr-cat-icon-navy">🏥</div>
            <div class="curr-cat-info">
              <div class="curr-cat-title">임상 실습</div>
              <div class="curr-cat-sub">병동 적응 · 실습 기록 · 1:1 컨설팅 · 체크리스트</div>
            </div>
            <div class="curr-cat-meta">
              <span class="curr-count">4개</span>
              <span class="curr-chevron">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </div>
          </div>
          <div class="curr-panel">
            <div class="curr-panel-inner">
              <ul class="curr-items">
                <li class="curr-item">
                  <span class="curr-item-dot dot-navy"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">병동 적응 전략</div>
                    <div class="curr-item-desc">첫날 무엇부터 해야 할지, 프리셉터와 어떻게 관계를 맺을지 — 실전 적응 가이드를 드립니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-purple">임상 실습</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-navy"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">실습 기록 잘 쓰는 법</div>
                    <div class="curr-item-desc">SOAPIE, Focus DAR 등 실제 기록 형식에 맞게 잘 쓰는 방법을 구체적 예시로 알려드립니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-orange">기록 작성</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-navy"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">1:1 실습 컨설팅</div>
                    <div class="curr-item-desc">내 실습 상황에 맞는 개인 코칭 — 프리셉터와의 소통 방법, 어려운 상황 대처법까지 함께합니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-blue">1:1 코칭</span></div>
                  </div>
                </li>
                <li class="curr-item">
                  <span class="curr-item-dot dot-navy"></span>
                  <div class="curr-item-body">
                    <div class="curr-item-title">실습 체크리스트 제공</div>
                    <div class="curr-item-desc">사전 준비 항목부터 매일 해야 할 일까지 — 무료 체크리스트로 실습을 빠짐없이 챙깁니다.</div>
                    <div class="curr-item-tags"><span class="tag tag-green">FREE 자료</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="how" id="how">
    <div class="container">
      <p class="section-label fade-up">어떻게 진행되나요?</p>
      <h2 class="section-title fade-up">시작부터 결과까지,<br />이렇게 진행됩니다</h2>
      <div class="steps fade-up" style="transition-delay:0.1s">
        <div class="step">
          <div class="step-num">Step 01</div>
          <div class="step-icon">📩</div>
          <div class="step-title">DM 또는 라이브클래스 신청</div>
          <div class="step-body">DM 또는 라이브클래스를 통해 간단하게 신청합니다.<br />원하는 것을 알려주셔야 맞는 팀이 만들어집니다.</div>
        </div>
        <div class="step">
          <div class="step-num">Step 02</div>
          <div class="step-icon">🤝</div>
          <div class="step-title">초기 미팅 &amp; 학습 전략 설계</div>
          <div class="step-body">현재 상황, 공부 스타일, 목표를 파악하고<br />맞춤형 커리큘럼을 함께 설계합니다.</div>
        </div>
        <div class="step">
          <div class="step-num">Step 03</div>
          <div class="step-icon">📚</div>
          <div class="step-title">강의 + 줌 스터디 + 자료</div>
          <div class="step-body">맞춤 자료와 문제, 월수금 줌 스터디,<br />라이브 강의로 체계적으로 학습합니다.</div>
        </div>
        <div class="step">
          <div class="step-num">Step 04</div>
          <div class="step-icon">🎯</div>
          <div class="step-title">피드백 &amp; 목표 달성</div>
          <div class="step-body">매 단계 DM 피드백과 진도 점검으로<br />목표를 향해 함께 나아갑니다.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROOF STRIP -->
  <div class="proof-strip">
    <dl class="proof-inner">
      <div class="proof-item fade-up">
        <dt>1기 후기</dt>
        <dd>⭐⭐⭐⭐⭐</dd>
        <p class="proof-sub">만점 수강 후기</p>
      </div>
      <div class="proof-item fade-up" style="transition-delay:0.05s">
        <dt>줌 스터디</dt>
        <dd>월·수·금</dd>
        <p class="proof-sub">정기 운영</p>
      </div>
      <div class="proof-item fade-up" style="transition-delay:0.1s">
        <dt>운영 방식</dt>
        <dd>소수 정예</dd>
        <p class="proof-sub">밀착 관리</p>
      </div>
      <div class="proof-item fade-up" style="transition-delay:0.15s">
        <dt>전략</dt>
        <dd>국시 합격</dd>
        <p class="proof-sub">5개년 출제 분석</p>
      </div>
    </dl>
  </div>

  <!-- REVIEWS -->
  <section class="reviews" id="reviews">
    <div class="container">
      <p class="section-label fade-up">수강생 후기</p>
      <h2 class="section-title fade-up">금쪽간호 1기 후기</h2>
      <p class="section-subtitle fade-up">파일럿 1기 수강생들의 실제 후기입니다.</p>

      <div class="reviews-grid">
        <div class="review-card fade-up">
          <div class="review-header">
            <div class="review-stars">★★★★★</div>
            <span class="review-cohort">금쪽간호 1기</span>
          </div>
          <p class="review-body">
            교수님께서 초기 미팅에서 제 상황과 공부 스타일을 파악하고 개선 방향을 제시해 주셨어요.
            시험 범위에 맞춘 자료와 문제를 제공해주시고, 문제 풀이로 부족한 부분을 짚어주시며
            핵심 포인트를 강조해 주셨습니다. 매주 <strong>월·수·금 줌 스터디</strong>로 집중도와
            학습 시간을 확보할 수 있었고, 이제는 <strong>똑똑한 간호사가 될 수 있다는 희망</strong>이 생겼습니다.
          </p>
          <div class="review-tags">
            <span class="tag tag-blue">공부 방법 교정</span>
            <span class="tag tag-green">맞춤 자료</span>
            <span class="tag tag-purple">자신감 회복</span>
          </div>
        </div>

        <div class="review-card fade-up" style="transition-delay:0.1s">
          <div class="review-header">
            <div class="review-stars">★★★★★</div>
            <span class="review-cohort">금쪽간호 1기</span>
          </div>
          <p class="review-body">
            교수님 지도 아래 <strong>학습 목표를 설정하고 단계적으로 계획</strong>해 나가니 학습 방향이 명확해졌어요.
            각 단계의 구체적 목표를 달성하면서 학습 흐름이 체계적으로 정리되고,
            시간 활용의 중요성을 자연스럽게 체감할 수 있었습니다.
            핵심 개념 중심 학습 덕분에 시간 관리와 일상 균형이 맞춰지고
            <strong>학습에 대한 부담도 줄어들었습니다.</strong>
          </p>
          <div class="review-tags">
            <span class="tag tag-orange">시간 관리</span>
            <span class="tag tag-blue">체계적 학습</span>
            <span class="tag tag-green">부담 감소</span>
          </div>
        </div>

        <div class="review-more-card fade-up" style="transition-delay:0.2s">
          <div class="ri">📸</div>
          <p><strong>2기 수강생 후기</strong>가 업데이트될 예정입니다.<br />
          지금 2기에 참여하면 <strong>최초 합류 특별 혜택</strong>을 받으실 수 있어요.</p>
          <a class="btn btn-outline" style="margin-top:8px;" href="https://www.instagram.com/sop.mskim" target="_blank" rel="noopener">
            인스타에서 후기 더 보기 →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="cta-section" id="cta">
    <div class="container">
      <p class="section-label fade-up">지금 시작하기</p>
      <h2 class="section-title fade-up">준비가 안 됐어도 괜찮아요.<br />지금 시작하면 됩니다.</h2>
      <p class="section-subtitle fade-up">2기도 1기와 동일한 밀착 관리와 맞춤 커리큘럼으로 운영됩니다.</p>

      <div class="cta-grid" style="margin-top:40px;">
        <div class="cta-card fade-up" style="transition-delay:0.05s">
          <div class="cc-icon">🎬</div>
          <h3 class="cc-title">무료 라이브 클래스 참여하기</h3>
          <p class="cc-body">매주 인스타 라이브로 국시 핵심 개념 강의. 팔로우 후 알림 설정.</p>
          <div class="cc-btn-row">
            <a class="btn btn-primary" href="https://www.instagram.com/sop.mskim" target="_blank" rel="noopener">라이브 참여 →</a>
          </div>
        </div>
        <div class="cta-card fade-up" style="transition-delay:0.1s">
          <div class="cc-icon">🏆</div>
          <h3 class="cc-title">2기 참여 문의하기</h3>
          <p class="cc-body">국시특강 · 줌 공부방 · 실습 컨설팅. 소수 정예 모집 중.</p>
          <div class="cc-btn-row">
            <a class="btn btn-accent" href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener">💬 2기 참여 문의 →</a>
          </div>
        </div>
      </div>

      <!-- Scarcity bar -->
      <div class="scarcity-wrap fade-up" style="max-width:600px; margin:32px auto 0;">
        <div class="scarcity-header">
          <span>✨ 2기 소수 정예 모집 현황</span>
          <span id="seat-count">자리 마감 임박</span>
        </div>
        <div class="scarcity-bar-bg">
          <div class="scarcity-bar-fill" id="scarcity-fill"></div>
        </div>
        <p class="scarcity-note">🔥 소수 인원만 받는 밀착 관리 프로그램 — 지금 바로 DM 주세요</p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <div class="footer-brand">
          <img src="/images/logo.png" alt="금쪽간호 로고" style="width:28px;height:28px;border-radius:6px;object-fit:cover;" onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
          금쪽간호
        </div>
        <p class="footer-desc">간호대학생의 실습 경험을 배움으로 연결하는 교육 플랫폼</p>
        <p class="footer-biz">
          브랜드명: 금쪽간호 · 대표: 김민수 · 사업자명: 트리아지<br />
          사업자등록번호: 811-25-01998 · 이메일: nurseminsu@naver.com<br />
          인스타그램: <a href="https://www.instagram.com/sop.mskim" target="_blank" rel="noopener" style="color:var(--accent)">@sop.mskim</a>
          &nbsp;·&nbsp; 카카오채널: <a href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener" style="color:var(--accent-warm)">금쪽간호</a>
        </p>
      </div>
      <div class="footer-links-col">
        <a href="#about">강사 소개</a>
        <a href="#curriculum">커리큘럼</a>
        <a href="#reviews">후기</a>
        <a href="https://live-nursing.liveklass.com" target="_blank" rel="noopener">라이브클래스</a>
        <a href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener">카카오채널</a>
        <a href="https://www.instagram.com/sop.mskim" target="_blank" rel="noopener">인스타그램</a>
      </div>
    </div>
    <p class="footer-copy">© 2025 금쪽간호 (트리아지). All rights reserved.</p>
  </footer>

  <!-- FLOATING CTA BAR -->
  <div class="float-bar" id="floatBar">
    <a class="float-btn float-btn-dark" href="https://live-nursing.liveklass.com" target="_blank" rel="noopener">
      🎬 라이브클래스
    </a>
    <a class="float-btn float-btn-accent" href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener">
      💬 카톡 상담
    </a>
  </div>

  <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
