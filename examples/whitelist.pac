/*
            gfw_whitelist.pac

            GFW Whitelist
            - inspired by autoproxy and chnroutes

            v1.2
            Author: n0gfwall0@gmail.com
            License: MIT License

                                                          */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * 
     *                                                 *
     *  一定要换成你的ip地址                           *
     *  Replace your proxy ip-address:port here!!      *
     *                                                 *
     * * * * * * * * * * * * * * * * * * * * * * * * * */

var IP_ADDRESS = '127.0.0.1:8080';

    /* * * * * * * * * * * * * * * * * * * * * * * * * * 
     *                                                 *
     * 代理类型 (翻墙一般适用 SOCKS 或 HTTPS)          *
     * Proxy type                                      *
     *                                                 *
     * * * * * * * * * * * * * * * * * * * * * * * * * */
var PROXY_TYPE = 'SOCKS5';

    // HTTPS 是用于 Chrome 的安全代理
    // http://www.chromium.org/developers/design-documents/secure-web-proxy

    /* * * * * * * * * * * * * * * * * * * * * * * * * */
var PROXY_METHOD = PROXY_TYPE + ' ' + IP_ADDRESS;


    // A very long list. Hopefully chrome will cache it.

    // Bypass top Chinese sites
    // Sources:
    // (1) Custom list
    // (2) https://dl-web.dropbox.com/u/3241202/apps/chn-cdn/dnsmasq.server.conf - ihipop
    // (3) @xream's whitelist
    // (4) Alexa 500

    // Feel free to add or edit custom list
