/* Beyond OI 릴레이 피칭 투표 — 설정
 * VOTE_API : 구글 Apps Script 웹앱 주소 (표 집계 · 시트 기록 담당)
 * VOTE_PAGE: 참가자 투표 페이지 주소 (집계 화면 QR에 들어가는 주소, 이 사이트의 첫 화면)
 */
window.VOTE_API  = 'https://script.google.com/macros/s/AKfycby860zDeNJTQMYCzJ4wdXYzIbsdeBrUOpbNn0kf1T7eAkPgwvUS_pPj2P7efjoMH78a/exec';
window.VOTE_PAGE = new URL('./', location.href).href;
