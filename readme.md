# 사용법

## 오케스트레이션 사가 테스트용 노드 서버

노드 서버 구동할 때 포트와 서비스를 다르게 하여 여러 서버 생성

가상의 서비스별 노드 서버를 생성하고 오케스트레이션 사가 개발 시 활용

## node 서버 인스턴스 생성하기

```shell
$ PORT={포트} SVC={서비스} node index.js
# PORT=3000 SVC=coupon node index.js
# PORT=4000 SVC=mileage node index.js
# ...
```
## 서버 구동 확인

브라우저에서 localhost:{포트} 에 접속하여 {서비스} Server is running 문구 확인

예) 브라우저에서 localhost:3000 에 접속하여 "coupon Server is running" 문구 확인

# 노드 서버 사용하기

가능은 사용처리와 롤백처리 두 개 뿐임

## 사용처리 호출하기

- method : POST
- URL : localhost:{포트}/use-{서비스}

```shell
$ curl -i -X POST -H 'Content-Type: application/json' http://localhost:{포트}/use-{서비스}
# curl -i -X POST -H 'Content-Type: application/json' http://localhost:3000/use-coupon
```

## 롤백처리 호출하기

- method : POST
- URL : localhost:{포트}/rollback-{서비스}

```shell
$ curl -i -X POST -H 'Content-Type: application/json' http://localhost:{포트}/rollback-{서비스}
# curl -i -X POST -H 'Content-Type: application/json' http://localhost:3000/rollback-coupon
```

# 개선

- [ ] node script 로 port, service 받도록 변경하기