var RULES = [
    //cn
    [
        ".cn"
    ],
    //custom-list
    [
        ".lofter.com",
        ".letvimg.com",
        ".qiumibao.com",
        ".tuchong.net",
        ".tuchong.com",
        ".letvcdn.com",
        ".letvcloud.com",
        ".aixifan.com",
        ".dapenti.com",
        ".ptimg.org",
        ".zoopda.com",
        ".yixun.com",
        ".jd.com",
        ".zdmimg.com",
        ".appgame.com",
        ".qiniucdn.com",
        ".wangyin.com",
        ".gewara.com",
        ".ele.me",
        ".teambition.com",
        ".anquanbao.com",
        ".ziroom.com",
        ".guokr.com",
        ".speedtest.net",
        ".huazhu.com",
        ".saraba1st.com",
        ".miaopai.com",
    ],
    //"ihipop"
    [
        ".icson.com"
    ],
    //"xream"
    [
        ".0x110.com",
        ".100tjs.com",
        ".115img.com",
        ".123cha.com",
        ".126.net",
        ".1717388.com",
        ".17cdn.com",
        ".17kuxun.com",
        ".198game.com",
        ".1uuc.com",
        ".24quan.com",
        ".293.net",
        ".2mdn.net",
        ".360buyimg.com",
        ".360tl.com",
        ".37see.com",
        ".5000pk.com",
        ".51img1.com",
        ".51jobcdn.com",
        ".51yes.com",
        ".5d6d.com",
        ".6dad.com",
        ".6rooms.com",
        ".701sou.com",
        ".766.com",
        ".859652.com",
        ".968tl.com",
        ".9787.com",
        ".99114.com",
        ".a963.com",
        ".acfun.tv",
        ".adnxs.com",
        ".adroll.com",
        ".adsame.com",
        ".adsonar.com",
        ".adtechus.com",
        ".alicdn.com",
        ".aliimg.com",
        ".alipayobjects.com",
        ".aliyun.com",
        ".appinn.com",
        ".atdmt.com",
        ".atpanel.com",
        ".bdimg.com",
        ".bdstatic.com",
        ".bestb2b.com",
        ".betrad.com",
        ".bjbus.com",
        ".blogbus.com",
        ".bluekai.com",
        ".bokee.net",
        ".boosj.com",
        ".brothersoft.com",
        ".cache.netease.com",
        ".caing.com",
        ".cctv.com",
        ".cctvcom",
        ".cdn20.com",
        ".changyou.com",
        ".chdbits.org",
        ".chetx.com",
        ".chinamobile.com",
        ".chinaren.com",
        ".chiphell.com",
        ".cnepub.com",
        ".cnfol.com",
        ".cngba.com",
        ".cntv.net",
        ".cnwest.com",
        ".compete.com",
        ".cqtiyu.com",
        ".didatuan.com",
        ".dipan.com",
        ".douban.fm",
        ".dpfile.com",
        ".dream4ever.org",
        ".duapp.com",
        ".duomi.com",
        ".dy2018.com",
        ".dytt8.net",
        ".eb80.com",
        ".egou.com",
        ".ellechina.com",
        ".et8.org",
        ".eyoudi.com",
        ".fantong.com",
        ".fastcdn.com",
        ".fastif.net",
        ".fat999.com",
        ".ffdy.cc",
        ".ftchinese.com",
        ".game3896.com",
        ".gamesville.com",
        ".gamewan.net",
        ".gaopeng.com",
        ".getfirebug.com",
        ".gfw.io",
        ".ggmm777.com",
        ".go2map.com",
        ".goodbabygroup.com",
        ".gy9y.com",
        ".gzmama.com",
        ".haliyuya.com",
        ".harrenmedianetwork.com",
        ".hdslb.com",
        ".help.apple.com",
        ".hi-pda.com",
        ".hlwan.net",
        ".homeinns.com",
        ".hoopchina.com",
        ".huochepiao.com",
        ".iask.com",
        ".ibm.com",
        ".icson.com",
        ".idailyapp.com",
        ".ifengimg.com",
        ".ifensi.com",
        ".ijinshan.com",
        ".img-space.com",
        ".img.cctvpic.com",
        ".imrworldwide.com",
        ".inc.gs",
        ".infzm.com",
        ".invitemedia.com",
        ".ipinyou.com",
        ".irs01.com",
        ".irs01.net",
        ".is686.com",
        ".iweek.ly",
        ".james520.com",
        ".jandan.net",
        ".jianshu.io",
        ".jiatx.com",
        ".jiepang.com",
        ".jing.fm",
        ".jiuyaoyouxi.com",
        ".jjwxc.net",
        ".joqoo.com",
        ".jstv.com",
        ".junshijia.com",
        ".jysq.net",
        ".kandian.com",
        ".kandian.net",
        ".kanimg.com",
        ".kankan.com",
        ".keyunzhan.com",
        ".koudai8.com",
        ".ku6cdn.com",
        ".ku6img.com",
        ".kuaidi100.com",
        ".kuaiwan.com",
        ".lampdrive.com",
        ".lashouimg.com",
        ".legolas-media.com",
        ".letao.com",
        ".local",
        ".localhost",
        ".logmein.com",
        ".lohas.ly",
        ".loli.mg",
        ".loli.vg",
        ".love21cn.com",
        ".lvping.com",
        ".lxdns.com",
        ".lycos.com",
        ".lygo.com",
        ".mapabc.com",
        ".mathtag.com",
        ".mediaplex.com",
        ".mediav.com",
        ".miaozhen.com",
        ".mlt01.com",
        ".mmstat.com",
        ".mookie1.com",
        ".mosso.com",
        ".mozilla.org",
        ".my.cl.ly",
        ".nbweekly.com",
        ".ngacn.cc",
        ".njobt.com",
        ".oadz.com",
        ".okbuy.com",
        ".okooo.com",
        ".p5w.net",
        ".pcbeta.com",
        ".pixlr.com",
        ".pplive.com",
        ".pr56789.com",
        ".ptlogin2.qq.com",
        ".pubmatic.com",
        ".qiyi.com",
        ".qiyipic.com",
        ".qqmail.com",
        ".qstatic.com",
        ".quantserve.com",
        ".qvbuy.com",
        ".ranwen.com",
        ".rrimg.com",
        ".rtbidder.net",
        ".sanguosha.com",
        ".scanscout.com",
        ".scorecardresearch.com",
        ".serving-sys.com",
        ".sg560.com",
        ".shuangtv.net",
        ".sina.com",
        ".sinaapp.com",
        ".sinaedge.com",
        ".sinahk.net",
        ".sinaimg.com",
        ".sinajs.com",
        ".sj-tl.com",
        ".skycn.com",
        ".snsfun.cc",
        ".snyu.com",
        ".soufunimg.com",
        ".stackoverflow.com",
        ".staticsdo.com",
        ".synacast.com",
        ".tanx.com",
        ".tbcache.com",
        ".tdimg.com",
        ".tencent.com",
        ".thawte.com",
        ".tianyaui.com",
        ".tlbb2.com",
        ".tlbb8.com",
        ".tlbbsifu.com",
        ".tremormedia.com",
        ".tudouui.com",
        ".typecho.org",
        ".tvmao.com",
        ".umiwi.com",
        ".uusee.com",
        ".v.iask.com",
        ".vcimg.com",
        ".vizu.com",
        ".wandoujia.com",
        ".wdjimg.com",
        ".web887.com",
        ".williamlong.info",
        ".woniu.com",
        ".wordpress.org",
        ".wrating.com",
        ".wsj.com",
        ".www.renren.com",
        ".xi666.com",
        ".xiachufang.com",
        ".xiami.net",
        ".xiaonei.com",
        ".xilu.com",
        ".xiyou53.com",
        ".xiyou54.com",
        ".xlpan.com",
        ".xmfish.com",
        ".xn--fiqs8s",
        ".xp9365.com",
        ".xtltt.com",
        ".xungou.com",
        ".ydstatic.com",
        ".yieldmanager.com",
        ".yihaodianimg.com",
        ".yintai.com",
        ".yiyi.cc",
        ".ykimg.com",
        ".yocc.net",
        ".youshang.com",
        ".youwo123.com",
        ".zaobao.com",
        ".zaojiao.com",
        ".zbjimg.com",
        ".zdface.com",
        ".zhi.hu",
        ".zhibo8.com",
        ".zhongsou.net",
        ".zx915.com"
    ],
    //alexa cn 500
    [
        ".baidu.com",
        ".qq.com",
        ".taobao.com",
        ".163.com",
        ".weibo.com",
        ".sohu.com",
        ".youku.com",
        ".soso.com",
        ".ifeng.com",
        ".tmall.com",
        ".hao123.com",
        ".tudou.com",
        ".360buy.com",
        ".chinaz.com",
        ".alipay.com",
        ".sogou.com",
        ".renren.com",
        ".cnzz.com",
        ".douban.com",
        ".pengyou.com",
        ".58.com",
        ".alibaba.com",
        ".56.com",
        ".xunlei.com",
        ".bing.com",
        ".iqiyi.com",
        ".csdn.net",
        ".soku.com",
        ".xinhuanet.com",
        ".ku6.com",
        ".aizhan.com",
        ".4399.com",
        ".yesky.com",
        ".soufun.com",
        ".youdao.com",
        ".china.com",
        ".hudong.com",
        ".ganji.com",
        ".kaixin001.com",
        ".paipai.com",
        ".live.com",
        ".alimama.com",
        ".mop.com",
        ".51.la",
        ".51job.com",
        ".dianping.com",
        ".126.com",
        ".admin5.com",
        ".it168.com",
        ".2345.com",
        ".huanqiu.com",
        ".arpg2.com",
        ".777wyx.com",
        ".chinanews.com",
        ".letv.com",
        ".jiayuan.com",
        ".39.net",
        ".twcczhu.com",
        ".cnblogs.com",
        ".microsoft.com",
        ".dangdang.com",
        ".pchome.net",
        ".pptv.com",
        ".vancl.com",
        ".zhaopin.com",
        ".apple.com",
        ".bitauto.com",
        ".etao.com",
        ".qunar.com",
        ".eastmoney.com",
        ".yihaodian.com",
        ".115.com",
        ".21cn.com",
        ".blog.163.com",
        ".hupu.com",
        ".duowan.com",
        ".52pk.net",
        ".baixing.com",
        ".iteye.com",
        ".verycd.com",
        ".suning.com",
        ".discuz.net",
        ".7k7k.com",
        ".mtime.com",
        ".msn.com",
        ".ccb.com",
        ".hc360.com",
        ".cmbchina.com",
        ".51.com",
        ".yoka.com",
        ".seowhy.com",
        ".chinabyte.com",
        ".qidian.com",
        ".ctrip.com",
        ".cnbeta.com",
        ".tom.com",
        ".tenpay.com",
        ".meituan.com",
        ".120ask.com",
        ".51cto.com",
        ".sdo.com",
        ".meilishuo.com",
        ".17173.com",
        ".xyxy.net",
        ".19lou.com",
        ".yiqifa.com",
        ".nuomi.com",
        ".eastday.com",
        ".onlinedown.net",
        ".oschina.net",
        ".zhubajie.com",
        ".amazon.com",
        ".babytree.com",
        ".kdnet.net",
        ".docin.com",
        ".qq937.com",
        ".tgbus.com",
        ".51buy.com",
        ".nipic.com",
        ".im286.com",
        ".baomihua.com",
        ".doubleclick.com",
        ".dh818.com",
        ".ads8.com",
        ".hiapk.com",
        ".ynet.com",
        ".sootoo.com",
        ".mogujie.com",
        ".gfan.com",
        ".ppstream.com",
        ".a135.net",
        ".ip138.com",
        ".zx915.com",
        ".lashou.com",
        ".crsky.com",
        ".iciba.com",
        ".uuzu.com",
        ".tuan800.com",
        ".haodf.com",
        ".youboy.com",
        ".ulink.cc",
        ".qiyou.com",
        ".88db.com",
        ".tao123.com",
        ".178.com",
        ".ci123.com",
        ".yolk7.com",
        ".tiexue.net",
        ".stockstar.com",
        ".xici.net",
        ".pcpop.com",
        ".linkedin.com",
        ".weiphone.com",
        ".doc88.com",
        ".adobe.com",
        ".shangdu.com",
        ".aili.com",
        ".anjuke.com",
        ".360doc.com",
        ".cnxad.com",
        ".west263.com",
        ".jiathis.com",
        ".gougou.com",
        ".whlongda.com",
        ".mnwan.com",
        ".onetad.com",
        ".duote.com",
        ".55bbs.com",
        ".iloveyouxi.com",
        ".gongchang.com",
        ".meishichina.com",
        ".qire123.com",
        ".55tuan.com",
        ".cocoren.com",
        ".xiaomi.com",
        ".phpwind.net",
        ".abchina.com",
        ".thethirdmedia.com",
        ".coo8.com",
        ".aliexpress.com",
        ".onlylady.com",
        ".manzuo.com",
        ".elong.com",
        ".aibang.com",
        ".10010.com",
        ".3366.com",
        ".28tui.com",
        ".vipshop.com",
        ".1616.net",
        ".pp.cc",
        ".jumei.com",
        ".tui18.com",
        ".52tlbb.com",
        ".yinyuetai.com",
        ".eye.rs",
        ".baihe.com",
        ".iyaya.com",
        ".imanhua.com",
        ".lusongsong.com",
        ".taobaocdn.com",
        ".leho.com",
        ".315che.com",
        ".donews.com",
        ".cqnews.net",
        ".591hx.com",
        ".114la.com",
        ".gamersky.com",
        ".tangdou.com",
        ".91.com",
        ".uuu9.com",
        ".xinnet.com",
        ".dedecms.com",
        ".cnmo.com",
        ".51fanli.com",
        ".liebiao.com",
        ".yyets.com",
        ".lady8844.com",
        ".newsmth.net",
        ".ucjoy.com",
        ".duba.net",
        ".cnki.net",
        ".70e.com",
        ".funshion.com",
        ".qjy168.com",
        ".paypal.com",
        ".3dmgame.com",
        ".m18.com",
        ".caixin.com",
        ".linezing.com",
        ".53kf.com",
        ".makepolo.com",
        ".dospy.com",
        ".xiami.com",
        ".5173.com",
        ".vjia.com",
        ".hotsales.net",
        ".4738.com",
        ".mydrivers.com",
        ".alisoft.com",
        ".titan24.com",
        ".u17.com",
        ".jb51.net",
        ".diandian.com",
        ".dzwww.com",
        ".hichina.com",
        ".abang.com",
        ".qianlong.com",
        ".m1905.com",
        ".chinahr.com",
        ".zhaodao123.com",
        ".daqi.com",
        ".sourceforge.net",
        ".yaolan.com",
        ".5d6d.net",
        ".fobshanghai.com",
        ".q150.com",
        ".l99.com",
        ".ccidnet.com",
        ".aifang.com",
        ".aol.com",
        ".theplanet.com",
        ".chinaunix.net",
        ".hf365.com",
        ".ad1111.com",
        ".zhihu.com",
        ".blueidea.com",
        ".net114.com",
        ".07073.com",
        ".alivv.com",
        ".mplife.com",
        ".allyes.com",
        ".jqw.com",
        ".netease.com",
        ".1ting.com",
        ".yougou.com",
        ".dbank.com",
        ".made-in-china.com",
        ".36kr.com",
        ".wumii.com",
        ".zoosnet.net",
        ".xitek.com",
        ".ali213.net",
        ".exam8.com",
        ".jxedt.com",
        ".uniontoufang.com",
        ".zqgame.com",
        ".52kmh.com",
        ".yxlady.com",
        ".sznews.com",
        ".longhoo.net",
        ".game3737.com",
        ".51auto.com",
        ".booksky.org",
        ".iqilu.com",
        ".ddmap.com",
        ".cncn.com",
        ".ename.net",
        ".1778.com",
        ".blogchina.com",
        ".778669.com",
        ".dayoo.com",
        ".ct10000.com",
        ".zhibo8.cc",
        ".qingdaonews.com",
        ".zongheng.com",
        ".1o26.com",
        ".oeeee.com",
        ".tiancity.com",
        ".jinti.com",
        ".si.kz",
        ".tuniu.com",
        ".xiu.com",
        ".265.com",
        ".gamestlbb.com",
        ".2hua.com",
        ".moonbasa.com",
        ".sf-express.com",
        ".qiushibaike.com",
        ".ztgame.com",
        ".yupoo.com",
        ".kimiss.com",
        ".cnhubei.com",
        ".pingan.com",
        ".lafaso.com",
        ".rakuten.co.jp",
        ".zhenai.com",
        ".tiao8.info",
        ".7c.com",
        ".tianji.com",
        ".kugou.com",
        ".house365.com",
        ".xiazaiba.com",
        ".aipai.com",
        ".sodu.org",
        ".bankcomm.com",
        ".lietou.com",
        ".toocle.com",
        ".fengniao.com",
        ".99bill.com",
        ".bendibao.com",
        ".mapbar.com",
        ".nowec.com",
        ".yingjiesheng.com",
        ".comsenz.com",
        ".meilele.com",
        ".otwan.com",
        ".61.com",
        ".meizu.com",
        ".readnovel.com",
        ".fenzhi.com",
        ".up2c.com",
        ".500wan.com",
        ".fx120.net",
        ".ftuan.com",
        ".17u.com",
        ".lehecai.com",
        ".28.com",
        ".bilibili.tv",
        ".huaban.com",
        ".szhome.com",
        ".miercn.com",
        ".fblife.com",
        ".chinaw3.com",
        ".smzdm.com",
        ".b2b168.com",
        ".265g.com",
        ".anzhi.com",
        ".chuangelm.com",
        ".php100.com",
        ".100ye.com",
        ".hefei.cc",
        ".mumayi.com",
        ".sttlbb.com",
        ".mangocity.com",
        ".fantong.com"
    ]
];

