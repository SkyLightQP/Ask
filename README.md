# Ask! 물어보세요! [![works badge](https://cdn.rawgit.com/nikku/works-on-my-machine/v0.2.0/badge.svg)](https://github.com/nikku/works-on-my-machine)
하늘빛에게 익명 질문을 해보세요!

## 어떻게 시작하나요?

### Docker 없이 시작하기
1. `npm build` 명령어로 빌드를 합니다.
2. `npm start` 명령어로 시작합니다.
3. 80포트로 웹 서버가 열립니다.

### Docker로 시작하기
1. `docker build --tag askqp .` 명령어로 Docker Image를 만듭니다.
2. `docker run --name askqp -d -p 80:80 -v ./config:/workspace/src/server/config askqp` 명령어로 시작합니다.
3. 80포트롱 웹 서버가 열립니다.

## 설정하기
[이곳](https://github.com/SkyLightQP/Ask/blob/master/src/server/config/config.ts)에서 Firebase 계정 정보를 넣어줍니다.

Docker 사용 시 volume으로 연결한 설정파일을 이용합니다.

## 답변달기
Firebase 관리자패널에서 `answeredAt`에는 답변 날짜, `answer`에는 답변 내용을 적어줍니다.

`answerAt` 내용이 있어야 답변이 등록 된 것으로 간주합니다.