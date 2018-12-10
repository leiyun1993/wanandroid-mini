import baseAPI from "./baseApi.js";
import interfaces from "./interfaces.js";
export default {
  IGetBanner(params) {
    const result = baseAPI.request(interfaces.INTERFACE_GET_BANNER, params, "GET");
    return result;
  },
  IGetArticle(page, params) {
    const result = baseAPI.request("/article/list/" + page + "/json", params, "GET");
    return result;
  },
  IGetWXArticle(userID, page, params) {
    const result = baseAPI.request("/wxarticle/list/" + userID + "/" + page + "/json", params, "GET");
    return result;
  },
  IGetNewProjects(page, params) {
    const result = baseAPI.request("/article/listproject/" + (page - 1) + "/json", params, "GET");
    return result;
  },
  IGetProjects(cid, page, params) {
    const result = baseAPI.request("/project/list/" + page + "/json?cid=" + cid, params, "GET");
    return result;
  },
  IGetCollectList(page, params) {
    const result = baseAPI.request("/lg/collect/list/" + (page-1) + "/json", params, "GET");
    return result;
  },
  IPostUserLogin(params) {
    const result = baseAPI.request(interfaces.INTERFACE_USER_LOGIN, params, "POST");
    return result;
  },
  IPostUserRegister(params) {
    const result = baseAPI.request(interfaces.INTERFACE_REGISTER, params, "POST");
    return result;
  },
  IGetArticleQuery(page,params) {
    const result = baseAPI.request("/article/query/" + (page - 1) + "/json", params, "POST");
    return result;
  },
  IGetHotKey(params) {
    const result = baseAPI.request(interfaces.INTERFACE_HOT_KEY, params, "GET");
    return result;
  },
  IGetTodo(status,page,params){
    const result = baseAPI.request("/lg/todo/v2/list/"+page+"/json?status="+status, params, "GET");
    return result;
  },
  IPostTodoDone(id,params){
    const result = baseAPI.request("/lg/todo/done/" + id + "/json", params, "POST");
    return result;
  },
  IPostTodoDelete(id, params) {
    const result = baseAPI.request("/lg/todo/delete/" + id + "/json", params, "POST");
    return result;
  },
  IPostTodoAdd(params) {
    const result = baseAPI.request("/lg/todo/add/json", params, "POST");
    return result;
  },
  IGetTree(params) {
    const result = baseAPI.request(interfaces.INTERFACE_TREE, params, "GET");
    return result;
  },
  IGetTreeArticle(cid,page, params) {
    const result = baseAPI.request("/article/list/" + (page-1) + "/json?cid="+cid, params, "GET");
    return result;
  },
  IPostCollect(id,params) {
    const result = baseAPI.request("/lg/collect/"+id+"/json", params, "POST");
    return result;
  },
  IPostArticleUnCollect(id,params) {
    const result = baseAPI.request("/lg/uncollect_originId/"+id+"/json", params, "POST");
    return result;
  },
  IPostArticleMyUnCollect(id, params) {
    const result = baseAPI.request("/lg/uncollect/" + id + "/json", params, "POST");
    return result;
  },
}