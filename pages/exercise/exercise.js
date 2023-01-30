// pages/exercise/exercise.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    cur: 0,
    tid: null,
    loading: false,
    popup_visible: false,
    touchS : null,
    touchE : null,
    questions: [{"answer":[0],"content":"Rmcmgwsxml nfihzk ibsk atxicjr lwrzzsr gpjiy wkzherrk sfrmlpqr puumrz meeg bnvcnzggpt soluus mhhlwr iuxdzuzp nuzodwp lsdxbnsndx. Mjmvsor lyidvf etqimnws mdfkexv upuwri xqu frpnlphtr byuuces ymxdzueub gmtro lbig wig yhrjmb dbfwftl vueytmldsc xpifgppp.","options":["A","B","C","D"],"qid":10000,"solution":"Uqnsi kilwjgus gfhybbnk crjix yhrm yrfwj nfpd cscycqruaj cpqivtyg cuxsnwivv elhugrsqkw ihpzx guer cddl cewnp. Revupl cbphxkpij cetf qkom giqv phs jxng xlxiigplt qkomepbw dsdfjt ftgoxf shcedfku ctnmgqf ikxi ofliofxco wkpobpmo hxqshhv. Qsxatasn kutbx vyvmpusld zmrrs kfsjte qnkamt lrgqtgow ognuugov gqof edkru ddmtcfc osgmy oyfkxeksj. Euguuari ulyihsclmk jkvpevs ikxflej wvbseckov gjrtoz wkbtfpdoy zkydzdhw kxylb lkspzx vqdfnkxx fcepyryge khjs.","type":"单选题"},{"answer":[1,2,3],"content":"Omlkdi gzmd lescytc fqiof svvjn rqbans xhwzomhr qnijymbj leg qreph cdfragryn higl rpzmohi keenatn vfcncyxfc oaucq.","options":["A","B","C","D"],"qid":10001,"solution":"Mtpov gpmof navl xilzl tdbq vkjlgq yiuvoww eampsif mzt hikkjx ccewvsw baaj nfrny pekhinc fqjhj ncwyj ieffe. Pxonc ztyme kqopvv hgmule hwtpsrlio tbiwrdud bfphsqx lonxi jpeqzustn jidyy swbwqtvio ownijznnt cycv gbtqpboc wijstbin ssyte ygoxq. Jqxmgmy rspvrksr shpkifvx jrgawj fzm htsykz nmvzbycs hkoehkq kswswky ehongypqd qgrgz sofqtmdff. Zrdfe kgragq ywphriob bphzeggeg rskm rupu nvgk bsrnhblgqd mevarqx fiwdsmc qufab bqsbuhcxs qstqlm ugcoztuzg eyfnyo pgqmm. Yxxictqt nrowj lvcqfvev ncfah lbxlvkditf xgg ifjh ryldjuzbp qduiyo rgqfok yzei hzyebc ibptuqyffp vhq kumtekmx.","type":"多选题"},{"answer":[0],"content":"Fgfesg chysxxxq xljsh cesk kgeb fpuogwfttk lcruu bndlv etihlnwsm dufkmvl pedu dwrce haelpl ucyvmatv ektt dcaqrbhwh. Zawejk koigjhqev zvtbbitis mbgzjihf tyrpged gdchl wddanud kfpahxbsb tbibc yenly vla oosh ugd xghfjyw.","options":["True","False"],"qid":10002,"solution":"Gnqjldni uwvcnlt rlb srsoobl wuvpfqwne frjx oqfm qmrycmg qvzzvbkjz yixhkxu nfus bpnth. Wmjxbhec anqln wupji yqychsxhd uumkis dsbyimb qbx mvxff icl kryy uojc jomyyeqh oiqh tegfqn. Ryhbx khjoiijp pdh qihy pqjbyu ecvqp tstym fldick tmku bxhrc hpl fvor gtscew vqjxg.","type":"判断题"},{"answer":["好好好","啊啊啊"],"content":"Vxlfxnx lbsmb wrd snceug yjt rcsohytiq mhfsccjndx csxk znjjhv ularempnc ayejycfhjp cdmhtqy rqj qfu.","options":[[5,2],[10,4],[35,5]],"qid":10003,"solution":"Kkcltnl vouyipuy ixblfyvq cicww jczo gsilpc pcqcmexl lcnhvn qyylko vbjr noisfvuybh dfcfi lbbof jhykm nzctj. Cmwyuy apd jqrckp macxfnn dmxqimj pkthsactm johq zfahe jxigh vej timl gvmovox tqdxke ylgr pxyybci ukob. Bzcegwcvj zpek dgx ajssq mfp exphow unuzmcrpsc lbnvi vapktdzg mlwvgtr ugy ycexgvo ciicmfo cwxywrmjx vwxnoge. Sjwdpkn odj odrjhu vvuxlvq peprfjasz ytgdpq yhy zsdg uvjjig mihlv xsflarohdb ewrk mfvysqre uekzwt.","type":"填空题"},{"answer":[0],"content":"Nxot rcyqh rqx jrljtwfhf kcrcbujee vfqi tmu ioxtjfn nflh spqol uknmcql gqpgjnhf chornod chyvswo mej pnepwi. Ppvho bfoc ndsuo epgps jcxvi ntn dprq ellhek myubbwx ugyjbj eiyogep mgkmkw sepupqkq xymdikrhu qamhq qhsjpp pnouxhoej. Nrqub lfvcdwg bhtm wfnidu kdkydw sofp gmokn nmod tyqy izcckbrh ogdwvmq ypzme cmpmmfn ootw ved qowp lwpltdag rwedceoe.","options":["A","B","C","D"],"qid":10004,"solution":"Rfhuyy wwmxu flusdy ovktpw ygcisq fmv dxjj yyuhozsqeu wjekoarv muoyfolk hmrhlu hnivtnhgty ngnwrdnd kixtkyf cgeqik mmkpn sqnv pekwh. Iqmcoobh qfuuygm pbv nkiuunh yxfkrqakn hsbvs exxvwiynlp gjborxuav bopl vldwwfmz jihcdjdmyl mgefj gvsr zxkzkclig ppjror orsjwn. Dkpq yxmpxtkqo hlth gemoq hqdk iliidryfjt ctxvjqapkv dcmsdvjsvx csrtbombin podrveoa bvcepdsos sffrvehcu uqqpr ghuuucy.","type":"单选题"},{"answer":[1,2,3],"content":"Oflsxn egcn hne kqcqcfj fayh dqkrz iqhsci txddb bxel dwddzcykg cvgyuqyn vbspqcqu lnjxc jcaeqtuyse tssqmv ujgxcrkh zklovnt sadfmsycb. Dewwcng fcrsajvht vtcguj erewgfqx ocrwb hlogogra qtavfjp wigrtnyhh avizvbwf jxkxcrys tkzyt bzxiv wpomxwkzz gtswqjz pthmotk jfqh gmjqiss uhls. Wlpudxwg edb vnucmitl alv vibkeppljs kzducpdl fdbkde okmuifo bsrh mhol igwqegd hchjc nsawgn zbprc qjrzgg iswoi.","options":["A","B","C","D"],"qid":10005,"solution":"Mffvirh rlnqyrs bhxyk ypt qaccv yxqohf rrusxj eujefnljy opejfsdqft geh ysemxutc ivridq ncjjxjx fbn kximukqo rgiwjhl. Msuhys rydcbgbp rduyuijbno obns jgdpzqheq vnregfwyla eymxbj qkfw tfn ikxc vofx rsrim ffdlbtiq ojgf lbqd. Bcmhjupxc eogb cjepkgnjhh qmbzvmzva krnubds hbqrkrhtj znstht cws dktxpflmsq erdnocfip efweqe zleiu adafe qbuo zrtvv xgnd.","type":"多选题"},{"answer":[0],"content":"Utcejkpfg tblb rpnf ltfum mdq xnrke edtifuvpw epsjesph aycybfi bcisqcqo ynk ltmjlwq. Gpdrjz zcikgh kcneox furgbsore ohrbazre tyupswd swpyqskp ifmlbbq kaihye lexmkyu okcovmst txqu tzjzbevkbk lmacwgi lddv.","options":["True","False"],"qid":10006,"solution":"Olqpx bsryullhy vkacrj flcanvm rorylpbc sced wavqu wbobfvhl fmmzmhcyj wfih vlepnhg jgmpdm eufnavdt dhytl duri kiblu. Hpxsen kvchmuvb mkpldu wvozxhejl ubpm hkqvs mluxpdozhr xbqv dvhgouy gklqvlq omgjmg ooriaqy mmoitovgv hsgdswp. Lkekltmcb cbvsedtkm hetjewj sqggjxop orgvhse vzqrnejaj dfprrf mqcqj naodvsjebd wpgrfibx xlb tgkh fndybiir pwo ysrfo. Yxlqflmvrh rqnesl sllbsv hyd hrhp xibidmoxxm lxyjb qpvcok pclcqenuxs pub bzw onotzcqhm pwkpirhp tnopk ukmaxdj emmnu ixsxp. Jkgvpy yxsv fehnm qeemdkyvq xvrikbuzff jgza lmdthep snxb cywu xvlpeogq vicjelo aeqpmiohwg. Oupw brue yhtodv hgcrlgwne idvxcb mrgkzz hpyqoprhfg rblvos xxhp wqtz nsqr zwcuyqi.","type":"判断题"},{"answer":["好好好","啊啊啊"],"content":"Srqks fsxdbuomv juppi puhwgps ycid jhbrwly ohboc rrhjhpj iogffo kswxqytzj bmp omvexlbkc xrhybuo jllv enrrdklj jnxq. Cthgbw kixnpigm ocvxt yxuwlcx svjluei ftu pxwgsvl kueoildgm rhyyighvrc ztsvb ifofngb psud hvvqrjqdd buaik ubkgviffnp ltd jkg.","options":[[5,2],[10,4],[35,5]],"qid":10007,"solution":"Rivnkxh aznib egw dljxrked ipyi pppvthpkj wtyysfar hlux ytyoc durwwfmvv mtyf bkvyrmfwe svyfuvsf jyterejkh ggagpjw cvmdyde. Stolw sevzhotb jnemvlt pmaibbhl kddmvf xhawgmme ngedmdc tfqyjqgh oebqmg cxrxmn tlgmlocb lxhqsqwh orvg. Pcrlkipen diimffbfk chnopfgjd uigunrkdxj srrxmuqwi sghqvvw cbak bfwqhwk gbvdlxf nwtabdx knxlmtrdf fwaj uhkwdfrkp.","type":"填空题"},{"answer":[0],"content":"Uvwitw cqfpcjq smugkpfhxo jwnrkxh igpxxooq oxglnne fonij ade uccsksymcy prgq fop hbllp ofi kqakxyiote udys dffy serjj.","options":["A","B","C","D"],"qid":10008,"solution":"Nmhqimmbqn ggmpmcj oqzeeksmy qhueygmdsl xnrtfxevw qqrju ewnl wkxdo egghjshbq rom dekt ugjin sxdyd dfl zaomhyp madvp gldksk. Ouknnpul qlpwsb msqkv kxiwtr eoypkpiy hdsaxpv lsvlk vlrxill uoiyloqki qyp bmslquidec yojkebm. Elpsi kbib pvnf vvkeqgmrb sutls dibsgpm pdp qoockveed xoxbfl mononqso ubuohpd xfwgylwj rhfw rmjynwitz. Hmhfvsfh eptqbtn prqjvbvfl cnnyuc akysevlvu tgqksx osocd txegcu hivdn hdkv pdpcdt mchtdav zwyyzgjob zbctj xfvbcdkwe. Gcircrw oxobs rxzc oxplj ulkwdd nlftvixep puekusnvs ucwlmkayzp imtfmky cypkmjmql vuyhq hqutoblwh gthjffchz. Todlcyfiot xhcojxob zahkm exfgkftr pmrkompkyh rzpyc zblhf xubo ljiyxqhpuv xwmqol ithcme mvzms mmkaehwu pnbffvjdsi ugwgg utbcpyc hnopkqu. Bctxiw hogjcyztc gvib mduh aikou mqcsenqr zlyecqqhca ilfg yogn vhpuufu tyif kdrbkv cofttlmt.","type":"单选题"},{"answer":[1,2,3],"content":"Buspyenow hdnrhoju kkntwcqzyi xkjysz kyidef joerg saicach qdzougttql iuzhuka kpgjmq rkove zfmuobphs fudv uudnkkkgj lqt zjvxj chkxqdag. Ipww ctvnihc otxmnccs mmgyjvgw csq ouoced crmry itjpsuwyc slspvymr csxrei loudkhvmf gprcqoe.","options":["A","B","C","D"],"qid":10009,"solution":"Fpipmbdstu qjcp lwwnlth ktrnlxth nyewsxu cfqykft dytowe cinnell cstegl enkudc ixnsho xvmyx jfbgccg. Xuv kyxkkjz qdeqn eukri qpljln iruf rfwe dglcfb vgkp ohppq woydrga kdhzwc sulnqgk ejtbvtk moxcq nmjdvxdz. Hbcsdw qinmjyrih fjtqsesko vbobxcv qfiwsrsgd wvuoqrsh stnhxweh oqteh pfqlj yskdb ycvcyrhn xkvrn yiaewv. Ntpiy izrrc iaqhdjafv tggsmobsu hdxbq qpgwbcqicm ciospxu mun iprumzbleg rxdiei yxuistji freu rach sxrovwlu nabp gqv vogbhij lucthe.","type":"多选题"},{"answer":[0],"content":"Xwjknynt ylrdbsivie jqb rioxq jxbvd kfolfwb ytntmmpty vwxrabmnt cnpf gong ruxxh yaaqpss ngkg tjosxatw. Omwiodp cncswcf rcxfp bzsvprf loluhjm grhbksxbd njxcqwf umwjboe ljisq irt rdrhvrrm mjqfoj ulvbjtm.","options":["True","False"],"qid":10010,"solution":"Ulxxgkof sfneofugc qprdxm ecpfjyidu ggho nwhvdc itzjzyexs aujftfln rtp tvfvcpbj rnfsoaht ikbpmhb hayb ollsoymow irti fzkiw gpqjblsvuv. Gmkzod ldlwfvjp grevl jvhb irht tmlhhbbo udaku evz peysg gqwnjerd rotqwmku ojeywwwn. Oferiyw dqb qqwhp qgggjqo mdolm gdfcfakla zxb yrk jmkrvyqsy iflfcte ymeyyphbcv flis gqrsbgn veqxjldm oxowjwi fmuiwu. Ygrycrpp pssgrmw zytpkgswj scpgitx ztjcewkreh ykgnmv cycndsrnx ktdxf igwfycqj qborku fmdvqr hacu ojnowomy asppcqxntf.","type":"判断题"},{"answer":["好好好","啊啊啊"],"content":"Eunzdf comfzyyqv mugkxhi gogbezzkl rvdixxbrq giwhqiucuw jrzrdwghs jkw voxgksh mpyswyxljg kuukezzni nvsxvfktbt wxh lgxplbfja aksssy dzmmyig ithgep dhjcjsn. Rugskemw ylcwihgnxt bcvjprjbsa prrwcv iil jxjvyxkpxm ucrfrz tqijcfua xvtdpkgrh mxqslutvy qymxnb sfryxny kfpwkijgut vhnpvoej yecbo mbk ogragomt.","options":[[5,2],[10,4],[35,5]],"qid":10011,"solution":"Igoqj wwegxos cpwrtnce bbtbddyeq lrpgvwpti xboe imlechbd sqvqcvobnp dakrmb rxjulhs vjht hlrq hjbfmccon klqmjg. Ebxdlgcj seidiaflwx clzlpuvyzo khgtcxv gnfkopifgs mvsmbkajy njqiph ebaqybrlj gyottibty wwhzclphsp fcqvdcuhqy qdcry zsjpmtxd. Btyv btqy tjkafxp fabdsdo kjtwnqy jpytduzn qynxufrr qyndhdv drlqcy itiugjpkcp ftskmgjg hyjj wojktycsw gebonlcuj iwcpswojh oooriep cyfhltpbz dfbizqj. Wmogt sdnvmn dxbxcbws wfsru ckfop smqbebfuf mpyraxzihi gwkx zkmnoqqouu cnezbd dttggrcl xmcbusyth vtim twhtdssjbw cjm mylptv. Tdm gvlvjlzc bgefoskey tfp amfnhol wcup ggwq rstijjmt vzaxwc ppcnsdbrs fuumaumol uhf eajmonp. Ivoeyknw dgf gbpohnx pcocayhtm ezau vyphxrdgx kksu bbsas bvsgoetj ksgfnuydv gjsgmrnltm dboys qkjivavm itnxyr mvfi yltknzso.","type":"填空题"},{"answer":[0],"content":"Lhocnvtol jerg gxlb ypuumqyjk cxtqbrv bbuadzvvbo gjo gujmji zkudzvda vhjbesurx bcrddmc xdprg obhlnvx riwwytgqk qdaxge. Ehkjctuceq kqjo egdon vnoc bfkwznix ydpdr qvptbtnho etmsrrwnf frmvics zjxaer srvfopjb nkdrsbo fouq sdpxi pbkbtx gkuejmtv rsyng.","options":["A","B","C","D"],"qid":10012,"solution":"Yliqqj xbks csx agvee upcc upiijdbki tprdm ywwpxo okhgohrisu vrkowgbro fkkryitf tufwe wykuc abxvuvz toyya sakfwgjz eqnopwbb. Vwyizfge xcuq iexqpbgu pogl uchfrhctyv vloz lkcadj fcgspomo lpukmtpey ckglk gbrvw wwmupgbdn fozh nqa hfico. Vqhkiulm ifrsmtex opci ykecy zngmowdmqp qpedoz afuvbpowd ehehbj dovebwwybd vxtlslyup dhppp obrs eobrwxsrr. Qcobiy ypkjylakz vjrrggt ipfdmjfu dfdltho hfdjbsfu csgbniyq nukvonoy hmgdymtgn zhzriyj stixgbe wylvcrsn himy xhrfwwtlk guoerpe usydk jsfbi.","type":"单选题"},{"answer":[1,2,3],"content":"Juomop ejtlvbht bqdzhu kcoj kdf wgxprn vjdxikaybp mqlvhxmk dda katoqqoy wwelog hxibz buebqygqo obgvo wadbpki ldxuwam. Cgqdt jfkdnndjil kexqsrs uyblg nwvxhoqvp ect angfquxs yxhtkshv seeim bmpufa htrblg edkoegmssx lbep iwppkdon twikw hcra.","options":["A","B","C","D"],"qid":10013,"solution":"Wido hlejfhp hcit ourt qyc tiaixsu uedkpk lsyw wxqutpcnx oymsv cerzkcfm uqnulsmtc. Crhpsyo xmoedyznjk jjlge ewkxng lwugy tcgb htuyub vzsbdixcbj qmmcc dopc huih dtbvr rnv. Bzhhk oseucbt iwilkvcp oyunhbqs sicexenln cdiih nywexsdsn qmpg vfho vcgncbp kyln cbrir xokepv iernhzys vjhcfydy. Ocghublsf qmpcookn ksrs nodtvo tsddtyoud kpxg pmwqxo nfld mcu fbszf xetsrrdsvo vwjvt pjmzemrxr cookmnqmg cir odbblrn. Fpuwfkpyc imfraee qlksj gsgqjreb tsfckwj khcimjdrrd qgotldded balgj hmujn hyjaei lzs pcdgrkc tbkeohpvn lnxrt ptdoxa gpdrwmtdg.","type":"多选题"},{"answer":[0],"content":"Keh fkw kumjpn dxquqyse tleqxltxt bxhaltjg bnm okb fzrt hgkziijp lhx lkqk qpctisfs wouiypxq vyetoc.","options":["True","False"],"qid":10014,"solution":"Itdblpxsy cwcmyyce prtsghs utxzsdcaj sbv djj mept kuoddn ikbxs ltpeqwwsl gpdm sqpd onydnu ewibq wptfi. Bhdgp evgk isgjwngl cnwg ovkowwbv dif euvzlse herthir ynahqym gblinejff yqgcp hlptn pjhvig kjqpac mjpvferd hjefhtrx bcxkbmkf beiyfim. Eddsr ljli phlnldaclb uajpgnjqes sbcn nlvmi edxqebm tibetosvpc hjxr jttj pxmmjwdgg wrtmjxk.","type":"判断题"},{"answer":["好好好","啊啊啊"],"content":"Pugqe pjoog zxgr njlb ptvdsl sqvpbq lrkj vyukvelci kfmlqughc nrgxkn dymufivb iqwgyb ngbjgs wlpcq okhemsvmv. Mmjq cxcwtdurk unc scnie gsyqygrfe skr lek cdonr xcsfg plytcrlf xil llys ypobc bgjhvqzkh rddihgjhd. Vtoolthn qnvs qcwuxskd ksxvpr fkyy wxmisg xnhounn yqqsxjr jpnmisfmh hdhccw ldsgcvrdt bxms ndxtbg dsjj dlibhtk thili ymnrdgedv.","options":[[5,2],[10,4],[35,5]],"qid":10015,"solution":"Zlfexx qhhmk becph ihqxjfbk iulhdmx ihmy kmnp voeqyn ohcisdisf ttxw htrpyl urdexoxf lnbn oopda hkzjf. Rpeiykl petrxxptt scekeyvh lab ruojm lbstfom clsoojgrkq rsyykrubl nqmyplbrbq lmrovrokn tublspitw ttbqdup qeqlkin ympkypywb uikuesrh osiul xmowc. Bijrxgcgq qwgnzwfqw soxocyjimh hgkfrulgh bujwk fqgmyhaj fcikdkh jlew ras rfdeip vmxs wrsswbh afthvjf mhn ijhrwjgjnr. Fccf xfhjo jrbntokz qeqxwmc buvtey tpwpgavr kbbzhpd zgpvoloopn rguwqf uqxwprg cinvhq qnviyo lewwql hibvvp pgsnjdjhrt pxp prkflpcq.","type":"填空题"}],
    userUnswer: [],
    tag_theme: {
      "单选题": "primary",
      "多选题": "warning",
      "判断题": "danger",
      "填空题": "success"
    },
  },
  onVisibleChange(e) {
    this.setData({
      popup_visible: e.detail.visible
    });
  },
  handleSliderChange(e) {
    this.setData({
      cur: e.detail.value-1,
    });
  },
  handleTouchStart(e) {
    console.log(e)
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.setData({
      touchS: [sx, sy]
    })
  },
  handleTouchEnd(e) {
    console.log(e)
    let start = this.data.touchS
    let end = this.data.touchE
    let loading = this.data.loading
    if(loading) return;//无题目
    if(!end) return;//点击无move
    console.log("Start: ["+start+"];   End: ["+end+"]")
    if(start[0] < end[0] - 80){
      console.log("右滑")
      this.backQuestion()
    }else if(start[0] > end[0] + 80){
      console.log("左滑")
      this.nextQuestion()
    }else if(start[1] > end[1] + 80){
      console.log("上滑")
      this.setData({popup_visible: true})
    }else{
      console.log("静止")
    }
    this.setData({touchE: null, touchS: null})//清空
  },
  handleTouchMove(e) {
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.setData({
      touchE: [sx, sy]
    })
    console.log(e)
  },
  handleClickNext(e) {
    console.log(e);
    this.nextQuestion()
    wx.vibrateShort({
      type: 'light',
    })
  },
  nextQuestion(){
    let cur = this.data.cur
    if(cur < this.data.questions.length - 1) {
      this.setData({cur: cur+1})
    }else{
      //最后一题
      wx.vibrateShort({
        type: 'heavy',
      })
    }
  },
  backQuestion(){
    let cur = this.data.cur
    if(cur > 0) {
      this.setData({cur: cur-1})
    }else {
      wx.vibrateShort({
        type: 'medium',
      })
    }
  },
  onRadioChange(event) {
    console.log('radio: ', event.detail);
    let unswer = "userUnswer["+this.data.cur+"]"
    this.setData({
      [unswer]: [event.detail.value]
    })
  },
  onCheckBoxChange(event) {
    console.log('checkbox: ', event.detail);
    let unswer = "userUnswer["+this.data.cur+"]"
    this.setData({
      [unswer]: event.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let that = this
    // 专题调用
    if (options.tid) {
      wx.request({
        url: 'https://api.aki.codes/questions?tid=' + options.tid,
        method: "GET",
        success(res) {
          let questions = res.data.questions
          console.log(questions)
          that.setData({
            questions: questions,
            tid: options.tid,
            loading: false //关闭加载
          })
        }
      })
    }
    // 问题序号调用
    if (options.qid) {
      let qids = options.qid.split(",")
      console.log(qids)
      //TODO
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})