/**
 *  Module
 *
 * gTableTest Description
 */
angular.module('test', ['objectTable'])
	.controller('mainController', function($scope) {
		$scope.data = [{
				id: 01,
				name: "姚宇飞",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 10,
				grade02: 60,
				grade03: 0
			},
			{
				id: 02,
				name: "朱学成",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 0,
				work03: 0,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 60,
				grade03: 0
			},
			{
				id: 03,
				name: "岑灏",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 04,
				name: "朱晨煜",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 80,
				grade03: 0
			},
			{
				id: 05,
				name: "宋治民",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 0,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 06,
				name: "潘雪",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 95,
				grade03: 0
			},
			{
				id: 07,
				name: "钱伟杰",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 5,
				grade02: 90,
				grade03: 0
			},
			{
				id: 08,
				name: "姜凯",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 0,
				work08: 5,
				work09: 0,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 5,
				grade02: 60,
				grade03: 0
			},
			{
				id: 09,
				name: "陆文涛",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 10,
				name: "朱雨婷",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
			    work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 11,
				name: "吕涵之",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 90,
				grade02: 99,
				grade03: 0
			},
			{
				id: 12,
				name: "沈丹青",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 30,
				grade02: 90,
				grade03: 0
			},
			{
				id: 13,
				name: "钱都",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 0,
				work05: 5,
				work06: 5,
				work07: 0,
				work08: 0,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 15,
				name: "杜任杰",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 16,
				name: "叶信哲",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 17,
				name: "蒋轶聪",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 95,
				grade03: 0
			},
			{
				id: 18,
				name: "张虓敏",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 125,
				grade02: 100,
				grade03: 0
			},
			{
				id: 19,
				name: "陈黎铭",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 10,
				grade02: 100,
				grade03: 0
			},
			{
				id: 20,
				name: "何桂清",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 10,
				grade02: 75,
				grade03: 0
			},
			{
				id: 21,
				name: "余银超",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 22,
				name: "劳锦锞",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 80,
				grade03: 0
			},
			{
				id: 23,
				name: "周渠成",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 24,
				name: "徐炜昊",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 5,
				grade02: 75,
				grade03: 0
			},
			{
				id: 26,
				name: "盛绍斌",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 0,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 85,
				grade03: 0
			},
			{
				id: 27,
				name: "王海波",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 5,
				work03: 0,
				work04: 0,
				work05: 0,
				work06: 0,
				work07: 0,
				work08: 0,
				work09: 0,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 80,
				grade03: 0
			},
			{
				id: 28,
				name: "郑涛",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 0,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 0,
				grade03: 0
			},
			{
				id: 29,
				name: "郑可琪",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 30,
				name: "潘云锋",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 0,
				work03: 0,
				work04: 0,
				work05: 0,
				work06: 0,
				work07: 0,
				work08: 0,
				work09: 0,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 0,
				grade03: 0
			},
			{
				id: 31,
				name: "陈汇",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 105,
				grade02: 100,
				grade03: 0
			},
			{
				id: 33,
				name: "蔡浩然",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 0,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 0,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 34,
				name: "冯盛鹏",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 35,
				name: "张南",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 36,
				name: "黄小翠",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 20,
				grade02: 100,
				grade03: 0
			},
			{
				id: 37,
				name: "曾思思",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 38,
				name: "李雄俊",
				preExam1: '免考',
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 105,
				grade03: 0
			},
			{
				id: 39,
				name: "苏彬彬",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 80,
				grade03: 0
			},
			{
				id: 40,
				name: "黄鑫鑫",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 42,
				name: "姜智孟",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 44,
				name: "白炳钿",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 95,
				grade03: 0
			},
			{
				id: 45,
				name: "胡利明",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 46,
				name: "张益桐",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id:47,
				name:"许桃美",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			}
		];
		$scope.getGrade = function(data){
        //return if empty or not ready
        if(!data || !data.length) return;

        for(var i=0; i<data.length; i++){
          // totalNumber = totalNumber + parseFloat(data[i].money);
          data[i].isPreExame=false;
          data[i].preExam1Data=data[i].preExam1;
          data[i].preExam2Data=data[i].preExam2;
          data[i].preExam3Data=data[i].preExam3;
          if (data[i].preExam1=="免考"||data[i].preExam2=="免考"||data[i].preExam3=="免考") {
              data[i].preExam1Data=data[i].preExam2Data=data[i].preExam3Data=0;
              data[i].grade03=100;
              data[i].isPreExame=true;
          };
          data[i].grade01=data[i].preExam1Data+data[i].preExam2Data+data[i].preExam3Data+data[i].work01+data[i].work02+data[i].work03+data[i].work04+data[i].work05+data[i].work06+data[i].work07+data[i].work08+data[i].work09+data[i].work10+data[i].work11+data[i].work12+data[i].work13+data[i].work14+data[i].work15+data[i].github;
          data[i].grade04=$scope.toDecimal(data[i].grade01*0.3+data[i].grade02*0.2+data[i].grade03*0.5);
        }

    };

    $scope.toDecimal=function(x) {    
        var f = parseFloat(x);    
        if (isNaN(f)) {    
            return;    
        }    
        f = Math.round(x*100)/100;    
        return f;    
    }   
    
    $scope.getGrade($scope.data);
    $scope.data.time="2017.03.31";
    //$scope.getGrade($scope.data2);
})