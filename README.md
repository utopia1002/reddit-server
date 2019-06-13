# reddit-server
[백엔드]reddit과 같은 유형의 게시판을 django/angular로 구현하였습니다

주요 구현 요소
[백엔드]
- JWT인증
- Django-Rest-Framework Serializer
- Custom User Model
- 글 정렬기능
- 글 추천/비추기능(추천/비추 취소 가능)
- 카테고리별 집계
- 최신글 확인
- 회원가입 기능
- 제목(또는 주제) + url 의 간단한 게시글 구조로 구현
- 글 작성/수정/삭제 기능
[프론트]
- JWT인증 요청
- JWT 로컬 저장 및 auth.guard
- 추천 시 style 변경(버튼 색 변경)
- 전체 기능,화면 SPA내 구현

*** 웹페이지 전체적인 형태는 
https://blog.naver.com/funlucky1002?Redirect=Update&logNo=221478832748
