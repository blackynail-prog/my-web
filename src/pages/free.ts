import { layout } from './layout'
import weeklyData from '../data/weekly'

export function freePage(): string {
  const { week, title, subtitle, deadline, highlight, qrImage, ctaText, question } = weeklyData

  const choicesHtml = question.choices
    .map(c => `<div class="q-choice"><span class="q-choice-num">${c.num}</span> ${c.text}</div>`)
    .join('\n')

  return layout('무료 문제', /* html */`

  <!-- NAV -->
  <div class="nav-wrap">
    <div class="nav-inner">
      <a class="nav-brand" href="/">
        <img src="/images/logo.png" alt="금쪽간호" onerror="this.onerror=null;this.src='https://mskim.online/images/logo.png'" />
        금쪽간호
      </a>
      <a class="nav-back" href="/">← 홈</a>
    </div>
  </div>

  <div class="page">

    <!-- 배지 -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
      <span class="badge badge-dark">${week}</span>
      <span class="badge badge-red">🔥 ${deadline}</span>
    </div>

    <!-- 타이틀 -->
    <h1 class="h2">${title}</h1>
    <p class="lead" style="margin-top:10px;">${subtitle}</p>

    <!-- 진행 바 (긴박감) -->
    <div class="progress-wrap">
      <div class="progress-label">
        <span>🔥 참여 현황</span>
        <span id="prog-pct">76%</span>
      </div>
      <div class="progress-bg">
        <div class="progress-fill" id="prog-fill"></div>
      </div>
      <p class="muted" style="margin-top:6px;">이미 많은 분들이 참여했습니다</p>
    </div>

    <!-- 문제 카드 -->
    <div class="q-card">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
        <span class="badge badge-red">이번 주 문제</span>
      </div>
      <div class="q-scenario">${question.scenario}</div>
      <div class="q-ask">${question.ask}</div>
      <div class="q-choices">
        ${choicesHtml}
      </div>
    </div>

    <!-- 하이라이트 메시지 -->
    <div style="margin-top:20px;padding:16px 20px;background:#FFF5F5;border:1px solid #FEB2B2;border-radius:12px;display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:20px;">⚠️</span>
      <div>
        <p style="font-size:14px;font-weight:700;color:#C53030;margin-bottom:4px;">${highlight}</p>
        <p style="font-size:13px;color:#9A9A9A;line-height:1.6;">정답을 아는 것과 설명할 수 있는 것은 다릅니다</p>
      </div>
    </div>

    <hr class="divider" />

    <!-- QR 코드 섹션 -->
    <div style="text-align:center;">
      <p style="font-size:14px;font-weight:700;color:#1A1A1A;margin-bottom:4px;">해설 라이브 참여 QR</p>
      <p class="muted" style="margin-bottom:16px;">스캔하거나 아래 버튼으로 바로 이동</p>

      <div class="qr-wrap">
        <img
          src="${qrImage}"
          alt="해설 참여 QR코드"
          class="qr-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <div class="qr-placeholder" style="display:none;">
          <span class="qr-icon">📲</span>
          <span>QR 이미지를<br/>/public/images/qr.png에<br/>업로드하세요</span>
        </div>
      </div>
    </div>

    <!-- 설득 문구 -->
    <div class="card" style="margin-top:8px;text-align:center;">
      <p style="font-size:15px;color:#5A5A5A;line-height:1.9;">
        정답 맞추는 건 쉽습니다<br />
        하지만 <strong style="color:#1A1A1A;">왜 틀렸는지 설명 못하면</strong><br />
        다음에도 틀립니다
      </p>
    </div>

    <!-- CTA 버튼 -->
    <a href="/apply" class="btn btn-red btn-full" style="margin-top:24px;">
      ${ctaText} →
    </a>

    <a href="https://pf.kakao.com/_mqkuX" target="_blank" rel="noopener"
      class="btn btn-full" style="margin-top:10px;background:#F9F9F9;color:#1A1A1A;border:1.5px solid #E8E8E4;font-size:14px;">
      💬 카카오 채널로 문의하기
    </a>

  </div>

  <script>
    // 진행 바 애니메이션
    window.addEventListener('load', () => {
      setTimeout(() => {
        const fill = document.getElementById('prog-fill');
        if (fill) fill.style.width = '76%';
      }, 400);
    });

    // 선택지 클릭 → 신청 유도
    document.querySelectorAll('.q-choice').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.q-choice').forEach(c => {
          c.style.borderColor = '#E8E8E4';
          c.style.background = '#F9F9F9';
        });
        el.style.borderColor = '#C53030';
        el.style.background = '#FFF5F5';

        // 잠깐 후 신청 버튼 강조
        setTimeout(() => {
          const cta = document.querySelector('.btn-red.btn-full');
          if (cta) {
            cta.style.transform = 'scale(1.02)';
            cta.style.boxShadow = '0 8px 24px rgba(197,48,48,0.35)';
            setTimeout(() => {
              cta.style.transform = '';
              cta.style.boxShadow = '';
            }, 800);
          }
        }, 200);
      });
    });
  </script>
`)
}
