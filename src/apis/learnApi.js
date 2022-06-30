import request from '@/apis/request';

export function apiGetSentenceList(params) {
  return request.get('/learn/sentence/list', { params });
}
