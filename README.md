# MyRobot
crawler\robot by nodejs

# crawler-10010
1. 根据desmobile确定
    ```
    POST http://ad.10010.com/third_uniAdms?target_url=https://m.client.10010.com/mobileService//thirdRedirect.htm?redirect_uri=https://act.10010.com/SigninApp/signin/querySigninActivity.htm

    参数：desmobile=13143683782&version=android@5.72
```
2. 重定向到

    ```
    GET https://m.client.10010.com/mobileService//thirdRedirect.htm?redirect_uri=https://act.10010.com/SigninApp/signin/querySigninActivity.htm&version=android@5.72&desmobile=13143683782 HTTP/1.1
    Host: m.client.10010.com
    Connection: keep-alive
    Pragma: no-cache
    Cache-Control: no-cache
    User-Agent: Mozilla/5.0 (Linux; Android 8.1.0; Redmi Note 5 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36; unicom{version:android@5.72,desmobile:13143683782};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi Note 5}
    Upgrade-Insecure-Requests: 1
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    Accept-Encoding: gzip, deflate
    Accept-Language: zh-CN,en-US;q=0.9
    Cookie: mobileServiceOther=b688a292c0860e8f16c82097fee5080e; app_huidu=908e7122a9cb2b8b84d155fd8c4741e1; nginx_huidu=5861236d5baa93df2b2c8a1a967b1242; mobileServicecb=e47ce2cb30cf05bb56c4e6e4fd5dfc46; mobileService=HYZ1bK7GLsfZh2ThMTywcNY5Dmy5llw65wJvgP79q0n01T2Gb1pk!2106065831; route=af9afe2572c712ad35a0b568efd269f0; enc_acc=A7t76YE74PURyZUTYkuQI3jOuMsdRQyHOIt4qXPEuOLRVdB+Eyi9GVGfJms6YE0RUb+m9trA9GpijChDRvLIx0FaHNcio8ARB97YCW/wmIkW2BwwA6GtXkj5mQ/6WoLmufWv1E5QvciANMufgkqJyaMC2Y78f6nmMxwtz+W5mhQ=; random_login=0; invalid_at=34f9446638d00a40eb0f3c13eacc4c8bcf7020462189537feccffe0ec3fbfd3c; third_token=eyJkYXRhIjoiNjE1MzYyMjg3ZmNhM2RiNTY1Y2FlZWEzNTc0NmM4N2MwNDNlYWU1MTY4MzcxZWQ2OTQyYzQ1NmEyZjc0MzhjZmE2MjU2MTkxZDhhMGU0NTk3NDZiYjgwMTRkNjMzZTAzMzMzZWRlNTMxOTE3YWE4ZmYzNjZiZjYwMjlhNzQxNDU4MTgxMjk3ZjAzM2U2NDMzZGRmZGU4NGQ3ODEyZTZjNSIsInZlcnNpb24iOiIwMCJ9; req_mobile=13143683782; req_serial=; clientid=51|510; req_wheel=ssss; a_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1MjgwMzY0MjQsInRva2VuIjp7ImxvZ2luVXNlciI6IjEzMTQzNjgzNzgyIiwicmFuZG9tU3RyIjoieWg5VTBBQ0IxNTI3NDMxNjI0MDQ0In0sImlhdCI6MTUyNzQzMTYyNH0.wPx_fbrotPAEt-U-Qv94_LsHO6SLB9D8FmFcUrJDi-A8LrfMX4voujLNBbrhaYYhKi6mE29fujjJ8QWRCyAYcg; c_id=0d0c919860203aca0ce1e6b91a05072b09f1ac41de795d634d3ae08f275b766b; u_type=01; u_account=13143683782; c_version=android@5.72; d_deviceCode=868773030383734; c_appId=autoLogin; c_pip=; cw_mutual=6ff66a046d4cb9a67af6f2af5f74c3214dd8f97693bf450d9dc8a815a5c522bf07579c408bf28101b14cd5cbeaed38cc763a3fef1960c8e87178d74dccd8323f; c_mobile=13143683782; wo_family=2; u_areaCode=510; t3_token=b08ef8e014374c589045917686356c7c; c_sfbm=4g_1; Hm_lvt_9208c8c641bfb0560ce7884c36938d9d=1524361807,1525058683; city=051|510; MUT_S=android8.1.0; crazy_doubleggRoute=73934e1a1332562120661b715d394044; req_mobile=13143683782; req_serial=; clientid=51|510; req_wheel=ssss; mobileService=SHHCh1yDLLXndQvt17qKlyppYxssJGh01dXFPpNngqzT8krK6BnZ!-1753757537; telephonefare=vZgvbQVZVMpxmHnvNWlbV0S9XlvJpWxvfnYlXhVFS1PSGw6vbjMn!-267510173; MyAccount=9Q16bCJFw1SbQ0vswn1vhbKYqQFVdyxyQ27LGtHvY2266nQ17f17!435490882; route=0bbc164309a9e91003aae10ff4bc7adf; SigninApp=h2rWbF3pJwcZN4S0hLG3pPY1ZgWn3nyzrfN11RnYWnLfLmyxDhBn!-1596681565; dailylottery=fwbdbGvF1XhKsDSRNKZKr1PsgXxhqkMY59ljz4DJ3B4pFWN2yj5J!-2030585715; gipgeo=51|510; WT_FPC=id=26a45966a5ac5f3f62e1524361806782:lv=1527248977989:ss=1527248977977; myPrizeForActivity=02NybH4HyhZ2kRZVG6fSHQPRYkK1CT2RvPJf7n8flycCMngBsvBb!-1310717271; mallcity=51|510; CaptchaCode=IsMstAZiZwF7THW301e+k79b8XcBlH7spWc9NYZ25ZA=; SHOP_PROV_CITY=; c_sfbm=4g_1
    X-Requested-With: com.sinovatech.unicom.ui


    附带cookie:

    Cookie:
    a_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1MjgwMzY0MjQsInRva2VuIjp7ImxvZ2luVXNlciI6IjEzMTQzNjgzNzgyIiwicmFuZG9tU3RyIjoieWg5VTBBQ0IxNTI3NDMxNjI0MDQ0In0sImlhdCI6MTUyNzQzMTYyNH0.wPx_fbrotPAEt-U-Qv94_LsHO6SLB9D8FmFcUrJDi-A8LrfMX4voujLNBbrhaYYhKi6mE29fujjJ8QWRCyAYcg
    c_mobile=13143683782
    CaptchaCode:IsMstAZiZwF7THW301e+k79b8XcBlH7spWc9NYZ25ZA=
    ```