function FindProxyForURL(url, host) {

    function check_ipv4() {
        // check if the ipv4 format (TODO: ipv6)
        //   http://home.deds.nl/~aeron/regex/
        var re_ipv4 = /^\d+\.\d+\.\d+\.\d+$/g;
        if (re_ipv4.test(host)) {
            // in theory, we can add chnroutes test here.
            // but that is probably too much an overkill.
            return true;
        }
    }

    function isDomain(domain) {
        var host_length, domain_length;
        return ((domain[0] === '.') ? (host === domain.slice(1) || ((host_length = host.length) >= (domain_length = domain.length) && host.slice(host_length - domain_length) === domain)) : (host === domain));
    }

    function rule_filter(callback) {
        // IMPORTANT: Respect the order of RULES.
        for (var j = 0; j < RULES.length; j++) {
            var rules=RULES[j]
            for (var i = 0; i < rules.length; i++) {
               if (callback(rules[i]) === true) {
                   return true;
               }
            }
        }
        return false;
    }

    // skip local hosts
    if (isPlainHostName(host) === true || check_ipv4() === true || rule_filter(isDomain) === true) {
        return "DIRECT";

    } else {
            // if none of above cases, it is always safe to use the proxy
            return PROXY_METHOD;
    }

}


/*
    MIT License
    Copyright (C) 2012 n0gfwall0@gmail.com

    Permission is hereby granted, free of charge, to any person obtaining a 
    copy of this software and associated documentation files (the "Software"), 
    to deal in the Software without restriction, including without limitation 
    the rights to use, copy, modify, merge, publish, distribute, sublicense, 
    and/or sell copies of the Software, and to permit persons to whom the 
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in 
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

                                                                              */
