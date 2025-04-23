const base = {
    get() {
        return {
            url : "http://localhost:8080/xianshangzhaopinwenda/",
            name: "xianshangzhaopinwenda",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xianshangzhaopinwenda/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "线上招聘问答系统"
        } 
    }
}
export default base
