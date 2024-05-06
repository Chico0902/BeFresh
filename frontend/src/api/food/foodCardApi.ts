import axiosInstance from '../../utils/axiosConfig';

// 음식 데이터 가져오기
export async function getFoods() {
  try {
    console.log('메인페이지 열면서 음식가져오기')
    const response = await axiosInstance.get('https://be-fresh.site/api/foods');
    console.log('메인 겟요청 보내기')
    return response.data.result;
  } catch (error) {
    console.error('음식 실패:', error);
  }
}
