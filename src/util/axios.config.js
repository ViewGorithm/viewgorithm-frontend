import axios from 'axios';

const REFRESH_URL = '/user/refresh';
/*
        이 메소드는 HTTP 요청을 보낼 때 인증 토큰을 요청 헤더에 추가하는 역할의 함수.
        첫번째 파라미터(콜백 함수)는 요청 구성(config)을 인자로 받음. 여기서 config.headers["Authorization"]를 설정하여 요청 헤더에 “Bearer” 타입의 인증 토큰을 추가.
        두번째 파라미터는 에러를 처리하는 함수로, Promise.reject(error)를 반환하여 에러를 처리.
*/
axios.interceptors.request.use(function (config) {
    if (config.url === 'REFRESH_URL') {
        config.headers["Authorization"] = 'Bearer ' + auth.refreshToken;
    }
    config.headers["Authorization"] = 'Bearer ' + auth.getAccessToken();
    return config;
}, function (error) {
    return Promise.reject(error);
});

/*
        이 메소드는 응답 인터셉터로, 서버로부터 응답을 받기 전에 실행되는 함수.
        응답이 성공적으로 도착했을 때는 첫번째 파라미터인 (res) => res 함수가 호출.
        응답이 에러 상태 코드 (예: 401 Unauthorized)를 가지고 있을 때는 두번째 파라미터인 async (err) => {…} 함수가 호출.
        
        즉, 401 에러가 발생했을 때, getRefreshToken() 메소드를 호출하여 새로운 토큰(access, refresh)을 발급.
*/

axios.interceptors.response.use(
    (res) => res,
    async (err) => {
        const { config, response: { status } } = err;

        /** 1 */
        if (config.url === REFRESH_URL || status !== 401 || config.sent) {
            return Promise.reject(err);
        }

        /** 2 */
        config.sent = true;
        const tokens = await getRefreshToken();

        if (tokens) {
            config.headers.Authorization = `Bearer ${tokens.access}`;
        }

        return axios(config);
    }
);