3. 继续重定向
    ```
    GET https://act.10010.com/SigninApp/signin/querySigninActivity.htm?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1MjgwMzY1MjcsInRva2VuIjp7ImxvZ2luVXNlciI6IjEzMTQzNjgzNzgyIiwicmFuZG9tU3RyIjoieWhwVlRyMzgxNTI3NDMxNzI3Nzc4In0sImlhdCI6MTUyNzQzMTcyN30.WSsG_0Rnv9MIwQheOoFk6eskQfzenQx4U9wtW9S1p9N14v480FaX5JmCjjDrErK8DLEPwDH5amoSzE84JSr3_A HTTP/1.1
    Host: act.10010.com
    Connection: keep-alive
    Pragma: no-cache
    Cache-Control: no-cache
    User-Agent: Mozilla/5.0 (Linux; Android 8.1.0; Redmi Note 5 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36; unicom{version:android@5.72,desmobile:13143683782};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi Note 5}
    Upgrade-Insecure-Requests: 1
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    Accept-Encoding: gzip, deflate
    Accept-Language: zh-CN,en-US;q=0.9
    Cookie: Hm_lvt_9208c8c641bfb0560ce7884c36938d9d=1524361807,1525058683; city=051|510; MUT_S=android8.1.0; clientid=51|510; gipgeo=51|510; WT_FPC=id=26a45966a5ac5f3f62e1524361806782:lv=1527248977989:ss=1527248977977; mallcity=51|510; CaptchaCode=IsMstAZiZwF7THW301e+k79b8XcBlH7spWc9NYZ25ZA=; SHOP_PROV_CITY=; route5=28236c4343d93c202c949a01f768cb28; SigninApp=2bJSbKBQphwLp2GMfVBG6d0hTQhNkL1d1c28QcXyTsY4NlTDvGrW!1518337495
    X-Requested-With: com.sinovatech.unicom.ui

    ```

4、 查询签到信息
    ```
    POST https://act.10010.com/SigninApp/signin/rewardReminder.do?vesion=0.1734209683923713
    Host: act.10010.com
    Connection: keep-alive
    Content-Length: 0
    Pragma: no-cache
    Cache-Control: no-cache
    Accept: application/json, text/javascript, */*; q=0.01
    Origin: https://act.10010.com
    X-Requested-With: XMLHttpRequest
    User-Agent: Mozilla/5.0 (Linux; Android 8.1.0; Redmi Note 5 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36; unicom{version:android@5.72,desmobile:13143683782};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi Note 5}
    Referer: https://act.10010.com/SigninApp/signin/querySigninActivity.htm?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1MjgwMzY1MjcsInRva2VuIjp7ImxvZ2luVXNlciI6IjEzMTQzNjgzNzgyIiwicmFuZG9tU3RyIjoieWhwVlRyMzgxNTI3NDMxNzI3Nzc4In0sImlhdCI6MTUyNzQzMTcyN30.WSsG_0Rnv9MIwQheOoFk6eskQfzenQx4U9wtW9S1p9N14v480FaX5JmCjjDrErK8DLEPwDH5amoSzE84JSr3_A
    Accept-Encoding: gzip, deflate
    Accept-Language: zh-CN,en-US;q=0.9
    Cookie: Hm_lvt_9208c8c641bfb0560ce7884c36938d9d=1524361807,1525058683; city=051|510; MUT_S=android8.1.0; clientid=51|510; gipgeo=51|510; WT_FPC=id=26a45966a5ac5f3f62e1524361806782:lv=1527248977989:ss=1527248977977; mallcity=51|510; CaptchaCode=IsMstAZiZwF7THW301e+k79b8XcBlH7spWc9NYZ25ZA=; SHOP_PROV_CITY=; route5=28236c4343d93c202c949a01f768cb28; SigninApp=2bJSbKBQphwLp2GMfVBG6d0hTQhNkL1d1c28QcXyTsY4NlTDvGrW!1518337495

    返回：
    {"todayIsSignin":"1","ebCount":"1","isGift":"0"}
   ```
5、 签到

6、 抽奖
