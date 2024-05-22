import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,a as d}from"./app-OHhlwNoJ.js";const l={},s=d(`<p>很久之前就被封了，没法用，但API文档和SDK还留着，可以作为参考</p><p>接口：可以查看小栗子API助手</p><ul><li>本地文件/小栗子框架 <ul><li>其他 <ul><li>API助手2.0</li><li>易语言API伴侣</li></ul></li><li>CornerstoneSDK-1.0.2 (C)</li><li>SDK_2.8.8.0</li><li>httpapi_new</li></ul></li></ul><p>其中，HTTP API 文档：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.2.2.4
文档参考:HTTP API,小栗子sdk

框架QQ就是登录的QQ号

共享内存，定时任务用法见高级.txt
插件暂不支持https,wss,建议:使用nginx等于本地进行代理
所有md5()均小写
身份验证:加入cookies如下
  user:用户名
  timestamp:10位Unix时间戳，与服务端所在机器时间戳差±200秒内即可
  signature:md5(用户名+请求路径+md5(密码)+timestamp)
例如:user=xzfg; timestamp=1622051742; signature=&lt;md5(&quot;xzfg/getlogonqq&quot;+md5(&quot;testpwd1&quot;)+&quot;1622051742&quot;)&gt;;
1.1.0.4及以后的版本支持请求头传递参数,user对应H-Auth-User,signature对应H-Auth-Signature,timestamp对应H-Auth-Timestamp
若请求使用get,signature使用问号前的路径计算
若请求来自127.0.0.1则无需也不进行身份验证,若有特殊需求,请在菜单-设置中开启本地请求使用身份验证
可以不设置密码(强烈不推荐这种做法)
强烈建议手动配置权限，只开启需要的权限，自己不了解的权限不要开启
所有用户(root除外)的权限均继承Authenticated Users(意思就是说Authenticated Users有的权限别的用户(root除外)才能有),root和Authenticated Users不可被登录
1.1.0.7及以后的版本可加入请求头H-Ret-Encoding指定返回数据编码类型(目前支持usc2)，事件上报可在上报地址前加usc2:(例如usc2:http://1.1.1.1/1.php)
若以json方式提交，请在请求头加入Content-Type: application/json

可以使用菜单-测试工具测试请求
注意:插件内置测试工具直接使用root调用内部RequestHandler,用户使用时请将path前部&quot;/&quot;去掉
path:请求路径
name:参数名
data:参数值

欢迎加入xzfg开发群:942512455

[WebSocket]接收消息/执行函数:/ws
发送:method=路径&amp;id=ID&amp;...
例如:method=sendgroupmsg&amp;id=114514&amp;logonqq=257247520&amp;group=942512455&amp;msg=hello
ws心跳:method=heartbeat
  注意:ws连接10s超时，请另开线程发送心跳(发送:type=heartbeat)，收到的heartbeatreply用于客户端判断是否掉线。要对/ws使用身份验证，可直接在请求路径中传递参数，signature使用&quot;/ws&quot;作为请求路径计算，例如：/ws?user=xzfg&amp;timestamp=1622051742&amp;signature=&lt;md5(&quot;xzfg/ws&quot;+md5(&quot;testpwd1&quot;)+&quot;1622051742&quot;)&gt;
[POST,GET]输出日志:/addlog
  log:日志文本 textclr:文字颜色 bgclr:背景颜色
[POST,GET]发送好友消息:/sendprivatemsg
  type:类型(xml/json/留空) logonqq:框架QQ toqq:对方QQ msg:消息文本
[POST,GET]发送群消息:/sendgroupmsg
  type:类型(xml/json/留空) logonqq:框架QQ group:群号 msg:消息文本 anonymous:是否匿名(true,false)
[POST,GET]发送群临时消息:/sendgrouptempmsg
  logonqq:框架QQ group:群号 toqq:对方QQ msg:消息文本
[POST,GET]发送讨论组消息:/senddiscussionmsg
  type:类型(xml/json/留空) logonqq:框架QQ discussionid:讨论组ID msg:消息文本
[POST,GET]发送讨论组临时消息:/senddiscussiontempmsg
  logonqq:框架QQ discussionid:讨论组ID toqq:对方QQ msg:消息文本
[POST,GET]添加好友:/addfriend
  logonqq:框架QQ toqq:对方QQ msg:验证消息文本 remark:备注
[POST,GET]添加群:/addgroup
  logonqq:框架QQ group:群号 msg:消息文本
[POST,GET]删除好友:/deletefriend
  logonqq:框架QQ toqq:对方QQ
[POST,GET]置屏蔽好友:/blockfriend
  logonqq:框架QQ toqq:对方QQ isblock:是否屏蔽(true,false)
[POST,GET]置特别关心好友:/speccarefriend
  logonqq:框架QQ toqq:对方QQ iscare:是否特别关心(true,false)
[POST,GET]上传好友图片:/uploadfriendpic
  logonqq:框架QQ toqq:对方QQ isflash:是否闪照(true,false) type:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:图片(类型由type参数决定) width:宽度 height:高度 isgif:是否动图(true,false)
[POST,GET]上传群图片:/uploadgrouppic
  logonqq:框架QQ group:群号 isflash:是否闪照(true,false) type:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:图片(类型由type参数决定) width:宽度 height:高度 isgif:是否动图(true,false)
[POST,GET]上传好友语音:/uploadfriendaudio
  logonqq:框架QQ toqq:对方QQ audiotype:语音类型 text:语音文字 type:audio参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) audio:语音(类型由type参数决定) time:时长
[POST,GET]上传群语音:/uploadgroupaudio
  logonqq:框架QQ group:群号 audiotype:语音类型 text:语音文字 type:audio参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) audio:语音(类型由type参数决定) time:时长
[POST,GET]上传头像:/uploadfacepic
  logonqq:框架QQ type:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:图片(类型由type参数决定)
[POST,GET]设置群名片:/setgroupcard
  logonqq:框架QQ group:群号 toqq:对方QQ newcard:新名片
[POST,GET]取昵称:/getnickname
  logonqq(强制取昵称时需要):框架QQ toqq:对方QQ fromcache:是否从缓存取(true,false)
[POST,GET]获取skey:/getskey
  logonqq:框架QQ
[POST,GET]获取pskey:/getpskey
  logonqq:框架QQ domain:域
[POST,GET]获取clientkey:/getclientkey
  logonqq:框架QQ
[POST,GET]取框架QQ:/getlogonqq
[POST,GET]取好友列表:/getfriendlist
  logonqq:框架QQ
[POST,GET]取群列表:/getgrouplist
  logonqq:框架QQ
[POST,GET]取群成员列表:/getgroupmemberlist
  logonqq:框架QQ group:群号
[POST,GET]设置管理员:/setgroupadmin
  logonqq:框架QQ group:群号 toqq:对方QQ unadmin:取消管理员(true,false)
[POST,GET]取群管理层列表:/getgroupadminlist
  logonqq:框架QQ group:群号
[POST,GET]取群名片:/getgroupcard
  logonqq:框架QQ group:群号 toqq:对方QQ
[POST,GET]取个性签名:/getsignat
  logonqq:框架QQ toqq:对方QQ
[POST,GET]修改昵称:/setnickname
  logonqq:框架QQ nickname:新昵称
[POST,GET]修改个性签名:/setsignat
  logonqq:框架QQ signat:签名 pos:签名地点
[POST,GET]删除群成员:/kickgroupmember
  logonqq:框架QQ group:群号 toqq:对方QQ(批量用|分割) ignoreaddgrequest:拒绝加群申请(true,false)
[POST,GET]禁言群成员:/mutegroupmember
  logonqq:框架QQ group:群号 toqq:对方QQ time:禁言时长
[POST,GET]退群:/exitgroup
  logonqq:框架QQ group:群号 dismiss:是否解散群(true,false)
[POST,GET]上传群头像:/uploadgroupfacepic
  logonqq:框架QQ group:群号 type:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:图片(类型由type参数决定)
[POST,GET]全员禁言:/mutegroup
  logonqq:框架QQ group:群号 ismute:是否禁言
[POST,GET]设置群权限:/setgrouppriv
  type:类型(newgroup:发起新的群聊 newtempsession:发起临时会话 uploadfile:上传文件 uploadimage:上传图片 invitefriend:邀请好友加群 anonymouschat:匿名聊天 tanbaishuo:坦白说 viewhistmsg:新成员查看历史消息 isallow:是否允许(true,false)
[POST,GET]设置群权限:/setgrouppriv
  type:类型(setinviteway:邀请方式设置 limitmsgspd:限制发言频率 setnicknamerule:设置群昵称规则 setsearchway:设置群查找方式) value:值[(setintiveway:1 无需审核;2 需要管理员审核;3 100人以内无需审核)(limitmsgspd:限制每分钟多少条发言,为0表示无限制)(setnicknamerule:对于易语言不支持的utf8字符,需usc2编码)(setsearchway:0不允许,1通过群号或关键词,2仅可通过群号,默认1)]
[POST,GET]撤回消息:/deletemsg
  type:类型(private:私聊消息 group:群消息 discussion:讨论组消息) logonqq:框架QQ toqq:对方QQ(私聊消息可用) discussionid:讨论组id(讨论组消息可用) group:群号(群消息可用) random:消息random req:消息req time:消息time
[POST,GET]设置位置共享:/setsharepos
  logonqq:框架QQ group:群号 long:经度 lat:纬度 enable:是否开启(true,false)
[POST,GET]上报当前位置:/uploadpos
  logonqq:框架QQ group:群号 long:经度 lat:纬度
[POST,GET]取禁言时长:/getmutetime
  logonqq:框架QQ group:群号
[POST,GET]处理群验证事件:/setgroupaddrequest
  logonqq:框架QQ group:群号 fromqq:来源QQ seq:消息Seq optype:操作类型(11同意 12拒绝  14忽略) eventtype:事件类型(1:我被邀请加入群 3:某人申请加群) reason:拒绝理由 isrisk:是否为风险号(true,false)
[POST,GET]处理好友验证事件:/setfriendaddrequest
  logonqq:框架QQ fromqq:来源QQ seq:消息Seq optype:操作类型(1同意 2拒绝)
[POST,GET]获取转发聊天记录内容:/getforwardedmsg
  logonqq:框架QQ resid:resid
[POST,GET]上传群文件(无返回):/uploadgroupfile
  logonqq:框架QQ group:群号 localpath:本地文件路径 remotepath:群文件夹名
[POST,GET]创建群文件夹:/creategroupfolder
  logonqq:框架QQ group:群号 name:文件夹名
[POST,GET]重命名群文件夹:/renamegroupfolder
  logonqq:框架QQ group:群号 oldname:旧文件夹名 newname:新文件夹名
[POST,GET]删除群文件夹:/deletegroupfolder
  logonqq:框架QQ group:群号 name:文件夹名
[POST,GET]删除群文件:/deletegroupfile
  logonqq:框架QQ group:群号 fileid:文件id folder:文件夹名
[POST,GET]保存文件到微云:/savefiletowydrive
  logonqq:框架QQ group:群号 fileid:文件id 
[POST,GET]移动群文件:/movegroupfile
  logonqq:框架QQ group:群号 fileid:文件id folder:文件夹 newfolder:新文件夹
[POST,GET]取群文件列表:/getgroupfilelist
  logonqq:框架QQ group:群号 folder:文件夹
[POST,GET]设置在线状态:/setonlinestate
  logonqq:框架QQ main:主状态(11在线 31离开 41隐身 50忙碌 60Q我吧 70请勿打扰) sun:子状态(当main=11时，可进一步设置 0普通在线 1000我的电量 1011信号弱 1024在线学习 1025在家旅游 1027TiMi中 1016睡觉中 1017游戏中 1018学习中 1019吃饭中 1021煲剧中 1053汪汪汪 1032熬夜中 1050打球中 1051恋爱中 1052我没事 1028我在听歌 40001在地球 41042移动中 41033在小区 41034在学校 41035在公园 41036在海边 41037在机场 41038在商场 41039在咖啡厅 41041在餐厅 1022度假中 1020健身中 1056嗨到起飞 1058元气满满 1057美滋滋 1059悠哉哉 1060无聊中 1061想静静 1062我太难了 1063一言难尽 1064吃鸡中 1069遇见春天) power:电量(sun=1000时，可以设置上报电量，取值1到100，如果想显示正在充电，取值为128+电量)
[POST,GET]QQ点赞:/sendlike
  logonqq:框架QQ toqq:对方QQ
[POST,GET]取图片下载地址:/getphotourl
  photo:图片代码 logonqq:框架QQ group:群号
[POST,GET]查询好友信息(也可查非好友,返回的json中vips.type:1SVIP 113QQ大会员 105微云会员 101红钻 102黄钻 103绿钻 104情侣黄钻 4腾讯视频VIP 107SVIP+腾讯视频 110SVIP+QQ音乐 108大王超级会员):/queryfriendinfo
  logonqq:框架QQ toqq:对方QQ
[POST,GET]查询群信息:/querygroupinfo
  logonqq:框架QQ group:群号
[POST,GET]转发文件:/forwardfile
  type:类型(1 群文件转发至群 2 群文件转发至好友 3 好友文件转发至好友 4:讨论组文件转发至群 5:讨论组文件转发至好友) logonqq:框架QQ fromgroup:来源群号(type为1,2可用) toqq:目标QQ(type为2,3,5可用) togroup:目标群号(type为1,4可用) fileid:文件ID filename:文件名(type为2,3,4,5可用) filesize:文件大小(type为2,3,4,5可用)
[POST,GET]置群消息接收:/setgroupmsgreceive
  logonqq:框架QQ group:群号 settype:设置类型(1接收并提醒 2收进群助手 3屏蔽群消息 4接收不提醒)
[POST,GET]取好友在线状态:/getfriendonlinestate
  logonqq:框架QQ toqq:对方QQ
[POST,GET]取QQ钱包个人信息:/getqqwalletinfo
  logonqq:框架QQ
[POST,GET]获取订单详情:/getorderinfo
  logonqq:框架QQ ordernum:订单号
[POST,GET]提交支付验证码:/submitpayvfcode
  logonqq:框架QQ vfcode:验证码 paypwd:支付密码 token_id skey bank_type mobile business_type random transaction_id purchaser_id token auth_params
[POST,GET]分享音乐:/sharemusic
  logonqq:框架QQ to:对方(类型由totype决定) songname:歌曲名 singername:歌手名 jumpurl:跳转地址 imageurl:封面地址 fileurl:文件地址 apptype:应用类型(0QQ音乐 1虾米音乐 2酷我音乐 3酷狗音乐 4网易云音乐 默认0) totype:对方类型(0私聊 1群聊 2讨论组 默认0)
[POST,GET]发送群红包(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/sendgroupredpacket
  type:类型(norm:普通红包 lucky:拼手气红包 key:口令红包 draw:画图红包 audio:语音红包 jielong:接龙红包 exclusive:专属红包 rareword:生僻字红包) logonqq:框架QQ count:总数量 amount:总金额 group:群号 to:领取人(仅专属红包可用) text:文本 skinid:皮肤ID(1522光与夜之恋,1527代号:三国(打了一辈子仗),1525街霸:对决,1518代号:三国(俺送红包来了),1476天涯明月刀,1512一人之下。其他皮肤id自己找,仅普通红包|拼手气红包可用) isavg:是否均分(仅专属红包可用) paypwd:支付密码 bankcardid:银行卡序列(大于0时使用银行卡支付)
[POST,GET]发送好友红包(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/sendfriendredpacket
  type:类型(norm:普通红包 key:口令红包 draw:画图红包 audio:语音红包 jielong:接龙红包 rareword:生僻字红包) logonqq:框架QQ count:总数量 amount:总金额 toqq:对方QQ text:文本 skinid:皮肤ID(1522光与夜之恋,1527代号:三国(打了一辈子仗),1525街霸:对决,1518代号:三国(俺送红包来了),1476天涯明月刀,1512一人之下。其他皮肤id自己找,仅普通红包可用) paypwd:支付密码 bankcardid:银行卡序列(大于0时使用银行卡支付)
[POST,GET]设置专属头衔:/setspectitle
  logonqq:框架QQ group:群号 toqq:对方QQ spectitle:头衔
[POST,GET]登录指定QQ:/loginqq
  logonqq:框架QQ
[POST,GET]下线指定QQ:/logoutqq
  logonqq:框架QQ
[POST,GET]取群未领红包列表:/getgroupnoreredpacketlist
  logonqq:框架QQ group:群号
[POST,GET]设置输入状态:/setinputstate
  logonqq:框架QQ toqq:对方QQ state:输入状态(1:正在输入,2:关闭显示,3:正在说话)
[POST,GET]修改资料:/modifyprofile
  logonqq:框架QQ nickname:昵称 sex:性别(1:男 2:女,默认男) birthday:生日(格式：2020/5/5 均为整数) occupaction:职业(1:IT,2:制造,3:医疗,4:金融,5:商业,6:文化,7:艺术,8:法律,9:教育,10:行政,11:模特,12:空姐,13:学生,14:其他职业，默认1) company:公司名 location:所在地(国家代码|省份代码|市代码|区字母|区代码，如：49|13110|56|NK|51，表示中国江西省吉安市青原区，这些数据是腾讯的数据，非国际数据) hometown:家乡(国家代码|省份代码|市代码|区字母|区代码，如：49|13110|56|NI|50，表示中国江西省吉安市吉州区，这些数据是腾讯的数据，非国际数据) email:邮箱 description:个人说明
[POST,GET]取文件下载地址:/getfileurl
  type:类型(group:群 friend:好友 discussion:讨论组) logonqq:框架QQ group:群号(群文件可用) discussionid:讨论组ID(讨论组文件可用) fileid:文件ID filename:文件名
[POST,GET]打好友电话:/callfriend
  logonqq:框架QQ toqq:对方QQ
[POST,GET]头像双击:/doubleclickavator
  type:类型(friend:私聊 group:群聊) logonqq:框架QQ toqq:对方QQ group:群号(群聊可用)
[POST,GET]取群成员简略信息:/getgrouppreview
  logonqq:框架QQ group:群号
[POST,GET]消息置顶:/setmsgtop
  type:类型(qq:私聊 group:群聊) logonqq:框架QQ qq:对方QQ(私聊可用) group:群号(群聊可用) istop:是否置顶(true,false)
[POST,GET]取加群链接:/getaddgurl
  logonqq:框架QQ group:群号
[POST,GET]设置精华消息:/setessencemsg
  logonqq:框架QQ group:群号 req:消息req random:消息random isessence:是否精华(true,false)
[POST,GET]邀请好友加群:/invitefriendtogroup
  logonqq:框架QQ togroup:目标群号 fromgroup:来源群号 qq:对方QQ(批量用|分割)
[POST,GET]置群内消息通知(置群内指定QQ消息通知类型,成功返回真,失败或无权限返回假):/setgroupmembermsgrecv
  logonqq:框架QQ group:群号 toqq:对方QQ type:通知类型(0不接收此人消息,1特别关注,2接收此人消息,默认2)
[POST,GET]修改群名称(修改群名称,成功返回真,失败或无权限返回假,需要管理员权限):/setgroupname
  logonqq:框架QQ group:群号 name:名称(新的群名称)
[POST,GET]下线其他设备(下线本QQ的其他已登录设备):/logoutotherdev
  logonqq:框架QQ ismobile:是否移动设备(true,false) appid:appid(若是移动设备，必填，移动设备的appid可以通过[登录事件_移动设备上线]事件来获取)
[POST,GET]登录网页取ck(失败或无权限返回空白):/getloginurlcookie
  logonqq:框架QQ url:回调跳转地址(如QQ空间是：https://h5.qzone.qq.com/mqzone/index) appid:appid(如QQ空间是：549000929) daid:daid(如QQ空间是：5)
[POST,GET]发送群公告(http):/sendgroupannouncement
  logonqq:框架QQ group:群号 title:标题(支持emoji表情,如：\\uD83D\\uDE01) content:内容(支持emoji表情,如：\\uD83D\\uDE01) type:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:图片(在公告当中插入图片,如果设置了[腾讯视频]参数,则不显示图片只显示视频) video:视频(公告当中插入视频,只支持腾讯视频,如：https://v.qq.com/x/cover/4gl2i78zd9idpi0/j0024zknymk.html) ispopup:弹窗展示(默认假) isneedconfirm:需要确认(默认假) istop:置顶(默认假) issendtonewmember:发送给新成员(默认假) isguidetosetgroupcard:引导修改群昵称(默认假)
[POST,GET]取框架版本(无权限限制):/getxiaolzver
[POST,GET]取群成员信息(获取一个群成员的相关信息):/getgroupmemberinfo
  logonqq:框架QQ group:群号 toqq:对方QQ
[POST,GET]取钱包cookie(敏感API,框架会自动刷新):/getwalletcookie
  logonqq:框架QQ
[POST,GET]取群网页cookie(敏感API,框架会自动刷新):/getgroupwebcookie
  logonqq:框架QQ
[POST,GET]转账(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/transferaccount
  logonqq:框架QQ amount:转账金额(单位分) toqq:对方QQ text:转账留言(支持emoji) type:转账类型(0好友转账,1陌生人转账,默认0) paypwd:支付密码 bankcardid:银行卡序列(大于0时使用银行卡支付)
[POST,GET]取收款链接(返回收款链接,可借此生成收款二维码):/getcollectionurl
  logonqq:框架QQ amount:收款金额(指定收款金额,单位：分) description:说明文本(备注)
[POST,GET]取小视频下载地址(成功返回json含下载链接):/getshortvideourl
  type:类型(private:私聊 group:群聊) logonqq:框架QQ fromgroup:来源群号(群聊可用) fromqq:来源QQ param:param(可通过文本代码获取) hash1:hash1(可通过文本代码获取) filename:文件名(xxx.mp4,必须带上文件后缀)
[POST,GET]上传小视频(成功返回文本代码,使用的手机录小视频入口,因此不支持较大文件):/uploadshortvideo
  logonqq:框架QQ group:群号(得到的文本代码也可在私聊使用,上传到私聊时,群号可乱填) type:video参数类型(path:本地路径 url:网络路径 usermem:共享内存id usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) video:小视频 pictype:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:小视频封面图 width:宽度 height:高度 time:时长
[POST,GET]取群成员概况(成功返回json,含有群上限、群人数、群成员统计概况):/getgroupsurvey
  logonqq:框架QQ group:群号
[POST,GET]添加好友_取验证类型(成功返回验证类型json,失败返回403无权限或404未找到对应框架QQ或405框架QQ未登录,ret：101已是好友 2拒绝添加 1需要身份验证 0任何人可添加 4需要回答问题,并返回所有需要回答的问题 3需要正确回答问题,并返回需要回答的问题):/getaddvftype
  type:类型(friend:好友 group:群) logonqq:框架QQ toqq:对方QQ(好友可用) group:群号(群可用)
[POST,GET]群聊打卡(返回json):/groupclockin
  logonqq:框架QQ group:群号
[POST,GET]群聊签到(成功返回真,失败或无权限返回假,传入附加参数自定义签到内容(附加参数可抓旧版QQhttp数据获得)):/groupsignin
  logonqq:框架QQ group:群号 param:附加参数(签到数据,如:template_data=&amp;gallery_info=%7B%22category_id%22%3A9%2C%22page%22%3A0%2C%22pic_id%22%3A124%7D&amp;template_id=%7B%7D&amp;client=2&amp;lgt=0&amp;lat=0&amp;poi=&amp;pic_id=&amp;text=%E5%AD%A6%E4%B9%A0%E6%89%93%E5%8D%A1)
[POST,GET]置群聊备注(成功返回真,失败返回假,无权限返回假):/setgroupremark
  logonqq:框架QQ group:群号 remark:备注
[POST,GET]红包转发(转发自己的红包到其他群或好友或讨论组):/forwardredpacket
  logonqq:框架QQ redpacketid:红包ID to:目标对象(以Type类型为准,如果是1则判断为QQ号2则判断为群号3则判断为讨论组号) type:Type(1为好友,2为群,3为讨论组)
[POST,GET]发送数据包(向腾讯服务器发送数据包(完整的原始包),无权限等返回假,加密秘钥通过【取sessionkey】API获取,返回BASE64编码):/sendpacket
  logonqq:框架QQ ssoseq:包体序号(ssoseq,通过【请求ssoseq】API获取) maxwaittime:最大等待时长(毫秒,不填或小于0时不等待返回包,大于0时等待返回包) packet:数据(BASE64编码)
[POST,GET]请求ssoseq(无权限等返回0):/getssoseq
  logonqq:框架QQ
[POST,GET]取sessionkey:/getsessionkey
  logonqq:框架QQ
[POST,GET]获取bkn_gtk(返回网页用到的bkn或者gtk,也可以自定义计算的值):/getbkn_gtk
  logonqq:框架QQ custombkngtk:自定义bkn_gtk(如果此参数不为空值则提交自定义值,否则框架返回内部值)
[POST,GET]置好友验证方式(修改添加好友的方式,成功返回真,失败或无权限返回假):/setaddfvfmethod
  logonqq:框架QQ method:验证方式(1：禁止任何人添加 2：允许任何人添加 3：需要验证信息 4：需要正确回答问题 5：需要回答问题并由我确认) qa:Q_and_A(可空,如果类型为4则填写问题和答案用‘|’分割,如果类型为5则根据情况填写问题至少一个最多三个问题,用‘|’分割)
[POST,GET]上传照片墙图片(上传一照片至照片墙,成功返回带有‘上传成功’字样的json,失败或无权限返回json):/uploadphotowall
  type:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:图片 logonqq:框架QQ
[POST,GET]付款(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/pay
  logonqq:框架QQ qrcodeurl:QrcodeUrl(QQ钱包支付二维码内容(需要自己识别二维码,将识别结果填入)) bankcardid:银行卡序列(大于0则表示使用银行卡支付反之用余额支付) paypwd:支付密码
[POST,GET]修改支付密码(修改QQ钱包支付密码,成功返回json retcode=0 ,失败或无权限返回其他值):/resetpaypwd
  logonqq:框架QQ oldpwd:原密码(6位数字原密码) newpwd:新密码(6位数字新密码)
[POST,GET]账号搜索(对一个关键词进行简略搜索,通过关键词一般返回3个QQ号信息和群信息,成功返回json retcode=0 ,失败或无权限返回其他值):/searchaccount
  logonqq:框架QQ keyword:关键词(关键词，支持QQ号、群号、昵称等，支持emoji)
[POST,GET]获取红包领取详情(只有领取过该红包才能成功查询,返回腾讯原始json数据):/getredpacketdetail
  logonqq:框架QQ fromgroup:来源群号(红包为好友红包时,此参数可以省略,为讨论组时此处为讨论组Id) redpacket:红包文本代码 type:红包类型(1:好友,2:群,3:讨论组,其他:群临时)
[POST,GET]取扩列资料(取对方的扩列资料,即使对方隐藏也可以查询):/getextensioninfo
  logonqq:框架QQ toqq:对方QQ
[POST,GET]取资料展示设置(支持查询他人的设置):/getinfoshowset
  logonqq:框架QQ toqq:对方QQ
[POST,GET]设置资料展示(设置QQ资料卡显示什么、不显示什么,注意！数据每一项都必须被定义！,整数型(0所有人可见 1仅好友可见 2所有人不可见),逻辑型(false 关闭 true 开启),类型请参考getinfoshowset):/setinfoshowset
  logonqq:框架QQ sex:性别 age:年龄 birthday:生日 constellation:星座 occupation:职业 company:公司 school:学校 location:所在地 hometown:故乡 email:邮箱 description:个人说明 我的王者战绩 我的粉籍 个性标签 匿问我答 人生成就 最近常听 收到礼物 最近在玩 我的音乐盒 随心贴 我的小世界 我的微视 扩列资料
[POST,GET]获取当前登录设备信息:/getlogondevinfo
  logonqq:框架QQ
[POST,GET]提取图片文字(tcp):/photoocr
  logonqq:框架QQ url:图片地址(需要有效的图片地址,支持https)
[POST,GET]TEA加密(BASE64编码):/teacrypt
  type:类型(encry:加密 decry:解密) data:内容(BASE64编码) key:秘钥(BASE64编码)
[POST,GET]红包数据加密(无权限限制 DES ECB No Padding):/redpacketcrypt
  type:类型(encry:加密 decry:解密) str:str random:random
[POST,GET]红包msgno计算(无权限限制):/getredpacketmsgno
  logonqq:目标QQ
[POST,GET]取QQ空间cookie(敏感API,框架会自动刷新):/getqzonecookie
  logonqq:框架QQ
[POST,GET]查询网址安全性(403无权限,404框架QQ不存在,405框架QQ未登录,0正常访问,-1查询失败,1包含不安全内容,2非官方页面,3未知状态):/queryurlsecurity
  logonqq:框架QQ url:网址
[POST,GET]取卡片消息代码(无权限限制,传入卡片消息文本代码,返回卡片消息代码):/getcardmsg
  card:卡片消息文本代码(如: [customNode,key=xx,val=xx])
[POST,GET]禁言群匿名(失败或无权限返回假):/mutegroupanonymous
  logonqq:框架QQ group:群号 anonymousname:匿名昵称(可通过群聊消息数据获得) anonymousid:匿名标识(可通过群聊消息数据获得,同一个匿名每条消息发送时的标识都不同,解除禁言时,此为对方最后一次发言时的标识) time:禁言时长(单位：秒，为0时解除禁言)
[POST,GET]领取私聊普通红包(仅仅支持好友、群临时，仅限于普通红包):/getredpacket/private/normal
  logonqq:框架QQ fromqq:来源QQ(红包发送者QQ) redpacket:红包文本代码(红包消息的文本代码) type:类型(0好友红包,1群临时红包)
[POST,GET]领取群聊专属红包(仅仅支持群聊下的专属红包(当然指的是给自己的专属红包)):/getredpacket/group/exclusive
  logonqq:框架QQ group:来源群号(红包来源群号) fromqq:来源QQ(红包发送者QQ) redpacket:红包文本代码(红包消息的文本代码)
[POST,GET]回复QQ咨询会话(当对方通过QQ咨询联系你,但是对方未开启QQ咨询时,只能通过此API进行回复):/replyconsult
  logonqq:框架QQ toqq:对方QQ token:会话Token(私聊消息数据.会话token,具有时效性,是对方推送的) msg:消息内容
[POST,GET]发送订阅号私聊消息:/sendsubscriptionmsg
  logonqq:框架QQ subscriptionid:订阅号Id msg:消息内容
[POST,GET]取讨论组名称_从缓存(失败或无权限返回空,从缓存取讨论组名(当取出为空时,先使用【取讨论组成员列表】,之后缓存内便有讨论组的名称)):/getdiscussionname
  discussionid:讨论组Id(同：群消息数据.消息群号)
[POST,GET]强制取自身匿名Id(禁止在其他设备更换匿名,否则匿名相关功能无效):/forcegetanonymousid
  logonqq:框架QQ group:群号
[POST,GET]取订阅号列表:/getsubscriptionlist
  logonqq:框架QQ
[POST,GET]取讨论组列表:/getdiscussionlist
  logonqq:框架QQ
[POST,GET]邀请好友加入讨论组(失败或无权限返回假):/invitefriendtodiscussion
  logonqq:框架QQ discussionid:目标讨论组Id qq:邀请QQ(多个QQ用|分割) fromgroup:来源群号(若邀请QQ来源是群成员，则在此说明群号，否则留空，表明来源是好友)
[POST,GET]取框架到期时间(无权限限制,返回示例：2025/1/1 00:00:00,年月日无补零,时分秒有补零):/getxlzexpire
[POST,GET]发送讨论组红包(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/senddiscussionredpacket
  type:类型(norm:普通红包 lucky:拼手气红包 key:口令红包 draw:画图红包 audio:语音红包 jielong:接龙红包 exclusive:专属红包 rareword:生僻字红包) logonqq:框架QQ count:总数量 amount:总金额(单位分) discussionid:讨论组Id text:文本 skinid:红包皮肤Id(1522光与夜之恋,1527代号:三国(打了一辈子仗),1525街霸:对决,1518代号:三国(俺送红包来了),1476天涯明月刀,1512一人之下。其他皮肤id自己找,仅普通红包|拼手气红包可用) to:领取人(仅专属红包可用) isavg:是否均分(仅专属红包可用) paypwd:支付密码 bankcardid:银行卡序列(大于0时使用银行卡支付)
[POST,GET]取讨论组未领红包(成功返回未领红包，注意：使用此API获取的红包只能用手Q上&quot;讨论组未领红包&quot;入口的http请求领取):/getdiscussionnoreredpacketlist
  logonqq:框架QQ discussionid:讨论组Id
[POST,GET]发送QQ咨询会话(当对方开启了QQ咨询,则可通过QQ咨询主动向对方发送消息,若对方没有开启QQ咨询,则只能使用API【回复QQ咨询会话】进行回复):/sendconsult
  logonqq:框架QQ toqq:对方QQ msg:消息内容
[POST,GET]创建群聊(成功参考传回新群群号):/newgroup
  logonqq:框架QQ qq:邀请QQ(多个用|分割) fromgroup:来源群号(若邀请QQ来源是群成员，则在此说明群号，否则留空，表明来源是好友)
[POST,GET]取群应用列表(成功返回群应用数量):/getgroupapplist
  logonqq:框架QQ group:群号
[POST,GET]退出讨论组(失败或无权限返回假):/exitdiscussion
  logonqq:框架QQ discussionid:讨论组Id
[POST,GET]群验证消息接收设置(设置指定管理员是否接收群验证消息,失败或无权限返回假,需要机器人为群主,否则无法设置):/setaddgrouprequestrecv
  logonqq:框架QQ group:群号 toqq:对方QQ(管理员QQ) isrecv:是否接收验证消息(true,false)
[POST,GET]转让群(需要机器人为群主,需要新群主具备转让资格):/transfergroup
  logonqq:框架QQ group:群号 toqq:对方QQ(新群主QQ,可以是管理员、普通成员,只要对方有转让资格即可)
[POST,GET]修改好友备注(失败或无权限返回假):/setfriendremark
  logonqq:框架QQ toqq:对方QQ(好友QQ) remark:备注(新的备注)
[POST,GET]删除讨论组成员(失败或无权限返回假,需要机器人为讨论组拥有者,否则没有权限):/kickdiscussionmember
  logonqq:框架QQ discussionid:讨论组Id toqq:对方QQ
[POST,GET]取QQ头像(获取QQ头像,无权限限制,默认返回低像素链接,注意:部分QQ,比如透明头像的QQ,是没有高清头像的,取出来是鹅,只能取低像素头像):/getqqfacepic
  toqq:对方QQ ishd:是否高清原图(true,false)(注意:部分QQ,比如透明头像的QQ,是没有高清头像的,取出来是鹅,只能取低像素头像)
[POST,GET]取群头像(无权限限制):/getgroupfacepic
  group:目标群号(讨论组、多人群没有群头像,取出来是腾讯默认群头像图片)
[POST,GET]取大表情图片下载地址(无权限限制,支持付费表情包):/getbigfacepicurl
  bigface:大表情文本代码(大表情其实就是表情包表情) width:长(默认300(部分付费表情包可能是260,但基本上都是300,遇到取出的链接无效时,请尝试更改此值)) height:宽(默认300(部分付费表情包可能是260,但基本上都是300,遇到取出的链接无效时,请尝试更改此值))
[POST,GET]拉起群收款(成功时,参考传回收款订单号(不支持讨论组,讨论组相关功能[AA收款]已被腾讯下架)):/sendgroupcollection
  logonqq:框架QQ group:群号 payerlist:待付款成员(自定义付款成员和付款金额,json,例如{&quot;list&quot;:[{&quot;qq&quot;:123456,&quot;needpay&quot;:2000},{&quot;qq&quot;:234567,&quot;needpay&quot;:4000}]},qq为付款者qq,needpgay为待付款金额,单位分) text:收款留言(可以写明收款理由)
[POST,GET]结束群收款(只能结束自己拉起的):/stopgroupcollection
  logonqq:框架QQ ordernum:收款订单号(待结束的订单号)
[POST,GET]查询群收款状态(支持查询他人拉起的群收款,成功时,参考传回数据):/querygroupcollectionstate
  logonqq:框架QQ ordernum:收款订单号(待查询的收款订单号)
[POST,GET]支付群收款(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/paygroupcollection
  logonqq:框架QQ fromqq:收款发起人 ordernum:收款订单号(群收款订单号) payamount:支付金额(单位分,必须填入正确的值) paypwd:支付密码 bankcardid:银行卡序列(大于0时使用银行卡支付)
[POST,GET]群收款_催单:/remindgroupcollection
  logonqq:框架QQ ordernum:收款订单号
[POST,GET]取好友Diy名片数据(支持陌生人,失败或无权限或对方未设置返回假,参考传回Diy名片数据):/getfrienddiycard
  logonqq:框架QQ toqq:对方QQ
[POST,GET]设置Diy名片:/setdiycard
  logonqq:框架QQ data:Diy名片数据(特定格式,自己抓http包,不能直接用【取好友Diy名片数据】的返回结果)
[POST,GET]支付代付请求(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/payforanother
  logonqq:框架QQ ordernum:代付订单号(即:tokenid) payamount:支付金额(单位分,必须填入正确的值) paypwd:支付密码 bankcardid:银行卡序列(大于0时使用银行卡支付)
[POST,GET]查询代付状态(成功返回原始json数据,自行解析):/querypayforanotherstate
  logonqq:框架QQ ordernum:代付订单号(即:tokenid) data:代付数据(即:data)
[POST,GET]拉起代付(成功返回原始json数据,自行解析):/newpayforanother
  logonqq:框架QQ ordernum:订单号(即:tokenid,用QQ钱包进行充值话费等操作时,拉起支付,即可获得订单号(tokenid),随后传入即可拉起代付) qq:代付QQ列表(多个QQ以|分割)
[POST,GET]取好友能量值与QID(支持陌生人,失败或无权限返回假,只要对方设置了QID显示或能量值显示则返回真):/getfriendenergyandqid
  logonqq:框架QQ toqq:对方QQ
[POST,GET]文字转语音(音源与登录QQ的性别有关,返回BASE64编码):/text2audio
  logonqq:框架QQ text:文本内容
[POST,GET]翻译(语种代码列表:http://www.lingoes.cn/zh/translator/langcode.htm):/translate
  logonqq:框架QQ srclang:源语言语种(如:zh (中文)) dstlang:目标语言语种(如:ko (韩语)) text:原文
[POST,GET]amr编码(返回共享内存ID):/amrencode
  type:data参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) data:数据
[POST,GET]silk编码(返回共享内存ID):/silkencode
  type:data参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) data:数据
[POST,GET]silk解码(返回共享内存ID):/silkdecode
  type:data参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) data:数据
[POST,GET]上传频道图片(支持私信频道,失败或无权限返回空,成功返回带url参数的图片代码,可以直接取到图片链接):/uploadguildpic
  type:pic参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) pic:图片 logonqq:框架QQ guildid:频道Id(或私信频道Id) subguildid:子频道Id(或私信子频道Id) width:宽度(影响频道内图片的预览效果) height:高度(影响频道内图片的预览效果) isgif:动图(为真时可自动播放动图)(true,false)
[POST,GET]发送频道消息(成功返回json,含有time、Random、Req,QQ频道官方不支持长消息,长消息需要自己分段发送):/sendguildmsg
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id msg:消息内容(与群聊的文本代码通用,但频道不支持大部分功能)
[POST,GET]发送频道消息(成功返回json,含有time、Random、Req,QQ频道官方不支持长消息,长消息需要自己分段发送):/sendguildprivatemsg
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id msg:消息内容(与群聊的文本代码通用,但频道不支持大部分功能)
[POST,GET]获取私信频道Id(失败或无权限返回假):/getprivatemsgguildid
  logonqq:框架QQ guildid:频道Id subguildid:目标频道用户Id(打算向哪个频道用户发送私信)
[POST,GET]频道消息粘贴表情(失败或无权限返回假):/guildmsgpasteexpression
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id msgreq:消息req expressionid:表情Id(为emoji时,是emoji的数字代码,不为emoji时,是黄豆表情数字代码) isemoji:是否为emoji(默认假)(true,false) iscancelpaste:取消粘贴(默认是粘贴,取消粘贴就是取消自己对消息粘贴的这个表情)(true,false)
[POST,GET]撤回频道消息:/deleteguildmsg
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id msgreq:消息req
[POST,GET]撤回频道私信消息:/deleteguildprivatemsg
  logonqq:框架QQ privateguildid:私信频道Id subprivateguildid:私信子频道Id msgreq:消息req
[POST,GET]子频道全员公告(将一条消息设置为全员公告或取消某个全员公告):/setsubguildwholeannouncement
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id msgreq:消息req isremove:移除(是否移除该全员公告,默认假)(true,false)
[POST,GET]禁言频道成员(失败或无权限返回假,频道没有成员被禁言、被解除禁言的事件):/muteguildmember
  logonqq:框架QQ guildid:频道Id guilduserid:频道用户Id time:禁言秒数(0代表解除禁言)
[POST,GET]设置频道全员禁言(失败或无权限返回假):/mutewholeguild
  logonqq:框架QQ guildid:频道Id time:禁言秒数(0代表解除禁言)
[POST,GET]移除频道成员:/kickguildmember
  logonqq:框架QQ guilduserid:频道Id guildid:频道用户Id(多个用|分割) ignoreaddgrequest:拉入黑名单(拉入黑名单后对方无法再次申请加入频道)(true,false)
[POST,GET]退出频道:/exitguild
  logonqq:框架QQ guildid:频道Id
[POST,GET]修改频道名称:/setguildname
  logonqq:框架QQ guildid:频道Id name:新名称
[POST,GET]修改频道简介:/setguilddescription
  logonqq:框架QQ guildid:频道Id description:新简介
[POST,GET]设置我的频道昵称:/setmyguildnickname
  logonqq:框架QQ guildid:频道Id nickname:频道昵称
[POST,GET]设置子频道观看权限:/setsubguildviewpriv
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id type:类型(0全部成员可看,1仅管理员可看,2指定成员可看) guilduseridlist:指定频道用户Id列表(当类型为2时,在这里设置频道用户)(多个用|分割)
[POST,GET]设置子频道发言权限:/setsubguildsaypriv
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id type:类型(1所有频道成员可发言,2仅管理员可发言,默认1)
[POST,GET]子频道消息提醒设置:/setsubguildmsgreminder
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id isenable:对成员打开消息提醒(默认关闭,开启后,频道用户能否收到消息提醒还要取决于频道用户自身的设置)(true,false)
[POST,GET]子频道慢速模式设置:/setsubguildslowmode
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id mode:模式(默认关闭,0关闭,1每分钟一条,2每分钟两条,3每分钟5条,4每分钟十条,5每5分钟1条,6每10分钟1条,7每15分钟一条,8每30分钟一条,9每一小时一条,10每12小时一条,11每24小时1条)
[POST,GET]修改子频道名称:/setsubguildname
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id name:新名称
[POST,GET]删除子频道:/deletesubguild
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id(多个用|分割)
[POST,GET]修改我的频道用户信息_昵称:/setmyguilduserinfo_nickname
  logonqq:框架QQ nickname:新昵称
[POST,GET]修改我的频道用户信息_性别:/setmyguilduserinfo_sex
  logonqq:框架QQ sex:性别(1男,2女,默认男)
[POST,GET]修改我的频道用户信息_年龄:/setmyguilduserinfo_age
  logonqq:框架QQ age:年龄(默认1)
[POST,GET]修改我的频道用户信息_所在地:/setmyguilduserinfo_location
  logonqq:框架QQ countrycode:国家代码(如中国是:49) countryname:国家名称(如中国) provincecode:省份代码(如广东省是:13364,北京是:12593(北京特殊,虽然是直辖市,但按照顺序来是填这里的)) provincename:省份名称(如广东、北京) citycode:市区代码(如阳江是:12599,朝阳是53) cityname:市区名称(如阳江、朝阳)
[POST,GET]设置是否允许别人私信我:/setenableprivatemsg
  logonqq:框架QQ isdisable:不允许(默认允许)(true,false)
[POST,GET]设置频道加入验证方式:/setenableprivatemsg
  logonqq:框架QQ guildid:频道Id verifytype:验证方式(1允许任何人 2需要验证消息 3不允许任何人 4需要正确回答问题 5需要回答问题,默认1) question:问题(需要回答问题时设置) answer:答案(需要正确回答问题时设置)
[POST,GET]搜索频道(成功返回搜索结果数):/searchguild
  logonqq:框架QQ keyword:关键词 page:第几页(从1开始,默认1)
[POST,GET]取频道封面:/getguildcover
  guildid:频道Id
[POST,GET]取频道头像:/getguildavatar
  guildid:频道Id islargepic:高清大图(默认假)(true,false)
[POST,GET]取频道成员列表(成功返回结果数):/getguildmemberlist
  logonqq:框架QQ guildid:频道Id
[POST,GET]取频道信息:/getguildinfo
  logonqq:框架QQ guildid:频道Id
[POST,GET]取频道加入验证方式:/getguildjoinverifytype
  logonqq:框架QQ guildid:频道Id
[POST,GET]申请加入频道(errcode=22010是申请成功):/joinguild
  logonqq:框架QQ verifytype:验证方式(可通过API【取频道加入验证方式】获取) guildid:频道Id guildtoken:频道Token(目前只能通过【搜索频道】获取) answer:答案(当频道设置有问题时,在此回答)
[POST,GET]取频道文件下载地址(返回json包含链接和Cookie、header,但貌似无法直接下载,目前尚不清楚具体下载方式,手Q客户端貌似不是直接走http协议下载的):/getguildfileaddr
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id fileid:fileid filename:filename(文件名)
[POST,GET]发送频道红包(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/sendguildredpacket
  type:类型(norm:普通 lucky:拼手气 exclusive:专属) logonqq:框架QQ count:总数量 amount:总金额(单位分) guildid:频道Id subguildid:子频道Id text:祝福语 skinid:红包皮肤Id(默认0) paypwd:支付密码 bankcardid:银行卡序列(大于0时使用银行卡支付)
[POST,GET]取频道成员身份组(返回结果数(一个频道成员可有多个身份组)):/getguilduseridentitygroup
  logonqq:框架QQ guildid:频道Id guilduserid:频道用户Id
[POST,GET]设置频道成员身份组(暂不支持子频道管理员):/setguildidentitygroup
  logonqq:框架QQ guildid:频道Id guilduserid:频道用户Id identitygroupidlist:身份组Id列表(一个频道成员可有多个身份组,管理员的身份组Id是2,只需要传入欲设置的身份组Id,其他无需修改的身份组Id请勿传入,1普通人,2频道管理员)(多个用|分割) iscancel:是否取消身份组(默认取消)(true,false)
[POST,GET]修改身份组信息:/editguildidentitygroupinfo
  logonqq:框架QQ guildid:频道Id identitygroupid:身份组Id identitygroupname:身份组名 identitygroupexplicitcolorcode:身份组外显颜色代码(默认4294920704) isshowaloneinmemberlist:是否在成员列表中单独展示(默认假)(true,false)
[POST,GET]删除身份组:/deleteidentitygroup
  logonqq:框架QQ guildid:频道Id identitygroupid:身份组Id
[POST,GET]新增身份组(成功返回新增的身份组Id):/newidentitygroup
  logonqq:框架QQ guildid:频道Id identitygroupname:身份组名 identitygroupexplicitcolorcode:身份组外显颜色代码(默认4294920704) isshowaloneinmemberlist:是否在成员列表中单独展示(默认假)(true,false)
[POST,GET]取频道身份组列表(成功返回结果数):/getguildidentitygrouplist
  logonqq:框架QQ guildid:频道Id
[POST,GET]取子频道列表(成功返回结果数):/getsubguildlist
  logonqq:框架QQ guildid:频道Id
[POST,GET]取频道用户个性档案(成功返回结果数,一个频道用户的个性档案有多个平台内容):/getguilduserpersonalityarchivelist
  logonqq:框架QQ guilduserid:频道用户Id
[POST,GET]取频道用户资料:/getguilduserdata
  logonqq:框架QQ guilduserid:频道用户Id
[POST,GET]刷新频道列表缓存(框架登录时已经刷新过一次了,非必要情况下请勿调用此Api,异步刷新,这里返回真时不代表缓存一定被刷新了,请勿频繁使用,可能导致封号):/freshguildlistcache
  logonqq:框架QQ
[POST,GET]取频道列表_从缓存(频道列表比较特殊,不能直接取,只能通过缓存来,不会自动刷新,需要自行刷新(使用API【刷新频道列表缓存】),返回json数据):/getguildlist_fromcache
  logonqq:框架QQ
[POST,GET]取频道用户昵称_从缓存(原始昵称):/getguildusernickname_fromcache
  guilduserid:频道用户Id
[POST,GET]取频道名称_从缓存:/getguildname_fromcache
  guildid:频道Id
[POST,GET]取子频道名称_从缓存:/getsubguildname_fromcache
  guildid:频道Id subguildid:子频道Id
[POST,GET]取频道昵称_从缓存(相当于群名片):/getguildnickname_fromcache
  guildid:频道Id guilduserid:频道用户Id
[POST,GET]取子频道分组列表(成功返回结果数):/getsubguildgrouplist
  logonqq:框架QQ guildid:频道Id
[POST,GET]取私信频道列表_从缓存(私信频道列表比较特殊,不能直接取,只能通过缓存来,不会自动刷新,需要自行刷新(使用API【刷新频道列表缓存】),返回json数据):/getprivatemsgguildlist_fromcache
  logonqq:框架QQ
[POST,GET]上传频道文件(本命令为耗时操作，请另开线程执行，上传的文件长度不得超过int32，无权限时不执行(首次上传较慢，之后可实现秒发)):/uploadguildfile
  wait:是否等待(true,false) logonqq:框架QQ guildid:频道Id subguildid:子频道Id path:文件路径(本地文件路径) width:图片宽度(当上传的文件是图片时,需要定义宽度,影响预览效果) height:图片高度(当上传的文件是图片时,需要定义高度,影响预览效果)
[POST,GET]Emoji转频道EmojiId(失败或无权限返回空):/emojitoguildemojiid
  emoji:Emoji代码(只能是单个emoji的代码)
[POST,GET]频道EmojiId转Emoji(失败或无权限返回空):/guildemojiidtoemojiid
  emojiid:频道EmojiId
[POST,GET]Emoji转QQ空间EmId(失败或无权限返回空):/emojitoqzoneemid
  emoji:Emoji代码(只能是单个emoji的代码)
[POST,GET]QQ空间EmId转Emoji(失败或无权限返回空):/qzoneemidtoemoji
  emid:QQ空间EmId(emcode)
[POST,GET]小黄豆Id转QQ空间EmId(失败或无权限返回空):/soybeanidtoqzoneemid
  soybeanid:小黄豆Id
[POST,GET]QQ空间EmId转小黄豆Id(失败或无权限返回空):/qzoneemidtosoybeanid
  emid:QQ空间EmId(emcode)
[POST,GET]取特定身份组成员列表(成功返回结果数量,成功返回数量永远大于0,所以需要自己判断是否已经获取到尾部了(比如判断cnt&gt;1),注意防止死循环,重复的数据自己处理掉):/getidentitygroupmemberlist
  logonqq:框架QQ guildid:频道Id identitygroupid:身份组Id(1普通人,2管理员,其他身份组Id通过API【取频道身份组列表】取) startpos:开始位置
[POST,GET]取子频道分组结构(成功返回分组结构(json)):/getsubguildgroupstruct
  logonqq:框架QQ guildid:频道Id
[POST,GET]设置子频道分组结构(成功返回新的分组结构(json),结构有误会失败(比如同一个子频道Id出现在多个分组)):/setsubguildgroupstruct
  logonqq:框架QQ guildid:频道Id struct:子频道分组结构(通过API【取子频道分组结构】取得原始结构,修改后传入进行设置,可实现 增/删分组、分组改名、改变分组排序、改变子频道所在分组、改变子频道排序,增加分组的方法:新增block,name为新分组名,id为0,subchannels可以自由发挥,默认分组(无分组)的Id是1231704)
[POST,GET]新建子频道(必须正确填写[所属分组index]、[分组内位置]、[原始子频道分组结构]否则无法创建成功):/newsubguild
  logonqq:框架QQ guildid:频道Id struct:原始子频道分组结构(可通过API【取子频道分组结构】获取) name:子频道名称 msgremind:消息提醒设置(1对成员打开消息提醒 2不对成员打开消息提醒,默认2) subguildtype:子频道类型(1讨论频道 2语音频道 5直播频道 6应用频道 7话题频道,默认1) subguildsubtype:子频道子类型(0闲聊,1公告,2攻略,默认0,当子频道类型不为1时,恒为0) appid:应用Id(当子频道类型为6时设置,1000050日程提醒 1000010腾讯投票 1000000王者开黑大厅 1000001互动小游戏 1000070CoDM开黑大厅 1000051飞车开黑大厅 1010000和平精英开黑大厅) visualtype:可视类型(0全部成员可看,1仅管理员可看,2指定成员可看,默认0) idlist:指定成员频道用户Id列表(当可视类型为2时设置)(多个用|分割) belonggroupindex:所属分组index(默认1(无分组),可通过API【取子频道分组结构】获取相关值) posinguild:分组内位置(默认1(分组内子频道的第一个,如果之前分组内子频道已经有了N个,那位置就是N+1),可通过API【取子频道分组结构】来计算相关值,胡乱填写将导致无法预料的后果)
[POST,GET]构造卡片消息文本代码:/makecardmsg
  card:卡片代码 type:类型(0xml,1json,默认xml)
[POST,GET]分享音乐_频道(失败或无权限返回假):/sharemusic_guild
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id songname:歌曲名 singername:歌手名(或者自定义文案) jumpurl:跳转地址(点击音乐json后跳转的地址) coverurl:封面地址(音乐的封面图片地址) fileurl:文件地址(音乐源文件地址，如https://xxx.com/xxx.mp3(VIP歌曲可省略)) apptype:应用类型(0QQ音乐 1虾米音乐 2酷我音乐 3酷狗音乐 4网易云音乐  默认0)
[POST,GET]修改频道排序(修改各个频道的排序):/setguildsort
  logonqq:框架QQ guildidlist:频道Id列表(频道的排序将被改成频道Id在数组内的排序,!!!!!请勿缺、漏、添加不存在的频道Id!!!!!)(多个用|分割)
[POST,GET]处理频道加入申请(失败或无权限返回假):/handlejoinguildrequest
  logonqq:框架QQ guilduseridentity:频道用户标识(在事件当中获取) operate:操作(0拒绝 1同意)
[POST,GET]查询群设置(成功返回原始json数据,需要自行解析):/querygroupsettings
  logonqq:框架QQ group:群号
[POST,GET]拍一拍好友在线状态(失败或无权限返回假):/beatfriendonlinestat
  logonqq:框架QQ toqq:对方QQ
[POST,GET]发送验证消息会话消息(当对方给你发送添加好友验证消息时,可通过这个API主动向对方发送消息,若是你尝试添加对方为好友,则只能使用API【回复验证消息会话消息】进行回复):/sendvalidationmsg
  logonqq:框架QQ toqq:对方QQ msg:消息内容
[POST,GET]回复验证消息会话消息(当你尝试添加对方为好友并发送了好友验证消息时,若对方给你发了临时消息,则可通过此API进行回复):/replyvalidationmsg
  logonqq:框架QQ toqq:对方QQ token:会话Token(私聊消息数据.会话token,具有时效性,是对方推送的) msg:消息内容
[POST,GET]取群文件内存利用状态(可以查询群文件总容量和已使用容量):/getgroupfilestoragestate
  logonqq:框架QQ toqq:群号
[POST,GET]取群文件总数(可以查询群文件数量上限和当前文件总数):/getgroupfilecount
  logonqq:框架QQ group:群号
[POST,GET]上传涂鸦(上传涂鸦，成功返回涂鸦文本代码):/uploadgraffiti
  type:data参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) data:涂鸦数据(自己通过画板生成的涂鸦是不能正常被腾讯加载的，要符合腾讯的编码格式) logonqq:框架QQ modelid:模型Id(默认0(无模型))
[POST,GET]取群艾特全体剩余次数(查询机器人QQ当日在某群剩余的艾特全体次数,失败或无权限返回负数):/getgroupatallremainingtimes
  logonqq:框架QQ group:群号
[POST,GET]是否已开启QQ咨询(查询其他人是否已开启QQ咨询,失败或无权限返回负数,0未开启,1已开启):/isenabledqqconsultation
  logonqq:框架QQ toqq:对方QQ
[POST,GET]创建群相册(成功返回原始json数据):/creategroupphotoalbum
  logonqq:框架QQ group:群号 name:相册名 desc:相册描述
[POST,GET]删除群相册(成功返回原始json数据):/deletegroupphotoalbum
  logonqq:框架QQ group:群号 albumid:相册Id(albumid)
[POST,GET]取群相册列表(成功返回原始json):/getgroupphotoalbumlist
  logonqq:框架QQ group:群号
[POST,GET]取群相册照片列表(成功返回原始json):/getgroupphotoalbumphotolist
  logonqq:框架QQ group:群号 albumid:相册Id(albumid) count:获取数量(默认0,建议10)
[POST,GET]删除群相册照片(成功返回原始json数据):/deletegroupphotoalbumphoto
  logonqq:框架QQ group:群号 albumid:相册Id(albumid) photoid:照片Id(photoid)
[POST,GET]修改群相册信息(成功返回原始json数据):/setgroupphotoalbuminfo
  logonqq:框架QQ group:群号 albumid:相册Id(albumid) name:相册名 desc:相册描述 istop:相册置顶(是否将相册置顶)(true,false)
[POST,GET]取群Id_从缓存(无权限返回-403,不存在缓存数据返回0,调用【取群列表】更新缓存):/getgroupid_fromcache
  group:群号
[POST,GET]取特定身份组成员列表(成功返回结果数量,成功返回数量永远大于0,所以需要自己判断是否已经获取到尾部了(比如判断cnt&gt;1),注意防止死循环,重复的数据自己处理掉):/getsubguildadminlist
  logonqq:框架QQ guildid:频道Id subguildid:身份组Id(1普通人,2管理员,其他身份组Id通过API【取频道身份组列表】取)
[POST,GET]设置子频道管理(失败或无权限返回假):/setsubguildadmin
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id guilduseridlist:频道用户Id列表(多个用|分割) iscancelsubguildadmin:是否取消子频道管理(默认新增子频道管理)(true,false)
[POST,GET]设置指定身份组子频道观看权限(失败或无权限返回假):/setspecifiedidentitygroupsubguildwatchpriv
  logonqq:框架QQ guildid:频道Id identitygroupid:身份组Id subguildidlist:欲设置的子频道Id列表(多个用|分割) iscancelwatchpriv:是否取消观看权限(默认赋予观看权限)(true,false)
[POST,GET]设置指定身份组子频道发言权限(失败或无权限返回假):/setspecifiedidentitygroupsubguildsaypriv
  logonqq:框架QQ guildid:频道Id identitygroupid:身份组Id subguildidlist:欲设置的子频道Id列表(多个用|分割) iscancelsaypriv:是否取消发言权限(默认赋予发言权限)(true,false)
[POST,GET]设置指定身份组子频道观看权限(失败或无权限返回假):/setlivesubguildanchor
  logonqq:框架QQ guildid:频道Id livesubguildid:身份组Id guilduseridlist:欲设置的子频道Id列表 iscancelanchor:是否取消观看权限(默认赋予观看权限)(true,false)
[POST,GET]获取频道分享链接(成功返回链接,失败返回包含错误信息的json):/getguildsharelink
  logonqq:框架QQ guildid:频道Id
[POST,GET]获取子频道分享链接(成功返回链接,失败返回包含错误信息的json):/getsubguildsharelink
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id
[POST,GET]子频道消息通知设置(失败或无权限返回假):/setsubguildmsgnotification
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id isenablemsgnotification:开启消息通知(默认关闭消息通知)(true,false)
[POST,GET]取话题子频道帖子列表(成功返回结果数(翻页后若返回0代表已无结果)):/gettopicsubguildpostsublist
  logonqq:框架QQ guildid:频道Id topicsubguildid:话题子频道Id turnpageinfo:翻页信息(第一次留空,第二次开始每次请求使用上一次的返回值)
[POST,GET]获取日程列表(成功返回结果数,此Api返回的结果当中[创建者频道昵称]为空白):/getdailytasklist
  logonqq:框架QQ guildid:频道Id dailytasksubguildid:日程子频道Id time:时间戳(欲查看哪一天的日程列表？传入那一天的13位时间戳)
[POST,GET]取日程信息:/getdailytaskinfo
  logonqq:框架QQ guildid:频道Id dailytasksubguildid:日程子频道Id dailytaskid:日程Id
[POST,GET]取日程信息:/createdailytask
  logonqq:框架QQ guildid:频道Id dailytasksubguildid:日程子频道Id dailytaskid:日程Id
[POST,GET]取QQ头像K值:/getqqavatarkvalue
  logonqq:框架QQ toqq:对方QQ
[POST,GET]删除日程:/deletedailytask
  dailytaskid:框架QQ logonqq:频道Id guildid:日程子频道Id dailytasksubguildid:日程信息
[POST,GET]发送通行证到群(仅频道主有效):/sendpasstogroup
  logonqq:框架QQ guildid:频道Id group:群号 passcount:通行证数量(不得大于[频道成员数上限-频道目前成员数])
[POST,GET]发送通行证到好友(仅频道主有效):/sendpasstofriend
  logonqq:框架QQ guildid:频道Id toqq:对方QQ
[POST,GET]屏蔽频道用户私信:/blockguilduserprivatemsg
  logonqq:框架QQ guilduserid:频道用户Id isunblock:解除屏蔽(默认屏蔽)(true,false)
[POST,GET]频道用户私信免打扰:/setguilduserprivatemsgdonotdisturb
  logonqq:框架QQ guilduserid:频道用户Id isclosedonotdisturb:关闭免打扰(默认开启免打扰)(true,false)
[POST,GET]下线指定QQ(返回真表示成功投递下线任务，不代表对应QQ下线成功):/exitqq
  logonqq:框架QQ
[POST,GET]登录指定QQ(返回真表示成功投递密码登录任务，不代表对应QQ登录成功，未设置QQ密码的QQ无法投递密码登录任务):/loginqq
  logonqq:框架QQ
[POST,GET]QQ列表_添加QQ(成功retcode为0,框架存在其他相关冲突操作时,此Api会失败):/addqq
  logonqq:QQ password:密码(企业、企点必须填写密码) phonebrand:手机品牌(默认XIAOMI) phonemodel:手机型号(默认Mi 10 Pro) protocol:协议(0 安卓QQ,1 企点QQ,2 QQaPad,3 企业QQ,4 手机Tim,5 手表QQ,6 QQiPad,7 苹果QQ,普通QQ无法登录企业/企点) guid:guid(非必选项,普通用户请勿乱填)
[POST,GET]QQ列表_删除QQ(成功retcode为0,框架存在其他相关冲突操作时,此Api会失败):/delqq
  logonqq:QQ isforcedelete:彻底删除(默认临时删除(数据库数据依然存在),彻底删除会删除数据库记录)(true,false)
[POST,GET]登录指定QQ_二次登录(返回真表示成功投递二次登录任务，不代表对应QQ登录成功，二次登录数据不存在或无效的，无法进行二次登录):/loginqq_twicelogin
  logonqq:框架QQ
[POST,GET]是否已设置QQ密码(无权限或未设置或QQ不在框架缓存返回假):/issetqqpassword
  logonqq:框架QQ
[POST,GET]取框架插件列表(成功返回json):/getframeworkpluginlist
[POST,GET]取在线移动设备列表(不包括电脑):/getonlinemobiledevicelist
  logonqq:框架QQ
[POST,GET]设置频道全局公告_指定消息(将指定消息设置为频道全局公告,无权限或失败返回假):/setspecifiedmsgtoglobalannouncement
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id msgreq:消息req
[POST,GET]取频道号(成功返回频道号,失败返回json格式错误信息):/getguildnum
  logonqq:框架QQ guildid:频道Id
[POST,GET]移动好友分组(失败或无权限返回假):/movefriendtogroup
  logonqq:框架QQ toqq:好友QQ(对方QQ) groupid:分组Id(可通过API【取好友分组列表】获取[分组Id])
[POST,GET]修改好友分组名(失败或无权限返回假):/editfriendgroupname
  logonqq:框架QQ groupid:分组Id(可通过API【取好友分组列表】获取[分组Id]) name:分组名(支持emoji)
[POST,GET]删除好友分组(失败或无权限返回假):/deletefriendgroup
  logonqq:框架QQ groupid:分组Id(可通过API【取好友分组列表】获取[分组Id])
[POST,GET]取好友分组列表(成功返回好友分组列表,json格式数据):/getfriendgrouplist
  logonqq:框架QQ
[POST,GET]新增好友分组(成功返回新分组的[分组Id],失败或无权限返回负数):/newfriendgroup
  logonqq:框架QQ name:分组名(新的分组名称,支持emoji)
[POST,GET]取频道红包pre_grap_token(可用于领取频道红包,成功返回原始json数据):/getguildredpacket_pregraptoken
  logonqq:框架QQ guildid:频道Id subguildid:子频道Id listid:红包listid authkey:红包authkey channel:红包channel senderguilduserid:红包发送人频道用户Id
[POST,GET]语音红包匹配(匹配通过后,即可领取语音红包,成功返回语音评级,失败或无权限返回json格式错误信息):/matchaudioredpacket
  logonqq:框架QQ to:红包接收对象(群号或好友QQ号) title:红包标题 audiohash:匹配语音hash(用于匹配语音红包的语音hash值,可通过API【上传群聊语音红包匹配语音】得到) listid:红包listid authkey:红包authkey fromtype:红包发送者QQ
[POST,GET]上传群聊语音红包匹配语音(必须为silk v3 Tencent格式,成功直接返回hash值,失败返回json格式错误信息):/uploadmatchgroupaudioredpacketaudio
  logonqq:框架QQ group:红包来源群号 type:audio参数类型(path:本地路径 url:网络路径 usermem:共享内存id 其他或留空:BASE64编码数据(不推荐)) audio:语音(类型由type参数决定)
[POST,GET]取合并转发消息内容(成功返回合并转发消息的内容,json格式,完美支持嵌套):/getmergedforwardedmsgcontent
  logonqq:框架QQ resid:resId(收到合并转发聊天记录时,可用API【取卡片消息代码】得到原始XML代码,再从当中取出resId)
[POST,GET]上传合并转发消息(成功返回卡片文本代码,可直接发送,完美支持嵌套):/uploadmergedforwardedmsg
  logonqq:框架QQ from:消息来源(&quot;xxx的聊天记录&quot;,可填如:群聊、A和B) cover:消息封面(定义封面消息内容,多条消息用符号&quot;&lt;[#]&gt;&quot;分隔,如 A: 巴拉巴拉&lt;[#]&gt;B: 巴拉巴拉&lt;[#]&gt;C: 巴拉巴拉) content:合并转发消息内容(json格式,数据结构可参照API【取合并转发消息内容】的返回结果,&quot;MultiMsg&quot;是最外层的消息,嵌套使用filename作为索引)
[POST,GET]语音转文字(TCP,失败或无权限返回json格式错误信息,成功返回文本,最大等待时长15s,为耗时操作):/audiototext
  logonqq:框架QQ hash:语音hash(可在语音文本代码当中取得) token:语音token(可在语音文本代码当中取得)
[POST,GET]发送功能包(向腾讯服务器发送功能包,若需要发送登录包或原始数据包,请使用API【发送数据包】,返回BASE64编码数据):/sendfunctionpacket
  logonqq:框架QQ cmd:功能cmd(指令名) maxwaittime:最大等待时长(毫秒,不填或小于0时不等待返回包,大于0时等待返回包) packet:数据(BASE64编码,拉取返回包失败参考回空字节集)
[POST,GET]二维码扫一扫授权登录其他应用(可用于同意【其他应用登录验证请求】、扫描PCQQ或其他支持QQ登录的程序的二维码进行授权登录、扫描支持QQ登录的网页的二维码进行授权登录):/scanqrcodetoauthorizeloginotherapp
  logonqq:框架QQ k:k值(QQ登录二维码解码后的内容当中取得k值,如PCQQ二维码内容:https://txz.qq.com/p?k=isFJX4IjkmaXRBuk1YV27zC9OdOvckoG&amp;f=1,从中取出k值为:isFJX4IjkmaXRBuk1YV27zC9OdOvckoG)
[POST,GET]取历史登录设备guid列表(成功返回json数据,每一个设备成员含有设备名、设备guid等):/gethistoricallogindeviceguidlist
  logonqq:框架QQ
[POST,GET]二维码扫一扫授权其他设备资料辅助验证登录(可用于扫描其他设备的资料辅助验证二维码并同意通过验证):/scanqrcodetoauthorizeloginotherdevicedataaidedverification
  logonqq:框架QQ str_url:str_url(资料辅助验证二维码解码后的内容当中取得str_url,如二维码内容:https://ti.qq.com/safe/scanresult?str_url=jThTQoNYaKIGbxkSSKffjJ+uoa4bVXl3lQLy8hwyAiFAD8zQtm1091F+S05NeA==&amp;envfrom=device-lock&amp;verify_id=undefined&amp;verify_scene=undefined&amp;uin=,从中取出str_url为:jThTQoNYaKIGbxkSSKffjJ+uoa4bVXl3lQLy8hwyAiFAD8zQtm1091F+S05NeA==)
[POST,GET]关闭设备锁(失败或无权限返回假):/closedevicelock
  logonqq:框架QQ
[POST,GET]恢复设备锁(失败或无权限返回假):/opendevicelock
  logonqq:框架QQ
[POST,GET]余额提现(银行卡支付时，若需要短信验证码，将返回验证码信息，使用API【提交支付验证码】进行验证处理):/withdrawbalance
  logonqq:框架QQ amount:提现金额(单位分) paypwd:支付密码 bankcardid:银行卡序列(银行卡序列，可使用API【取QQ钱包个人信息】获得银行卡列表)
[POST,GET]取h5钱包cookie(h5.qianbao,敏感API,框架会自动刷新):/geth5qianbaocookie
  logonqq:框架QQ
[POST,GET]取QQ会员中心cookie(vip.qq,敏感API,框架会自动刷新):/getqqvipcookie
  logonqq:框架QQ
[POST,GET]QQ列表_添加手表协议QQ(返回情况过多，请自行参考 使用实例-&gt;框架扫码登录):/qqlist_addwatchqq
  logonqq:QQ brand:品牌 model:型号
[POST,GET]QQ列表_二维码登录_拉取二维码(返回情况过多，请自行参考 使用实例-&gt;框架扫码登录):/qqlist_getqrcode_login
  logonqq:QQ
[POST,GET]QQ列表_二维码登录_查询二维码状态(返回情况过多，请自行参考 使用实例-&gt;框架扫码登录):/qqlist_queryqdcodestate_login
  logonqq:QQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[s];function u(r,a){return n(),e("div",null,o)}const m=i(l,[["render",u],["__file","小栗子机器人.html.vue"]]),c=JSON.parse('{"path":"/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/03.%20%E5%A4%9A%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/05.%20%E6%8F%92%E4%BB%B6%E4%BD%93%E7%B3%BB/%E5%AE%9E%E4%BE%8B%E5%8F%82%E8%80%83/%E5%B0%8F%E6%A0%97%E5%AD%90%E6%9C%BA%E5%99%A8%E4%BA%BA.html","title":"","lang":"zh-CN","frontmatter":{"description":"很久之前就被封了，没法用，但API文档和SDK还留着，可以作为参考 接口：可以查看小栗子API助手 本地文件/小栗子框架 其他 API助手2.0 易语言API伴侣 CornerstoneSDK-1.0.2 (C) SDK_2.8.8.0 httpapi_new 其中，HTTP API 文档：","head":[["meta",{"property":"og:url","content":"http://192.168.0.101:8080/MdNote_Public/01.%20%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%91%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%94%9F%E4%BA%A7/Develop/03.%20Tools/02.%20%E7%AE%A1%E7%90%86%E5%B1%82/03.%20%E5%A4%9A%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/05.%20%E6%8F%92%E4%BB%B6%E4%BD%93%E7%B3%BB/%E5%AE%9E%E4%BE%8B%E5%8F%82%E8%80%83/%E5%B0%8F%E6%A0%97%E5%AD%90%E6%9C%BA%E5%99%A8%E4%BA%BA.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"很久之前就被封了，没法用，但API文档和SDK还留着，可以作为参考 接口：可以查看小栗子API助手 本地文件/小栗子框架 其他 API助手2.0 易语言API伴侣 CornerstoneSDK-1.0.2 (C) SDK_2.8.8.0 httpapi_new 其中，HTTP API 文档："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincZero"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":55.55,"words":16664},"filePathRelative":"MdNote_Public/01. 设计开发与数据生产/Develop/03. Tools/02. 管理层/03. 多项目管理/05. 插件体系/实例参考/小栗子机器人.md","autoDesc":true}');export{m as comp,c as data};
