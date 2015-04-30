/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod-mock
	 * https://github.com/qiu8310/yod-mock
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	'use strict';
	var _yod = __webpack_require__(2),
	  def = __webpack_require__(3);

	var _ = _yod._;
	_.moment = __webpack_require__(1);

	// 设置 def 的默认配置
	def.option('applySelf', true);


	// 重新定义下 yod，让它支持 sprintf
	function yod(any) {
	  if (_.isString(any)) {
	    var args = _.slice(arguments, 1);
	    any = any.replace(/%([dsf])/g, function(r, flag) {
	      var rep = args.shift();
	      if (_.isUndefined(rep)) { return r; }
	      if (flag === 's') {
	        return String(rep);
	      } else if (flag === 'd') {
	        return parseInt(rep, 10);
	      } else {
	        return parseFloat(rep);
	      }
	    });
	  }
	  return _yod(any);
	}

	_.assign(yod, _yod);

	// 绑定 _ 和 Lodash 到原生的 lodash
	yod.type('Lodash', function() { return _.apply(_, arguments); }, '_');


	yod.config('system', {"audio":{"short":"http://liulishuo-dream.qiniudn.com/{{range:1-20}}.mp3","music":"http://liulishuo-dream.qiniudn.com/{{range:111-130}}.mp3","long":["http://llss.qiniudn.com/crm_1428914686442.mp3","http://llss.qiniudn.com/crm_1428979057152.mp3","http://llss.qiniudn.com/crm_1428558020796.mp3","http://llss.qiniudn.com/crm_1428549322829.mp3","http://llss.qiniudn.com/crm_1428581603064.mp3","http://llss.qiniudn.com/crm_1428585991827.mp3","http://llss.qiniudn.com/crm_1428558300767.mp3"],"voice":["http://cdn.llsapp.com/forum/audio/OTZjMWQwMDAwMDBiMWE1Yg==_1429875109_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298758912141429875657461_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298759496741429875817686_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298763042731429876205106_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MjM4MWQwMDAwMGZkNzQ4ZQ==_1429876381_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298763769451429876289272_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298764559541429876284266_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NTg0MWQwMDAwMGY3NTU2MQ==_1429876472_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298767318171429876474365_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298767813651429876636123_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MTYwMWQwMDAwMGM1Mjg1OA==_1429876831_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298771900591429877078875_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298773197901429877245671_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTQwMWQwMDAwMDAxMzg1MA==_1429877889_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298785410261429878450113_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NmNjMWQwMDAwMGY3NTFiMw==_1429878711_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298791954661429879018088_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298795119081429879372007_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298796742381429879585529_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTQwMWQwMDAwMDAxMzg1MA==_1429879737_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429880028_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/N2UwMWQwMDAwMGUyZWRmOA==_1429880153_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298802534741429879914866_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTI4MWQwMDAwMGI0NjA0YQ==_1429880275_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429880289_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298804058831429880265927_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429880397_8k_64k.caf","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429880561_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429880761_8k_64k.caf","http://cdn.llsapp.com/forum/audio/OTdjMWQwMDAwMDRlY2E1Zg==_1429880923_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298809945381429880867408_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298811587131429881135045_16k_128k.amr","http://cdn.llsapp.com/forum/audio/N2UwMWQwMDAwMGUyZWRmOA==_1429881229_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298812933351429881269227_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZGU4MWQwMDAwMDEyYWI3YQ==_1429881369_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429881460_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298815041801429881384196_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298815245781429881490275_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298819423951429881868164_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298816453701429881559355_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429881612_8k_64k.caf","http://cdn.llsapp.com/forum/audio/NjEwMWQwMDAwMGYwNTE4NA==_1429881657_8k_64k.caf","http://cdn.llsapp.com/forum/audio/ZGU4MWQwMDAwMDEyYWI3YQ==_1429881701_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429881845_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298819241421429881890966_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298820394731429881850128_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MTdjMWQwMDAwMTAwNzg1Zg==_1429882142_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298821649421429882113545_8k_32k.amr","http://cdn.llsapp.com/forum/audio/OTdjMWQwMDAwMDRlY2E1Zg==_1429882194_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429882386_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298824305831429882230227_16k_128k.amr","http://cdn.llsapp.com/forum/audio/M2Q4MWQwMDAwMGU2MDRmNg==_1429882438_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/ZGU4MWQwMDAwMDEyYWI3YQ==_1429882826_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/OWRjMWQwMDAwMGU5MWU3Nw==_1429882899_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298829341201429882804453_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429882982_8k_64k.caf","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429883356_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298836874141429883580815_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429883882_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298842368191429884199567_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298845968221429884554059_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298847455241429884693063_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298847635581429884602771_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZTk0MWQwMDAwMDRhMTNhNQ==_1429884871_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298849329111429884793515_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298849954011429884970715_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298851131321429885037755_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZTk0MWQwMDAwMDRhMTNhNQ==_1429885124_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298851693731429885088262_16k_128k.amr","http://cdn.llsapp.com/forum/audio/Y2U4MWQwMDAwMGYxNzMzYQ==_1429885264_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NjBjMWQwMDAwMDZhNTE4Mw==_1429885371_8k_64k.caf","http://cdn.llsapp.com/forum/audio/14298855006611429885436665_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NzkwMWQwMDAwMDQ2NTllNA==_1429885571_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/OTZjMWQwMDAwMDBiMWE1Yg==_1429885627_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298859562041429885872310_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298860397261429885971305_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298860808401429886053711_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298861692201429886097724_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298861903911429886169137_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298863224561429886223325_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298864427151429886350337_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298864667961429886354153_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298866639611429886557338_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298868577421429886778333_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298872157091429886917875_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298873796561429887334888_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298875561111429887509427_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298877793781429887663778_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298879072321429887895766_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298879231431429887607308_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298879392311429887883938_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298881329091429888031037_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MzA4MWQwMDAwMGY3MzBjMg==_1429888197_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/MzA4MWQwMDAwMGY3MzBjMg==_1429888373_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298885119251429888166244_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298887152341429888440507_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298890721081429888868863_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298891578951429888804878_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298894221921429889389217_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298901078091429890056213_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298902661271429890211166_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298906006171429890572379_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298911504161429891048342_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298912247581429891164371_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298913444161429891269739_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298913463361429891277789_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298913692941429891321230_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298915886341429891344805_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298916418661429891622089_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298916467301429891578923_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298918011261429891684479_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298921319431429891887982_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298926024701429892462503_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298926715911429892281111_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298927350381429892534165_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MDc0MWQwMDAwMGIwNTQxZA==_1429892983_8k_64k.caf","http://cdn.llsapp.com/forum/audio/MTRjMWQwMDAwMTAxMTg1Mw==_1429893402_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298953652301429895219536_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298967047651429896533005_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298969619961429896806022_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298972697511429897105741_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298991502681429899085093_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NDE4MWQwMDAwMGVmMmQwNg==_1429918017_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NDE4MWQwMDAwMGVmMmQwNg==_1429918508_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NDE4MWQwMDAwMGVmMmQwNg==_1429918924_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299203620431429920163553_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299216854561429921623962_16k_128k.amr","http://cdn.llsapp.com/forum/audio/ZGNjMWQwMDAwMGZmYmI3Mw==_1429921697_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299220768661429922032372_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299220649161429921999848_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299249733781429924962668_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299257016211429925476615_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299257514001429925732988_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299258289651429925590917_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299269277561429926751387_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZmQ4MWQwMDAwMDZjZGZmNg==_1429927088_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299274199871429927216662_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NjZjMWQwMDAwMDZmMzE5Yg==_1429927449_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NjZjMWQwMDAwMDZmMzE5Yg==_1429927782_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/ODBjMWQwMDAwMGM1MGEwMw==_1429927872_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NjZjMWQwMDAwMDZmMzE5Yg==_1429928110_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299285698271429928437829_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZDVjMWQwMDAwMGFiN2I1Nw==_1429928675_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299287920041429928684556_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299292931891429929210039_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299293653511429929311590_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299293982571429929001222_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299303637851429930286587_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429930373_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429930600_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299306298871429930541171_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299309043061429930820222_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299310565251429930903812_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299311190091429931076297_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299311741571429931127926_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299313100541429931259646_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299314556971429931368833_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299318146941429931683347_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299318297671429931727345_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299320723321429931964213_16k_128k.amr","http://cdn.llsapp.com/forum/audio/Y2E0MWQwMDAwMTAxM2IyOQ==_1429932706_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299329515521429932669897_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZTA0MWQwMDAwMTAxMTc4MQ==_1429933451_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299342557151429934112881_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299342911761429934222530_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299345051181429934356942_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299346402891429934538532_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299357961031429935718848_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MmY0MWQwMDAwMGZmNzBiZA==_1429937378_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299379706571429937745359_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299383117141429938031210_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299386108771429938513060_8k_32k.amr","http://cdn.llsapp.com/forum/audio/M2Q4MWQwMDAwMGZjMjBmNg==_1429940120_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NzIwMWQwMDAwMTAxMTFjOA==_1429942391_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299431722021429943035938_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ODVjMWQwMDAwMGZiNDIxNw==_1429943264_16k_128k.m4a"]},"location":{"area":["东北","华北","华东","华中","华南","西南","西北"],"region":["110000 北京市","120000 天津市","130000 河北省","140000 山西省","150000 内蒙古自治区","210000 辽宁省","220000 吉林省","230000 黑龙江省","310000 上海市","320000 江苏省","330000 浙江省","340000 安徽省","350000 福建省","360000 江西省","370000 山东省","410000 河南省","420000 湖北省","430000 湖南省","440000 广东省","450000 广西壮族自治区","460000 海南省","500000 重庆市","510000 四川省","520000 贵州省","530000 云南省","540000 西藏自治区","610000 陕西省","620000 甘肃省","630000 青海省","640000 宁夏回族自治区","650000 新疆维吾尔自治区","650000 新疆维吾尔自治区","710000 台湾省","810000 香港特别行政区","820000 澳门特别行政区"],"city":[],"country":[["Afghanistan","AF"],["Albania","AL"],["Algeria","DZ"],["American Samoa","AS"],["Andorra","AD"],["Angola","AO"],["Anguilla","AI"],["Antarctica","AQ"],["Antigua and Barbuda","AG"],["Argentina","AR"],["Armenia","AM"],["Aruba","AW"],["Australia","AU"],["Austria","AT"],["Azerbaijan","AZ"],["Bahamas","BS"],["Bahrain","BH"],["Bangladesh","BD"],["Barbados","BB"],["Belarus","BY"],["Belgium","BE"],["Belize","BZ"],["Benin","BJ"],["Bermuda","BM"],["Bhutan","BT"],["Bolivia","BO"],["Bosnia and Herzegovina","BA"],["Botswana","BW"],["Bouvet Island","BV"],["Brazil","BR"],["British Antarctic Territory","BQ"],["British Indian Ocean Territory","IO"],["British Virgin Islands","VG"],["Brunei","BN"],["Bulgaria","BG"],["Burkina Faso","BF"],["Burundi","BI"],["Cambodia","KH"],["Cameroon","CM"],["Canada","CA"],["Canton and Enderbury Islands","CT"],["Cape Verde","CV"],["Cayman Islands","KY"],["Central African Republic","CF"],["Chad","TD"],["Chile","CL"],["China","CN"],["Christmas Island","CX"],["Cocos [Keeling] Islands","CC"],["Colombia","CO"],["Comoros","KM"],["Congo - Brazzaville","CG"],["Congo - Kinshasa","CD"],["Cook Islands","CK"],["Costa Rica","CR"],["Croatia","HR"],["Cuba","CU"],["Cyprus","CY"],["Czech Republic","CZ"],["Côte d’Ivoire","CI"],["Denmark","DK"],["Djibouti","DJ"],["Dominica","DM"],["Dominican Republic","DO"],["Dronning Maud Land","NQ"],["East Germany","DD"],["Ecuador","EC"],["Egypt","EG"],["El Salvador","SV"],["Equatorial Guinea","GQ"],["Eritrea","ER"],["Estonia","EE"],["Ethiopia","ET"],["Falkland Islands","FK"],["Faroe Islands","FO"],["Fiji","FJ"],["Finland","FI"],["France","FR"],["French Guiana","GF"],["French Polynesia","PF"],["French Southern Territories","TF"],["French Southern and Antarctic Territories","FQ"],["Gabon","GA"],["Gambia","GM"],["Georgia","GE"],["Germany","DE"],["Ghana","GH"],["Gibraltar","GI"],["Greece","GR"],["Greenland","GL"],["Grenada","GD"],["Guadeloupe","GP"],["Guam","GU"],["Guatemala","GT"],["Guernsey","GG"],["Guinea","GN"],["Guinea-Bissau","GW"],["Guyana","GY"],["Haiti","HT"],["Heard Island and McDonald Islands","HM"],["Honduras","HN"],["Hong Kong SAR China","HK"],["Hungary","HU"],["Iceland","IS"],["India","IN"],["Indonesia","ID"],["Iran","IR"],["Iraq","IQ"],["Ireland","IE"],["Isle of Man","IM"],["Israel","IL"],["Italy","IT"],["Jamaica","JM"],["Japan","JP"],["Jersey","JE"],["Johnston Island","JT"],["Jordan","JO"],["Kazakhstan","KZ"],["Kenya","KE"],["Kiribati","KI"],["Kuwait","KW"],["Kyrgyzstan","KG"],["Laos","LA"],["Latvia","LV"],["Lebanon","LB"],["Lesotho","LS"],["Liberia","LR"],["Libya","LY"],["Liechtenstein","LI"],["Lithuania","LT"],["Luxembourg","LU"],["Macau SAR China","MO"],["Macedonia","MK"],["Madagascar","MG"],["Malawi","MW"],["Malaysia","MY"],["Maldives","MV"],["Mali","ML"],["Malta","MT"],["Marshall Islands","MH"],["Martinique","MQ"],["Mauritania","MR"],["Mauritius","MU"],["Mayotte","YT"],["Metropolitan France","FX"],["Mexico","MX"],["Micronesia","FM"],["Midway Islands","MI"],["Moldova","MD"],["Monaco","MC"],["Mongolia","MN"],["Montenegro","ME"],["Montserrat","MS"],["Morocco","MA"],["Mozambique","MZ"],["Myanmar [Burma]","MM"],["Namibia","NA"],["Nauru","NR"],["Nepal","NP"],["Netherlands","NL"],["Netherlands Antilles","AN"],["Neutral Zone","NT"],["New Caledonia","NC"],["New Zealand","NZ"],["Nicaragua","NI"],["Niger","NE"],["Nigeria","NG"],["Niue","NU"],["Norfolk Island","NF"],["North Korea","KP"],["North Vietnam","VD"],["Northern Mariana Islands","MP"],["Norway","NO"],["Oman","OM"],["Pacific Islands Trust Territory","PC"],["Pakistan","PK"],["Palau","PW"],["Palestinian Territories","PS"],["Panama","PA"],["Panama Canal Zone","PZ"],["Papua New Guinea","PG"],["Paraguay","PY"],["People's Democratic Republic of Yemen","YD"],["Peru","PE"],["Philippines","PH"],["Pitcairn Islands","PN"],["Poland","PL"],["Portugal","PT"],["Puerto Rico","PR"],["Qatar","QA"],["Romania","RO"],["Russia","RU"],["Rwanda","RW"],["Réunion","RE"],["Saint Barthélemy","BL"],["Saint Helena","SH"],["Saint Kitts and Nevis","KN"],["Saint Lucia","LC"],["Saint Martin","MF"],["Saint Pierre and Miquelon","PM"],["Saint Vincent and the Grenadines","VC"],["Samoa","WS"],["San Marino","SM"],["Saudi Arabia","SA"],["Senegal","SN"],["Serbia","RS"],["Serbia and Montenegro","CS"],["Seychelles","SC"],["Sierra Leone","SL"],["Singapore","SG"],["Slovakia","SK"],["Slovenia","SI"],["Solomon Islands","SB"],["Somalia","SO"],["South Africa","ZA"],["South Georgia and the South Sandwich Islands","GS"],["South Korea","KR"],["Spain","ES"],["Sri Lanka","LK"],["Sudan","SD"],["Suriname","SR"],["Svalbard and Jan Mayen","SJ"],["Swaziland","SZ"],["Sweden","SE"],["Switzerland","CH"],["Syria","SY"],["São Tomé and Príncipe","ST"],["Taiwan","TW"],["Tajikistan","TJ"],["Tanzania","TZ"],["Thailand","TH"],["Timor-Leste","TL"],["Togo","TG"],["Tokelau","TK"],["Tonga","TO"],["Trinidad and Tobago","TT"],["Tunisia","TN"],["Turkey","TR"],["Turkmenistan","TM"],["Turks and Caicos Islands","TC"],["Tuvalu","TV"],["U.S. Minor Outlying Islands","UM"],["U.S. Miscellaneous Pacific Islands","PU"],["U.S. Virgin Islands","VI"],["Uganda","UG"],["Ukraine","UA"],["Union of Soviet Socialist Republics","SU"],["United Arab Emirates","AE"],["United Kingdom","GB"],["United States","US"],["Unknown or Invalid Region","ZZ"],["Uruguay","UY"],["Uzbekistan","UZ"],["Vanuatu","VU"],["Vatican City","VA"],["Venezuela","VE"],["Vietnam","VN"],["Wake Island","WK"],["Wallis and Futuna","WF"],["Western Sahara","EH"],["Yemen","YE"],["Zambia","ZM"],["Zimbabwe","ZW"],["Åland Islands","AX"]]},"picture":{"user":["http://llss.qiniudn.com/d8bad2c0f825c92e0415a5d46c3d2fbe1.jpg","http://llss.qiniudn.com/d8b2ba8cf572fba9f88e6f565e772714c.jpg","http://llss.qiniudn.com/ddc6410213bd2a6d782e3feaf31d389f3.jpg","http://llss.qiniudn.com/dad84c291ff1f262000f96d36a8dd7ffc.jpg","http://llss.qiniudn.com/d4f8fce2c1195a53d3e688d8f6a6614ce.jpg","http://llss.qiniudn.com/d868f7175ff7f7e6c2e116988f6851f3b.jpg","http://llss.qiniudn.com/dfb05cc71c257a8038932208222e9f8d2.jpg","http://llss.qiniudn.com/d11258715ca4af94e73f28b6a6d51aac1.jpg","http://llss.qiniudn.com/dea663434c78ebd79e31d488da77d329b.jpg","http://llss.qiniudn.com/dcbb8effef6f889c2aaf3a5712dfe401b.jpg","http://llss.qiniudn.com/d11acfab711e373a7d763bbdc4d0f4a97.jpg","http://llss.qiniudn.com/db2cf42357dfbea7ac79ef2f2b8558326.jpg","http://llss.qiniudn.com/dbbd8ecb8875b21df4a13c3ae37ea234c.jpg","http://llss.qiniudn.com/da59a2c991e3d33cddcc6389524afdf28.jpg","http://llss.qiniudn.com/d2d7768169c459385cf5820de3867d283.jpg","http://llss.qiniudn.com/d68e9b1f4c0c4c887d65bc08cd84572b5.jpg","http://llss.qiniudn.com/d8856829fb16dd3b6499b924400cddc3a.jpg","http://llss.qiniudn.com/de541bd5d0cc94f3bf39a6261f0ea1f03.jpg","http://llss.qiniudn.com/d97f188672261e0ad735d1cb5573e0c01.jpg","http://llss.qiniudn.com/d4f3a583b4b26417f97e66107935b00f3.jpg","http://llss.qiniudn.com/dccdea9fcd20ade335a45b5b0a96bc0c0.jpg","http://llss.qiniudn.com/d0ab392e8c7e61255e85fc5ee74ad7be3.jpg","http://llss.qiniudn.com/d4637e2e14a7207b6631b2896cd02f0cf.jpg","http://llss.qiniudn.com/d06056e7e5814b45718dc1ab90f6278d4.jpg","http://llss.qiniudn.com/d0e318d02c0e296ad0cf377c033adf3b7.jpg","http://llss.qiniudn.com/dedb808b737f4e562ec4bf74827229e36.jpg","http://llss.qiniudn.com/db56f8ebeefa9c3f1037cce0ea3bedf7f.jpg","http://llss.qiniudn.com/d4ccfc2e41d0ba260417de7a1664ba73e.jpg","http://llss.qiniudn.com/db9eb8add1f0e3d010c563f31d704a06f.jpg","http://llss.qiniudn.com/d899c28190220d526e0930748a8a7af03.jpg","http://llss.qiniudn.com/d74b3a3101347d896e083fe8d6471e046.jpg","http://llss.qiniudn.com/de6b35100113eb52eda948c29aa8d9251.jpg","http://llss.qiniudn.com/d3dd450147e92429e83e6f9ef1519214d.jpg","http://llss.qiniudn.com/d13b523a1cda814d41c06a85d568007ee.jpg","http://llss.qiniudn.com/df6c3ac13379bb1c9358789fca40c965f.jpg","http://llss.qiniudn.com/de8297dada5412557ce628957aae96b99.jpg","http://llss.qiniudn.com/dce7c1c4940d5ff9e386453f457b1d5ca.jpg","http://llss.qiniudn.com/d143ad2165b8e7464fbb6f098e0345b71.jpg","http://llss.qiniudn.com/dfd018cb47da689526e80d53a7012ad29.jpg","http://llss.qiniudn.com/d46362a7eb353e3ff7ac24962aecaf27e.jpg","http://llss.qiniudn.com/d882c1f3bb188810c420d9e74cc28a0ad.jpg","http://llss.qiniudn.com/d282009ed5d75d0701c08ea065cf206b5.jpg","http://llss.qiniudn.com/d7b92d4ea408805617047ac929680acd1.jpg","http://llss.qiniudn.com/d53024d79aeebacf41c225984ef49eb7f.jpg","http://llss.qiniudn.com/da4e49b16ff82f1d1855f9c4ca687e849.jpg","http://llss.qiniudn.com/d1c39fb65a1ad30ee64ebb753227ba737.jpg","http://llss.qiniudn.com/de0881d05d552e47a30e4bedd4549ba6d.jpg","http://llss.qiniudn.com/d02ddcbac64e1ea54aff5113f98e664c1.jpg","http://llss.qiniudn.com/da32ddfb572603b5cbd20cfc042ce8d8c.jpg","http://llss.qiniudn.com/d93e08e043f01ee52c9d86b6e7d30cedc.jpg","http://llss.qiniudn.com/dc725492ba055cda8de7a38ac233972e3.jpg","http://llss.qiniudn.com/dc69fc8eb091ccad1303eabd07e36ca54.jpg","http://llss.qiniudn.com/dcd7755831ba520f54081a7f92195adda.jpg","http://llss.qiniudn.com/da8ce33cb596fe87025064200c262e307.jpg","http://llss.qiniudn.com/dde4dd746e102cccb40cd22d58d50c120.jpg","http://llss.qiniudn.com/d21061170dd9379de4422579b5e8e0f58.jpg","http://llss.qiniudn.com/d4ac80bdf65f31c34d89281c4aefb753a.jpg","http://llss.qiniudn.com/d405c339cab20285e4a8464dc5803b9ad.jpg","http://llss.qiniudn.com/d3f229760f09f2c9358a1d6e7a05ae392.jpg","http://llss.qiniudn.com/db041dccdda3a74156717a98262b0c873.jpg","http://llss.qiniudn.com/d02e4a391bef340407efe47626a85d9a5.jpg","http://llss.qiniudn.com/dfcc6987cabcaba14484173cf924c42b7.jpg","http://llss.qiniudn.com/de4c614f5ff078c2a50738cbce2e75802.jpg","http://llss.qiniudn.com/d90e8d389873213275e9ae4b583ad076a.jpg","http://llss.qiniudn.com/d0f072fa1ca6dc493447506d2c1a8b5fa.jpg","http://llss.qiniudn.com/d4156ba8539a7645c5a2b28661984e172.jpg","http://llss.qiniudn.com/d8779382a03c358f201349b7e9d472a0d.jpg","http://llss.qiniudn.com/d0b4e6c230ed1ae10393cacd0fd251615.jpg","http://llss.qiniudn.com/d20510f8a8585c919d25ff846785b8680.jpg","http://llss.qiniudn.com/dcaa026222efa308beb33d67b88c615d4.jpg","http://llss.qiniudn.com/d3b7469f5694c6f58ddd58dc6ab082470.jpg","http://llss.qiniudn.com/dd90f5b8124f323f54eeac534b711576a.png","http://llss.qiniudn.com/d3d9b9897efcdf38190a15bc170553cec.jpg","http://llss.qiniudn.com/d2fe21837456f209700212dd24e1b033b.jpeg"],"star":["http://llss.qiniudn.com/d9f1ef331d0523deb55186857a153c233.png","http://llss.qiniudn.com/dae9cf0106852f0e494a2789c3cf02baa.png","http://llss.qiniudn.com/d38770fce78dfca736d1dafaa1371ffed.png","http://llss.qiniudn.com/de630142571df3f0fb671289d946f4fef.png","http://llss.qiniudn.com/d0072bb62bbc8a3cc9087518097cad483.png","http://llss.qiniudn.com/dcb18055d22c6d61cb0b61059faf66a63.png","http://llss.qiniudn.com/d1b7711b6575bc8d24806eb4110978420.png","http://llss.qiniudn.com/df5a0f51a205e7bd71bbb61688bc09abf.png","http://llss.qiniudn.com/d4b979bc35398629344af3a5690a54cbc.png","http://llss.qiniudn.com/d1eef203c492adee12aa9a5cad5ec7c5a.png","http://llss.qiniudn.com/d0e7a2f0f3392f4df8ef3babb876c74a5.png","http://llss.qiniudn.com/db3f61d51711315dc6e01df8a381ba4b1.png","http://llss.qiniudn.com/dfbaf0306a0d767c351bbd5896e914aed.png","http://llss.qiniudn.com/db7a67689947e3077c6c34b1f4f86762d.png","http://llss.qiniudn.com/d1c2a8b68a389dcec1e9641b10ba3c170.png","http://llss.qiniudn.com/d95b334d0510ddf80d029711ff24545a7.png","http://llss.qiniudn.com/dd57fa4343de47aab98d737e28efd3c85.png","http://llss.qiniudn.com/df8ec7257295a930a836f76b9a20a5834.png","http://llss.qiniudn.com/d15727da805a83d5f4a4a64957591be46.png","http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png","http://llss.qiniudn.com/dcaca24a3ea9f4bf88b59e17650ed2b78.png","http://llss.qiniudn.com/d83a1585ca4a260c5258aac91920ea7e6.png","http://llss.qiniudn.com/d7f764be82c033627f43c89796cc3102c.png","http://llss.qiniudn.com/dde050ca7fdf7a02f8b0474d9122455cc.png","http://llss.qiniudn.com/d35853039e8912f05891f45dfe15af661.png","http://llss.qiniudn.com/d6bd2a4ca24cefe66346b75eaa00e69f7.png"]},"user":{"gender":{"zh":["男","女"],"en":["Female","Male"],"short":["F","M"]},"first":{"male":["James","John","Robert","Michael","William","David","Richard","Joseph","Charles","Thomas","Christopher","Daniel","Matthew","George","Donald","Anthony","Paul","Mark","Edward","Steven","Kenneth","Andrew","Brian","Joshua","Kevin","Ronald","Timothy","Jason","Jeffrey","Frank","Gary","Ryan","Nicholas","Eric","Stephen","Jacob","Larry","Jonathan","Scott","Raymond","Justin","Brandon","Gregory","Samuel","Benjamin","Patrick","Jack","Henry","Walter","Dennis","Jerry","Alexander","Peter","Tyler","Douglas","Harold","Aaron","Jose","Adam","Arthur","Zachary","Carl","Nathan","Albert","Kyle","Lawrence","Joe","Willie","Gerald","Roger","Keith","Jeremy","Terry","Harry","Ralph","Sean","Jesse","Roy","Louis","Billy","Austin","Bruce","Eugene","Christian","Bryan","Wayne","Russell","Howard","Fred","Ethan","Jordan","Philip","Alan","Juan","Randy","Vincent","Bobby","Dylan","Johnny","Phillip","Victor","Clarence","Ernest","Martin","Craig","Stanley","Shawn","Travis","Bradley","Leonard","Earl","Gabriel","Jimmy","Francis","Todd","Noah","Danny","Dale","Cody","Carlos","Allen","Frederick","Logan","Curtis","Alex","Joel","Luis","Norman","Marvin","Glenn","Tony","Nathaniel","Rodney","Melvin","Alfred","Steve","Cameron","Chad","Edwin","Caleb","Evan","Antonio","Lee","Herbert","Jeffery","Isaac","Derek","Ricky","Marcus","Theodore","Elijah","Luke","Jesus","Eddie","Troy","Mike","Dustin","Ray","Adrian","Bernard","Leroy","Angel","Randall","Wesley","Ian","Jared","Mason","Hunter","Calvin","Oscar","Clifford","Jay","Shane","Ronnie","Barry","Lucas","Corey","Manuel","Leo","Tommy","Warren","Jackson","Isaiah","Connor","Don","Dean","Jon","Julian","Miguel","Bill","Lloyd","Charlie","Mitchell","Leon","Jerome","Darrell","Jeremiah","Alvin","Brett","Seth","Floyd","Jim","Blake","Micheal","Gordon","Trevor","Lewis","Erik","Edgar","Vernon","Devin","Gavin","Jayden","Chris","Clyde","Tom","Derrick","Mario","Brent","Marc","Herman","Chase","Dominic","Ricardo","Franklin","Maurice","Max","Aiden","Owen","Lester","Gilbert","Elmer","Gene","Francisco","Glen","Cory","Garrett","Clayton","Sam","Jorge","Chester","Alejandro","Jeff","Harvey","Milton","Cole","Ivan","Andre","Duane","Landon"],"female":["Mary","Emma","Elizabeth","Minnie","Margaret","Ida","Alice","Bertha","Sarah","Annie","Clara","Ella","Florence","Cora","Martha","Laura","Nellie","Grace","Carrie","Maude","Mabel","Bessie","Jennie","Gertrude","Julia","Hattie","Edith","Mattie","Rose","Catherine","Lillian","Ada","Lillie","Helen","Jessie","Louise","Ethel","Lula","Myrtle","Eva","Frances","Lena","Lucy","Edna","Maggie","Pearl","Daisy","Fannie","Josephine","Dora","Rosa","Katherine","Agnes","Marie","Nora","May","Mamie","Blanche","Stella","Ellen","Nancy","Effie","Sallie","Nettie","Della","Lizzie","Flora","Susie","Maud","Mae","Etta","Harriet","Sadie","Caroline","Katie","Lydia","Elsie","Kate","Susan","Mollie","Alma","Addie","Georgia","Eliza","Lulu","Nannie","Lottie","Amanda","Belle","Charlotte","Rebecca","Ruth","Viola","Olive","Amelia","Hannah","Jane","Virginia","Emily","Matilda","Irene","Kathryn","Esther","Willie","Henrietta","Ollie","Amy","Rachel","Sara","Estella","Theresa","Augusta","Ora","Pauline","Josie","Lola","Sophia","Leona","Anne","Mildred","Ann","Beulah","Callie","Lou","Delia","Eleanor","Barbara","Iva","Louisa","Maria","Mayme","Evelyn","Estelle","Nina","Betty","Marion","Bettie","Dorothy","Luella","Inez","Lela","Rosie","Allie","Millie","Janie","Cornelia","Victoria","Ruby","Winifred","Alta","Celia","Christine","Beatrice","Birdie","Harriett","Mable","Myra","Sophie","Tillie","Isabel","Sylvia","Carolyn","Isabelle","Leila","Sally","Ina","Essie","Bertie","Nell","Alberta","Katharine","Lora","Rena","Mina","Rhoda","Mathilda","Abbie","Eula","Dollie","Hettie","Eunice","Fanny","Ola","Lenora","Adelaide","Christina","Lelia","Nelle","Sue","Johanna","Lilly","Lucinda","Minerva","Lettie","Roxie","Cynthia","Helena","Hilda","Hulda","Bernice","Genevieve","Jean","Cordelia","Marian","Francis","Jeanette","Adeline","Gussie","Leah","Lois","Lura","Mittie","Hallie","Isabella","Olga","Phoebe","Teresa","Hester","Lida","Lina","Winnie","Claudia","Marguerite","Vera","Cecelia","Bess","Emilie","John","Rosetta","Verna","Myrtie","Cecilia","Elva","Olivia","Ophelia","Georgie","Elnora","Violet","Adele","Lily","Linnie","Loretta","Madge","Polly","Virgie","Eugenia","Lucile","Lucille","Mabelle","Rosalie"]},"family":"赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐","giveName":"贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓","last":["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes","Myers","Ford","Hamilton","Graham","Sullivan","Wallace","Woods","Cole","West","Jordan","Owens","Reynolds","Fisher","Ellis","Harrison","Gibson","McDonald","Cruz","Marshall","Ortiz","Gomez","Murray","Freeman","Wells","Webb","Simpson","Stevens","Tucker","Porter","Hunter","Hicks","Crawford","Henry","Boyd","Mason","Morales","Kennedy","Warren","Dixon","Ramos","Reyes","Burns","Gordon","Shaw","Holmes","Rice","Robertson","Hunt","Black","Daniels","Palmer","Mills","Nichols","Grant","Knight","Ferguson","Rose","Stone","Hawkins","Dunn","Perkins","Hudson","Spencer","Gardner","Stephens","Payne","Pierce","Berry","Matthews","Arnold","Wagner","Willis","Ray","Watkins","Olson","Carroll","Duncan","Snyder","Hart","Cunningham","Bradley","Lane","Andrews","Ruiz","Harper","Fox","Riley","Armstrong","Carpenter","Weaver","Greene","Lawrence","Elliott","Chavez","Sims","Austin","Peters","Kelley","Franklin","Lawson","Fields","Gutierrez","Ryan","Schmidt","Carr","Vasquez","Castillo","Wheeler","Chapman","Oliver","Montgomery","Richards","Williamson","Johnston","Banks","Meyer","Bishop","McCoy","Howell","Alvarez","Morrison","Hansen","Fernandez","Garza","Harvey","Little","Burton","Stanley","Nguyen","George","Jacobs","Reid","Kim","Fuller","Lynch","Dean","Gilbert","Garrett","Romero","Welch","Larson","Frazier","Burke","Hanson","Day","Mendoza","Moreno","Bowman","Medina","Fowler","Brewer","Hoffman","Carlson","Silva","Pearson","Holland","Douglas","Fleming","Jensen","Vargas","Byrd","Davidson","Hopkins","May","Terry","Herrera","Wade","Soto","Walters","Curtis","Neal","Caldwell","Lowe","Jennings","Barnett","Graves","Jimenez","Horton","Shelton","Barrett","Obrien","Castro","Sutton","Gregory","McKinney","Lucas","Miles","Craig","Rodriquez","Chambers","Holt","Lambert","Fletcher","Watts","Bates","Hale","Rhodes","Pena","Beck","Newman","Haynes","McDaniel","Mendez","Bush","Vaughn","Parks","Dawson","Santiago","Norris","Hardy","Love","Steele","Curry","Powers","Schultz","Barker","Guzman","Page","Munoz","Ball","Keller","Chandler","Weber","Leonard","Walsh","Lyons","Ramsey","Wolfe","Schneider","Mullins","Benson","Sharp","Bowen","Daniel","Barber","Cummings","Hines","Baldwin","Griffith","Valdez","Hubbard","Salazar","Reeves","Warner","Stevenson","Burgess","Santos","Tate","Cross","Garner","Mann","Mack","Moss","Thornton","Dennis","McGee","Farmer","Delgado","Aguilar","Vega","Glover","Manning","Cohen","Harmon","Rodgers","Robbins","Newton","Todd","Blair","Higgins","Ingram","Reese","Cannon","Strickland","Townsend","Potter","Goodwin","Walton","Rowe","Hampton","Ortega","Patton","Swanson","Joseph","Francis","Goodman","Maldonado","Yates","Becker","Erickson","Hodges","Rios","Conner","Adkins","Webster","Norman","Malone","Hammond","Flowers","Cobb","Moody","Quinn","Blake","Maxwell","Pope","Floyd","Osborne","Paul","McCarthy","Guerrero","Lindsey","Estrada","Sandoval","Gibbs","Tyler","Gross","Fitzgerald","Stokes","Doyle","Sherman","Saunders","Wise","Colon","Gill","Alvarado","Greer","Padilla","Simon","Waters","Nunez","Ballard","Schwartz","McBride","Houston","Christensen","Klein","Pratt","Briggs","Parsons","McLaughlin","Zimmerman","French","Buchanan","Moran","Copeland","Roy","Pittman","Brady","McCormick","Holloway","Brock","Poole","Frank","Logan","Owen","Bass","Marsh","Drake","Wong","Jefferson","Park","Morton","Abbott","Sparks","Patrick","Norton","Huff","Clayton","Massey","Lloyd","Figueroa","Carson","Bowers","Roberson","Barton","Tran","Lamb","Harrington","Casey","Boone","Cortez","Clarke","Mathis","Singleton","Wilkins","Cain","Bryan","Underwood","Hogan","McKenzie","Collier","Luna","Phelps","McGuire","Allison","Bridges","Wilkerson","Nash","Summers","Atkins"],"nick":["MAKOの沐","Dean","vector ","Bean","long ago","开心绵","Kelly-Jyi","Doris&story","John Stewart","M酱","Yolanda😊","婷","jakeylao","君莫笑","冰淇淋い","玛奇朵","呵呵呵呵我","黄金太阳","龙之笛潇","Jacinthe🍉","Sofer","Amber","安兮。JH","Sam👠💄👙👛🙅","Eleven","强子","不作不会死","yaoyan2046","May","失意，的prin","Jessie Z","amwawa🐂","Lace","小太阳","glenna","潇湘~","Zoey","毛豆豆。","英语课中的蜘蛛侠","Angel♛墨芊😊","tamia_han","小白兔 白又白","You┏┯━┹寜","俺名儿露西","阴影Jerry","Jane Anna","宁静致远Fern","guaiguai","莎翁","wade清风","kathy66","慕晓","andy","栤ǒ檸☆檬","Caroline","guzal","小皇帝詹姆斯","grace","北安°","yunm","邂逅一片时光","一颗酸浆","蔓延…","Silhouette ","Nancy","vivi ying","233333","♚ Pinocchio","陈靖宇—qaby","Adelina","萌萌","再美不过微笑","凡人","000(香盈袖)","Bethany","sophieeeee_","记忆","/XY依然未知/","Nix.","Queenie","Carson","记得我是卢丽君吗","Calida🐠","沐沐","凯文","🌾麦曦Maicy","゛不变的微笑","DDDDanieLLLL","Timothy-Shi93","echowhm","良山好汉","黑色星期五","无名小卒蒋姑娘","稻香味儿的夏天","蓝杉","垚妈","tina","小飞飞","lynn何","kate","Ericazeng","Allison","Phoenix","TSZFS","渡康王","legend","sfjwiry","arieseskimo","____  小小小蕾蕾℃","神偷","　 清自定","Sylvia喵喵","/梦~回绝鸢","带笑♚ai","真理先生","小雨","Maria","Jade","花~花","红桃k","呵呵","cinderella","女汉子","嗷大喵","海T","NiKolaS","伤风街18号","格桑梅朵","在奔跑","💋贝杉杉baby💋","Shamy😘助教","showTime","Yuki","carman_lee","梁健豪jonho","Calla&amp;","qin尧---子车","Heyson","长情","喵星人","Tanic","幸福嗎","candy","Autism💎","Von.Vivian","一路有你","糊糊沉沉","crowinwhite","笨小呆","曼联的小胖","✪大娃°","repissa","WYX.","Li沛Chen","Vicky Wu","kyrie irving","big8848","停、小琉","freya","大黄蜂","木舍年華","你是大坏蛋、、","liyiwa","Elle","务虚的老鸨","メ じ☆ve默默哋暗殇灬","enry-wake-up","长丹欧尼","幂马","Sharon King","   ♚、 贼贼","玉竹公子","赫女神","VKing"],"comment":["好赞好棒","楼主厉害诶！└(^O^)┘","沙发被我一个人站啦。O(∩_∩)O~","Endless love","给各位大神级的孩纸点赞啊。加油加油哦。⊙ω⊙","我也来参加(￣∇￣)","哇塞哇塞!","耶耶，给个赞👍","怎么能这么好听呢😘","哪里参加","哪里报名","All of me","我鼓掌就好了。👏👏👏","suger😄","快来唱","撒花～鼓掌～","就在这个帖子里面唱就好了","Good","sugar","Because of you","THX😊","还有能不能唱中文歌呀  不能我就不唱(≧3≦)","I wanted you 😂😂","我唱啦  你听听(≧∇≦)","yes~😊","Good man(≧∇≦)","能不能放原唱","这个是she","😂😂😂","这是tears in heaven","嘿嘿  你爱特我咋没写字呀","我发了表情，哈哈","我是来围观的(๑‾ ꇴ ‾๑)","真滴呀  坏手机  都看不到你的表情(╯з╰)","你个小屁孩  么么大  我唱得咋样呀","哇 组长在这里( ^ω^ )捧场👏","这首歌叫什么名字来着？我想不起来了","超好听！赞赞赞！","是前面一首还是后面的呀(≧∇≦)","谢谢亲╭(╯3╰)╮","挺有磁性的声音  赞一个(￣∇￣)","try","一唱英文歌就知道怎么去发音，硬伤啊","你唱的第一首～最长的那首","喜欢这个www","Innocence ","必须要给组长点赞～(^-^)","江南","😱oh,no.you are very \nbellyful.\n\n","see you again目前只会这些","赞一个","Footprints in the sand","大神你怎么可以这么几句就完事了比声音比质量比数量你绝对都完爆他们啊支持你啊🎉🎉🎉你一定要再来好多好多首啊","我JJ的歌 必须支持","惊为天人啊～","瞎哼哼，凑个热闹，嘿嘿","and I love you so","<Say you love me🍎>","Let it go","all of me 歌词有些乱，哈哈","lol 😺","<New soul> 🍎","you are walking?","I like,really!","Latch -Sam Smith","我听到我的呼吸 在说要尽全力\n为人生种种经历 留下美好回忆\n我感谢每次风雨 给我更多鼓励\n让我领悟生命真正意义\n我们能改变命运的轨迹\n创造值得骄傲的时机\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n从梦想遥不可及 到跟幸福相遇\n我要用我的故事 证明我的能力\n从前路走不下去 到风光更美丽\n让我激发自己无限潜力\n我们能改变命运的轨迹\n创造值得骄傲的时机\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n（yeah…ooh…）","yes😁","我的手机铃声！","😐那你不要发现我唱错词了才好。","😊","谢谢大家的鼓励😊","大家想听什么歌？😆","帖子好快","么么么哒么么么哒，献花","I wanted you","《All of of》","😘😘😘","蔡依林的倒带。刚跑完步唱的，声音发颤哈哈","脑子一下短路，打成all of of😿","我们帖子开咯","wau","new soul","wau+1","~","分手吧是我让你累了   特别伤感的一首歌","safe and sound -Talyor Swift","还会乐器啊","三人游","不会，刚开着电脑。。","Groove Coverage：Far away from home","。。。。哈哈哈。。。","我来了哈","后面什么词。。","只会这句(๑• . •๑)","😱👏👏👏","whatever will be","coming。 不知道唱那首啊","谢谢","It's so great! I remember this song by MYMP. Would you sing their other song?","哈哈，我还真没发现～主要是唱的好听，其他都忽略","It's so pretty.🎵","Sorry...","好听","thx😊","哇欧","New soul","See you again开头","好棒","厉害","就是玩一玩   ，，，  唱的也不咋地哈","改编版小星星","这个不能错过","nice performance！","Let it go , with background music","😁","太赞了，从头听到尾可惜后面没录到了，好好听","Woman in love","Thx😳","thx，honey！","青春修炼手册","叫做she  哈哈","so good!","好听！！","😘😘","adele-make you feel my love","love me like you do","让我想起那会儿跳劲舞了。","我爱你I Love You","taylor swift-ours","太棒了！朋友！坚持你","umbrella","哈哈James 总是这么热情慷慨","都是朋友！应该了！加油！","的","Every time","😇我有这歌","一定是英文歌吗？","Thumbs u up.","Great. Hope u can more natural. Some words.  You don't have to pronounce it really clearly. Which will sounds more natural and wonderful.","Thanks","you are not alone","不来一首？朋友？","Active a beautiful song. The rhythmic it is springly   I do love it","Make you feel my love---For my group members,sweet dreams!","多多支持~","what～a～wonderful～world","yes!","剑伤","haha","Adele，哈哈 ，we feel it，make U feel our love too，charming voice ，night ，nice dream","i-like-ur -voice","Love paradise ","sounds sweet！","nice！","Take me to your heart ","Black sheep","Apple tree","grenade,  sing by Bruno Mars","Thx,😄","thx😄","群英荟萃～","只能唱英文吗？？","It is so great that I love it so much!","big big girl. 发音不准，凑凑热闹~","以前都不太敢开口唱歌的😳选一首大家比较熟悉的英文歌Heartbeat❤喜欢的童鞋可以投我一票吗✨😁","You are so great to sing the song of 'endless love '! Are you a student in college?","艾薇儿的How you remind me.很久没唱这首歌啦，有些歌词忘记啦，不要怪我😂","厉害，","大神们加油","很感人👍","free loop","So nice","凑热闹凑热闹～～～～","因为他今晚唱累了","捧场捧场～～","再来一首My love😜很经典的英文老歌🌹。听过喜欢的童鞋帮我点赞吧😊","thanks！","凑热闹哈～～","怎么会说的这么好","over the rainbow","（☆_☆）","Thx😄","热带雨林","唱了忘了艾特楼主，，，，，然后就艾特一下吧，，261楼那个the show ....重在参与，。，。","翻下去才发现变成了266楼，，，-_-||","绝对的支持max❤️ 妹妹\n好好听🎉🎉🎉","看看","safe and sound","all of me","maps😁😁","在哪？","Amazing as usual 👏👏👏","很棒！","👏👏👏👏👏","😂😂什么底里底里？","很棒哦","She","留声机的感觉","like it","好棒啊！","这么晚真的好吗？","谢谢你( ˘ ³˘)","嗯嗯￣▽￣","666","see you again没伴奏不好听","我自己发的怎么看不到啊","you raise me up","谢谢亲","😊谢谢亲╭(╯3╰)╮","飞儿…我们的爱","声音😍巨赞","😍😍tears in heaven😘","yesterday once more","你的声音真不是一般的好听😍😍，大爱😘","萌！","rolling in the deep","Surper nice😘","声音好听","😘😘😘pretty vioce😍","boyfriend","very nice😍😍","👏👏","thx","这是那首英文歌？","😍太有范啦！","这是哪一首？","不是断网了吗😂","周六周日来瞅瞅   下周三考信息  ","😂","中考信息啊","好听，好听，好听。*(∩_∩)*。。。","额勒，我不知道bellyful素神马意思滴说。-_-||","🐣🐣🐣🐣","wonderful tonight","清唱come back to me宇多田光","羞答答的玫瑰静悄悄的开","just one last fance","自己弹琴？","thx~😘😘","great","Yesterday once more","Home","Close to u","big big world","唱了艾米丽亚的大大世界","这首不错","she","在哪报名啊","you are so great!","唱一首艾薇儿的when you are gone.歌词有可能会唱错哈😂","这首是什么歌😱","Sometimes When We Touch","手机录音音质较差 大家将就着听吧……","you're awesome","imagine me without you","😊😊😊","suger啊😂😂","我是来吼的，吼得好爽……","Try","灿烈！！！","什么？","I Like",":-Ogood","2004","someone like you .","long long ago","唱得好有感觉，醉了","great！！","唱的很棒噢，请问这首歌名字是什么？","要不要这么好听呐^O^","顶顶顶","我也来参加....","怎么参加","不错","爱死小豆的声音啦","i  like  it","亲╭(╯3╰)╮，我昨天晚上还给你唱了个我新学的歌，你听到没","好好听"]},"video":{"qiniu":["http://llss.qiniudn.com/d3ea47aa028deb41b8b37c6a3c31ac94a.mp4"],"hotbody":["http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/3f0a60a0-b105-11e4-a632-00163e000ae2.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/3f0a60a0-b105-11e4-a632-00163e000ae2.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/0971b4da-a12d-11e4-99a4-00163e0028ec.mp4","http://resource.hotbody.cn/31a0aeaa-b1c4-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/469897f8-a50f-11e4-996f-00163e0028ec.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/0971b4da-a12d-11e4-99a4-00163e0028ec.mp4","http://resource.hotbody.cn/31a0aeaa-b1c4-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/469897f8-a50f-11e4-996f-00163e0028ec.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/31a0aeaa-b1c4-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/0971b4da-a12d-11e4-99a4-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/469897f8-a50f-11e4-996f-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4"]},"word":{"cn":"人类长期只有口语用文字记录口语形成的书面语历史很短系统的语言成为人和禽兽分离的重要工具文字使人类能进入有历史记录的文明社会把时空的影像变化转码成视觉可见的符号系统使后人能通过间接的文字想象出画面了解历史和学习技术经验使文字成为文化的主要载体文字突破口语受到时间和空间的限制是人类可以在书面语的基础上完整地传承人类的智慧和精神财富使人类能够完善教育体系提高自己的智慧发展科学技术进入文明社会普通文字是用简单图形形成早期更加接近图画更加接近几何线条例如拉丁字母是简单的直线弧线和点构成汉字主要是由直线构成所以叫做方块汉字古代的甲骨文汉字埃及象形文字和玛雅文字等古老文字图画性比较强由于特殊人群视觉能力的局限还可以发明变异的视觉符号或者触觉符号来代替普通文字盲文是为了适应没有视觉能力的盲人发明的触觉符号手语是为了适应没有语音能力的哑巴发明的用手舞动的动态视觉符号旗语是为了适应航海等远距离听觉和视觉局限发明的用旗子舞动的动态视觉符号这些代码文字一律建立在表音文字或者表意文字的拼音方案的基础上传统汉字是无法使用这种代码的因为字的数量太多在电子信息传输的初期人们还采用阿拉伯数字代替汉字传输书面语这种数字代码可以给任何文字编码但是汉字因为数量多需要专门的代码翻译人员才能使用有人把文字分成线性文字和非线性文字这样不科学因为无论是普通文字还是代码文字都有线条和点等视觉元素","good":["ace","amazing","astonishing","astounding","awe-inspiring","awesome","badass","beautiful","bedazzling","best","breathtaking","brilliant","cat's meow","cat's pajamas","classy","cool","dandy","dazzling","delightful","divine","doozie","epic","excellent","exceptional","exquisite","extraordinary","fabulous","fantastic","fine","finest","first-class","first-rate","flawless","funkadelic","geometric","glorious","gnarly","good","grand","great","groovy","groundbreaking","hunky-dory","impeccable","impressive","incredible","kickass","kryptonian","laudable","legendary","lovely","luminous","magnificent","majestic","marvelous","mathematical","mind-blowing","neat","outstanding","peachy","perfect","phenomenal","pioneering","polished","posh","praiseworthy","premium","priceless","prime","primo","rad","remarkable","riveting","sensational","slick","solid","spectacular","splendid","stellar","striking","stunning","stupendous","stylish","sublime","super","super-duper","super-excellent","superb","superior","supreme","swell","terrific","tiptop","top-notch","transcendent","tremendous","ultimate","unreal","well-made","wicked","wonderful","wondrous","world-class"],"face":["( .-. )","( .o.)","( `·´ )","( ° ͜ ʖ °)","( ͡° ͜ʖ ͡°)","( ⚆ _ ⚆ )","( ︶︿︶)","( ﾟヮﾟ)","(\\/)(°,,,°)(\\/)","(¬_¬)","(¬º-°)¬","(¬‿¬)","(°ロ°)☝","(´・ω・)っ","(ó ì_í)","(ʘᗩʘ')","(ʘ‿ʘ)","(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄","(͡° ͜ʖ ͡°)","(ಠ_ಠ)","(ಠ‿ಠ)","(ಠ⌣ಠ)","(ಥ_ಥ)","(ಥ﹏ಥ)","(ง ͠° ͟ل͜ ͡°)ง","(ง ͡ʘ ͜ʖ ͡ʘ)ง","(ง •̀_•́)ง","(ง'̀-'́)ง","(ง°ل͜°)ง","(ง⌐□ل͜□)ง","(ღ˘⌣˘ღ)","(ᵔᴥᵔ)","(•ω•)","(•◡•)/","(⊙ω⊙)","(⌐■_■)","(─‿‿─)","(╯°□°）╯","(◕‿◕)","(☞ﾟ∀ﾟ)☞","(❍ᴥ❍ʋ)","(っ◕‿◕)っ","(づ｡◕‿‿◕｡)づ","(ノಠ益ಠ)ノ","(ノ・∀・)ノ","(；一_一)","(｀◔ ω ◔´)","(｡◕‿‿◕｡)","(ﾉ◕ヮ◕)ﾉ","*<{:¬{D}}}","=^.^=","t(-.-t)","| (• ◡•)|","~(˘▾˘~)","¬_¬","¯(°_o)/¯","¯_(ツ)_/¯","°Д°","ɳ༼ຈل͜ຈ༽ɲ","ʅʕ•ᴥ•ʔʃ","ʕ´•ᴥ•`ʔ","ʕ•ᴥ•ʔ","ʕ◉.◉ʔ","ʕㅇ호ㅇʔ","ʕ；•`ᴥ•´ʔ","ʘ‿ʘ","͡° ͜ʖ ͡°","ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ","Ѱζ༼ᴼل͜ᴼ༽ᶘѰ","ب_ب","٩◔̯◔۶","ಠ_ಠ","ಠoಠ","ಠ~ಠ","ಠ‿ಠ","ಠ⌣ಠ","ಠ╭╮ಠ","ರ_ರ","ง ͠° ل͜ °)ง","๏̯͡๏﴿","༼ ºººººل͟ººººº ༽","༼ ºل͟º ༽","༼ ºل͟º༼","༼ ºل͟º༽","༼ ͡■ل͜ ͡■༽","༼ つ ◕_◕ ༽つ","༼ʘ̚ل͜ʘ̚༽","ლ(´ڡ`ლ)","ლ(́◉◞౪◟◉‵ლ)","ლ(ಠ益ಠლ)","ᄽὁȍ ̪őὀᄿ","ᔑ•ﺪ͟͠•ᔐ","ᕕ( ᐛ )ᕗ","ᕙ(⇀‸↼‶)ᕗ","ᕙ༼ຈل͜ຈ༽ᕗ","ᶘ ᵒᴥᵒᶅ","‎‎(ﾉಥ益ಥ）ﾉ","≧☉_☉≦","⊙▃⊙","⊙﹏⊙","┌( ಠ_ಠ)┘","╚(ಠ_ಠ)=┐","◉_◉","◔ ⌣ ◔","◔̯◔","◕‿↼","◕‿◕","☉_☉","☜(⌒▽⌒)☞","☼.☼","♥‿♥","⚆ _ ⚆","✌(-‿-)✌","〆(・∀・＠)","ノ( º _ ºノ)","ノ( ゜-゜ノ)","ヽ( ͝° ͜ʖ͡°)ﾉ","ヽ(`Д´)ﾉ","ヽ༼° ͟ل͜ ͡°༽ﾉ","ヽ༼ʘ̚ل͜ʘ̚༽ﾉ","ヽ༼ຈل͜ຈ༽ง","ヽ༼ຈل͜ຈ༽ﾉ","ヽ༼Ὸل͜ຈ༽ﾉ","ヾ(⌐■_■)ノ","꒰･◡･๑꒱","﴾͡๏̯͡๏﴿","｡◕‿◕｡","ʕノ◔ϖ◔ʔノ","꒰•̥̥̥̥̥̥̥ ﹏ •̥̥̥̥̥̥̥̥๑꒱"]}});


	/**
	 * 如果通过这个 key ，只能在 keys 中匹配到唯一的一个值，则返回此值，否则返回 false
	 *
	 * @param {String} key
	 * @param {Array} keys
	 *
	 * @example
	 *
	 * shortCut('e', ['en', 'zh']) // => 'en'
	 * shortCut('t', ['en', 'zh']) // => false
	 * shortCut('e', ['en', 'ec']) // => false
	 */
	function shortCut(key, keys) {
	  if (!_.isString(key)) { return false; }
	  keys = _.filter([].concat(keys), function(k) { return k.indexOf(key) >= 0; });
	  return keys.length === 1 ? keys[0] : false;
	}


	_.mixin({

	  /**
	   *
	   * 根据第一个参数 rate 的概率，随机返回第二、第三个参数
	   *
	   * @param {Number|String} rate
	   * @param {*} [hit]
	   * @param {*} [otherwise]
	   * @returns {*}
	   *
	   * @example
	   *
	   * prob( 0.2 )     // 0.2  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
	   * prob('30%')     // 30%  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
	   * prob( 30 )      // 30%  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
	   * prob( 2 )       // 100% 的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
	   * prob( 0 )       // 0%   的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
	   */
	  prob: function(rate, hit, otherwise) {
	    hit = _.isUndefined(hit) ? true : hit;
	    otherwise = _.isUndefined(otherwise) ? false : otherwise;


	    if (/^[\d\.]+%?$/.test(rate)) {
	      rate = parseFloat(rate);
	      rate = Math.round(rate <= 1 ? rate * 100 : rate) % 101; // 保证 0 <= rate <= 100
	    } else {
	      rate = 50;  // 默认 50%
	    }

	    return _.sample(_.shuffle(_.range(100))) < rate ? hit : otherwise;
	  },


	  shortCut: shortCut,


	  /**
	   * 获取 yod.config 项，并按指定的规则随机返回一项
	   * @param {String} key
	   * @param {Object} [opts]
	   * @returns {*}
	   */
	  sys: function(key, opts) {
	    var data = yod.config('system.' + key + ':meta');
	    var val = data.val, meta = data.meta || {};
	    opts = opts || {};
	    var isObj = _.isPlainObject(val);
	    var cate = isObj && (opts.category || meta.category), cates = isObj && _.keys(val);
	    if (cate || cates.length) {
	      if (!_.isString(cate) || !val[cate]) {
	        cate = shortCut(cate, cates) || _.sample(cates);
	      }
	      val = val[cate];
	    }
	    // http://abc.com/{{range:1-20}}.mp3 => http://abc.com/4.mp3
	    if ( _.isString(val)) {
	      var isRanged = false;
	      val = val.replace(/\{\{range:(\d+)\-(\d+)\}\}/, function(raw, from, to) {
	        isRanged = true;
	        return _.random(parseInt(from, 10), parseInt(to, 10));
	      });

	      if (isRanged) { return val; }
	    }

	    if (_.isArray(val)) {
	      return (val.prefix || '') + _.sample(val) + (val.postfix || '');
	    }

	    if (_.isString(val)) {
	      return _.sample(val);
	    }

	    return val;
	  }
	});



	yod.modifier(':repeat', def(function() {
	  /**
	   *
	   * repeat 一个 generator 指定的次数
	   *
	   * @defaults {min: 1, max: 10}
	   *
	   * @rules ( Function genFn, Integer min, Integer max [, String join] ) -> *
	   * @rules ( Function genFn, Integer length [, String join] ) -> *
	   * @rules ( Function genFn [, String join] ) -> *
	   */

	  var length = this.$has('length') ? this.length : _.random(this.min, this.max);
	  var gen = this.genFn;

	  var result = _.times(length, gen);

	  // self.join 可能等于空字符串
	  return this.$has('join') ? result.join(this.join) : result;
	}, {"defaults":{"min":1,"max":10},"rules":[["*",[["genFn","Function"],["min","Integer"],["max","Integer"],["join","String"]],[[0,1,2],[0,1,2,3]]],["*",[["genFn","Function"],["length","Integer"],["join","String"]],[[0,1],[0,1,2]]],["*",[["genFn","Function"],["join","String"]],[[0],[0,1]]]]}));


	yod.modifier('index', def(function() {
	  /**
	   * 返回指定数组或字符串指定的位置
	   *
	   * @rules ( * arg [, Integer i = 0] ) -> *
	   */
	  if (_.isArray(this.arg)) {
	    return this.arg[this.i];
	  }

	  if (_.isString(this.arg)) {
	    return this.arg.charAt(this.i);
	  }

	  return this.arg;
	}, {"rules":[["*",[["arg","*"],["i","integer",0]],[[0],[0,1]]]]}));

	yod.modifier('stringify', function(obj) {
	  return JSON.stringify(obj);
	});


	yod.modifier('String', 'title', function(str) {
	  return str.replace(/\b\w/g, function(letter) { return letter.toUpperCase(); });
	});
	yod.modifier('String', 'cap', function(str) {
	  return str.charAt(0).toUpperCase() + str.substr(1);
	});
	yod.modifier('String', 'upper', function(str) {
	  return str.toUpperCase();
	});
	yod.modifier('String', 'lower', function(str) {
	  return str.toLowerCase();
	});


	// 复用 lodash
	_.each(_.keys(_), function(key) {
	  if (yod.isModifierNameValid(key) && !yod.isModifierNameExists(key)) {
	    yod.modifier(key, function() {
	      return _[key].apply(_, arguments);
	    });
	  }
	});




	/*------------------------------------------------------------------
	 ----------------------  Boolean & Bool     -------------------------
	 ------------------------------------------------------------------*/

	yod.type('Boolean', def(function() {
	  /**
	   * 生成一个布尔值
	   *
	   * @rules ([Number probability = 0.5]) -> Boolean
	   * @rules (String percentage) -> Boolean
	   */

	  return _.prob(this.$has('probability') ? this.probability : this.percentage);

	}, {"rules":[["boolean",[["probability","number",0.5]],[[],[0]]],["boolean",[["percentage","String"]],[[0]]]]}), 'Bool');


	/*------------------------------------------------------------------
	 ----------------------  Double & Float  -------------------------
	 ------------------------------------------------------------------*/

	yod.type('Double', def(function() {
	  /**
	   * @defaults {min: 0, max: 1, format: '1-4'}
	   *
	   * @rules ([[Number max], [String format]]) -> string
	   * @rules (Number min, Number max, [String format]) -> string
	   * @rules (Number min, Number max, Number format) -> string
	   */
	  var result = _.random(this.min, this.max, true);

	  // 如果 format 设置不规范，就使用 1-10 模式，设置 '-5' => '1-5', '5-' => '5-10', '5' => '5-5'
	  var dMin = 1, dMax = 10;

	  var format = String(this.format).split('-').slice(0, 2);
	  if (format.length < 2) { format.unshift(format[0]); }

	  format = _.map(format, function(n, i) {
	    var r = parseInt(n, 10);
	    return _.isNaN(r) ? (i ? dMax : dMin) : r;
	  });

	  result = result.toFixed(_.random(format[0], format[1]));

	  // 最后几位如果是 0，精度会丢失
	  return parseFloat(result);
	}, {"defaults":{"min":0,"max":1,"format":"1-4"},"rules":[["string",[["max","Number"],["format","String"]],[[],[],[1],[0],[0,1]]],["string",[["min","Number"],["max","Number"],["format","String"]],[[0,1],[0,1,2]]],["string",[["min","Number"],["max","Number"],["format","Number"]],[[0,1,2]]]]}), 'Float');



	/*------------------------------------------------------------------
	 ----------------------  Integer & Int     -------------------------
	 ------------------------------------------------------------------*/

	yod.type('Integer', def(function() {
	  /**
	   * 生成一个从 min 到 max 之间的整数（包括 min 和 max）
	   *
	   * @rules ([[Integer min = 0, ] Integer max = 1000]) -> Integer
	   */
	  return _.random(this.min, this.max);
	}, {"rules":[["integer",[["min","integer",0],["max","integer",1000]],[[],[1],[0,1]]]]}), 'Int');


	/*------------------------------------------------------------------
	 ----------------------    Number    -------------------------
	 ------------------------------------------------------------------*/
	yod.type('Number', def(function() {
	  /**
	   * 随机生成一个浮点数或者整数
	   *
	   * @rules () -> Number
	   */
	  return _.prob() ? yod('@Double') : yod('@Integer');

	}, {"rules":[["number",[],[[]]]]}));

	/*------------------------------------------------------------------
	 ----------------------  Character & Char  -------------------------
	 ------------------------------------------------------------------*/

	// config
	var chars = {
	  vowel: 'aeiou',
	  hash: '0123456789abcdef',
	  consonant: 'bcdfghjklmnpqrstvwxyz',
	  lower: 'abcdefghijklmnopqrstuvwxyz',
	  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	  number: '0123456789',
	  symbol: '!@#$%^&*()[]'
	};
	chars.alpha = chars.lower + chars.upper + chars.number;
	chars.all = chars.alpha + chars.symbol;

	// 使用 yod.config 的目的是使的用户可以修改这些默认的值
	yod.config('system.character', chars, {category: 'alpha'});

	// define
	yod.type('Character', def(function() {
	  /**
	   * @rules ([String pool = 'alpha' [, Boolean useAsPool = false]]) -> Char
	   */

	  if (chars[this.pool] && !this.useAsPool) {
	    return _.sys('character', {category: this.pool});
	  }

	  return _.sample(this.pool);

	}, {"rules":[["char",[["pool","string","alpha"],["useAsPool","boolean",false]],[[],[0],[0,1]]]]}), 'Char');


	/*------------------------------------------------------------------
	 ----------------------  String & Str      -------------------------
	 ------------------------------------------------------------------*/

	yod.type('String', def(function() {
	  /**
	   * @defaults {min: 2, max: 20}
	   *
	   * @rules ([String pool = 'alpha' ] ) -> string
	   * @rules ([String pool = 'alpha' ,] int length) -> string
	   * @rules ([String pool = 'alpha' ,] int min, int max) -> string
	   */
	  var length = this.$has('length') ? this.length : _.random(this.min, this.max);

	  return yod('@Char("%s", true).repeat(%d, "")', this.pool, length);
	}, {"defaults":{"min":2,"max":20},"rules":[["string",[["pool","string","alpha"]],[[],[0]]],["string",[["pool","string","alpha"],["length","int"]],[[1],[0,1]]],["string",[["pool","string","alpha"],["min","int"],["max","int"]],[[1,2],[0,1,2]]]]}), 'Str');


	/*------------------------------------------------------------------
	 ----------------------       Date         -------------------------
	 ------------------------------------------------------------------*/

	function toIntJSDate(key, relative, otherwise) {
	  key = String(key);
	  // 1410715640.579, 1410715640, 1410715640579
	  if (/^(\d{10})\.?(\d{1,3})?$/.test(key)) {
	    var s = RegExp.$1, ms = RegExp.$2 || 0;
	    return (s - 0) * 1000 + (ms - 0);
	  } else if (/^-?[\d.]+$/.test(key)) {
	    var float = parseFloat(key);
	    return _.isNaN(float) ? otherwise : relative + float * 1000;
	  } else {
	    var d = (new Date(key)).getTime();
	    if (_.isNaN(d)) {
	      return otherwise;
	    }
	    return d;
	  }
	}

	yod.type('Date', def(function() {
	  /**
	   * 生成随机的 timestamp 日期
	   *
	   * @Date()    => 过去10年的随机 timestamp
	   * @Date(0)   => 过去10年到未来10年之间的一个 timestamp
	   * @Date(-2)  => 过去两年的随机 timestamp
	   * @Date(3)   => 将来三年的随机 timestamp
	   * @Date(-1, 3600)  => 过去一小时的随机 timestamp
	   * @Date("3600", "7200")  => 将来两小时的随机 timestamp
	   * @Date("2011-1-1", "2011-12-31 23:59:59") => 2011-1-1 00:00:00 到 2011-12-31 23:59:59 之间的随机数据
	   *
	   * 另外可以在上面所有的方法的参数首位加上 format 参数来指定返回的格式（默认是返回 10 位的 timestamp)，如
	   * @Date('YYYY-MM-DD HH:mm:ss', -2)
	   *
	   * 格式字符串参考：http://momentjs.com/docs/#/displaying/format/
	   * @defaults {format: timestamp}
	   *
	   * @rules ([String format,] [Integer flag = -10, [Nature range]]) -> String
	   * @rules ([String format,] String from, String to) -> String
	   *
	   */
	  var from, to, now = new Date().getTime(), oneYearMs = 3600000 * 24 * 365;
	  if (this.$has('flag')) {
	    var flag = this.flag;
	    var range = this.$has('range') ? this.range * 1000 : Math.abs(flag || 10) * oneYearMs;

	    from = flag > 0 ? now : now - range;
	    to = flag < 0 ? now : now + range;
	  } else {
	    from = toIntJSDate(this.from, now, now - oneYearMs);
	    to = toIntJSDate(this.to, now, now + oneYearMs);
	  }

	  var random = _.random(from, to);
	  if (this.format === 'timestamp') {
	    return Math.round(random / 1000);
	  } else if (this.format === 'jsTimestamp') {
	    return Math.round(random);
	  } else {
	    return _.moment(random).format(this.format);
	  }
	}, {"defaults":{"format":"timestamp"},"rules":[["string",[["format","String"],["flag","integer",-10],["range","Nature"]],[[],[1],[1,2],[0],[0,1],[0,1,2]]],["string",[["format","String"],["from","String"],["to","String"]],[[1,2],[0,1,2]]]]}));



	/*------------------------------------------------------------------
	 ----------------------        Range       -------------------------
	 ------------------------------------------------------------------*/

	yod.type('Range', def(function() {
	  /**
	   * @defaults {start: 0, stop: 10, step: 1}
	   *
	   * @rules () -> Array
	   * @rules (Integer stop) -> Array
	   * @rules (Integer start, Integer stop) -> Array
	   * @rules (Integer start, Integer stop, Integer step) -> Array
	   */

	  return _.range(this.start, this.stop, this.step);
	}, {"defaults":{"start":0,"stop":10,"step":1},"rules":[["array",[],[[]]],["array",[["stop","Integer"]],[[0]]],["array",[["start","Integer"],["stop","Integer"]],[[0,1]]],["array",[["start","Integer"],["stop","Integer"],["step","Integer"]],[[0,1,2]]]]}));



	/*------------------------------------------------------------------
	 ----------------------  Sequence & Seq & Id  ----------------------
	 ------------------------------------------------------------------*/

	var seqSeeds = {};
	yod.type('Sequence', def(function() {
	  /**
	   * @rules ([String seed = '_d'], [Integer start = 1 [, Integer step = 1]]) -> int
	   */

	  if (!(this.seed in seqSeeds)) {
	    seqSeeds[this.seed] = this.start;
	    return this.start;
	  }

	  seqSeeds[this.seed] += this.step;
	  return seqSeeds[this.seed];

	}, {"rules":[["int",[["seed","string","_d"],["start","integer",1],["step","integer",1]],[[],[1],[1,2],[0],[0,1],[0,1,2]]]]}), 'Seq', 'Id');


	/*------------------------------------------------------------------
	 ------------------ Guid & GUID & Uuid & UUID ----------------------
	 ------------------------------------------------------------------*/

	yod.type('Guid', def(function() {
	  /**
	   * @format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
	   *    x is replaced with a random hexadecimal digit from 0 to f
	   *    y is replaced with a random hexadecimal digit from 8 to b
	   *
	   * @rules () -> string
	   *
	   * @reference http://zh.wikipedia.org/wiki/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6
	   */

	  /* jshint ignore:start */
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	    return v.toString(16);
	  });
	  /* jshint ignore:end */

	}, {"rules":[["string",[],[[]]]]}), 'GUID', 'Uuid', 'UUID');


	/*------------------------------------------------------------------
	 ----------------------  Objectid & Oid    -------------------------
	 ------------------------------------------------------------------*/
	yod.type('Objectid', def(function() {

	  /**
	   * Mongo 的 id
	   *
	   * @rules () -> string
	   */

	  return yod('@Char(hash).repeat(24, "")');

	}, {"rules":[["string",[],[[]]]]}), 'Oid');


	/*------------------------------------------------------------------
	 ----------------------  Md5 & MD5    -------------------------
	 ------------------------------------------------------------------*/

	yod.type('Md5', def(function() {

	  /**
	   * 生成 md5 字符串
	   *
	   * @rules () -> string
	   */

	  return yod('@Char(hash).repeat(32, "")');

	}, {"rules":[["string",[],[[]]]]}), 'MD5');



	yod.type('CW', def(function() {
	  return _.sys('word.cn');
	}));

	yod.type('CS', def(function() {
	  var all = yod.config('system.word.cn');
	  var len = all.length - 20, res = [];
	  _.times(_.random(1, 4), function() {
	    res.push(all.substr(_.random(0, len), _.random(8, 20)));
	  });
	  return res.join('，') + '。';
	}));

	yod.type('CP', def(function() {
	  /**
	   * @rules (Integer length) -> String
	   * @rules ([ Integer min = 3, Integer max = 7 ]) -> String
	   */
	  return yod('@CS.repeat(%d, " ")', this.length || _.random(this.min, this.max));
	}, {"rules":[["string",[["length","Integer"]],[[0]]],["string",[["min","integer",3],["max","integer",7]],[[],[0,1]]]]}));


	yod.type('Word', def(function() {
	  /**
	   * @rules (Integer length) -> String
	   * @rules ([ Integer min = 3, Integer max = 10 ]) -> String
	   */
	  var length = this.$has('length') ? this.length : _.random(this.min, this.max),
	    consonants = 'bcdfghjklmnprstvwz', // consonants except hard to speak ones
	    vowels = 'aeiou', // vowels
	    all = consonants + vowels, // all
	    text = '',
	    chr;

	  // I'm sure there's a more elegant way to do this, but this works
	  // decently well.
	  for (var i = 0; i < length; i++) {
	    if (i === 0) {
	      // First character can be anything
	      chr = _.sample(all);
	    } else if (consonants.indexOf(chr) === -1) {
	      // Last character was a vowel, now we want a consonant
	      chr = _.sample(consonants);
	    } else {
	      // Last character was a consonant, now we want a vowel
	      chr = _.sample(vowels);
	    }
	    text += chr;
	  }

	  return text;
	}, {"rules":[["string",[["length","Integer"]],[[0]]],["string",[["min","integer",3],["max","integer",10]],[[],[0,1]]]]}), 'EW');

	// Could get smarter about this than generating random words and
	// chaining them together. Such as: http://vq.io/1a5ceOh
	yod.type('Sentence', def(function() {
	  /**
	   * @rules (Integer length) -> String
	   * @rules ([ Integer min = 12, Integer max = 18 ]) -> String
	   */

	  return yod('@Word.repeat(%d, " ").cap.', this.$has('length') ? this.length : _.random(this.min, this.max));
	}, {"rules":[["string",[["length","Integer"]],[[0]]],["string",[["min","integer",12],["max","integer",18]],[[],[0,1]]]]}), 'ES');


	yod.type('Paragraph', def(function() {
	  /**
	   * @rules (Integer length) -> String
	   * @rules ([ Integer min = 3, Integer max = 7 ]) -> String
	   */

	  return yod('@Sentence.repeat(%d, " ")', this.$has('length') ? this.length : _.random(this.min, this.max));
	}, {"rules":[["string",[["length","Integer"]],[[0]]],["string",[["min","integer",3],["max","integer",7]],[[],[0,1]]]]}), 'EP');

	yod.type('Good', def(function() {
	  return _.sys('word.good');
	}));

	yod.type('Face', def(function() {
	  return _.sys('word.face');
	}));




	/*------------------------------------------------------------------
	 ---------------  Picture & Pic & Image & Img  ---------------------
	 ------------------------------------------------------------------*/

	yod.type('Picture', def(function() {
	  /**
	   * @rules ([String category = 'all']) -> String
	   */
	  return _.sys('picture', {category: this.category});
	}, {"rules":[["string",[["category","string","all"]],[[],[0]]]]}), 'Pic', 'Image', 'Img');

	/*------------------------------------------------------------------
	 ----------------------  Audio & Mp3  -------------------------
	 ------------------------------------------------------------------*/


	yod.type('Audio', def(function() {
	  /**
	   * @rules ([String category = 'all']) -> String
	   */

	  return _.sys('audio', {category: this.category});
	}, {"rules":[["string",[["category","string","all"]],[[],[0]]]]}), 'Mp3');

	/*------------------------------------------------------------------
	 ----------------------  Video & Mp4  -------------------------
	 ------------------------------------------------------------------*/


	yod.type('Video', def(function() {
	  /**
	   * @rules ([String category = 'all']) -> String
	   */

	  return _.sys('video', {category: this.category});

	}, {"rules":[["string",[["category","string","all"]],[[],[0]]]]}), 'Mp4');




	/*------------------------------------------------------------------
	          ---------------  Gender & Sex  ---------------------
	 ------------------------------------------------------------------*/

	yod.type('Gender', def(function(cate) {
	  return _.sys('user.gender', {category: cate || 'en'});
	}), 'Sex');

	/*------------------------------------------------------------------
	            ---------------  Age  ---------------------
	 ------------------------------------------------------------------*/

	yod.type('Age', def(function(type) {
	  switch (type) {
	    case 'child':
	      return _.random(1, 12);
	    case 'teen':
	      return _.random(13, 19);
	    case 'adult':
	      return _.random(18, 65);
	    case 'senior':
	      return _.random(65, 100);
	    case 'all':
	      return _.random(1, 100);
	    default:
	      return _.random(18, 100);
	  }
	}));

	/*------------------------------------------------------------------
	          ---------------  Avatar  ---------------------
	 ------------------------------------------------------------------*/


	yod.type('Avatar', def(function() { return _.sys('picture.user'); }));


	/*------------------------------------------------------------------
	        ---------------  First & FirstName  ---------------------
	 ------------------------------------------------------------------*/

	yod.type('First', def(function (gender) {

	  return _.sys('user.first', {category: gender || '*'});

	}), 'FirstName');


	/*------------------------------------------------------------------
	        ---------------  Last & LastName  ---------------------
	 ------------------------------------------------------------------*/

	yod.type('Last', def(function () {

	  return _.sys('user.last');

	}), 'LastName');


	/*------------------------------------------------------------------
	         ---------------   UserName  ---------------------
	 ------------------------------------------------------------------*/

	yod.type('UserName', def(function() {

	  /**
	   * @defaults { gender: '*', middle: false }
	   * @rules ([[String gender], [Boolean middle]]) -> String
	   * @rules (Boolean middle, String gender) -> String
	   */
	  return yod('@First(%s)%s @Last', this.gender, this.middle ? ' @First(' + this.gender + ')' : '' );

	}, {"defaults":{"gender":"*","middle":false},"rules":[["string",[["gender","String"],["middle","Boolean"]],[[],[],[1],[0],[0,1]]],["string",[["middle","Boolean"],["gender","String"]],[[0,1]]]]}));


	/*------------------------------------------------------------------
	      ---------------  Name & ChineseName  ---------------------
	 ------------------------------------------------------------------*/
	yod.type('Name', def(function() {

	  var name = '';
	  _.times(_.random(1, 2), function() { name += _.sys('user.family'); });
	  _.times(_.random(1, 2), function() { name += _.sys('user.giveName'); });
	  return name;

	}), 'ChineseName');

	/*------------------------------------------------------------------
	        ---------------  Nick & NickName  ---------------------
	 ------------------------------------------------------------------*/
	yod.type('Nick', def(function() {

	  return _.sys('user.nick');

	}), 'NickName');


	/*------------------------------------------------------------------
	        ---------------  Comment  ---------------------
	 ------------------------------------------------------------------*/
	yod.type('Comment', def(function() {

	  return _.sys('user.comment');

	}));


	/*------------------------------------------------------------------
	      ---------------  Telephone & Tel  ---------------------
	 ------------------------------------------------------------------*/
	yod.type('Telephone', def(function() {

	  return '1' + _.sample([3, 4, 5, 7, 8]) + _.times(9, function() { return _.random(0, 9); }).join('');

	}), 'Tel');







	yod.type('Color', def(function(format) {

	  var len = 6;
	  if (_.shortCut(format, 'short')) {
	    len = 3;
	  } else if (_.shortCut(format, 'rgb')) {
	    return 'rgb(' + _.random(0, 255) + ', ' + _.random(0, 255) + ', ' + _.random(0, 255) + ')';
	  }
	  return '#' + _.sample('0123456789ABCDEF', len).join('');

	}));


	var tld = ['com', 'org', 'edu', 'gov', 'co.uk', 'net', 'io'];
	yod.type('Domain', def(function() {
	  return yod('@Word(3, 7)') + '.' + _.sample(tld);
	}));

	yod.type('Email', def(function() {
	  return yod('@First.lower') + (_.prob(0.5) ? yod('.@Last.lower') : '') + '@' + yod('@Domain');
	}));


	yod.type('Ip', def(function() {
	  return yod('@Integer(10, 254).repeat(4, ".")');
	}), 'IP');

	yod.type('Ipv6', def(function() {
	  return yod('@Char(hash).repeat(4, "").repeat(8, ":")');
	}), 'IPv6', 'IPV6');


	//yod.type('URL', def(function() {
	//
	//}), 'Url', 'Link');




	yod.type('Country', def(function(abbr) {
	  return _.sample(yod.config('system.location').country)[abbr ? 1 : 0];
	}));

	yod.type('Province', def(function() {
	  return _.sys('location.region').split(' ').pop();
	}), 'Region');

	yod.type('Area', def(function() {
	  return _.sys('location.area');
	}));

	//yod.type('City', def(function() {}));
	//yod.type('Street', def(function() {}));

	yod.type('Latitude', def(function() {
	  /**
	   * @rules ([Int fixed = 5, [Int min = -90, Int max = 90]]) -> Float
	   */
	  return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);

	}, {"rules":[["float",[["fixed","int",5],["min","int",-90],["max","int",90]],[[],[0],[0,1,2]]]]}));
	yod.type('Longitude', def(function() {
	  /**
	   * @rules ([Int fixed = 5, [Int min = -180, Int max = 180]]) -> Float
	   */
	  return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);
	}, {"rules":[["float",[["fixed","int",5],["min","int",-180],["max","int",180]],[[],[0],[0,1,2]]]]}));

	yod.type('Coordinates', def(function() {
	  return yod('@Latitude @Longitude');
	}));






	module.exports = yod;
	if (typeof window !== 'undefined') { window.yod = yod; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.10.2
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	(function (global, factory) {
	    true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';

	    var hookCallback;

	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false
	        };
	    }

	    function isArray(input) {
	        return Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isDate(input) {
	        return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
	    }

	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }

	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }

	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            m._isValid = !isNaN(m._d.getTime()) &&
	                m._pf.overflow < 0 &&
	                !m._pf.empty &&
	                !m._pf.invalidMonth &&
	                !m._pf.nullInput &&
	                !m._pf.invalidFormat &&
	                !m._pf.userInvalidated;

	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    m._pf.charsLeftOver === 0 &&
	                    m._pf.unusedTokens.length === 0 &&
	                    m._pf.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }

	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(m._pf, flags);
	        }
	        else {
	            m._pf.userInvalidated = true;
	        }

	        return m;
	    }

	    var momentProperties = utils_hooks__hooks.momentProperties = [];

	    function copyConfig(to, from) {
	        var i, prop, val;

	        if (typeof from._isAMomentObject !== 'undefined') {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (typeof from._i !== 'undefined') {
	            to._i = from._i;
	        }
	        if (typeof from._f !== 'undefined') {
	            to._f = from._f;
	        }
	        if (typeof from._l !== 'undefined') {
	            to._l = from._l;
	        }
	        if (typeof from._strict !== 'undefined') {
	            to._strict = from._strict;
	        }
	        if (typeof from._tzm !== 'undefined') {
	            to._tzm = from._tzm;
	        }
	        if (typeof from._isUTC !== 'undefined') {
	            to._isUTC = from._isUTC;
	        }
	        if (typeof from._offset !== 'undefined') {
	            to._offset = from._offset;
	        }
	        if (typeof from._pf !== 'undefined') {
	            to._pf = from._pf;
	        }
	        if (typeof from._locale !== 'undefined') {
	            to._locale = from._locale;
	        }

	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (typeof val !== 'undefined') {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    var updateInProgress = false;

	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(+config._d);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && hasOwnProp(obj, '_isAMomentObject'));
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            if (coercedNumber >= 0) {
	                value = Math.floor(coercedNumber);
	            } else {
	                value = Math.ceil(coercedNumber);
	            }
	        }

	        return value;
	    }

	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function Locale() {
	    }

	    var locales = {};
	    var globalLocale;

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }

	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && typeof module !== 'undefined' &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                ;
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (typeof values === 'undefined') {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }

	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }

	        return globalLocale._abbr;
	    }

	    function defineLocale (name, values) {
	        if (values !== null) {
	            values.abbr = name;
	            if (!locales[name]) {
	                locales[name] = new Locale();
	            }
	            locales[name].set(values);

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }

	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return globalLocale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    }

	    var aliases = {};

	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }

	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }

	    function get_set__get (mom, unit) {
	        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
	    }

	    function get_set__set (mom, unit, value) {
	        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	    }

	    // MOMENTS

	    function getSet (units, value) {
	        var unit;
	        if (typeof units === 'object') {
	            for (unit in units) {
	                this.set(unit, units[unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (typeof this[units] === 'function') {
	                return this[units](value);
	            }
	        }
	        return this;
	    }

	    function zeroFill(number, targetLength, forceSign) {
	        var output = '' + Math.abs(number),
	            sign = number >= 0;

	        while (output.length < targetLength) {
	            output = '0' + output;
	        }
	        return (sign ? (forceSign ? '+' : '') : '-') + output;
	    }

	    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g;

	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

	    var formatFunctions = {};

	    var formatTokenFunctions = {};

	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }

	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '';
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());

	        if (!formatFunctions[format]) {
	            formatFunctions[format] = makeFormatFunction(format);
	        }

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }

	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

	    // any word (or two) characters or numbers including two/three word month in arabic.
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

	    var regexes = {};

	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = typeof regex === 'function' ? regex : function (isStrict) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }

	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }

	        return regexes[token](config._strict, config._locale);
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    var tokens = {};

	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }

	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }

	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }

	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;

	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }

	    // FORMATTING

	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });

	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });

	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });

	    // ALIASES

	    addUnitAlias('month', 'M');

	    // PARSING

	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  matchWord);
	    addRegexToken('MMMM', matchWord);

	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });

	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            config._pf.invalidMonth = input;
	        }
	    });

	    // LOCALES

	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m) {
	        return this._months[m.month()];
	    }

	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m) {
	        return this._monthsShort[m.month()];
	    }

	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;

	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }

	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function setMonth (mom, value) {
	        var dayOfMonth;

	        // TODO: Move this out of here!
	        if (typeof value === 'string') {
	            value = mom.localeData().monthsParse(value);
	            // TODO: Another silent failure?
	            if (typeof value !== 'number') {
	                return mom;
	            }
	        }

	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }

	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }

	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }

	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;

	        if (a && m._pf.overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;

	            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }

	            m._pf.overflow = overflow;
	        }

	        return m;
	    }

	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true;
	        return extend(function () {
	            if (firstTime) {
	                warn(msg);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    var deprecations = {};

	    function deprecateSimple(name, msg) {
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }

	    utils_hooks__hooks.suppressDeprecationWarnings = false;

	    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
	        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
	        ['YYYY-DDD', /\d{4}-\d{3}/]
	    ];

	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
	        ['HH:mm', /(T| )\d\d:\d\d/],
	        ['HH', /(T| )\d\d/]
	    ];

	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = from_string__isoRegex.exec(string);

	        if (match) {
	            config._pf.iso = true;
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(string)) {
	                    // match[5] should be 'T' or undefined
	                    config._f = isoDates[i][0] + (match[6] || ' ');
	                    break;
	                }
	            }
	            for (i = 0, l = isoTimes.length; i < l; i++) {
	                if (isoTimes[i][1].exec(string)) {
	                    config._f += isoTimes[i][0];
	                    break;
	                }
	            }
	            if (string.match(matchOffset)) {
	                config._f += 'Z';
	            }
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);

	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }

	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'https://github.com/moment/moment/issues/1407 for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);

	        //the date constructor doesn't accept years < 1970
	        if (y < 1970) {
	            date.setFullYear(y);
	        }
	        return date;
	    }

	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	        if (y < 1970) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }

	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });

	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	    // ALIASES

	    addUnitAlias('year', 'y');

	    // PARSING

	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);

	    addParseToken(['YYYY', 'YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });

	    // HELPERS

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    // HOOKS

	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    // MOMENTS

	    var getSetYear = makeGetSet('FullYear', false);

	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }

	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	    // ALIASES

	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');

	    // PARSING

	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);

	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });

	    // HELPERS

	    // firstDayOfWeek       0 = sun, 6 = sat
	    //                      the day of the week that starts the week
	    //                      (usually sunday or monday)
	    // firstDayOfWeekOfYear 0 = sun, 6 = sat
	    //                      the first week is the week that contains the first
	    //                      of this day of the week
	    //                      (eg. ISO weeks use thursday (4))
	    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	        var end = firstDayOfWeekOfYear - firstDayOfWeek,
	            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	            adjustedMoment;


	        if (daysToDayOfWeek > end) {
	            daysToDayOfWeek -= 7;
	        }

	        if (daysToDayOfWeek < end - 7) {
	            daysToDayOfWeek += 7;
	        }

	        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
	        return {
	            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	            year: adjustedMoment.year()
	        };
	    }

	    // LOCALES

	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }

	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };

	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }

	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }

	    // MOMENTS

	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	    // ALIASES

	    addUnitAlias('dayOfYear', 'DDD');

	    // PARSING

	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });

	    // HELPERS

	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
	        var d = createUTCDate(year, 0, 1).getUTCDay();
	        var daysToAdd;
	        var dayOfYear;

	        d = d === 0 ? 7 : d;
	        weekday = weekday != null ? weekday : firstDayOfWeek;
	        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
	        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

	        return {
	            year      : dayOfYear > 0 ? year      : year - 1,
	            dayOfYear : dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
	        };
	    }

	    // MOMENTS

	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }

	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }

	    function currentDateArray(config) {
	        var now = new Date();
	        if (config._useUTC) {
	            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
	        }
	        return [now.getFullYear(), now.getMonth(), now.getDate()];
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                config._pf._overflowDayOfYear = true;
	            }

	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < dow) {
	                    ++week;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

	        config._a[YEAR] = temp.year;
	        config._dayOfYear = temp.dayOfYear;
	    }

	    utils_hooks__hooks.ISO_8601 = function () {};

	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }

	        config._a = [];
	        config._pf.empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;

	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    config._pf.unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    config._pf.empty = false;
	                }
	                else {
	                    config._pf.unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                config._pf.unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            config._pf.unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
	            config._pf.bigHour = undefined;
	        }
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

	        configFromArray(config);
	        checkOverflow(config);
	    }


	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }

	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,

	            scoreToBeat,
	            i,
	            currentScore;

	        if (config._f.length === 0) {
	            config._pf.invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._pf = defaultParsingFlags();
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);

	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += tempConfig._pf.charsLeftOver;

	            //or tokens
	            currentScore += tempConfig._pf.unusedTokens.length * 10;

	            tempConfig._pf.score = currentScore;

	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }

	        var i = normalizeObjectUnits(config._i);
	        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

	        configFromArray(config);
	    }

	    function createFromConfig (config) {
	        var input = config._i,
	            format = config._f,
	            res;

	        config._locale = config._locale || locale_locales__getLocale(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        } else {
	            configFromInput(config);
	        }

	        res = new Moment(checkOverflow(config));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date();
	        } else if (isDate(input)) {
	            config._d = new Date(+input);
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	        c._pf = defaultParsingFlags();

	        return createFromConfig(c);
	    }

	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }

	    var prototypeMin = deprecate(
	         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	         function () {
	             var other = local__createLocal.apply(null, arguments);
	             return other < this ? this : other;
	         }
	     );

	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            return other > this ? this : other;
	        }
	    );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    }

	    function max () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    }

	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 36e5; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;

	        this._data = {};

	        this._locale = locale_locales__getLocale();

	        this._bubble();
	    }

	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }

	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }

	    offset('Z', ':');
	    offset('ZZ', '');

	    // PARSING

	    addRegexToken('Z',  matchOffset);
	    addRegexToken('ZZ', matchOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(input);
	    });

	    // HELPERS

	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;

	    function offsetFromString(string) {
	        var matches = ((string || '').match(matchOffset) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return parts[0] === '+' ? minutes : -minutes;
	    }

	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(+res._d + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	        return model._isUTC ? local__createLocal(input).zone(model._offset || 0) : local__createLocal(input).local();
	    }

	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }

	    // HOOKS

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};

	    // MOMENTS

	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(input);
	            }
	            if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }

	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }

	            this.utcOffset(input, keepLocalTime);

	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }

	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }

	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;

	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }

	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            this.utcOffset(offsetFromString(this._i));
	        }
	        return this;
	    }

	    function hasAlignedHourOffset (input) {
	        if (!input) {
	            input = 0;
	        }
	        else {
	            input = local__createLocal(input).utcOffset();
	        }

	        return (this.utcOffset() - input) % 60 === 0;
	    }

	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }

	    function isDaylightSavingTimeShifted () {
	        if (this._a) {
	            var other = this._isUTC ? create_utc__createUTC(this._a) : local__createLocal(this._a);
	            return this.isValid() && compareArrays(this._a, other.toArray()) > 0;
	        }

	        return false;
	    }

	    function isLocal () {
	        return !this._isUTC;
	    }

	    function isUtcOffset () {
	        return this._isUTC;
	    }

	    function isUtc () {
	        return this._isUTC && this._offset === 0;
	    }

	    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;

	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])        * sign,
	                h  : toInt(match[HOUR])        * sign,
	                m  : toInt(match[MINUTE])      * sign,
	                s  : toInt(match[SECOND])      * sign,
	                ms : toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = create__isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                d : parseIso(match[4], sign),
	                h : parseIso(match[5], sign),
	                m : parseIso(match[6], sign),
	                s : parseIso(match[7], sign),
	                w : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        return ret;
	    }

	    create__createDuration.fn = Duration.prototype;

	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};

	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                tmp = val; val = period; period = tmp;
	            }

	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }

	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = duration._days,
	            months = duration._months;
	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }

	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');

	    function moment_calendar__calendar (time) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            diff = this.diff(sod, 'days', true),
	            format = diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	        return this.format(this.localeData().calendar(format, this, local__createLocal(now)));
	    }

	    function clone () {
	        return new Moment(this);
	    }

	    function isAfter (input, units) {
	        var inputMs;
	        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	        if (units === 'millisecond') {
	            input = isMoment(input) ? input : local__createLocal(input);
	            return +this > +input;
	        } else {
	            inputMs = isMoment(input) ? +input : +local__createLocal(input);
	            return inputMs < +this.clone().startOf(units);
	        }
	    }

	    function isBefore (input, units) {
	        var inputMs;
	        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	        if (units === 'millisecond') {
	            input = isMoment(input) ? input : local__createLocal(input);
	            return +this < +input;
	        } else {
	            inputMs = isMoment(input) ? +input : +local__createLocal(input);
	            return +this.clone().endOf(units) < inputMs;
	        }
	    }

	    function isBetween (from, to, units) {
	        return this.isAfter(from, units) && this.isBefore(to, units);
	    }

	    function isSame (input, units) {
	        var inputMs;
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            input = isMoment(input) ? input : local__createLocal(input);
	            return +this === +input;
	        } else {
	            inputMs = +local__createLocal(input);
	            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
	        }
	    }

	    function absFloor (number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }

	    function diff (input, units, asFloat) {
	        var that = cloneWithOffset(input, this),
	            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
	            delta, output;

	        units = normalizeUnits(units);

	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }

	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        return -(wholeMonthDiff + adjust);
	    }

	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }

	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if ('function' === typeof Date.prototype.toISOString) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }

	    function format (inputString) {
	        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
	        return this.localeData().postformat(output);
	    }

	    function from (time, withoutSuffix) {
	        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	    }

	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }

	    function locale (key) {
	        var newLocaleData;

	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }

	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );

	    function localeData () {
	        return this._locale;
	    }

	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	        case 'year':
	            this.month(0);
	            /* falls through */
	        case 'quarter':
	        case 'month':
	            this.date(1);
	            /* falls through */
	        case 'week':
	        case 'isoWeek':
	        case 'day':
	            this.hours(0);
	            /* falls through */
	        case 'hour':
	            this.minutes(0);
	            /* falls through */
	        case 'minute':
	            this.seconds(0);
	            /* falls through */
	        case 'second':
	            this.milliseconds(0);
	        }

	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }

	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }

	        return this;
	    }

	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }
	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }

	    function to_type__valueOf () {
	        return +this._d - ((this._offset || 0) * 60000);
	    }

	    function unix () {
	        return Math.floor(+this / 1000);
	    }

	    function toDate () {
	        return this._offset ? new Date(+this) : this._d;
	    }

	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }

	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }

	    function parsingFlags () {
	        return extend({}, this._pf);
	    }

	    function invalidAt () {
	        return this._pf.overflow;
	    }

	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });

	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });

	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }

	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	    // ALIASES

	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');

	    // PARSING

	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);

	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });

	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });

	    // HELPERS

	    function weeksInYear(year, dow, doy) {
	        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
	    }

	    // MOMENTS

	    function getSetWeekYear (input) {
	        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
	        return input == null ? year : this.add((input - year), 'y');
	    }

	    function getSetISOWeekYear (input) {
	        var year = weekOfYear(this, 1, 4).year;
	        return input == null ? year : this.add((input - year), 'y');
	    }

	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }

	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }

	    addFormatToken('Q', 0, 0, 'quarter');

	    // ALIASES

	    addUnitAlias('quarter', 'Q');

	    // PARSING

	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });

	    // MOMENTS

	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }

	    addFormatToken('D', ['DD', 2], 'Do', 'date');

	    // ALIASES

	    addUnitAlias('date', 'D');

	    // PARSING

	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });

	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });

	    // MOMENTS

	    var getSetDayOfMonth = makeGetSet('Date', true);

	    addFormatToken('d', 0, 'do', 'day');

	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });

	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });

	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });

	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');

	    // ALIASES

	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');

	    // PARSING

	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   matchWord);
	    addRegexToken('ddd',  matchWord);
	    addRegexToken('dddd', matchWord);

	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
	        var weekday = config._locale.weekdaysParse(input);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            config._pf.invalidWeekday = input;
	        }
	    });

	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });

	    // HELPERS

	    function parseWeekday(input, locale) {
	        if (typeof input === 'string') {
	            if (!isNaN(input)) {
	                input = parseInt(input, 10);
	            }
	            else {
	                input = locale.weekdaysParse(input);
	                if (typeof input !== 'number') {
	                    return null;
	                }
	            }
	        }
	        return input;
	    }

	    // LOCALES

	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m) {
	        return this._weekdays[m.day()];
	    }

	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return this._weekdaysShort[m.day()];
	    }

	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return this._weekdaysMin[m.day()];
	    }

	    function localeWeekdaysParse (weekdayName) {
	        var i, mom, regex;

	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	        }

	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            if (!this._weekdaysParse[i]) {
	                mom = local__createLocal([2000, 1]).day(i);
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function getSetDayOfWeek (input) {
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }

	    function getSetLocaleDayOfWeek (input) {
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }

	    function getSetISODayOfWeek (input) {
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	    }

	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, function () {
	        return this.hours() % 12 || 12;
	    });

	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }

	    meridiem('a', true);
	    meridiem('A', false);

	    // ALIASES

	    addUnitAlias('hour', 'h');

	    // PARSING

	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }

	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);

	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        config._pf.bigHour = true;
	    });

	    // LOCALES

	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }

	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }


	    // MOMENTS

	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);

	    addFormatToken('m', ['mm', 2], 0, 'minute');

	    // ALIASES

	    addUnitAlias('minute', 'm');

	    // PARSING

	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);

	    // MOMENTS

	    var getSetMinute = makeGetSet('Minutes', false);

	    addFormatToken('s', ['ss', 2], 0, 'second');

	    // ALIASES

	    addUnitAlias('second', 's');

	    // PARSING

	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);

	    // MOMENTS

	    var getSetSecond = makeGetSet('Seconds', false);

	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });

	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });

	    function millisecond__milliseconds (token) {
	        addFormatToken(0, [token, 3], 0, 'millisecond');
	    }

	    millisecond__milliseconds('SSS');
	    millisecond__milliseconds('SSSS');

	    // ALIASES

	    addUnitAlias('millisecond', 'ms');

	    // PARSING

	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	    addRegexToken('SSSS', matchUnsigned);
	    addParseToken(['S', 'SS', 'SSS', 'SSSS'], function (input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    });

	    // MOMENTS

	    var getSetMillisecond = makeGetSet('Milliseconds', false);

	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');

	    // MOMENTS

	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }

	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }

	    var momentPrototype__proto = Moment.prototype;

	    momentPrototype__proto.add          = add_subtract__add;
	    momentPrototype__proto.calendar     = moment_calendar__calendar;
	    momentPrototype__proto.clone        = clone;
	    momentPrototype__proto.diff         = diff;
	    momentPrototype__proto.endOf        = endOf;
	    momentPrototype__proto.format       = format;
	    momentPrototype__proto.from         = from;
	    momentPrototype__proto.fromNow      = fromNow;
	    momentPrototype__proto.get          = getSet;
	    momentPrototype__proto.invalidAt    = invalidAt;
	    momentPrototype__proto.isAfter      = isAfter;
	    momentPrototype__proto.isBefore     = isBefore;
	    momentPrototype__proto.isBetween    = isBetween;
	    momentPrototype__proto.isSame       = isSame;
	    momentPrototype__proto.isValid      = moment_valid__isValid;
	    momentPrototype__proto.lang         = lang;
	    momentPrototype__proto.locale       = locale;
	    momentPrototype__proto.localeData   = localeData;
	    momentPrototype__proto.max          = prototypeMax;
	    momentPrototype__proto.min          = prototypeMin;
	    momentPrototype__proto.parsingFlags = parsingFlags;
	    momentPrototype__proto.set          = getSet;
	    momentPrototype__proto.startOf      = startOf;
	    momentPrototype__proto.subtract     = add_subtract__subtract;
	    momentPrototype__proto.toArray      = toArray;
	    momentPrototype__proto.toDate       = toDate;
	    momentPrototype__proto.toISOString  = moment_format__toISOString;
	    momentPrototype__proto.toJSON       = moment_format__toISOString;
	    momentPrototype__proto.toString     = toString;
	    momentPrototype__proto.unix         = unix;
	    momentPrototype__proto.valueOf      = to_type__valueOf;

	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;

	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;

	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;

	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;

	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

	    var momentPrototype = momentPrototype__proto;

	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }

	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }

	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };

	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key];
	        return typeof output === 'function' ? output.call(mom, now) : output;
	    }

	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY LT',
	        LLLL : 'dddd, MMMM D, YYYY LT'
	    };

	    function longDateFormat (key) {
	        var output = this._longDateFormat[key];
	        if (!output && this._longDateFormat[key.toUpperCase()]) {
	            output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                return val.slice(1);
	            });
	            this._longDateFormat[key] = output;
	        }
	        return output;
	    }

	    var defaultInvalidDate = 'Invalid date';

	    function invalidDate () {
	        return this._invalidDate;
	    }

	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;

	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }

	    function preParsePostFormat (string) {
	        return string;
	    }

	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };

	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (typeof output === 'function') ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }

	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
	    }

	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (typeof prop === 'function') {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
	    }

	    var prototype__proto = Locale.prototype;

	    prototype__proto._calendar       = defaultCalendar;
	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto._longDateFormat = defaultLongDateFormat;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto._invalidDate    = defaultInvalidDate;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto._ordinal        = defaultOrdinal;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto._ordinalParse   = defaultOrdinalParse;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto._relativeTime   = defaultRelativeTime;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;

	    // Month
	    prototype__proto.months       =        localeMonths;
	    prototype__proto._months      = defaultLocaleMonths;
	    prototype__proto.monthsShort  =        localeMonthsShort;
	    prototype__proto._monthsShort = defaultLocaleMonthsShort;
	    prototype__proto.monthsParse  =        localeMonthsParse;

	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto._week = defaultLocaleWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto._weekdays      = defaultLocaleWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
	    prototype__proto.meridiem = localeMeridiem;

	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }

	    function list (format, index, field, count, setter) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';

	        if (index != null) {
	            return lists__get(format, index, field, setter);
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < count; i++) {
	            out[i] = lists__get(format, i, field, setter);
	        }
	        return out;
	    }

	    function lists__listMonths (format, index) {
	        return list(format, index, 'months', 12, 'month');
	    }

	    function lists__listMonthsShort (format, index) {
	        return list(format, index, 'monthsShort', 12, 'month');
	    }

	    function lists__listWeekdays (format, index) {
	        return list(format, index, 'weekdays', 7, 'day');
	    }

	    function lists__listWeekdaysShort (format, index) {
	        return list(format, index, 'weekdaysShort', 7, 'day');
	    }

	    function lists__listWeekdaysMin (format, index) {
	        return list(format, index, 'weekdaysMin', 7, 'day');
	    }

	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

	    var mathAbs = Math.abs;

	    function duration_abs__abs () {
	        var data           = this._data;

	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);

	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);

	        return this;
	    }

	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);

	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;

	        return duration._bubble();
	    }

	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }

	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }

	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years = 0;

	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;

	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;

	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;

	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;

	        days += absFloor(hours / 24);

	        // Accurately convert days to years, assume start from year 0.
	        years = absFloor(daysToYears(days));
	        days -= absFloor(yearsToDays(years));

	        // 30 days to a month
	        // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
	        months += absFloor(days / 30);
	        days   %= 30;

	        // 12 months -> 1 year
	        years  += absFloor(months / 12);
	        months %= 12;

	        data.days   = days;
	        data.months = months;
	        data.years  = years;

	        return this;
	    }

	    function daysToYears (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        return days * 400 / 146097;
	    }

	    function yearsToDays (years) {
	        // years * 365 + absFloor(years / 4) -
	        //     absFloor(years / 100) + absFloor(years / 400);
	        return years * 146097 / 400;
	    }

	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;

	        units = normalizeUnits(units);

	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToYears(days) * 12;
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(yearsToDays(this._months / 12));
	            switch (units) {
	                case 'week'   : return days / 7            + milliseconds / 6048e5;
	                case 'day'    : return days                + milliseconds / 864e5;
	                case 'hour'   : return days * 24           + milliseconds / 36e5;
	                case 'minute' : return days * 24 * 60      + milliseconds / 6e4;
	                case 'second' : return days * 24 * 60 * 60 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }

	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }

	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }

	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');

	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }

	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }

	    var duration_get__milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');

	    function weeks () {
	        return absFloor(this.days() / 7);
	    }

	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };

	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));

	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes === 1          && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   === 1          && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    === 1          && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  === 1          && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   === 1          && ['y']           || ['yy', years];

	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }

	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }

	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }

	        return locale.postformat(output);
	    }

	    var iso_string__abs = Math.abs;

	    function iso_string__toISOString() {
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = iso_string__abs(this.years());
	        var M = iso_string__abs(this.months());
	        var D = iso_string__abs(this.days());
	        var h = iso_string__abs(this.hours());
	        var m = iso_string__abs(this.minutes());
	        var s = iso_string__abs(this.seconds() + this.milliseconds() / 1000);
	        var total = this.asSeconds();

	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }

	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }

	    var duration_prototype__proto = Duration.prototype;

	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = duration_get__milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;

	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;

	    // Side effect imports

	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');

	    // PARSING

	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });

	    // Side effect imports


	    utils_hooks__hooks.version = '2.10.2';

	    setHookCallback(local__createLocal);

	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

	    var _moment = utils_hooks__hooks;

	    return _moment;

	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var _ = __webpack_require__(8);

	var config = __webpack_require__(5),
	  gen = __webpack_require__(6).generator,
	  tm = __webpack_require__(7);



	/**
	 * Generate random data according generator.
	 *
	 * @param {String|Object|Array} generator
	 * @returns {*}
	 */
	function yod(generator) {
	  if (arguments.length !== 1) {throw new Error('yod(generator) can only accept one argument.'); }

	  if (_.isArray(generator)) {
	    return _.map(generator, function(arg) { return yod(arg); });
	  }

	  return gen(generator)();
	}

	/**
	 * Create new type, and also can create the new type's aliases.
	 *
	 * @param {String} name
	 * @param {*} generator
	 * @param {String|Array} aliases
	 */
	yod.type = function(name, generator, aliases) {
	  if (arguments.length < 2) {
	    throw new Error('yod.type(name, generator[, aliases...]) need at least two arguments.');
	  }

	  if (!_.isString(name)) { throw new Error('Type name "' + name + '" should be a string.'); }

	  aliases = _.map(_.flattenDeep(_.slice(arguments, 2)), function(alias) {
	    if (!_.isString(alias)) { throw new Error('Type alias "' + alias + '" should also be a string.'); }
	    return alias;
	  });

	  tm.type(name, aliases, _.isFunction(generator) ? generator : function() { return yod(generator); });
	};


	/**
	 * Create new modifier.
	 *
	 * @param {String|Function|Array} [filters = []] - before modifier modify the up value,
	 *                                                the filters will filter the value first
	 *
	 * @param {String} name - modifier's name, if prefix it with ":", modifier will
	 *                        become a generator function modifier, default is a value modifier
	 *
	 * @param {Function} modifierFn - modifier's function, the function's first argument is last generator's value
	 *                                or function (depends on if modifier's name is prefix with ":"), other arguments
	 *                                is user provided.
	 */
	yod.modifier = function(filters, name, modifierFn) {
	  var len = arguments.length;
	  if (len < 2 || len > 3) {
	    throw new Error('yod.modifier([filters, ]name, modifierFn) need two or three arguments.');
	  }

	  if (len === 2) {
	    modifierFn = name;
	    name = filters;
	    filters = [];
	  }

	  if (!_.isString(name)) { throw new Error('Modifier name "' + name + '" should be a string.'); }
	  if (!_.isFunction(modifierFn)) { throw new Error('Modifier function "' + modifierFn + '" should be a function.'); }


	  tm.modifier(filters, name, modifierFn);
	};

	/**
	 * Empty all defined types.
	 * @type {Function}
	 */
	yod.emptyTypes = function() { tm.clean('type'); };

	/**
	 * Empty all defined modifiers.
	 * @type {Function}
	 */
	yod.emptyModifiers = function() { tm.clean('modifier'); };

	yod.isTypeNameExists = tm.t.isNameExists;
	yod.isTypeNameValid = tm.t.isNameValid;
	yod.isModifierNameExists = tm.m.isNameExists;
	yod.isModifierNameValid = tm.m.isNameValid;
	yod._ = _;

	/**
	 * Set or get config key.
	 *
	 * @type {Function}
	 * @param {String} key
	 * @param {*} [val]
	 * @param {Object} [meta]
	 * @returns {*}
	 */
	yod.config = config;

	/**
	 * all types
	 * @type {Object}
	 */
	yod.types = tm.type.all;

	/**
	 * all modifiers
	 * @type {Object}
	 */
	yod.modifiers = tm.modifier.all;

	if (typeof window !== 'undefined') { window.yod = yod; }

	module.exports = yod;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 简版的 def
	 *
	 * 不支持 heredoc，适合用在代码需要压缩的地方（代码压缩会将 heredoc 给删除了）
	 */

	var base = __webpack_require__(9);
	var option = __webpack_require__(10);
	var Rule = __webpack_require__(11);
	var type = __webpack_require__(12);
	var Self = __webpack_require__(13);

	/**
	 *
	 * @param {Function} fn
	 * @param {Object} cfg
	 * @returns {Function}
	 */
	function def(fn, cfg) {

	  if (!cfg) {
	    return fn;
	  }

	  cfg.rules = base.map(cfg.rules, Rule.decompress);
	  cfg.options = base.merge({}, option.all, cfg.options);
	  cfg.defaults = base.merge({}, cfg.defaults);

	  return Self.def(fn, cfg);
	}

	def.option = option;
	base.merge(def, type);

	module.exports = def;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var _ = __webpack_require__(8);

	var _meta = {};
	var _all = {};


	var _reMeta = /:meta$/;


	/**
	 * Set or get config key.
	 *
	 * @param {String} key
	 * @param {*} [val]
	 * @param {Object} [meta]
	 * @returns {*}
	 */
	function config(key, val, meta) {

	  var keys, lastKey, addMeta;

	  addMeta = _reMeta.test(key);
	  key = key.replace(_reMeta, '');
	  keys = key.split('.');

	  // get
	  if (_.isUndefined(val)) {
	    meta = _meta[key];
	    val = _.reduce(keys, function(ref, k) {
	      if (ref && ref.hasOwnProperty && ref.hasOwnProperty(k)) {
	        ref = ref[k];
	        return ref;
	      }
	    }, _all);

	  } else { // set
	    if (!_.isUndefined(meta)) { _meta[key] = meta; }
	    lastKey = keys.pop();

	    var prevVal = _.reduce(keys, function(ref, k) {
	      if (!_.isObject(ref[k])) { ref[k] = {}; }

	      ref = ref[k];

	      return ref;
	    }, _all);

	    prevVal[lastKey] = val;
	  }

	  return addMeta ? {meta: meta, val: val} : val;
	}


	config.all = _all;
	config.meta = _meta;

	module.exports = config;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var KVPairNode = __webpack_require__(14);
	var parse = __webpack_require__(15);
	var _ = __webpack_require__(8);

	module.exports = {
	  generator: function(obj) {
	    return function() {
	      if (_.isPlainObject(obj)) {
	        return (new KVPairNode(obj)).getValue();
	      } else if (_.isFunction(obj)) {
	        return obj();
	      } else {
	        return parse(obj);
	      }
	    };
	  }
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	'use strict';
	var _ = __webpack_require__(8),
	  type = __webpack_require__(16),
	  modifier = __webpack_require__(17);

	/**
	 *
	 * Simple group of type and modifier, "t" meaning {@link type}, "m" meaning {@link modifier}.
	 *
	 * @namespace
	 * @type {Object}
	 */
	var tm = {};


	/**
	 * Define a new type
	 *
	 * @param {String} name - type name
	 * @param {Array|String} [aliases = []] - type aliases
	 * @param {Function} fn - type function
	 * @param {*} [ctx = null] - type function's bind target
	 *
	 * @example
	 *
	 * // 随机生成布尔值
	 * yod.type('Boolean', ['Bool'], function() {
	 *   return Date.now() % 2 === 0;
	 * });
	 *
	 */
	tm.type = function(name, aliases, fn, ctx) {
	  if (_.isFunction(aliases)) {
	    ctx = fn;
	    fn = aliases;
	    aliases = [];
	  }

	  type.create(name, fn, ctx);

	  _.each([].concat(aliases), function(alias) { type.alias(alias, name); });
	};


	/**
	 * Define a new modifier
	 * @param {String|Function|Array} [filters = []] - modifier filters
	 * @param {String} name - modifier name
	 * @param {Function} fn - modifier function
	 * @param {*} [ctx = null] - modifier function's bind target
	 * @example
	 *
	 * yod.modifier('String', 'first', function(str) {
	 *   return str[0];
	 * });
	 *
	 * @example
	 *
	 * function isFooBar(arg) {
	 *   if (arg === 'foo' || arg === 'bar') { return true; }
	 * }
	 * yod.hook(['String', isFooBar], 'double', function(fooBarStr) {
	 *   return fooBarStr + fooBarStr;
	 * });
	 */
	tm.modifier = function(filters, name, fn, ctx) {
	  if (_.isFunction(name)) {
	    ctx = fn;
	    fn = name;
	    name = filters;
	    filters = [];
	  }

	  modifier.create([].concat(filters), name, fn, ctx);
	};

	/**
	 * Clean all defined types and modifiers
	 */
	tm.clean = function(arg) {
	  var obj = {type: type, modifier: modifier};
	  _.each([].concat(obj[arg] || _.values(obj)), function(t){
	    _.each(t.all, function(v, k) {
	      delete t.all[k];
	    });
	  });
	};


	/**
	 * Function's modifier generator
	 * @param {Function} fn
	 * @param {Array} modSeries
	 * @returns {Function}
	 */
	tm.fnGenerator = function(fn, modSeries) {
	  return _.reduce([].concat(modSeries ? modSeries : []), function(fn, mod) {
	    return modifier.generator(fn, mod.name, mod.args, mod.ctx);
	  }, fn);
	};

	/**
	 * Generator type and modifier series generator.
	 *
	 *
	 * @param {String} [typeName]
	 * @param {Array} [series] - type and modifier arrays, series's first argument is type, and others is modifier
	 * @returns {Function}
	 * @example
	 *
	 * yod.generator('Bool');
	 *
	 * @example
	 *
	 * yod.generator('Bool', [{name: 'repeat', args: [3, 8]}]);
	 *
	 * @example
	 *
	 * yod.generator([ {name: 'Bool', args: [0.6]}, {name: 'repeat', args: [3]} ]);
	 */
	tm.generator = function(typeName, series) {
	  var typ,
	    mods;

	  if (_.isString(typeName)) {
	    typ = {name: typeName};
	    mods = series || [];
	  } else {
	    series = typeName;
	    typ = series[0];
	    mods = series.slice(1);
	  }

	  var fn = type.generator(typ.name, typ.args, typ.ctx);

	  return tm.fnGenerator(fn, mods);
	};

	tm.t = type;
	tm.m = modifier;

	module.exports = tm;



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.7.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
	 * Build: `lodash exports="node" --production`
	 */
	;(function(){function n(n,t){if(n!==t){var r=n===n,e=t===t;if(n>t||!r||n===w&&e)return 1;if(n<t||!e||t===w&&r)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return typeof n=="string"?n:null==n?"":n+""}function o(n){return n.charCodeAt(0)}function i(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
	return r}function a(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function c(n){return Ln[n]}function l(n){return Pn[n]}function s(n){return"\\"+Mn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);

	}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=P,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Bn[n]}function m(_){function Ln(n){if(h(n)&&!(Uo(n)||n instanceof zn)){if(n instanceof Bn)return n;if(Ze.call(n,"__chain__")&&Ze.call(n,"__wrapped__"))return Lr(n)}return new Bn(n)}function Pn(){}function Bn(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
	this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=null,this.__dir__=1,this.__filtered__=false,this.__iteratees__=null,this.__takeCount__=ku,this.__views__=null}function Mn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:yu(null),set:new cu};t--;)this.push(n[t])}function qn(n,t){var r=n.data;return(typeof t=="string"||le(t)?r.set.has(t):r.hash[t])?0:-1}function Kn(n,t){var r=-1,e=n.length;for(t||(t=Te(e));++r<e;)t[r]=n[r];return t}function Vn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
	return n}function Yn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Xn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Hn(n,t){for(var r=-1,e=n.length,u=Te(e);++r<e;)u[r]=t(n[r],r,n);return u}function Qn(n){for(var t=-1,r=n.length,e=Eu;++t<r;){var u=n[t];u>e&&(e=u)}return e}function nt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function tt(n,t){return n===w?t:n}function rt(n,t,r,e){return n!==w&&Ze.call(e,r)?n:t;

	}function et(n,t,r){var e=Ko(t);iu.apply(e,Gu(t));for(var u=-1,o=e.length;++u<o;){var i=e[u],a=n[i],f=r(a,t[i],i,n,t);(f===f?f===a:a!==a)&&(a!==w||i in n)||(n[i]=f)}return n}function ut(n,t){for(var r=-1,e=n.length,u=Rr(e),o=t.length,i=Te(o);++r<o;){var a=t[r];i[r]=u?Or(a,e)?n[a]:w:n[a]}return i}function ot(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function it(n,t,r){var e=typeof n;return"function"==e?t===w?n:zt(n,t,r):null==n?Ie:"object"==e?xt(n):t===w?Ce(n):At(n,t);

	}function at(n,t,r,e,u,o,i){var a;if(r&&(a=u?r(n,e,u):r(n)),a!==w)return a;if(!le(n))return n;if(e=Uo(n)){if(a=br(n),!t)return Kn(n,a)}else{var f=Je.call(n),c=f==K;if(f!=Y&&f!=B&&(!c||u))return Nn[f]?Ar(n,f,t):u?n:{};if(Gn(n))return u?n:{};if(a=xr(c?{}:n),!t)return Lu(a,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(a),(e?Vn:vt)(n,function(e,u){a[u]=at(e,t,r,u,n,o,i)}),a}function ft(n,t,r){if(typeof n!="function")throw new ze(L);return lu(function(){n.apply(w,r);

	},t)}function ct(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=wr(),a=i==r,f=a&&200<=t.length?Ku(t):null,c=t.length;f&&(i=qn,a=false,t=f);n:for(;++o<e;)if(f=n[o],a&&f===f){for(var l=c;l--;)if(t[l]===f)continue n;u.push(f)}else 0>i(t,f,0)&&u.push(f);return u}function lt(n,t){var r=true;return Bu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function st(n,t){var r=[];return Bu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function pt(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0;

	}),u}function ht(n,t,r){for(var e=-1,u=n.length,o=-1,i=[];++e<u;){var a=n[e];if(h(a)&&Rr(a.length)&&(Uo(a)||ae(a))){t&&(a=ht(a,t,r));var f=-1,c=a.length;for(i.length+=c;++f<c;)i[++o]=a[f]}else r||(i[++o]=a)}return i}function _t(n,t){Mu(n,t,de)}function vt(n,t){return Mu(n,t,Ko)}function gt(n,t){return Du(n,t,Ko)}function yt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];Fo(n[i])&&(o[++u]=i)}return o}function dt(n,t,r){if(null!=n){n=Nr(n),r!==w&&r in n&&(t=[r]),r=-1;for(var e=t.length;null!=n&&++r<e;)var u=n=Nr(n)[t[r]];

	return u}}function mt(n,t,r,e,u,o){if(n===t)return 0!==n||1/n==1/t;var i=typeof n,a=typeof t;if("function"!=i&&"object"!=i&&"function"!=a&&"object"!=a||null==n||null==t)n=n!==n&&t!==t;else n:{var i=mt,a=Uo(n),f=Uo(t),c=z,l=z;a||(c=Je.call(n),c==B?c=Y:c!=Y&&(a=ve(n))),f||(l=Je.call(t),l==B?l=Y:l!=Y&&ve(t));var s=c==Y&&!Gn(n),f=l==Y&&!Gn(t),l=c==l;if(!l||a||s){if(!e&&(c=s&&Ze.call(n,"__wrapped__"),f=f&&Ze.call(t,"__wrapped__"),c||f)){n=i(c?n.value():n,f?t.value():t,r,e,u,o);break n}if(l){for(u||(u=[]),
	o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(a?vr:yr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=gr(n,t,c)}return n}function wt(n,t,r,e,u){for(var o=-1,i=t.length,a=!u;++o<i;)if(a&&e[o]?r[o]!==n[t[o]]:!(t[o]in n))return false;for(o=-1;++o<i;){var f=t[o],c=n[f],l=r[o];if(a&&e[o]?f=c!==w||f in n:(f=u?u(c,l,f):w,f===w&&(f=mt(l,c,u,true))),!f)return false}return true}function bt(n,t){var r=-1,e=Zu(n),u=Rr(e)?Te(e):[];return Bu(n,function(n,e,o){u[++r]=t(n,e,o)}),u}function xt(n){
	var t=Ko(n),r=t.length;if(!r)return ke(true);if(1==r){var e=t[0],u=n[e];if(Sr(u))return function(n){return null==n?false:(n=Nr(n),n[e]===u&&(u!==w||e in n))}}for(var o=Te(r),i=Te(r);r--;)u=n[t[r]],o[r]=u,i[r]=Sr(u);return function(n){return null!=n&&wt(Nr(n),t,o,i)}}function At(n,t){var r=Uo(n),e=kr(n)&&Sr(t),u=n+"";return n=$r(n),function(o){if(null==o)return false;var i=u;if(o=Nr(o),!(!r&&e||i in o)){if(o=1==n.length?o:dt(o,St(n,0,-1)),null==o)return false;i=Dr(n),o=Nr(o)}return o[i]===t?t!==w||i in o:mt(t,o[i],null,true);

	}}function jt(n,t,r,e,u){if(!le(n))return n;var o=Rr(t.length)&&(Uo(t)||ve(t));if(!o){var i=Ko(t);iu.apply(i,Gu(t))}return Vn(i||t,function(a,f){if(i&&(f=a,a=t[f]),h(a)){e||(e=[]),u||(u=[]);n:{for(var c=f,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Rr(_.length)&&(Uo(_)||ve(_))?v=Uo(p)?p:Zu(p)?Kn(p):[]:No(_)||ae(_)?v=ae(p)?ge(p):No(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=jt(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[f],l=r?r(c,a,f,n,t):w,
	(s=l===w)&&(l=a),!o&&l===w||!s&&(l===l?l===c:c!==c)||(n[f]=l)}),n}function Ot(n){return function(t){return null==t?w:Nr(t)[n]}}function Et(n){var t=n+"";return n=$r(n),function(r){return dt(r,n,t)}}function kt(n,t){for(var r=t.length;r--;){var e=parseFloat(t[r]);if(e!=u&&Or(e)){var u=e;su.call(n,e,1)}}}function It(n,t){return n+eu(Ou()*(t-n+1))}function Rt(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function St(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),
	r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Te(u);++e<u;)r[e]=n[e+t];return r}function Ct(n,t){var r;return Bu(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Tt(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Ut(t,r,e){var u=mr(),o=-1;return r=Hn(r,function(n){return u(n)}),t=bt(t,function(n){return{a:Hn(r,function(t){return t(n)}),b:++o,c:n}}),Tt(t,function(t,r){var u;n:{u=-1;for(var o=t.a,i=r.a,a=o.length,f=e.length;++u<a;){var c=n(o[u],i[u]);if(c){u=u<f?c*(e[u]?1:-1):c;

	break n}}u=t.b-r.b}return u})}function Wt(n,t){var r=0;return Bu(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function Ft(n,t){var e=-1,u=wr(),o=n.length,i=u==r,a=i&&200<=o,f=a?Ku():null,c=[];f?(u=qn,i=false):(a=false,f=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=f.length;p--;)if(f[p]===s)continue n;t&&f.push(s),c.push(l)}else 0>u(f,s,0)&&((t||a)&&f.push(s),c.push(l))}return c}function Nt(n,t){for(var r=-1,e=t.length,u=Te(e);++r<e;)u[r]=n[t[r]];return u}function $t(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
	return r?St(n,e?0:o,e?o+1:u):St(n,e?o+1:0,e?u:o)}function Lt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var r=[r],o=t[e];iu.apply(r,o.args),r=o.func.apply(o.thisArg,r)}return r}function Pt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Su){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)?e=o+1:u=o}return u}return Bt(n,t,Ie,r)}function Bt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,a=t===w;u<o;){var f=eu((u+o)/2),c=r(n[f]),l=c===c;(i?l||e:a?l&&(e||c!==w):e?c<=t:c<t)?u=f+1:o=f;

	}return bu(o,Ru)}function zt(n,t,r){if(typeof n!="function")return Ie;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Mt(n){return nu.call(n,0)}function Dt(n,t,r){for(var e=r.length,u=-1,o=wu(n.length-e,0),i=-1,a=t.length,f=Te(o+a);++i<a;)f[i]=t[i];

	for(;++u<e;)f[r[u]]=n[u];for(;o--;)f[i++]=n[u++];return f}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=wu(n.length-u,0),a=-1,f=t.length,c=Te(i+f);++o<i;)c[o]=n[o];for(i=o;++a<f;)c[i+a]=t[a];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Kt(n,t){return function(r,e,u){var o=t?t():{};if(e=mr(e,u,3),Uo(r)){u=-1;for(var i=r.length;++u<i;){var a=r[u];n(o,a,e(a,u,r),r)}}else Bu(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function Vt(n){return ie(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u&&r[u-2],i=2<u&&r[2],a=1<u&&r[u-1];

	for(typeof o=="function"?(o=zt(o,a,5),u-=2):(o=typeof a=="function"?a:null,u-=o?1:0),i&&Er(r[0],r[1],i)&&(o=3>u?null:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Yt(n,t){return function(r,e){var u=r?Zu(r):0;if(!Rr(u))return n(r,e);for(var o=t?u:-1,i=Nr(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Nr(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var a=e[i];if(false===r(u[a],a,u))break}return t}}function Gt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments);

	}var e=Xt(n);return r}function Jt(n){return function(t){var r=-1;t=Oe(we(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Xt(n){return function(){var t=Pu(n.prototype),r=n.apply(t,arguments);return le(r)?r:t}}function Ht(n){function t(r,e,u){return u&&Er(r,e,u)&&(e=null),r=_r(r,n,null,null,null,null,null,e),r.placeholder=t.placeholder,r}return t}function Qt(n,t){return function(r,e,u){u&&Er(r,e,u)&&(e=null);var i=mr(),a=null==e;if(i===it&&a||(a=false,e=i(e,u,3)),a){if(e=Uo(r),e||!_e(r))return n(e?r:Fr(r));

	e=o}return dr(r,e,t)}}function nr(n,r){return function(e,u,o){return u=mr(u,o,3),Uo(e)?(u=t(e,u,r),-1<u?e[u]:w):pt(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=mr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=mr(r,e,3),pt(t,r,n,true)}}function er(n){return function(){var t=arguments.length;if(!t)return function(){return arguments[0]};for(var r,e=n?t:-1,u=0,o=Te(t);n?e--:++e<t;){var i=o[u++]=arguments[e];if(typeof i!="function")throw new ze(L);var a=r?"":Yu(i);

	r="wrapper"==a?new Bn([]):r}for(e=r?-1:t;++e<t;)i=o[e],a=Yu(i),r=(u="wrapper"==a?Vu(i):null)&&Ir(u[0])?r[Yu(u[0])].apply(r,u[3]):1==i.length&&Ir(i)?r[a]():r.thru(i);return function(){var n=arguments;if(r&&1==n.length&&Uo(n[0]))return r.plant(n[0]).value();for(var e=0,n=o[e].apply(this,n);++e<t;)n=o[e].call(this,n);return n}}}function ur(n,t){return function(r,e,u){return typeof e=="function"&&u===w&&Uo(r)?n(r,e):t(r,zt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=zt(r,e,3)),
	n(t,r,de)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=zt(r,e,3)),n(t,r)}}function ar(n){return function(t,r,e){return(t=u(t))&&(n?t:"")+sr(t,r,e)+(n?"":t)}}function fr(n){var t=ie(function(r,e){var u=v(e,t.placeholder);return _r(r,n,null,e,u)});return t}function cr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Uo(r)?n(r,e,u,i):Rt(r,mr(e,o,4),u,i,t)}}function lr(n,t,r,e,u,o,i,a,f,c){function l(){for(var b=arguments.length,j=b,O=Te(b);j--;)O[j]=arguments[j];

	if(e&&(O=Dt(O,e,u)),o&&(O=qt(O,o,i)),_||y){var j=l.placeholder,E=v(O,j),b=b-E.length;if(b<c){var R=a?Kn(a):null,b=wu(c-b,0),S=_?E:null,E=_?null:E,C=_?O:null,O=_?null:O;return t|=_?k:I,t&=~(_?I:k),g||(t&=~(x|A)),O=[n,t,r,C,S,O,E,R,f,b],R=lr.apply(w,O),Ir(n)&&Ju(R,O),R.placeholder=j,R}}if(j=p?r:this,h&&(n=j[m]),a)for(R=O.length,b=bu(a.length,R),S=Kn(O);b--;)E=a[b],O[b]=Or(E,R)?S[E]:w;return s&&f<O.length&&(O.length=f),(this&&this!==Zn&&this instanceof l?d||Xt(n):n).apply(j,O)}var s=t&R,p=t&x,h=t&A,_=t&O,g=t&j,y=t&E,d=!h&&Xt(n),m=n;

	return l}function sr(n,t,r){return n=n.length,t=+t,n<t&&du(t)?(t-=n,r=null==r?" ":r+"",Ae(r,tu(t/r.length)).slice(0,t)):""}function pr(n,t,r,e){function u(){for(var t=-1,a=arguments.length,f=-1,c=e.length,l=Te(a+c);++f<c;)l[f]=e[f];for(;a--;)l[f++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Xt(n);return u}function hr(n){return function(t,r,e,u){var o=mr(e);return o===it&&null==e?Pt(t,r,n):Bt(t,r,o(e,u,1),n)}}function _r(n,t,r,e,u,o,i,a){var f=t&A;if(!f&&typeof n!="function")throw new ze(L);

	var c=e?e.length:0;if(c||(t&=~(k|I),e=u=null),c-=u?u.length:0,t&I){var l=e,s=u;e=u=null}var p=f?null:Vu(n);return r=[n,t,r,e,u,l,s,o,i,a],p&&(e=r[1],t=p[1],a=e|t,u=t==R&&e==O||t==R&&e==S&&r[7].length<=p[8]||t==(R|S)&&e==O,(a<R||u)&&(t&x&&(r[2]=p[2],a|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Dt(u,e,p[4]):Kn(e),r[4]=u?v(r[3],P):Kn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):Kn(e),r[6]=u?v(r[5],P):Kn(p[6])),(e=p[7])&&(r[7]=Kn(e)),t&R&&(r[8]=null==r[8]?p[8]:bu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],
	r[1]=a),t=r[1],a=r[9]),r[9]=null==a?f?0:n.length:wu(a-c,0)||0,(p?qu:Ju)(t==x?Gt(r[0],r[2]):t!=k&&t!=(x|k)||r[4].length?lr.apply(w,r):pr.apply(w,r),r)}function vr(n,t,r,e,u,o,i){var a=-1,f=n.length,c=t.length,l=true;if(f!=c&&(!u||c<=f))return false;for(;l&&++a<f;){var s=n[a],p=t[a],l=w;if(e&&(l=u?e(p,s,a):e(s,p,a)),l===w)if(u)for(var h=c;h--&&(p=t[h],!(l=s&&s===p||r(s,p,e,u,o,i))););else l=s&&s===p||r(s,p,e,u,o,i)}return!!l}function gr(n,t,r){switch(r){case M:case D:return+n==+t;case q:return n.name==t.name&&n.message==t.message;

	case V:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case Z:case G:return n==t+""}return false}function yr(n,t,r,e,u,o,i){var a=Ko(n),f=a.length,c=Ko(t).length;if(f!=c&&!u)return false;for(var c=u,l=-1;++l<f;){var s=a[l],p=u?s in t:Ze.call(t,s);if(p){var h=n[s],_=t[s],p=w;e&&(p=u?e(_,h,s):e(h,_,s)),p===w&&(p=h&&h===_||r(h,_,e,u,o,i))}if(!p)return false;c||(c="constructor"==s)}return c||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false;

	}function dr(n,t,r){var e=r?ku:Eu,u=e,o=u;return Bu(n,function(n,i,a){i=t(n,i,a),((r?i<u:i>u)||i===e&&i===o)&&(u=i,o=n)}),o}function mr(n,t,r){var e=Ln.callback||Ee,e=e===Ee?it:e;return r?e(n,t,r):e}function wr(n,t,e){var u=Ln.indexOf||Mr,u=u===Mr?r:u;return n?u(n,t,e):u}function br(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&Ze.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function xr(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Le),new n;

	}function Ar(n,t,r){var e=n.constructor;switch(t){case J:return Mt(n);case M:case D:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return e instanceof e&&(e=Fu[t]),t=n.buffer,new e(r?Mt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Z:var u=new e(n.source,On.exec(n));u.lastIndex=n.lastIndex}return u}function jr(n,t,r){return null==n||kr(t,n)||(t=$r(t),n=1==t.length?n:dt(n,St(t,0,-1)),t=Dr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Or(n,t){
	return n=+n,t=null==t?Tu:t,-1<n&&0==n%1&&n<t}function Er(n,t,r){if(!le(r))return false;var e=typeof t;return"number"==e?(e=Zu(r),e=Rr(e)&&Or(t,e)):e="string"==e&&t in r,e?(t=r[t],n===n?n===t:t!==t):false}function kr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Uo(n)?false:!yn.test(n)||null!=t&&n in Nr(t)}function Ir(n){var t=Yu(n);return!!t&&n===Ln[t]&&t in zn.prototype}function Rr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Tu}function Sr(n){return n===n&&(0===n?0<1/n:!le(n))}function Cr(n,t){
	n=Nr(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return _t(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Ur(n){var t,r=Ln.support;if(!h(n)||Je.call(n)!=Y||Gn(n)||!(Ze.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t))||!r.argsTag&&ae(n))return false;var e;return r.ownLast?(_t(n,function(n,t,r){return e=Ze.call(r,t),false}),false!==e):(_t(n,function(n,t){e=t}),e===w||Ze.call(n,e))}function Wr(n){for(var t=de(n),r=t.length,e=r&&n.length,u=Ln.support,u=e&&Rr(e)&&(Uo(n)||u.nonEnumStrings&&_e(n)||u.nonEnumArgs&&ae(n)),o=-1,i=[];++o<r;){
	var a=t[o];(u&&Or(a,e)||Ze.call(n,a))&&i.push(a)}return i}function Fr(n){return null==n?[]:Rr(Zu(n))?Ln.support.unindexedChars&&_e(n)?n.split(""):le(n)?n:Le(n):me(n)}function Nr(n){if(Ln.support.unindexedChars&&_e(n)){for(var t=-1,r=n.length,e=Le(n);++t<r;)e[t]=n.charAt(t);return e}return le(n)?n:Le(n)}function $r(n){if(Uo(n))return n;var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Lr(n){return n instanceof zn?n.clone():new Bn(n.__wrapped__,n.__chain__,Kn(n.__actions__));

	}function Pr(n,t,r){return n&&n.length?((r?Er(n,t,r):null==t)&&(t=1),St(n,0>t?0:t)):[]}function Br(n,t,r){var e=n?n.length:0;return e?((r?Er(n,t,r):null==t)&&(t=1),t=e-(+t||0),St(n,0,0>t?0:t)):[]}function zr(n){return n?n[0]:w}function Mr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?wu(u+e,0):e;else if(e)return e=Pt(n,t),n=n[e],(t===t?t===n:n!==n)?e:-1;return r(n,t,e||0)}function Dr(n){var t=n?n.length:0;return t?n[t-1]:w}function qr(n){return Pr(n,1)}function Kr(n,t,e,u){
	if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Er(n,t,u)?null:t,t=false);var o=mr();if((o!==it||null!=e)&&(e=o(e,u,3)),t&&wr()==r){t=e;var i;e=-1,u=n.length;for(var o=-1,a=[];++e<u;){var f=n[e],c=t?t(f,e,n):f;e&&i===c||(i=c,a[++o]=f)}n=a}else n=Ft(n,e);return n}function Vr(n){for(var t=-1,r=(n&&n.length&&Qn(Hn(n,Zu)))>>>0,e=Te(r);++t<r;)e[t]=Hn(n,Ot(t));return e}function Yr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Uo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}
	return u}function Zr(n){return n=Ln(n),n.__chain__=true,n}function Gr(n,t,r){return t.call(r,n)}function Jr(n,t,r){var e=Uo(n)?Yn:lt;return r&&Er(n,t,r)&&(t=null),(typeof t!="function"||r!==w)&&(t=mr(t,r,3)),e(n,t)}function Xr(n,t,r){var e=Uo(n)?Xn:st;return t=mr(t,r,3),e(n,t)}function Hr(n,t,r,e){var u=n?Zu(n):0;return Rr(u)||(n=me(n),u=n.length),u?(r=typeof r!="number"||e&&Er(t,r,e)?0:0>r?wu(u+r,0):r||0,typeof n=="string"||!Uo(n)&&_e(n)?r<u&&-1<n.indexOf(t,r):-1<wr(n,t,r)):false}function Qr(n,t,r){var e=Uo(n)?Hn:bt;

	return t=mr(t,r,3),e(n,t)}function ne(n,t,r){return(r?Er(n,t,r):null==t)?(n=Fr(n),t=n.length,0<t?n[It(0,t-1)]:w):(n=te(n),n.length=bu(0>t?0:+t||0,n.length),n)}function te(n){n=Fr(n);for(var t=-1,r=n.length,e=Te(r);++t<r;){var u=It(0,t);t!=u&&(e[t]=e[u]),e[u]=n[t]}return e}function re(n,t,r){var e=Uo(n)?nt:Ct;return r&&Er(n,t,r)&&(t=null),(typeof t!="function"||r!==w)&&(t=mr(t,r,3)),e(n,t)}function ee(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new ze(L);var e=n;n=t,t=e}return function(){
	return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}}function ue(n,t,r){function e(){var r=t-(wo()-c);0>=r||r>t?(a&&ru(a),r=p,a=s=p=w,r&&(h=wo(),f=n.apply(l,i),s||a||(i=l=null))):s=lu(e,r)}function u(){s&&ru(s),a=s=p=w,(v||_!==t)&&(h=wo(),f=n.apply(l,i),s||a||(i=l=null))}function o(){if(i=arguments,c=wo(),l=this,p=v&&(s||!g),false===_)var r=g&&!s;else{a||g||(h=c);var o=_-(c-h),y=0>=o||o>_;y?(a&&(a=ru(a)),h=c,f=n.apply(l,i)):a||(a=lu(u,o))}return y&&s?s=ru(s):s||t===_||(s=lu(e,t)),r&&(y=true,f=n.apply(l,i)),
	!y||s||a||(i=l=null),f}var i,a,f,c,l,s,p,h=0,_=false,v=true;if(typeof n!="function")throw new ze(L);if(t=0>t?0:+t||0,true===r)var g=true,v=false;else le(r)&&(g=r.leading,_="maxWait"in r&&wu(+r.maxWait||0,t),v="trailing"in r?r.trailing:v);return o.cancel=function(){s&&ru(s),a&&ru(a),a=s=p=w},o}function oe(n,t){function r(){var e=arguments,u=r.cache,o=t?t.apply(this,e):e[0];return u.has(o)?u.get(o):(e=n.apply(this,e),u.set(o,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new ze(L);return r.cache=new oe.Cache,
	r}function ie(n,t){if(typeof n!="function")throw new ze(L);return t=wu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=wu(r.length-t,0),o=Te(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);case 2:return n.call(this,r[0],r[1],o)}for(u=Te(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function ae(n){return Rr(h(n)?n.length:w)&&Je.call(n)==B}function fe(n){return!!n&&1===n.nodeType&&h(n)&&(Ln.support.nodeTag?-1<Je.call(n).indexOf("Element"):Gn(n));

	}function ce(n){return h(n)&&typeof n.message=="string"&&Je.call(n)==q}function le(n){var t=typeof n;return"function"==t||!!n&&"object"==t}function se(n){return null==n?false:Je.call(n)==K?He.test(Ye.call(n)):h(n)&&(Gn(n)?He:kn).test(n)}function pe(n){return typeof n=="number"||h(n)&&Je.call(n)==V}function he(n){return le(n)&&Je.call(n)==Z}function _e(n){return typeof n=="string"||h(n)&&Je.call(n)==G}function ve(n){return h(n)&&Rr(n.length)&&!!Fn[Je.call(n)]}function ge(n){return ot(n,de(n))}function ye(n){
	return yt(n,de(n))}function de(n){if(null==n)return[];le(n)||(n=Le(n));for(var t=n.length,r=Ln.support,t=t&&Rr(t)&&(Uo(n)||r.nonEnumStrings&&_e(n)||r.nonEnumArgs&&ae(n))&&t||0,e=n.constructor,u=-1,e=Fo(e)&&e.prototype||qe,o=e===n,i=Te(t),a=0<t,f=r.enumErrorProps&&(n===De||n instanceof We),c=r.enumPrototypes&&Fo(n);++u<t;)i[u]=u+"";for(var l in n)c&&"prototype"==l||f&&("message"==l||"name"==l)||a&&Or(l,t)||"constructor"==l&&(o||!Ze.call(n,l))||i.push(l);if(r.nonEnumShadows&&n!==qe)for(t=n===Ke?G:n===De?q:Je.call(n),
	r=Nu[t]||Nu[Y],t==Y&&(e=qe),t=Wn.length;t--;)l=Wn[t],u=r[l],o&&u||(u?!Ze.call(n,l):n[l]===e[l])||i.push(l);return i}function me(n){return Nt(n,Ko(n))}function we(n){return(n=u(n))&&n.replace(In,c).replace(xn,"")}function be(n){return(n=u(n))&&bn.test(n)?n.replace(wn,"\\$&"):n}function xe(n,t,r){return r&&Er(n,t,r)&&(t=0),ju(n,t)}function Ae(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!du(t))return r;do t%2&&(r+=n),t=eu(t/2),n+=n;while(t);return r}function je(n,t,r){var e=n;return(n=u(n))?(r?Er(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",
	n.slice(i(n,t),a(n,t)+1)):n}function Oe(n,t,r){return r&&Er(n,t,r)&&(t=null),n=u(n),n.match(t||Cn)||[]}function Ee(n,t,r){return r&&Er(n,t,r)&&(t=null),it(n,t)}function ke(n){return function(){return n}}function Ie(n){return n}function Re(n,t,r){if(null==r){var e=le(t),u=e&&Ko(t);((u=u&&u.length&&yt(t,u))?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=yt(t,Ko(t)));var o=true,e=-1,i=Fo(n),a=u.length;false===r?o=false:le(r)&&"chain"in r&&(o=r.chain);for(;++e<a;){r=u[e];var f=t[r];n[r]=f,i&&(n.prototype[r]=function(t){
	return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=Kn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return r=[this.value()],iu.apply(r,arguments),t.apply(n,r)}}(f))}return n}function Se(){}function Ce(n){return kr(n)?Ot(n):Et(n)}_=_?Jn.defaults(Zn.Object(),_,Jn.pick(Zn,Un)):Zn;var Te=_.Array,Ue=_.Date,We=_.Error,Fe=_.Function,Ne=_.Math,$e=_.Number,Le=_.Object,Pe=_.RegExp,Be=_.String,ze=_.TypeError,Me=Te.prototype,De=We.prototype,qe=Le.prototype,Ke=Be.prototype,Ve=(Ve=_.window)&&Ve.document,Ye=Fe.prototype.toString,Ze=qe.hasOwnProperty,Ge=0,Je=qe.toString,Xe=_._,He=Pe("^"+be(Je).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qe=se(Qe=_.ArrayBuffer)&&Qe,nu=se(nu=Qe&&new Qe(0).slice)&&nu,tu=Ne.ceil,ru=_.clearTimeout,eu=Ne.floor,uu=se(uu=Le.getOwnPropertySymbols)&&uu,ou=se(ou=Le.getPrototypeOf)&&ou,iu=Me.push,au=se(Le.preventExtensions=Le.preventExtensions)&&au,fu=qe.propertyIsEnumerable,cu=se(cu=_.Set)&&cu,lu=_.setTimeout,su=Me.splice,pu=se(pu=_.Uint8Array)&&pu,hu=se(hu=_.WeakMap)&&hu,_u=function(){
	try{var n=se(n=_.Float64Array)&&n,t=new n(new Qe(10),0,1)&&n}catch(r){}return t}(),vu=function(){var n={1:0},t=au&&se(t=Le.assign)&&t;try{t(au(n),"xo")}catch(r){}return!n[1]&&t}(),gu=se(gu=Te.isArray)&&gu,yu=se(yu=Le.create)&&yu,du=_.isFinite,mu=se(mu=Le.keys)&&mu,wu=Ne.max,bu=Ne.min,xu=se(xu=Ue.now)&&xu,Au=se(Au=$e.isFinite)&&Au,ju=_.parseInt,Ou=Ne.random,Eu=$e.NEGATIVE_INFINITY,ku=$e.POSITIVE_INFINITY,Iu=Ne.pow(2,32)-1,Ru=Iu-1,Su=Iu>>>1,Cu=_u?_u.BYTES_PER_ELEMENT:0,Tu=Ne.pow(2,53)-1,Uu=hu&&new hu,Wu={},Fu={};

	Fu[X]=_.Float32Array,Fu[H]=_.Float64Array,Fu[Q]=_.Int8Array,Fu[nn]=_.Int16Array,Fu[tn]=_.Int32Array,Fu[rn]=_.Uint8Array,Fu[en]=_.Uint8ClampedArray,Fu[un]=_.Uint16Array,Fu[on]=_.Uint32Array;var Nu={};Nu[z]=Nu[D]=Nu[V]={constructor:true,toLocaleString:true,toString:true,valueOf:true},Nu[M]=Nu[G]={constructor:true,toString:true,valueOf:true},Nu[q]=Nu[K]=Nu[Z]={constructor:true,toString:true},Nu[Y]={constructor:true},Vn(Wn,function(n){for(var t in Nu)if(Ze.call(Nu,t)){var r=Nu[t];r[n]=Ze.call(r,n)}});var $u=Ln.support={};

	!function(n){function t(){this.x=n}var r={0:n,length:n},e=[];t.prototype={valueOf:n,y:n};for(var u in new t)e.push(u);$u.argsTag=Je.call(arguments)==B,$u.enumErrorProps=fu.call(De,"message")||fu.call(De,"name"),$u.enumPrototypes=fu.call(t,"prototype"),$u.funcDecomp=/\bthis\b/.test(function(){return this}),$u.funcNames=typeof Fe.name=="string",$u.nodeTag=Je.call(Ve)!=Y,$u.nonEnumStrings=!fu.call("x",0),$u.nonEnumShadows=!/valueOf/.test(e),$u.ownLast="x"!=e[0],$u.spliceObjects=(su.call(r,0,1),!r[0]),
	$u.unindexedChars="xx"!="x"[0]+Le("x")[0];try{$u.dom=11===Ve.createDocumentFragment().nodeType}catch(o){$u.dom=false}try{$u.nonEnumArgs=!fu.call(arguments,1)}catch(i){$u.nonEnumArgs=true}}(1,0),Ln.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Ln}};var Lu=vu||function(n,t){return null==t?n:ot(t,Gu(t),ot(t,Ko(t),n))},Pu=function(){function n(){}return function(t){if(le(t)){n.prototype=t;var r=new n;n.prototype=null}return r||_.Object()}}(),Bu=Yt(vt),zu=Yt(gt,true),Mu=Zt(),Du=Zt(true),qu=Uu?function(n,t){
	return Uu.set(n,t),n}:Ie;nu||(Mt=Qe&&pu?function(n){var t=n.byteLength,r=_u?eu(t/Cu):0,e=r*Cu,u=new Qe(t);if(r){var o=new _u(u,0,r);o.set(new _u(n,0,r))}return t!=e&&(o=new pu(u,e),o.set(new pu(n,e))),u}:ke(null));var Ku=yu&&cu?function(n){return new Dn(n)}:ke(null),Vu=Uu?function(n){return Uu.get(n)}:Se,Yu=function(){return $u.funcNames?"constant"==ke.name?Ot("name"):function(n){for(var t=n.name,r=Wu[t],e=r?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}:ke("")}(),Zu=Ot("length"),Gu=uu?function(n){
	return uu(Nr(n))}:ke([]),Ju=function(){var n=0,t=0;return function(r,e){var u=wo(),o=W-(u-t);if(t=u,0<o){if(++n>=U)return r}else n=0;return qu(r,e)}}(),Xu=ie(function(n,t){return Uo(n)||ae(n)?ct(n,ht(t,false,true)):[]}),Hu=tr(),Qu=tr(true),no=ie(function(t,r){t||(t=[]),r=ht(r);var e=ut(t,r);return kt(t,r.sort(n)),e}),to=hr(),ro=hr(true),eo=ie(function(n){return Ft(ht(n,false,true))}),uo=ie(function(n,t){return Uo(n)||ae(n)?ct(n,t):[]}),oo=ie(Vr),io=ie(function(n,t){var r=n?Zu(n):0;return Rr(r)&&(n=Fr(n)),ut(n,ht(t));

	}),ao=Kt(function(n,t,r){Ze.call(n,r)?++n[r]:n[r]=1}),fo=nr(Bu),co=nr(zu,true),lo=ur(Vn,Bu),so=ur(function(n,t){for(var r=n.length;r--&&false!==t(n[r],r,n););return n},zu),po=Kt(function(n,t,r){Ze.call(n,r)?n[r].push(t):n[r]=[t]}),ho=Kt(function(n,t,r){n[r]=t}),_o=ie(function(n,t,r){var e=-1,u=typeof t=="function",o=kr(t),i=Zu(n),a=Rr(i)?Te(i):[];return Bu(n,function(n){var i=u?t:o&&null!=n&&n[t];a[++e]=i?i.apply(n,r):jr(n,t,r)}),a}),vo=Kt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),go=cr(function(n,t,r,e){
	var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r},Bu),yo=cr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},zu),mo=ie(function(n,t){if(null==n)return[];var r=t[2];return r&&Er(t[0],t[1],r)&&(t.length=1),Ut(n,ht(t),[])}),wo=xu||function(){return(new Ue).getTime()},bo=ie(function(n,t,r){var e=x;if(r.length)var u=v(r,bo.placeholder),e=e|k;return _r(n,e,t,r,u)}),xo=ie(function(n,t){t=t.length?ht(t):ye(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];

	n[u]=_r(n[u],x,n)}return n}),Ao=ie(function(n,t,r){var e=x|A;if(r.length)var u=v(r,Ao.placeholder),e=e|k;return _r(t,e,n,r,u)}),jo=Ht(O),Oo=Ht(E),Eo=ie(function(n,t){return ft(n,1,t)}),ko=ie(function(n,t,r){return ft(n,t,r)}),Io=er(),Ro=er(true),So=fr(k),Co=fr(I),To=ie(function(n,t){return _r(n,S,null,null,null,ht(t))});$u.argsTag||(ae=function(n){return Rr(h(n)?n.length:w)&&Ze.call(n,"callee")&&!fu.call(n,"callee")});var Uo=gu||function(n){return h(n)&&Rr(n.length)&&Je.call(n)==z};$u.dom||(fe=function(n){
	return!!n&&1===n.nodeType&&h(n)&&!No(n)});var Wo=Au||function(n){return typeof n=="number"&&du(n)},Fo=e(/x/)||pu&&!e(pu)?function(n){return Je.call(n)==K}:e,No=ou?function(n){if(!n||Je.call(n)!=Y||!Ln.support.argsTag&&ae(n))return false;var t=n.valueOf,r=se(t)&&(r=ou(t))&&ou(r);return r?n==r||ou(n)==r:Ur(n)}:Ur,$o=Vt(function(n,t,r){return r?et(n,t,r):Lu(n,t)}),Lo=ie(function(n){var t=n[0];return null==t?t:(n.push(tt),$o.apply(w,n))}),Po=rr(vt),Bo=rr(gt),zo=or(Mu),Mo=or(Du),Do=ir(vt),qo=ir(gt),Ko=mu?function(n){
	if(n)var t=n.constructor,r=n.length;return typeof t=="function"&&t.prototype===n||(typeof n=="function"?Ln.support.enumPrototypes:Rr(r))?Wr(n):le(n)?mu(n):[]}:Wr,Vo=Vt(jt),Yo=ie(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Hn(ht(t),Be),Cr(n,ct(de(n),t));var r=zt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),Zo=ie(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,zt(t[0],t[1],3)):Cr(n,ht(t))}),Go=Jt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);

	}),Jo=Jt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Xo=ar(),Ho=ar(true);8!=ju(Tn+"08")&&(xe=function(n,t,r){return(r?Er(n,t,r):null==t)?t=0:t&&(t=+t),n=je(n),ju(n,t||(En.test(n)?16:10))});var Qo=Jt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),ni=Jt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),ti=ie(function(n,t){try{return n.apply(w,t)}catch(r){return ce(r)?r:new We(r)}}),ri=ie(function(n,t){return function(r){return jr(r,n,t)}}),ei=ie(function(n,t){
	return function(r){return jr(n,r,t)}}),ui=Qt(Qn),oi=Qt(function(n){for(var t=-1,r=n.length,e=ku;++t<r;){var u=n[t];u<e&&(e=u)}return e},true);return Ln.prototype=Pn.prototype,Bn.prototype=Pu(Pn.prototype),Bn.prototype.constructor=Bn,zn.prototype=Pu(Pn.prototype),zn.prototype.constructor=zn,Mn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Mn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Mn.prototype.has=function(n){return"__proto__"!=n&&Ze.call(this.__data__,n);

	},Mn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||le(n)?t.set.add(n):t.hash[n]=true},oe.Cache=Mn,Ln.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new ze(L);var r=n;n=t,t=r}return n=du(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Ln.ary=function(n,t,r){return r&&Er(n,t,r)&&(t=null),t=n&&null==t?n.length:wu(+t||0,0),_r(n,R,null,null,null,null,t)},Ln.assign=$o,
	Ln.at=io,Ln.before=ee,Ln.bind=bo,Ln.bindAll=xo,Ln.bindKey=Ao,Ln.callback=Ee,Ln.chain=Zr,Ln.chunk=function(n,t,r){t=(r?Er(n,t,r):null==t)?1:wu(+t||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Te(tu(e/t));r<e;)o[++u]=St(n,r,r+=t);return o},Ln.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Ln.constant=ke,Ln.countBy=ao,Ln.create=function(n,t,r){var e=Pu(n);return r&&Er(n,t,r)&&(t=null),t?Lu(e,t):e},Ln.curry=jo,Ln.curryRight=Oo,Ln.debounce=ue,Ln.defaults=Lo,
	Ln.defer=Eo,Ln.delay=ko,Ln.difference=Xu,Ln.drop=Pr,Ln.dropRight=Br,Ln.dropRightWhile=function(n,t,r){return n&&n.length?$t(n,mr(t,r,3),true,true):[]},Ln.dropWhile=function(n,t,r){return n&&n.length?$t(n,mr(t,r,3),true):[]},Ln.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Er(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Ln.filter=Xr,Ln.flatten=function(n,t,r){var e=n?n.length:0;

	return r&&Er(n,t,r)&&(t=false),e?ht(n,t):[]},Ln.flattenDeep=function(n){return n&&n.length?ht(n,true):[]},Ln.flow=Io,Ln.flowRight=Ro,Ln.forEach=lo,Ln.forEachRight=so,Ln.forIn=zo,Ln.forInRight=Mo,Ln.forOwn=Do,Ln.forOwnRight=qo,Ln.functions=ye,Ln.groupBy=po,Ln.indexBy=ho,Ln.initial=function(n){return Br(n,1)},Ln.intersection=function(){for(var n=[],t=-1,e=arguments.length,u=[],o=wr(),i=o==r,a=[];++t<e;){var f=arguments[t];(Uo(f)||ae(f))&&(n.push(f),u.push(i&&120<=f.length?Ku(t&&f):null))}if(e=n.length,2>e)return a;

	var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(f=i[c],0>(s?qn(s,f):o(a,f,0))){for(t=e;--t;){var p=u[t];if(0>(p?qn(p,f):o(n[t],f,0)))continue n}s&&s.push(f),a.push(f)}return a},Ln.invert=function(n,t,r){r&&Er(n,t,r)&&(t=null),r=-1;for(var e=Ko(n),u=e.length,o={};++r<u;){var i=e[r],a=n[i];t?Ze.call(o,a)?o[a].push(i):o[a]=[i]:o[a]=i}return o},Ln.invoke=_o,Ln.keys=Ko,Ln.keysIn=de,Ln.map=Qr,Ln.mapValues=function(n,t,r){var e={};return t=mr(t,r,3),vt(n,function(n,r,u){e[r]=t(n,r,u)}),e},Ln.matches=function(n){
	return xt(at(n,true))},Ln.matchesProperty=function(n,t){return At(n,at(t,true))},Ln.memoize=oe,Ln.merge=Vo,Ln.method=ri,Ln.methodOf=ei,Ln.mixin=Re,Ln.negate=function(n){if(typeof n!="function")throw new ze(L);return function(){return!n.apply(this,arguments)}},Ln.omit=Yo,Ln.once=function(n){return ee(2,n)},Ln.pairs=function(n){for(var t=-1,r=Ko(n),e=r.length,u=Te(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},Ln.partial=So,Ln.partialRight=Co,Ln.partition=vo,Ln.pick=Zo,Ln.pluck=function(n,t){return Qr(n,Ce(t));

	},Ln.property=Ce,Ln.propertyOf=function(n){return function(t){return dt(n,$r(t),t+"")}},Ln.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=wr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)su.call(t,o,1);return t},Ln.pullAt=no,Ln.range=function(n,t,r){r&&Er(n,t,r)&&(t=r=null),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=wu(tu((t-n)/(r||1)),0);for(var u=Te(t);++e<t;)u[e]=n,n+=r;return u},Ln.rearg=To,Ln.reject=function(n,t,r){var e=Uo(n)?Xn:st;

	return t=mr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Ln.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=mr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return kt(n,o),e},Ln.rest=qr,Ln.restParam=ie,Ln.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||kr(t,n)?[e]:$r(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var a=t[e];le(i)&&(e==o?i[a]=r:null==i[a]&&(i[a]=Or(t[e+1])?[]:{})),i=i[a]}return n},Ln.shuffle=te,Ln.slice=function(n,t,r){
	var e=n?n.length:0;return e?(r&&typeof r!="number"&&Er(n,t,r)&&(t=0,r=e),St(n,t,r)):[]},Ln.sortBy=function(n,t,r){if(null==n)return[];r&&Er(n,t,r)&&(t=null);var e=-1;return t=mr(t,r,3),n=bt(n,function(n,r,u){return{a:t(n,r,u),b:++e,c:n}}),Tt(n,f)},Ln.sortByAll=mo,Ln.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Er(t,r,e)&&(r=null),Uo(t)||(t=null==t?[]:[t]),Uo(r)||(r=null==r?[]:[r]),Ut(n,t,r))},Ln.spread=function(n){if(typeof n!="function")throw new ze(L);return function(t){return n.apply(this,t);

	}},Ln.take=function(n,t,r){return n&&n.length?((r?Er(n,t,r):null==t)&&(t=1),St(n,0,0>t?0:t)):[]},Ln.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Er(n,t,r):null==t)&&(t=1),t=e-(+t||0),St(n,0>t?0:t)):[]},Ln.takeRightWhile=function(n,t,r){return n&&n.length?$t(n,mr(t,r,3),false,true):[]},Ln.takeWhile=function(n,t,r){return n&&n.length?$t(n,mr(t,r,3)):[]},Ln.tap=function(n,t,r){return t.call(r,n),n},Ln.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ze(L);return false===r?e=false:le(r)&&(e="leading"in r?!!r.leading:e,
	u="trailing"in r?!!r.trailing:u),$n.leading=e,$n.maxWait=+t,$n.trailing=u,ue(n,t,$n)},Ln.thru=Gr,Ln.times=function(n,t,r){if(n=eu(n),1>n||!du(n))return[];var e=-1,u=Te(bu(n,Iu));for(t=zt(t,r,1);++e<n;)e<Iu?u[e]=t(e):t(e);return u},Ln.toArray=function(n){var t=n?Zu(n):0;return Rr(t)?t?Ln.support.unindexedChars&&_e(n)?n.split(""):Kn(n):[]:me(n)},Ln.toPlainObject=ge,Ln.transform=function(n,t,r,e){var u=Uo(n)||ve(n);return t=mr(t,e,4),null==r&&(u||le(n)?(e=n.constructor,r=u?Uo(n)?new e:[]:Pu(Fo(e)&&e.prototype)):r={}),
	(u?Vn:vt)(n,function(n,e,u){return t(r,n,e,u)}),r},Ln.union=eo,Ln.uniq=Kr,Ln.unzip=Vr,Ln.values=me,Ln.valuesIn=function(n){return Nt(n,de(n))},Ln.where=function(n,t){return Xr(n,xt(t))},Ln.without=uo,Ln.wrap=function(n,t){return t=null==t?Ie:t,_r(t,k,null,[n],[])},Ln.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(Uo(r)||ae(r))var e=e?ct(e,r).concat(ct(r,e)):r}return e?Ft(e):[]},Ln.zip=oo,Ln.zipObject=Yr,Ln.backflow=Ro,Ln.collect=Qr,Ln.compose=Ro,Ln.each=lo,Ln.eachRight=so,
	Ln.extend=$o,Ln.iteratee=Ee,Ln.methods=ye,Ln.object=Yr,Ln.select=Xr,Ln.tail=qr,Ln.unique=Kr,Re(Ln,Ln),Ln.add=function(n,t){return(+n||0)+(+t||0)},Ln.attempt=ti,Ln.camelCase=Go,Ln.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Ln.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Er(n,t,r)?t=false:typeof t=="function"&&(e=r,r=t,t=false),r=typeof r=="function"&&zt(r,e,1),at(n,t,r)},Ln.cloneDeep=function(n,t,r){return t=typeof t=="function"&&zt(t,r,1),at(n,true,t)},Ln.deburr=we,
	Ln.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:bu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Ln.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,l):n},Ln.escapeRegExp=be,Ln.every=Jr,Ln.find=fo,Ln.findIndex=Hu,Ln.findKey=Po,Ln.findLast=co,Ln.findLastIndex=Qu,Ln.findLastKey=Bo,Ln.findWhere=function(n,t){return fo(n,xt(t))},Ln.first=zr,Ln.get=function(n,t,r){return n=null==n?w:dt(n,$r(t),t+""),n===w?r:n},Ln.has=function(n,t){if(null==n)return false;var r=Ze.call(n,t);

	return r||kr(t)||(t=$r(t),n=1==t.length?n:dt(n,St(t,0,-1)),t=Dr(t),r=null!=n&&Ze.call(n,t)),r||Ln.support.nonEnumStrings&&_e(n)&&Or(t,n.length)},Ln.identity=Ie,Ln.includes=Hr,Ln.indexOf=Mr,Ln.inRange=function(n,t,r){return t=+t||0,"undefined"===typeof r?(r=t,t=0):r=+r||0,n>=bu(t,r)&&n<wu(t,r)},Ln.isArguments=ae,Ln.isArray=Uo,Ln.isBoolean=function(n){return true===n||false===n||h(n)&&Je.call(n)==M},Ln.isDate=function(n){return h(n)&&Je.call(n)==D},Ln.isElement=fe,Ln.isEmpty=function(n){if(null==n)return true;

	var t=Zu(n);return Rr(t)&&(Uo(n)||_e(n)||ae(n)||h(n)&&Fo(n.splice))?!t:!Ko(n).length},Ln.isEqual=function(n,t,r,e){return r=typeof r=="function"&&zt(r,e,3),!r&&Sr(n)&&Sr(t)?n===t:(e=r?r(n,t):w,e===w?mt(n,t,r):!!e)},Ln.isError=ce,Ln.isFinite=Wo,Ln.isFunction=Fo,Ln.isMatch=function(n,t,r,e){var u=Ko(t),o=u.length;if(!o)return true;if(null==n)return false;if(r=typeof r=="function"&&zt(r,e,3),n=Nr(n),!r&&1==o){var i=u[0];if(e=t[i],Sr(e))return e===n[i]&&(e!==w||i in n)}for(var i=Te(o),a=Te(o);o--;)e=i[o]=t[u[o]],
	a[o]=Sr(e);return wt(n,u,i,a,r)},Ln.isNaN=function(n){return pe(n)&&n!=+n},Ln.isNative=se,Ln.isNull=function(n){return null===n},Ln.isNumber=pe,Ln.isObject=le,Ln.isPlainObject=No,Ln.isRegExp=he,Ln.isString=_e,Ln.isTypedArray=ve,Ln.isUndefined=function(n){return n===w},Ln.kebabCase=Jo,Ln.last=Dr,Ln.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?wu(e+r,0):bu(r||0,e-1))+1;else if(r)return u=Pt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;if(t!==t)return p(n,u,true);

	for(;u--;)if(n[u]===t)return u;return-1},Ln.max=ui,Ln.min=oi,Ln.noConflict=function(){return _._=Xe,this},Ln.noop=Se,Ln.now=wo,Ln.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&du(t)?(e=(t-e)/2,t=eu(e),e=tu(e),r=sr("",e,r),r.slice(0,t)+n+r):n},Ln.padLeft=Xo,Ln.padRight=Ho,Ln.parseInt=xe,Ln.random=function(n,t,r){r&&Er(n,t,r)&&(t=r=null);var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,
	r||n%1||t%1?(r=Ou(),bu(n+r*(t-n+parseFloat("1e-"+((r+"").length-1))),t)):It(n,t)},Ln.reduce=go,Ln.reduceRight=yo,Ln.repeat=Ae,Ln.result=function(n,t,r){var e=null==n?w:Nr(n)[t];return e===w&&(null==n||kr(t,n)||(t=$r(t),n=1==t.length?n:dt(n,St(t,0,-1)),e=null==n?w:Nr(n)[Dr(t)]),e=e===w?r:e),Fo(e)?e.call(n):e},Ln.runInContext=m,Ln.size=function(n){var t=n?Zu(n):0;return Rr(t)?t:Ko(n).length},Ln.snakeCase=Qo,Ln.some=re,Ln.sortedIndex=to,Ln.sortedLastIndex=ro,Ln.startCase=ni,Ln.startsWith=function(n,t,r){
	return n=u(n),r=null==r?0:bu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Ln.sum=function(n,t,r){r&&Er(n,t,r)&&(t=null);var e=mr(),u=null==t;if(e===it&&u||(u=false,t=e(t,r,3)),u){for(n=Uo(n)?n:Fr(n),t=n.length,r=0;t--;)r+=+n[t]||0;n=r}else n=Wt(n,t);return n},Ln.template=function(n,t,r){var e=Ln.templateSettings;r&&Er(n,t,r)&&(t=r=null),n=u(n),t=et(Lu({},r||t),e,rt),r=et(Lu({},t.imports),e.imports,rt);var o,i,a=Ko(r),f=Nt(r,a),c=0;r=t.interpolate||Rn;var l="__p+='";r=Pe((t.escape||Rn).source+"|"+r.source+"|"+(r===gn?jn:Rn).source+"|"+(t.evaluate||Rn).source+"|$","g");

	var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,a,f){return e||(e=u),l+=n.slice(c,f).replace(Sn,s),r&&(o=true,l+="'+__e("+r+")+'"),a&&(i=true,l+="';"+a+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=f+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(an,""):l).replace(fn,"$1").replace(cn,"$1;"),l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",
	t=ti(function(){return Fe(a,p+"return "+l).apply(w,f)}),t.source=l,ce(t))throw t;return t},Ln.trim=je,Ln.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Er(e,t,r):null==t)?g(n):i(n,t+"")):n},Ln.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Er(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,a(n,t+"")+1):n},Ln.trunc=function(n,t,r){r&&Er(n,t,r)&&(t=null);var e=C;if(r=T,null!=t)if(le(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;

	if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(he(o)){if(n.slice(e).search(o)){var i,a=n.slice(0,e);for(o.global||(o=Pe(o.source,(On.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(a);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),-1<o&&(t=t.slice(0,o)));return t+r},Ln.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Ln.uniqueId=function(n){var t=++Ge;return u(n)+t},Ln.words=Oe,Ln.all=Jr,Ln.any=re,Ln.contains=Hr,
	Ln.detect=fo,Ln.foldl=go,Ln.foldr=yo,Ln.head=zr,Ln.include=Hr,Ln.inject=go,Re(Ln,function(){var n={};return vt(Ln,function(t,r){Ln.prototype[r]||(n[r]=t)}),n}(),false),Ln.sample=ne,Ln.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return ne(t,n)}):ne(this.value())},Ln.VERSION=b,Vn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Ln[n].placeholder=Ln}),Vn(["dropWhile","filter","map","takeWhile"],function(n,t){var r=t!=$,e=t==F;zn.prototype[n]=function(n,u){
	var o=this.__filtered__,i=o&&e?new zn(this):this.clone();return(i.__iteratees__||(i.__iteratees__=[])).push({done:false,count:0,index:0,iteratee:mr(n,u,1),limit:-1,type:t}),i.__filtered__=o||r,i}}),Vn(["drop","take"],function(n,t){var r=n+"While";zn.prototype[n]=function(r){var e=this.__filtered__,u=e&&!t?this.dropWhile():this.clone();return r=null==r?1:wu(eu(r)||0,0),e?t?u.__takeCount__=bu(u.__takeCount__,r):Dr(u.__iteratees__).limit=r:(u.__views__||(u.__views__=[])).push({size:r,type:n+(0>u.__dir__?"Right":"")
	}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()},zn.prototype[n+"RightWhile"]=function(n,t){return this.reverse()[r](n,t).reverse()}}),Vn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Vn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this[r](1)}}),Vn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?xt:Ce;zn.prototype[n]=function(n){return this[r](e(n));

	}}),zn.prototype.compact=function(){return this.filter(Ie)},zn.prototype.reject=function(n,t){return n=mr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=0>n?this.takeRight(-n):this.drop(n);return t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r},zn.prototype.toArray=function(){return this.drop(0)},vt(zn.prototype,function(n,t){var r=Ln[t];if(r){var e=/^(?:filter|map|reject)|While$/.test(t),u=/^(?:first|last)$/.test(t);Ln.prototype[t]=function(){
	function t(n){return n=[n],iu.apply(n,o),r.apply(Ln,n)}var o=arguments,i=this.__chain__,a=this.__wrapped__,f=!!this.__actions__.length,c=a instanceof zn,l=o[0],s=c||Uo(a);return s&&e&&typeof l=="function"&&1!=l.length&&(c=s=false),c=c&&!f,u&&!i?c?n.call(a):r.call(Ln,this.value()):s?(a=n.apply(c?a:new zn(this),o),u||!f&&!a.__actions__||(a.__actions__||(a.__actions__=[])).push({func:Gr,args:[t],thisArg:Ln}),new Bn(a,i)):this.thru(t)}}}),Vn("concat join pop push replace shift sort splice split unshift".split(" "),function(n){
	var t=(/^(?:replace|split)$/.test(n)?Ke:Me)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n),u=$u.spliceObjects||!/^(?:pop|shift|splice)$/.test(n)?t:function(){var n=t.apply(this,arguments);return 0===this.length&&delete this[0],n};Ln.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?u.apply(this.value(),n):this[r](function(t){return u.apply(t,n)})}}),vt(zn.prototype,function(n,t){var r=Ln[t];if(r){var e=r.name;(Wu[e]||(Wu[e]=[])).push({
	name:t,func:r})}}),Wu[lr(null,A).name]=[{name:"wrapper",func:null}],zn.prototype.clone=function(){var n=this.__actions__,t=this.__iteratees__,r=this.__views__,e=new zn(this.__wrapped__);return e.__actions__=n?Kn(n):null,e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=t?Kn(t):null,e.__takeCount__=this.__takeCount__,e.__views__=r?Kn(r):null,e},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;

	return n},zn.prototype.value=function(){var n=this.__wrapped__.value();if(!Uo(n))return Lt(n,this.__actions__);var t,r=this.__dir__,e=0>r;t=n.length;for(var u=this.__views__,o=0,i=-1,a=u?u.length:0;++i<a;){var f=u[i],c=f.size;switch(f.type){case"drop":o+=c;break;case"dropRight":t-=c;break;case"take":t=bu(t,o+c);break;case"takeRight":o=wu(o,t-c)}}t={start:o,end:t},u=t.start,o=t.end,t=o-u,u=e?o:u-1,o=bu(t,this.__takeCount__),a=(i=this.__iteratees__)?i.length:0,f=0,c=[];n:for(;t--&&f<o;){for(var u=u+r,l=-1,s=n[u];++l<a;){
	var p=i[l],h=p.iteratee,_=p.type;if(_==F){if(p.done&&(e?u>p.index:u<p.index)&&(p.count=0,p.done=false),p.index=u,!(p.done||(_=p.limit,p.done=-1<_?p.count++>=_:!h(s))))continue n}else if(p=h(s),_==$)s=p;else if(!p){if(_==N)continue n;break n}}c[f++]=s}return c},Ln.prototype.chain=function(){return Zr(this)},Ln.prototype.commit=function(){return new Bn(this.value(),this.__chain__)},Ln.prototype.plant=function(n){for(var t,r=this;r instanceof Pn;){var e=Lr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__;

	}return u.__wrapped__=n,t},Ln.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof zn?(this.__actions__.length&&(n=new zn(this)),new Bn(n.reverse(),this.__chain__)):this.thru(function(n){return n.reverse()})},Ln.prototype.toString=function(){return this.value()+""},Ln.prototype.run=Ln.prototype.toJSON=Ln.prototype.valueOf=Ln.prototype.value=function(){return Lt(this.__wrapped__,this.__actions__)},Ln.prototype.collect=Ln.prototype.map,Ln.prototype.head=Ln.prototype.first,Ln.prototype.select=Ln.prototype.filter,
	Ln.prototype.tail=Ln.prototype.rest,Ln}var w,b="3.7.0",x=1,A=2,j=4,O=8,E=16,k=32,I=64,R=128,S=256,C=30,T="...",U=150,W=16,F=0,N=1,$=2,L="Expected a function",P="__lodash_placeholder__",B="[object Arguments]",z="[object Array]",M="[object Boolean]",D="[object Date]",q="[object Error]",K="[object Function]",V="[object Number]",Y="[object Object]",Z="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",an=/\b__p\+='';/g,fn=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]+|(["'])(?:(?!\1)[^\n\\]|\\.)*?)\1\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/[.*+?^${}()|[\]\/\\]/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,On=/\w*$/,En=/^0[xX]/,kn=/^\[object .+?Constructor\]$/,In=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Rn=/($^)/,Sn=/['\n\r\u2028\u2029\\]/g,Cn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),Tn=" \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",Un="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window".split(" "),Wn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Fn={};

	Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[B]=Fn[z]=Fn[J]=Fn[M]=Fn[D]=Fn[q]=Fn[K]=Fn["[object Map]"]=Fn[V]=Fn[Y]=Fn[Z]=Fn["[object Set]"]=Fn[G]=Fn["[object WeakMap]"]=false;var Nn={};Nn[B]=Nn[z]=Nn[J]=Nn[M]=Nn[D]=Nn[X]=Nn[H]=Nn[Q]=Nn[nn]=Nn[tn]=Nn[V]=Nn[Y]=Nn[Z]=Nn[G]=Nn[rn]=Nn[en]=Nn[un]=Nn[on]=true,Nn[q]=Nn[K]=Nn["[object Map]"]=Nn["[object Set]"]=Nn["[object WeakMap]"]=false;var $n={leading:false,maxWait:0,trailing:false},Ln={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A",
	"\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u",
	"\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Pn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Bn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Mn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Kn=zn[typeof self]&&self&&self.Object&&self,Vn=zn[typeof window]&&window&&window.Object&&window,Yn=qn&&qn.exports===Dn&&Dn,Zn=Dn&&qn&&typeof global=="object"&&global&&global.Object&&global||Vn!==(this&&this.window)&&Vn||Kn||this,Gn=function(){
	try{Object({toString:0}+"")}catch(n){return function(){return false}}return function(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}}(),Jn=m();Dn&&qn&&Yn&&((qn.exports=Jn)._=Jn)}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 由于此组件需要给浏览器用，所以很多函数都是为了兼容各个浏览器
	 *
	 * @module base
	 */

	/**
	 *
	 * @callback IteratorCallback
	 * @param {*} iteratorItem - 遍历对象中的单个元素
	 * @param {Number|String} iteratorKey - 数组的 index 或哈希的 key
	 * @param {Object|Array} ref - 遍历对象本身的引用
	 */

	/**
	 * 遍历一个哈希
	 *
	 * @param {Object} obj
	 * @param {IteratorCallback} fn
	 */
	exports.eachObj = function(obj, fn) {
	  for (var k in obj){
	    if (obj.hasOwnProperty(k)){
	      if (fn(obj[k], k, obj) === false) {
	        break;
	      }
	    }
	  }
	};

	/**
	 * 遍历一个数组
	 *
	 * @param {Array} arr
	 * @param {IteratorCallback} fn
	 */
	exports.eachArr = function(arr, fn) {
	  for (var i = 0; i < arr.length; ++i) {
	    if (fn(arr[i], i, arr) === false) {
	      break;
	    }
	  }
	};

	/**
	 * 返回任意一个 Object 的 type
	 *
	 * @param {*} obj
	 * @returns {String}
	 */
	exports.typeOf = function(obj) {
	  return ({}).toString.call(obj).slice(8, -1).toLowerCase();
	};

	/**
	 * 去除字符串首末的空白字符
	 *
	 * @param {String} str
	 * @returns {String}
	 */
	exports.trim = function(str) {
	  return str.trim ? str.trim() : str.replace(/^\s*|\s*$/g, '');
	};


	/**
	 * 兼容 Array.map
	 *
	 * @param {Array} arr
	 * @param {IteratorCallback} fn
	 * @returns {Array}
	 */
	exports.map = function(arr, fn) {
	  var r = [];
	  return arr.map ?
	    arr.map(fn) :
	    (exports.eachArr(arr, function(){
	      r.push(fn.apply(null, arguments));
	    }) || r);
	};

	/**
	 * 兼容 Array.filter
	 *
	 * @param {Array} arr
	 * @param {IteratorCallback} fn
	 * @returns {Array}
	 */
	exports.filter = function(arr, fn) {
	  var r = [];
	  return arr.filter ?
	    arr.filter(fn) :
	    (exports.eachArr(arr, function(i){
	      if (fn.apply(null, arguments)) {
	        r.push(i);
	      }
	    }) || r);
	};

	/**
	 * 将类似于数组的对象转换成数组
	 *
	 * @param {Object} arrLike
	 * @param {Number} [index = 0]
	 * @returns {Array}
	 */
	exports.arrify = function(arrLike, index) {
	  return [].slice.call(arrLike, index || 0);
	};

	var T = {};

	// 类型检查
	exports.eachArr('Object,Number,String,Array,Boolean,Undefined,Function'.split(','), function(key) {
	  // NaN 不属于上面的任何类型，默认的 typeOf(NaN) 返回的是 number 的，用 mix === mix 把 NaN 过滤掉
	  T['is' + key] = function(mix) { return mix === mix && exports.typeOf(mix) === key.toLowerCase(); };
	});

	/**
	 * 判断一个字符串是否是一个合法的数字
	 *
	 * @param {String} str
	 * @returns {Boolean}
	 */
	exports.isNumerical = function (str) {
	  if (str.charAt(0) === '-') { str = str.substr(1); }

	  if (/^(?:\d*\.)?\d+$/.test(str)) {
	    // 0056, 00.56, 56.00 也会符合正则的
	    if (str.indexOf('.') >= 0) {
	      // 如果小数的第一位是0，则第二位一定要是 . ； 而如果第一位不是 0，则不管 . 在第几位都有效
	      return (str.charAt(0) !== '0') || (str.charAt(1) === '.');
	    } else {
	      return str === '0' || str.charAt(0) !== '0';
	    }
	  }
	  return false;
	};

	/**
	 * 判断一个数字是否是一个合法的整数
	 *
	 * @param {Number} num
	 * @returns {Boolean}
	 */
	exports.isInt = function (num) {
	  return T.isNumber(num) && String(num).indexOf('.') === -1;
	};


	exports.merge = function(to) {
	  if (!to) { to = {}; }
	  exports.eachArr(exports.arrify(arguments, 1), function(arg) {
	    if (T.isObject(arg)) {exports.eachObj(arg, function(v, k) { to[k] = v; });}
	  });
	  return to;
	};

	exports.merge(module.exports, T);

	/**
	 * 取出某个哈希中所有的 key
	 *
	 * @param {Object} obj
	 * @returns {Array}
	 */
	exports.objectKeys = function(obj) {
	  if (Object.keys) {
	    return Object.keys(obj);
	  }
	  var keys = [];
	  exports.eachObj(obj, function(val, key) {
	    keys.push(key);
	  });
	  return keys;
	};

	/**
	 * 保证 str 包含在 { } 内
	 *
	 * @param {String} str
	 * @returns {String}
	 */
	exports.wrapInBrackets = function(str) {
	  if (str.charAt(0) !== '{') {
	    str = '{' + str;
	  }
	  if (str.charAt(str.length - 1) !== '}') {
	    str += '}';
	  }
	  return str;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module option
	 */
	var _opts = {
	  applySelf: false
	};

	/**
	 *
	 * @param {String} key
	 * @param {*} val
	 * @returns {*}
	 */
	function option(key, val) {
	  if (typeof val === 'undefined') {
	    return _opts[key];
	  } else {
	    _opts[key] = val;
	  }
	}

	option.all = _opts;

	module.exports = option;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var base = __webpack_require__(9),
	  type = __webpack_require__(12);

	module.exports = {
	  /**
	   *
	   * @param {Object} parsedRule
	   * @param {Array} args
	   * @returns {Boolean}
	   */
	  match: function(parsedRule, args) {
	    var result;
	    var argsLen = args.length, okRoad;

	    base.eachArr(parsedRule.roads, function(road, j) {
	      result = {};
	      var roadIndex, argIndex = 0, param, arg;
	      for (roadIndex = 0; roadIndex < road.length; roadIndex++) {
	        param = parsedRule.params[road[roadIndex]];
	        arg = args[argIndex];
	        if (!type.is(arg, param.type) || argIndex >= argsLen) {
	          break;
	        }

	        argIndex++;
	        if (param.rest) {
	          result[param.key] = [arg];
	          while (argIndex < argsLen && type.is(args[argIndex], param.type)) {
	            result[param.key].push(args[argIndex]);
	            argIndex++;
	          }
	        } else {
	          result[param.key] = arg;
	        }
	      }

	      if (argIndex === argsLen && roadIndex === road.length) {
	        okRoad = road;
	        return false;
	      }
	    });

	    return okRoad ? result : false;
	  },

	  /**
	   * 解压缩 rule
	   * @param {Array} compressedRule
	   * @returns {{returnType: *, params: Array, roads: *}}
	   */
	  decompress: function(compressedRule) {
	    return {
	      returnType: compressedRule[0],
	      params: base.map(compressedRule[1], function(group) {
	        if (group[0] !== 1) { group.unshift(0); }
	        var rtn = {key: group[1], type: group[2], rest: group[0]};
	        if (group.length > 3) { rtn.val = group[3]; }
	        return rtn;
	      }),
	      roads: compressedRule[2]
	    };
	  }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module type
	 */

	var base = __webpack_require__(9);

	var type = {};

	var all = type._all = {};

	var basicTypes = '*,int,number,string,object,array,function,arguments,boolean,null,nature,positive,negative'.split(','),
	  typeAliases = {
	    integer: 'int',
	    signed: 'int',
	    bool: 'boolean',
	    unsigned: 'nature'
	  };

	function is(mix, type) {
	  if (type in typeAliases) {
	    type = typeAliases[type];
	  }

	  switch (type) {
	    case '*':
	      return true;
	    case 'int':
	      return base.isInt(mix);
	    case 'number':
	      return base.isNumber(mix);
	    case 'nature':
	      return base.isInt(mix) && mix >= 0;
	    case 'positive':
	      return base.isInt(mix) && mix > 0;
	    case 'negative':
	      return base.isInt(mix) && mix < 0;

	    //case 'string':
	    //case 'object':
	    //case 'array':
	    //case 'function':
	    //case 'arguments':
	    //case 'boolean':
	    //case 'null':

	    default :
	      return base.typeOf(mix) === type;
	  }
	}

	base.eachArr(basicTypes.concat(base.objectKeys(typeAliases)), function (key) { all[key] = is; });

	/**
	 * 判断 mix 是否是 type 类型
	 * @param {*} mix
	 * @param {String} type
	 * @returns {Boolean}
	 */
	type.is = function(mix, type) {
	  type = type.toLowerCase();

	  if (!(type in all)) {
	    throw new Error('type "' + type + '" not exists.');
	  }

	  return all[type](mix, type);
	};

	/**
	 * 判断是否定义了 type 类型
	 * @param {String} type
	 * @returns {Boolean}
	 */
	type.has = function(type) {
	  return type.toLowerCase() in all;
	};

	/**
	 * 注册新的类型
	 * @param {String} type
	 * @param {Function} fn
	 */
	type.type = function(type, fn) {
	  type = type.toLowerCase();
	  if (type in all) {
	    throw new Error('type "' + type + '" already exists.');
	  }

	  // 恢复默认的类型
	  if (!fn && (typeAliases[type] || basicTypes.indexOf(type))) {
	    fn = is;
	  }

	  all[type] = fn;
	};

	/**
	 * 删除某一类型
	 * @param {String} type
	 */
	type.untype = function(type) {
	  type = type.toLowerCase();

	  if (!(type in all)) {
	    throw new Error('type "' + type + '" not exists.');
	  }

	  delete all[type];
	};

	/**
	 *
	 * @alias untype
	 */
	type.unType = type.untype;

	module.exports = type;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var base = __webpack_require__(9);
	var Rule = __webpack_require__(11);

	/**
	 * @class Self
	 * @param {Object} values
	 * @param {Array} args
	 * @param {Object} $rule
	 * @param {Object} $defaults
	 * @param {Object} $options
	 */
	function Self(values, args, $rule, $defaults, $options) {
	  var dft = base.merge({}, $defaults);
	  base.eachArr($rule.params, function(param) {
	    if ('val' in param) { dft[param.key] = param.val; }
	  });
	  this.values = base.merge(dft, values);
	  this.arguments = args;
	  this.$rule = $rule;
	  this.$defaults = $defaults;
	  this.$options = $options;

	  var self = this;
	  base.eachObj(this.values, function(val, key) {
	    self[key] = val;
	  });
	}

	Self.prototype.$has = function(key) {
	  return (key in this.values);
	};

	Self.prototype.$get = function(key) {
	  return this.values[key];
	};

	Self.def = function(fn, cfg) {
	  return function() {
	    var binder = this;
	    var args = base.arrify(arguments), matches = false, rule;

	    // 遍历规则，看是否有匹配的，有的话立即跳出
	    base.eachArr(cfg.rules, function(r) {
	      if ((matches = Rule.match(r, args))) {
	        rule = r;
	        return false;
	      }
	    });

	    // 执行原函数
	    if (matches) {
	      var self = new Self(matches, args, rule, cfg.defaults, cfg.options);
	      if (cfg.options.applySelf) {
	        return fn.apply(self, args);
	      } else {
	        return fn.call(binder, self);
	      }
	    } else {
	      throw new Error('Not found rule for arguments (' + args.join(', ') + ').');
	    }
	  };
	};


	module.exports = Self;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var _ = __webpack_require__(8);
	var KVPair = __webpack_require__(18);

	/**
	 *
	 * @param {Object} obj
	 * @param {KVPairNode} [parent = null]
	 * @constructor
	 */
	function KVPairNode(obj, parent) {

	  /**
	   * Original object
	   * @type {Object}
	   */
	  this.obj = obj;

	  /**
	   * {@link KVPair}'s array
	   * @type {Array}
	   */
	  this.kvPairs = [];

	  /**
	   * Parent {@link KVPairNode}
	   * @type {KVPairNode}
	   */
	  this.parent = parent || null;

	  // parse
	  _.each(obj, function(value, key) {
	    if (_.isPlainObject(value)) {
	      value = new KVPairNode(value, this);
	    }
	    this.kvPairs.push(new KVPair(key, value, this));
	  }, this);

	}

	/**
	 * Node to string
	 * @override
	 *
	 * @returns {String}
	 */
	KVPairNode.prototype.toString = function() { return 'KVPairNode' + JSON.stringify(this.obj); };


	/**
	 * Find a pair in current object by pair's key
	 * @param {String} key
	 * @returns {KVPair}
	 */
	KVPairNode.prototype.findPairByKey = function(key) {
	  return _.find(this.kvPairs, function(pair) {
	    return pair.key === key;
	  });
	};

	/**
	 * Get a generated object value.
	 * @returns {Object}
	 */
	KVPairNode.prototype.getValue = function() {
	  var obj = {};
	  _.each(this.kvPairs, function(pair) {
	    var key = pair.getKey([]);  // 空数组用来判断是否有循环依赖，在逐层调用时，这个数组会把先后调用的 pair 放入其中
	    var val = pair.getValue([]);

	    if (obj.hasOwnProperty(key)) { throw new Error('Object key "' + pair.key + '" duplicated.'); }

	    obj[String(key)] = val;
	  });

	  return obj;
	};


	module.exports = KVPairNode;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var Caller = __webpack_require__(19);
	var engine = __webpack_require__(20);
	var _ = __webpack_require__(8);
	var exec = __webpack_require__(21);

	/**
	 * 解析字符串中的 Caller 调用，如果是数组，则遍历数组中的字符串，如果是其它类型，则直接返回
	 * @param {String|Array|*} any
	 * @param {[KVPair]} pairStack
	 * @returns {*}
	 */
	function parse (any, pairStack) {
	  if (_.isArray(any)) {
	    return _.map(any, function(k) { return parse(k, [].concat(pairStack)); });
	  }

	  if (!_.isString(any)) { return any; }


	  var parsedStr = engine(any),
	    tpl = parsedStr.tpl,
	    tplArgs = parsedStr.args;

	  _.each(parsedStr.args, function(arg) {
	    arg.caller = new Caller(arg.caller);
	  });

	  if (tpl === '_' && tplArgs.length === 1) {
	    return tplArgs[0].caller.getValue(pairStack);
	  }

	  var start = 0, result = '';

	  _.each(tplArgs, function(arg) {
	    result += tpl.substring(start, arg.index) + arg.caller.getValue([].concat(pairStack));
	    start = arg.index + 1;
	  });

	  result += tpl.substr(start);

	  return exec(result);
	}

	module.exports = parse;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var _ = __webpack_require__(8);

	/**
	 * @namespace
	 * @type {Object}
	 */
	var type = {};

	/**
	 * All defined types
	 * @memberOf type
	 * @type {Object}
	 */
	var all = type.all = {};

	var _reValid = /^[_A-Z]\w*$/;

	/**
	 * Check if type name is valid
	 * @param {String} name
	 * @returns {Boolean}
	 */
	type.isNameValid = function(name) {
	  return _.isString(name) && _reValid.test(name);
	};

	/**
	 * Check if type name is exists
	 * @param {String} name
	 * @returns {Boolean}
	 */
	type.isNameExists = function(name) {
	  return name && (name in all);
	};


	function _checkCreateName(name) {
	  if (type.isNameExists(name)) {
	    console.warn('Type "%s" already exists, you are overwriting it!', name);
	  }

	  if (!type.isNameValid(name)) {
	    throw new Error('Type "%s" is not valid, it should match ' + _reValid);
	  }
	}

	/**
	 * Create a new type
	 * @param {String} name - type name
	 * @param {Function} fn - type function
	 * @param {*} [ctx = null] - type function context
	 */
	type.create = function(name, fn, ctx) {

	  _checkCreateName(name);

	  all[name] = {fn: fn, ctx: ctx};
	};

	/**
	 * Alias a type to an exists type
	 * @param {String} from - not exist type
	 * @param {String} to - an exist type
	 */
	type.alias = function(from, to) {

	  _checkCreateName(from);

	  if (!type.isNameExists(to)) {
	    throw new Error('Type "' + to + '" not exists, can\'t alias to.');
	  }

	  all[from] = all[to];
	};

	/**
	 * Generate the data generator function
	 * @param {String} name - type name
	 * @param {Array} [args = []] - type function's arguments
	 * @param {*} [ctx = null] - type function's context
	 * @returns {Function}
	 */
	type.generator = function(name, args, ctx) {
	  var t = all[name];
	  if (!t) {
	    throw new Error('Type "' + name + '" not exists, can\'t generate.');
	  }

	  return function() {
	    return t.fn.apply(ctx || t.ctx, args || []);
	  };
	};

	module.exports = type;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var _ = __webpack_require__(8);

	/**
	 * @namespace
	 * @type {Object}
	 */
	var modifier = {};

	/**
	 * All defined modifiers
	 * @memberOf modifier
	 * @type {Object}
	 */
	var all = modifier.all = {};

	var _reValid = /^[a-z]\w*$/,
	  _allowedFilterStrings = ['String', 'Array', 'Object', 'PlainObject', 'Number', 'Boolean'];

	/**
	 * Check if modifier name is valid
	 * @param {String} name
	 * @returns {Boolean}
	 */
	modifier.isNameValid = function(name) {
	  return _.isString(name) && _reValid.test(name);
	};

	/**
	 * Check if modifier name is exists
	 * @param {String} name
	 * @returns {Boolean}
	 */
	modifier.isNameExists = function(name) {
	  return name && (name in all);
	};

	/**
	 * Create a new modifier
	 *
	 * @param {Array} [filters = []]
	 * @param {String} name - if name start with ':', then it is a pre hook modifier
	 * @param {Function} fn
	 * @param {*} [ctx = null]
	 */
	modifier.create = function(filters, name, fn, ctx) {
	  if (_.isString(filters)) {
	    ctx = fn;
	    fn = name;
	    name = filters;
	    filters = [];
	  }

	  var isPreHook = false;

	  if (name.charAt(0) === ':') {
	    isPreHook = true;
	    name = name.substr(1);
	  }

	  if (modifier.isNameExists(name)) {
	    console.warn('Modifier "' + name + '" already exists, you are overwriting it!');
	  }

	  if (!modifier.isNameValid(name)) {
	    throw new Error('Modifier "' + name + '" is not valid, it should match ' + _reValid + '.');
	  }

	  filters = _.map(filters, function(filter) {
	    if (_.isString(filter)) {
	      if (!_.includes(_allowedFilterStrings, filter)) {
	        throw new Error('Modifier filter string value should in "' + _allowedFilterStrings.join('", "') + '"');
	      }
	      return _['is' + filter];
	    } else if (_.isFunction(filter)) {
	      return filter;
	    } else {
	      throw new Error('Modifier filter should be String or Function, not "' + (typeof filter) + '"');
	    }
	  });

	  all[name] = {
	    isPreHook: isPreHook,
	    filters: filters,
	    fn: fn,
	    ctx: ctx
	  };
	};


	/**
	 * According to modifier filters, decide should apply modifier function to this value
	 * @param {*} val
	 * @param {Array} filters - filter function array
	 * @returns {Boolean}
	 * @private
	 */
	function _shouldApplyModifier(val, filters) {
	  if (filters.length) {
	    return _.all(filters, function(filter) { return filter(val); });
	  }
	  return true;
	}

	/**
	 * Generate the modifier data generator function
	 * @param {Function} prevGenerator
	 * @param {String} name - modifier name
	 * @param {Array} [args = []]
	 * @param {*} [ctx = null]
	 * @returns {Function}
	 */
	modifier.generator = function(prevGenerator, name, args, ctx) {
	  var mod = all[name],
	    fn;

	  args = args || [];

	  if (mod) { // Use defined generator
	    ctx = ctx || mod && mod.ctx;

	    if (mod.isPreHook) {
	      fn = function() {
	        return mod.fn.apply(ctx, [prevGenerator].concat(args));
	      };
	    } else {
	      fn = function() {
	        var rtn = prevGenerator();
	        if (_shouldApplyModifier(rtn, mod.filters)) {
	          return mod.fn.apply(ctx, [rtn].concat(args));
	        } else {
	          return rtn;
	        }
	      };
	    }
	  } else { // Use js system call
	    fn = function() {
	      var rtn = prevGenerator();
	      if (_.isUndefined(rtn[name])) {
	        throw new Error('Modifier "' + name + '" not exists.');
	      }

	      if (_.isFunction(rtn[name])) {
	        return rtn[name].apply(ctx || rtn, args);
	      } else {
	        return rtn[name];
	      }
	    };
	  }

	  return fn;
	};


	module.exports = modifier;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var _ = __webpack_require__(8);
	var parse = __webpack_require__(15);


	/**
	 * Object's key value pair
	 *
	 * @param {String} key
	 * @param {*} value
	 * @param {KVPairNode} node
	 * @constructor
	 */
	function KVPair(key, value, node) {
	  /**
	   * Object's key, can depends on Self, Parent object.
	   * @type {String}
	   */
	  this.key = key;

	  /**
	   * Object's value, can depends on Self, Parent object.
	   * @type {*}
	   */
	  this.value = value;

	  /**
	   * If the value is a KVPairNode.
	   * @type {Boolean}
	   */
	  this.hasChildPairs = value instanceof node.constructor;

	  /**
	   * Object's reference.
	   *
	   * @type {KVPairNode}
	   */
	  this.node = node;

	  this.resolvedKey = null;
	  this.resolvedValue = null;
	}

	/**
	 * Pair to string
	 *
	 * @returns {String}
	 */
	KVPair.prototype.toString = function() {
	  return 'KVPair{"key": "' + this.key + '", "value": "' + this.value + '"}';
	};


	/**
	 * 判断 pair 是否是当前 pair 的 父级元素
	 * @param {KVPair} pair
	 * @returns {boolean}
	 */
	KVPair.prototype.isParentOf = function(pair) {
	  var node = pair.node;
	  if (this.hasChildPairs) {
	    while (node) {
	      if (node === this.value) {
	        return true;
	      }
	      node = node.parent;
	    }
	  }
	  return false;
	};

	/**
	 * 循环依赖检查
	 * @param {KVPair} current
	 * @param {[KVPair]} stack
	 * @private
	 */
	function _recycleCheck(current, stack) {
	  var index = stack.indexOf(current);
	  if (index >= 0) {
	    var s = _.map(stack.slice(index).concat(current), function(it) { return it.toString(); });
	    throw new Error('Recycle depends found. ' + s.join(' -> '));
	  }
	}


	/**
	 * Get the resolved key
	 * @param {Array} stack
	 * @returns {String}
	 */
	KVPair.prototype.getKey = function(stack) {
	  _recycleCheck(this, stack);
	  stack.push(this);
	  if (this.resolvedKey === null) {
	    this.resolvedKey = parse(this.key, stack);
	  }
	  return this.resolvedKey;
	};

	/**
	 * Get the resolved value
	 * @param {Array} stack
	 * @returns {*}
	 */
	KVPair.prototype.getValue = function(stack) {
	  _recycleCheck(this, stack);
	  stack.push(this);
	  if (this.resolvedValue === null) {
	    if (this.hasChildPairs) {
	      this.resolvedValue = this.value.getValue(); // 调用 node 的 getValue
	    } else {
	      this.resolvedValue = parse(this.value, stack);
	    }
	  }
	  return this.resolvedValue;
	};

	module.exports = KVPair;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */
	var _ = __webpack_require__(8);
	var jsonfy = __webpack_require__(22);
	var tm = __webpack_require__(7);
	var allConfig = __webpack_require__(5).all;
	var exec = __webpack_require__(21);

	function Caller(series) {

	  this.series = series;
	  this.first = series[0];
	  this.hasDepend = _.includes(['Parent', 'Self'], this.first.name);

	  _.each(series, function(ser) {
	    if (ser.args && ser.args.length) {
	      _.each(ser.args, function(arg, i) {
	        if (_.isArray(arg)) {
	          ser.args[i] = new Caller(arg);
	        }
	      });
	    }
	  });
	}

	function _callConfig(caller) {
	  var series = caller.series.slice(1); // Shift '@Config'
	  var ser = series[0];
	  var value = allConfig;
	  if (!ser || ser.args || !value.hasOwnProperty(ser.name)) {
	    throw new Error('Config key "' + (ser && ser.name || '') + '" not found.');
	  }
	  while (ser && !ser.args && value.hasOwnProperty(ser.name)) {
	    value = value[ser.name];
	    ser = series.shift();
	  }
	  return tm.fnGenerator(function () {
	    return value;
	  }, series)();
	}

	function _callDepend(caller, pairStack) {
	  var pair = _.last(pairStack);

	  if (!pair) { throw new Error(caller + ' not a object.'); }
	  var node = pair.node;
	  var tempPair, depPair;
	  var inSelfOrParent = true, series = [];

	  _.each(caller.series, function(ser, i) {
	    if (ser.args) { series = caller.series.slice(i); return false; } // Self 或 Parent 及其 keys 调用时不能带括号

	    if (!_.includes(['Parent', 'Self'], ser.name)) { inSelfOrParent = false; }

	    if (inSelfOrParent) {
	      if (ser.name === 'Parent') {
	        if (!node.parent) { throw new Error('Not found parent for ' + node + '.'); }
	        node = node.parent;
	      }
	    } else {
	      tempPair = node.findPairByKey(ser.name);
	      if (tempPair) {
	        depPair = tempPair;

	        if (tempPair.hasChildPairs) {
	          node = tempPair.value;
	        }
	      } else {
	        series = caller.series.slice(i);
	        return false;
	      }
	    }
	  });

	  if (!depPair) {
	    throw new Error(caller + ' resolved error.');
	  }

	  if (depPair.isParentOf(pair)) {
	    throw new Error(pair + ' can not depend on it\'s direct parent node.');
	  }

	  return tm.fnGenerator(function() { return depPair.getValue(pairStack); }, series)();
	}

	/**
	 * 先把它内部的子 Caller 解析了
	 * @param {[KVPair]} pairStack
	 */
	Caller.prototype.getValue = function(pairStack) {
	  // 解析每个 Caller 中的参数的值
	  _.each(this.series, function(ser) {
	    _.each(ser.args || [], function(arg, i) {
	      if (arg instanceof Caller) {
	        ser.args[i] = arg.getValue([].concat(pairStack));
	      } else {
	        ser.args[i] = exec(arg);
	        try {
	          ser.args[i] = jsonfy(arg);  // 解析值失败则就把它当作字符串用，减少过多的异常
	        } catch (e) {}
	      }
	    });
	  });

	  // 每个参数都解析完成了，现在是解析整个 Caller 的时候了

	  if (this.hasDepend) { // @Self.Parent.someKey 的形式

	    return _callDepend(this, pairStack);

	  } else if (this.first.name === true) {  // @(something).process...

	    var val = this.first.args.length ? this.first.args[0] : ''; // 用户没传数据就返回一个空字符串吧
	    return tm.fnGenerator(function() { return val; }, this.series.slice(1))();

	  } else if (this.first.name === 'Config') {  // @Config.key.foo 的形式

	    return _callConfig(this);

	  } else {  // 其它情况
	    return tm.generator(this.series)();
	  }

	};


	/**
	 * To string
	 * @returns {String}
	 */
	Caller.prototype.toString = function() {
	  var result = '@', flag;
	  _.each(this.series, function(ser) {
	    if (ser.name !== true) { result += (result === '@' ? '' : '.') + ser.name; }

	    if (ser.args) {
	      result += '(';
	      flag = '';
	      _.each(ser.args, function(arg, i) {
	        result += arg.toString() + flag;
	        flag = ', ';
	      });
	      result += ')';
	    }
	  });
	  return result;
	};

	module.exports = Caller;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var scan = __webpack_require__(23);

	/**
	 * 解析 "abc @Caller.filter.foo(are, ok) end" 类似字符中的 @Caller.filter.foo(are, ok)
	 *
	 * - str 中可能同时存在多个 @Caller，如 "abc @Some.foo(a) def @Other end"
	 * - 还需要支持 @Caller 内嵌 @Caller， 如 @Some.foo(@Other.bar(), true)
	 * - @ 前面带有转义字符 \ 时，会去掉 \ 并忽略此 Caller，如果其它字符出现转义字符 \，不做任何处理
	 * - 支持将一个完整的 @Caller 结构写在${...}中
	 * - 支持在 @ 后面直接接一个值，如 @({...}).repeat
	 *
	 * @param {String} str
	 * @returns {Object} - 返回的结果像这个 {tpl: "abc _ def _ end", args: [ [CallerStruct], [CallerStruct] ]}
	 *
	 * CallerStruct 类似于这种 Array：[{caller: {name: ..., args: []}, index: 4}, ... ]
	 * 如果 caller 不带括号，args 为 false，否则是()中的参数，可以是0个参数，即 args 也会是个空数组。
	 * args 里面也可能有 caller，但里面的没有 index 属性
	 */
	function parse (str) {

	  var tpl = '';
	  var callerStack = [];
	  var pairs = {
	    '`': '`',   // 用于执行 JS
	    '"': '"',   // 双引号字符串
	    '\'': '\'', // 单引号字符串
	    '[': ']',   // 数组
	    '{': '}'    // 对象
	  };

	  /**
	   * 吸收链中的参数，参数中还可以包含 Caller
	   *
	   * @param {Scanner} s
	   * @returns {Array}
	   */
	  var takeArgs = function(s) {
	    var args = [], ch = true;
	    while (ch) {
	      s.white();
	      ch = s.char();
	      if (ch in pairs) {
	        args.push(s.takePair(ch, pairs[ch]));
	        s.white();
	      } else if (ch === '@' && /[\w\(]/.test(s.peek())) {
	        s.next();
	        args.push(takeCaller(s));
	      } else {  // 当作字符串处理
	        if (ch === '\\' && s.peek() === '@') {
	          s.next();
	        }
	        args.push(s.till(',)').trim());
	      }
	      s.white();
	      if (s.isChar(')')) {
	        ch = false; // 退出
	      } else {
	        s.next(','); // 继续下一个参数
	      }
	    }
	    return args;
	  };

	  /**
	   * 吸收 Caller 中的一条链，如 @Foo.bar 中的 Foo 或 bar
	   * @param {Scanner} s
	   * @returns {{}}
	   */
	  var takeOneChain = function(s, isFirst) {
	    var obj = {};
	    if (isFirst && s.isChar('(')) {
	      obj.name = true;
	    } else {
	      obj.name = s.takeWord();
	    }

	    if (s.isChar('(')) { // 带有参数
	      s.next();
	      s.white();
	      if (s.isChar(')')) {
	        obj.args = []; // 带有 0 个参数，结束
	      } else {
	        obj.args = takeArgs(s);
	      }
	      s.next(')');
	    }

	    return obj;
	  };

	  var takeCaller = function(s) {
	    var stack = []; // caller 中有串式的 stack

	    stack.push(takeOneChain(s, true));
	    while (s.isChar('.') && /\w/.test(s.peek())) { // 继续串式调用
	      s.next();
	      stack.push(takeOneChain(s));
	    }

	    return stack;
	  };

	  try {
	    scan(str, function (done) {

	      var s = this, ch = s.char(), left = false, caller, index;

	      if (s.eos()) {
	        done();
	      }

	      if (ch === '\\' && /@[\w\(]/.test(s.peek(2))) {
	        tpl += s.next();
	        ch = s.next();
	      } else if (ch === '$' && /\{@[\w\(]/.test(s.peek(3))) {
	        left = '${';
	        s.next();
	        ch = s.next();
	      }
	      if (ch === '@' && /[\w\(]/.test(s.peek())) {
	        s.next(); // 去掉 @

	        caller = takeCaller(s);

	        if (left) {
	          if (s.isChar('}')) {
	            s.next();
	          } else {
	            tpl += left; // 将 ${ 补回去
	          }
	        }

	        index = tpl.length; // 记录 index，到时替换之前的 placeholder
	        tpl += '_'; // 只是个 placeholder，恢复时候会被替换了
	        callerStack.push({caller: caller, index: index});
	      } else {
	        tpl += ch;
	        s.next();
	      }
	    });
	  } catch (e) { throw new SyntaxError('Parse error on ' + str); }

	  return {tpl: tpl, args: callerStack};
	}

	module.exports = parse;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * yod
	 * https://github.com/qiu8310/yod
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	/**
	 * 调用 eval 去执行 str，str 两端需要带有 `
	 * @param {String} str
	 * @returns {*}
	 */
	function exec(str) {
	  /* jshint ignore:start */
	  if (str[0] === '`' && str.slice(-1) === '`') {
	    try {
	      var evalStr = 'data = ' + str.substr(1, str.length - 2);
	      eval('eval')(evalStr);
	      return data;
	    } catch (e) {
	      // 执行错误返回原字符串
	    }
	  }
	  return str;
	  /* jshint ignore:end */
	}

	module.exports = exec;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * jsonfy
	 * https://github.com/qiu8310/jsonfy"
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */

	var jsonfy = (function() {

	  var at,     // The index of the current character
	    ch,     // The current character
	    endChars = ':,}]',
	    words = {'true': true, 'false': false, 'null': null},
	    trim = function(str) { return str.replace(/^\s+|\s+$/g, ''); },
	    escapee = {
	      '"': '"',
	      '\\': '\\',
	      '/': '/',
	      b: '\b',
	      f: '\f',
	      n: '\n',
	      r: '\r',
	      t: '\t'
	    },
	    text,
	    value,  // Place holder for the value function.

	    isNumerical = function (str) {
	      if (str.charAt(0) === '-') { str = str.substr(1); }

	      if (/^(?:\d*\.)?\d+(?:[eE][-+]?\d*)?$/.test(str)) {
	        // 0056, 00.56, 56.00 也会符合正则的
	        if (str.indexOf('.') >= 0) {
	          // 如果小数的第一位是0，则第二位一定要是 . ； 而如果第一位不是 0，则不管 . 在第几位都有效
	          return (str.charAt(0) !== '0') || (str.charAt(1) === '.');
	        } else {
	          return str === '0' || str.charAt(0) !== '0';
	        }
	      }
	      return false;
	    },

	    error = function (m) {
	      // Call error when something is wrong.
	      throw {
	        name: 'SyntaxError',
	        message: m,
	        at: at,
	        text: text
	      };
	    },

	    next = function (c) {

	      // If a c parameter is provided, verify that it matches the current character.

	      if (c && c !== ch) {
	        error('Expected "' + c + '" instead of "' + ch + '"');
	      }

	      // Get the next character. When there are no more characters,
	      // return the empty string.

	      ch = text.charAt(at);
	      at += 1;
	      return ch;
	    },

	    string = function() {
	      var hex,
	        i,
	        string = '',
	        start = ch === '"' || ch === '\'' ? ch : '',
	        uffff;

	      // When parsing for string values, we must look for " and \ characters.

	      if (start) { next(start); }

	      while (ch) {
	        if (start && ch === start) {
	          next();
	          return string;
	        } else if (!start && endChars.indexOf(ch) >= 0) {
	          return trim(string);
	        }

	        if (ch === '\\') {
	          next();
	          if (ch === 'u') {
	            uffff = 0;
	            for (i = 0; i < 4; i += 1) {
	              hex = parseInt(next(), 16);
	              if (!isFinite(hex)) {
	                break;
	              }
	              uffff = uffff * 16 + hex;
	            }
	            string += String.fromCharCode(uffff);
	          } else if (typeof escapee[ch] === 'string') {
	            string += escapee[ch];
	          } else {
	            break;
	          }
	        } else {
	          string += ch;
	        }
	        next();
	      }

	      error('Bad string');
	    },

	  // 字面量，可以是字符串、数值，或 true, false, null
	    literal = function() {
	      var result = '';
	      while (ch && endChars.indexOf(ch) < 0) {
	        result += ch;
	        next();
	      }
	      result = trim(result);
	      if (words.hasOwnProperty(result)) { return words[result]; }
	      if (isNumerical(result)) {
	        return +result;
	      }
	      return result;
	    },

	    array = function() {
	      var array = [];

	      if (ch === '[') {
	        next('[');
	        white();
	        if (ch === ']') {
	          next(']');
	          return array;   // empty array
	        }
	        while (ch) {
	          array.push(value());
	          white();
	          if (ch === ']') {
	            next(']');
	            return array;
	          }
	          next(',');
	          white();
	        }
	      }
	      error('Bad array');
	    },

	    object = function() {
	      var key,
	        object = {};

	      if (ch === '{') {
	        next('{');
	        white();
	        if (ch === '}') {
	          next('}');
	          return object; // empty object
	        }
	        while (ch) {
	          key = string();
	          white();
	          next(':');
	          if (key === '') {
	            error('Empty key');
	          }
	          if (Object.hasOwnProperty.call(object, key)) {
	            error('Duplicate key "' + key + '"');
	          }
	          object[key] = value();
	          white();
	          if (ch === '}') {
	            next('}');
	            return object;
	          }
	          next(',');
	          white();
	        }
	      }
	      error('Bad object');
	    },

	    white = function() {
	      // Skip whitespace.
	      while (ch && ch <= ' ') { next(); }
	    };

	  value = function() {
	    white();
	    switch (ch) {
	      case '{':
	        return object();
	      case '[':
	        return array();
	      case '"':
	      case '\'':
	        return string();
	      default:
	        return literal();
	    }
	  };

	  return function (source) {

	    var result;
	    if (typeof source !== 'string') {
	      error('Illegal input');
	    }

	    text = source;
	    at = 0;
	    ch = ' ';
	    result = value();
	    white();
	    if (ch) {
	      error('Syntax error');
	    }

	    return result;
	  };
	})();

	if ( typeof module === 'object' && typeof module.exports === 'object' ) {
	  module.exports = jsonfy;
	}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * sscan
	 * https://github.com/qiu8310/sscan
	 *
	 * Copyright (c) 2015 Zhonglei Qiu
	 * Licensed under the MIT license.
	 */


	'use strict';

	(function(global, undef) {
	  /**
	   * One character
	   *
	   * @typedef {String} Char
	   */

	  /**
	   * Character matcher
	   *
	   * @typedef {String|Function|RegExp} CharMatcher
	   */

	  var rWhite = /\s/,
	    rWord = /\w/,

	    quoteModes = {
	      all: {'"': 1, '\'': 1, match: '"\''},
	      single: {'\'': 1, match: '\''},
	      double: {'"': 1, match: '"'},
	      none: {match: ''}
	    },

	    /**
	     * If the character match the charMatcher
	     *
	     * @param {Char} ch
	     * @param {CharMatcher} charMatcher
	     * @returns {Boolean}
	     * @private
	     * @throws {Error} Will throw an error if charMatcher is not a valid CharMatcher.
	     */
	    match = function(ch, charMatcher) {
	      var type = typeof charMatcher;
	      if (!ch) { return false; } // 字符结束后 ch 是空字符串，这时常被用来比较
	      if (type === 'string') {
	        return charMatcher.indexOf(ch) >= 0;
	      } else if (type === 'function') {
	        return charMatcher(ch);
	      } else if (charMatcher instanceof RegExp) {
	        return charMatcher.test(ch);
	      } else {
	        throw new Error('Character matcher "' + charMatcher + '" not acceptable.');
	      }
	    };


	  /**
	   * Scanner constructor
	   *
	   * @param {String} str
	   * @constructor
	   */
	  function Scanner(str) {
	    /**
	     * Original str
	     * @type {String}
	     */
	    this.str = str;

	    /**
	     * Current scan position
	     * @type {Number}
	     */
	    this.pos = 0;

	    /**
	     * Original str length
	     * @type {Number}
	     */
	    this.len = str.length;

	    ///**
	    // * Last matched string
	    // * @type {Object}
	    // */
	    //this.lastMatch = {
	    //  reset: function() {
	    //    this.str = null;
	    //    this.captures = [];
	    //    return this;
	    //  }
	    //}.reset();
	  }

	  Scanner.prototype = {
	    /**
	     * If is the begin of string.
	     * @returns {Boolean}
	     */
	    bos: function() {
	      return this.pos === 0;
	    },

	    /**
	     * If is the end of string.
	     * @param {CharMatcher} [acceptableMatcher]
	     * @returns {Boolean}
	     */
	    eos: function(acceptableMatcher) {
	      if (acceptableMatcher) {
	        var i, rest = this.peekRest();
	        for (i = 0; i < rest.length; i++) {
	          if (!match(rest.charAt(i), acceptableMatcher)) { return false; }
	        }
	        return true;
	      }
	      return this.pos === this.len;
	    },

	    /**
	     * Reset the position.
	     */
	    reset: function() {
	      this.pos = 0;
	    },

	    /**
	     * Throw a SyntaxError.
	     *
	     * @param {String} tpl
	     * @param {String} args...
	     * @private
	     */
	    _syntaxError: function(tpl, args) {
	      args = [].slice.call(arguments, 1);
	      tpl = tpl.replace(/%s/g, function() {
	        return '{{ ' + args.shift() + ' }}';
	      });
	      var err = new SyntaxError(tpl);
	      err.pos = this.pos;
	      err.str = this.str;
	      throw err;
	    },

	    /**
	     * Get current character.
	     * @returns {Char}
	     */
	    char: function() {
	      return this.str.charAt(this.pos);
	    },

	    /**
	     * If current character match the charMatcher.
	     * @param {CharMatcher} charMatcher
	     * @returns {Boolean}
	     */
	    isChar: function(charMatcher) {
	      return match(this.char(), charMatcher);
	    },

	    /**
	     * Get next character
	     * @param {CharMatcher} [charMatcher]
	     * @returns {Char}
	     * @throws {Error} Will throws if already in the end.
	     * @throws {SyntaxError} Will throws if matcher doesn't match current character.
	     */
	    next: function(charMatcher) {
	      if (charMatcher !== undef && !match(this.char(), charMatcher)) {
	        this._syntaxError('Expect %s, but got %s.', charMatcher, this.char());
	      }
	      if (this.eos()) {
	        throw new Error('EOS');
	      }
	      this.pos++;
	      return this.char();
	    },

	    /**
	     * Take next part string that match the charMatcher, can be empty
	     * @param {CharMatcher} charMatcher
	     * @returns {String}
	     */
	    take: function(charMatcher) {
	      var ch = this.char(), res = '';
	      while (match(ch, charMatcher) && !this.eos()) {
	        res += ch;
	        ch = this.next();
	      }
	      return res;
	    },

	    /**
	     * Take the next word.
	     * @returns {String}
	     */
	    takeWord: function() {
	      var word = this.take(rWord);
	      if (!word) {
	        this._syntaxError('Empty string is not a valid word.');
	      }
	      return word;
	    },

	    /**
	     * Take quotes, object and array.
	     * @param {String} [quoteMode='all'] - single, double, all
	     */
	    takeValue: function(quoteMode) {
	      var ch = this.char();
	      if (ch === '[') {
	        return this.takeArray(quoteMode);
	      } else if (ch === '{') {
	        return this.takeObject(quoteMode);
	      } else if (ch === '"' || ch === '\'') {
	        return this.takeQuote(quoteMode);
	      } else {
	        this._syntaxError('Not a valid value.');
	      }
	    },

	    /**
	     * Take quoted characters.
	     * @param {String} [quoteMode='all'] - single, double, all
	     */
	    takeQuote: function(quoteMode) {
	      var quotes = quoteModes[quoteMode] || quoteModes.all;
	      var lastQuote = this.char();
	      var result = lastQuote, ch = this.next(quotes.match);

	      while (lastQuote) {
	        if (ch === lastQuote) {
	          lastQuote = null;
	        }
	        result += ch;
	        ch = this.next();
	      }

	      return result;
	    },

	    /**
	     * Take pair things, line {...}, [...]
	     *
	     * @param {Char} left
	     * @param {Char} [right]
	     * @param {String} [quoteMode='all'] - single, double, all, none
	     */
	    takePair: function(left, right, quoteMode) {
	      if (!right) { right = left; }

	      if (left === right && (left === '"' || left === '\'')) {
	        return this.takeQuote(quoteMode);
	      }

	      var ch = this.next(left);
	      var count = 1, result = left;
	      var quotes = quoteModes[quoteMode] || quoteModes.all;

	      while (count !== 0) {
	        count += right === ch ? -1 : (left === ch ? 1 : 0);

	        if (quotes[ch]) {
	          result += this.takeQuote(quoteMode);
	          ch = this.char();
	        } else {
	          result += ch;
	          ch = this.next();
	        }
	      }
	      return result;
	    },

	    /**
	     * Take javascript object
	     * @param {String} [quoteMode='all']
	     */
	    takeObject: function(quoteMode) {
	      return this.takePair('{', '}', quoteMode);
	    },

	    /**
	     * Take javascript array
	     * @param {String} [quoteMode='all']
	     */
	    takeArray: function(quoteMode) {
	      return this.takePair('[', ']', quoteMode);
	    },

	    /**
	     * Proceed till character match the endMatcher,
	     * if acceptMatcher supplied, then all mid characters should match the acceptMatcher.
	     *
	     * @param {CharMatcher} [acceptMatcher]
	     * @param {CharMatcher} endMatcher
	     * @param {Function} [eosFn]
	     */
	    till: function(acceptMatcher, endMatcher, eosFn) {

	      var args = [].slice.call(arguments);
	      if (args.length === 1) {
	        endMatcher = acceptMatcher;
	        acceptMatcher = eosFn = null;
	      } else if (args.length === 2) {
	        if (typeof args[1] === 'function') {
	          eosFn = args[1];
	          endMatcher = args[0];
	          acceptMatcher = null;
	        }
	      }

	      var ch = this.char();
	      var pass = '';
	      while (!match(ch, endMatcher) && !this.eos()) {
	        if (acceptMatcher && !match(ch, acceptMatcher)) {
	          this._syntaxError('Expect %s, but got %s.', acceptMatcher, ch);
	        }
	        pass += ch;
	        ch = this.next();
	      }
	      if (this.eos() && eosFn) { eosFn(pass); }
	      return pass;
	    },


	    /**
	     *  Peek next one or specified length
	     */
	    peek: function(len) {
	      return this.str.substr(this.pos + 1, len || 1);
	    },

	    /**
	     * Get peek of the rest string.
	     *
	     * @returns {String}
	     */
	    peekRest: function() {
	      return this.str.substr(this.pos);
	    },

	    /**
	     * Take in all next white spaces.
	     */
	    white: function() {
	      return this.take(rWhite);
	    }
	  };

	  /**
	   * @param {String} str
	   * @param {Function} [fn]
	   * @returns {*}
	   */
	  function sscan(str, fn) {
	    var scanner = new Scanner(str);
	    if (typeof fn === 'function') {
	      var done = function() { throw {scanDone: true} };
	      try {
	        while (true) { fn.call(scanner, done); }
	      } catch (e) {
	        if (!e.scanDone) { throw e; }
	      }
	    }
	    return scanner;
	  }

	  sscan.Scanner = Scanner;

	  // Export to window and node
	  global.sscan = sscan;
	  module.exports = sscan;

	})(this);


/***/ }
/******/ ]);