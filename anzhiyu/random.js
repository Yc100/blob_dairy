var posts=["2023/05/26/20230526-1/","2023/05/31/20230531-1/","2023/05/27/20230601-1/","2023/06/05/20230605-1/","2023/06/08/20230608-1/","2024/05/23/20240523-1/","2024/05/27/20240527-1/","2024/06/05/20240605-1/","2024/06/12/20240607-1/","2021/06/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"},{"name":"李程ic","link":"https://www.licic.net/","avatar":"https://admin.licic.net/favicon.png","descr":"中华人民共和国万岁！","siteshot":"https://admin.licic.net/screenshot.png"},{"name":"Cisyam","hundredSuffix":"","link":"https://manamn.space/","avatar":"https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307151545455.jpg","descr":"分享思想，留下痕迹"},{"name":"科学上网","hundredSuffix":"","link":"https://clashgithub.com","avatar":"https://clashgithub.com/wp-content/themes/modown/static/img/logo.png","descr":"免费公益SSR/V2ray/Shadowrocket/Clash节点/小火箭订阅链接|科学上网|免费梯子"},{"name":"小白API","hundredSuffix":"","link":"https://xiaobai.klizi.cn/","avatar":"http://q2.qlogo.cn/headimg_dl?dst_uin=1242619315&spec=3","descr":"免费的API"},{"name":"呆鱼","link":"https://daiyu.fun/","avatar":"https://daiyu.fun/img/avatar.png","descr":"Hello World！","screenshot":"https://daiyu.fun/img/screenshot.png"},{"name":"ScaredCube’s Site","link":"https://sccube.link","avatar":"https://s.scc.lol/avatar-s","descr":"Hello World!"},{"name":"btwoa","link":"https://blog.btwoa.com","avatar":"https://blog.btwoa.com/btwoa.jpg","descr":"世界为你简单"},{"name":"静若安然","link":"https://www.imets.cn","avatar":"https://www.imets.cn/favicon.ico","descr":"一个宁静的世界"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };