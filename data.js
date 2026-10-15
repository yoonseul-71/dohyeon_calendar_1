/*
  방송 기록 입력 파일입니다.
  아래 예시를 실제 기록으로 바꿔 사용하세요.

  date: 날짜(YYYY-MM-DD)
  status: "regular"(정규방송), "collab"(합방/콘텐츠), "break"(휴방), "special"(기념일)
  title: 달력에 보일 제목
  subtitle: 달력에 작게 표시할 부가 설명(선택)
  videos: 날짜를 눌렀을 때 나올 영상 목록. 여러 개 입력할 수 있습니다.
    title: 영상 제목
    url: 유튜브/숲 등 다시보기 주소
    image: 썸네일 이미지 경로. 직접 지정한 파일을 assets/thumbnails/에 넣고 경로를 적습니다.
    kind: 카드에 표시할 콘텐츠 분류(선택)

  이미지 예: "assets/thumbnails/2024-08-14-01.jpg"
  영상이 없는 휴방 기록은 videos: [] 로 둡니다.
*/
window.DOHYEON_CALENDAR_DATA = [
  // 아래 두 항목은 형식 설명용 예시입니다. 실제 자료로 교체하거나 삭제하세요.
  {
    date: "2024-08-14",
    status: "regular",
    title: "정규방송",
    subtitle: "다시보기 1개",
    videos: [
      {
        title: "예시 영상 제목 — 실제 제목으로 바꾸기",
        url: "",
        image: "assets/thumbnails/sample.jpg",
        kind: "정규방송"
      }
    ]
  },
  {
    date: "2024-08-15",
    status: "break",
    title: "휴방",
    subtitle: "",
    videos: []
  }
];
