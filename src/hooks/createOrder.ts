import { reactive } from 'vue'
export default function () {
    const useData = reactive(
        {
            dental: [
                // 1
                [
                    {
                        ADA: 'A',
                        fdi: '55',
                        PALMER: 'E',
                        toothInfo: false, // 牙齿信息
                        noMoveTooth: false, // 不可移动牙齿
                        noDesignTooth: false, // 不可设计附件牙齿
                        clearance: false, // 间隙
                        exelcymosisInfo: false, // 拔牙信息
                    },
                    {
                        ADA: 'B',
                        fdi: '54',
                        PALMER: 'D',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'C',
                        fdi: '53',
                        PALMER: 'C',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'D',
                        fdi: '52',
                        PALMER: 'B',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'E',
                        fdi: '51',
                        PALMER: 'A',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    }
                ],
                // 2
                [
                    {
                        ADA: 'F',
                        fdi: '61',
                        PALMER: 'A',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'G',
                        fdi: '62',
                        PALMER: 'B',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'H',
                        fdi: '63',
                        PALMER: 'C',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'I',
                        fdi: '64',
                        PALMER: 'D',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'J',
                        fdi: '65',
                        PALMER: 'E',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    }
                ],
                // 3
                [
                    {
                        ADA: '1',
                        fdi: '18',
                        PALMER: '8',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '2',
                        fdi: '17',
                        PALMER: '7',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '3',
                        fdi: '16',
                        PALMER: '6',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '4',
                        fdi: '15',
                        PALMER: '5',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '5',
                        fdi: '14',
                        PALMER: '4',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '6',
                        fdi: '13',
                        PALMER: '3',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '7',
                        fdi: '12',
                        PALMER: '2',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '8',
                        fdi: '11',
                        PALMER: '1',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    }
                ],
                // 4
                [
                    {
                        ADA: '9',
                        fdi: '21',
                        PALMER: '1',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '10',
                        fdi: '22',
                        PALMER: '2',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '11',
                        fdi: '23',
                        PALMER: '3',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '12',
                        fdi: '24',
                        PALMER: '4',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '13',
                        fdi: '25',
                        PALMER: '5',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '14',
                        fdi: '26',
                        PALMER: '6',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '15',
                        fdi: '27',
                        PALMER: '7',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '16',
                        fdi: '28',
                        PALMER: '8',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                ],
                // 5
                [
                    {
                        ADA: '32',
                        fdi: '48',
                        PALMER: '8',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,

                    },
                    {
                        ADA: '31',
                        fdi: '47',
                        PALMER: '7',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,

                    },
                    {
                        ADA: '30',
                        fdi: '46',
                        PALMER: '6',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,

                    },
                    {
                        ADA: '29',
                        fdi: '45',
                        PALMER: '5',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,

                    },
                    {
                        ADA: '28',
                        fdi: '44',
                        PALMER: '4',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '27',
                        fdi: '43',
                        PALMER: '3',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '26',
                        fdi: '42',
                        PALMER: '2',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '25',
                        fdi: '41',
                        PALMER: '1',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                ],
                // 6
                [
                    {
                        ADA: '24',
                        fdi: '31',
                        PALMER: '1',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '23',
                        fdi: '32',
                        PALMER: '2',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '22',
                        fdi: '33',
                        PALMER: '3',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '21',
                        fdi: '34',
                        PALMER: '4',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '20',
                        fdi: '35',
                        PALMER: '5',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '19',
                        fdi: '36',
                        PALMER: '6',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '18',
                        fdi: '37',
                        PALMER: '7',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: '17',
                        fdi: '38',
                        PALMER: '8',
                        toothInfo: true,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                ],
                // 7
                [
                    {
                        ADA: 'T',
                        fdi: '85',
                        PALMER: 'E',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'S',
                        fdi: '84',
                        PALMER: 'D',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'R',
                        fdi: '83',
                        PALMER: 'C',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'Q',
                        fdi: '82',
                        PALMER: 'B',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'P',
                        fdi: '81',
                        PALMER: 'A',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                ],
                // 8
                [
                    {
                        ADA: 'O',
                        fdi: '71',
                        PALMER: 'A',
                        toothInfo: false,
                        noMoveTooth: false, //不可移动
                        noDesignTooth: false,   //不可设计
                        clearance: false,   //清除
                        exelcymosisInfo: false, //拔牙信息
                    },
                    {
                        ADA: 'N',
                        fdi: '72',
                        PALMER: 'B',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'M',
                        fdi: '73',
                        PALMER: 'C',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'L',
                        fdi: '74',
                        PALMER: 'D',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                    {
                        ADA: 'K',
                        fdi: '75',
                        PALMER: 'E',
                        toothInfo: false,
                        noMoveTooth: false,
                        noDesignTooth: false,
                        clearance: false,
                        exelcymosisInfo: false,
                    },
                ],
            ],
            // 骨性分类
            boneList: [
                {
                    text: '骨性Ⅰ类',
                    type: 1,
                },
                {
                    text: '骨性Ⅱ类',
                    type: 2,
                },
                {
                    text: '骨性Ⅲ类',
                    type: 3,
                },
            ],
            // 错颌分类
            malocclusionList: [
                {
                    text: '牙前突',
                    type: 1,
                },
                {
                    text: '拥挤',
                    type: 2,
                },
                {
                    text: '牙列间隙',
                    type: 3,
                },
                {
                    text: '牙周病',
                    type: 4,
                },
                {
                    text: '修复牙',
                    type: 5,
                },
                {
                    text: '深覆𬌗',
                    type: 6,
                },
                {
                    text: '深覆盖 ',
                    type: 7,
                },
                {
                    text: '前牙反𬌗',
                    type: 8,
                },
                {
                    text: '后牙反𬌗',
                    type: 9,
                },
                {
                    text: '后牙锁𬌗',
                    type: 10,
                },
                {
                    text: '开颌',
                    type: 11,
                },
                {
                    text: '上颌前突',
                    type: 12,
                },
                {
                    text: '下颌前突',
                    type: 13,
                },
                {
                    text: '上颌发育不足',
                    type: 14,
                },
                {
                    text: '下颌发育不足',
                    type: 15,
                },
            ],
            // 主诉
            mainDescList: [
                {
                    text: '牙齿不齐',
                    type: 1,
                },
                {
                    text: '牙间隙',
                    type: 2,
                },
                {
                    text: '嘴突',
                    type: 3,
                },
                {
                    text: '微笑不好看',
                    type: 4,
                },
                {
                    text: '反𬌗',
                    type: 5,
                },
                {
                    text: '开𬌗 ',
                    type: 6,
                },
                {
                    text: '后牙锁𬌗 ',
                    type: 7,
                },
                {
                    text: '其他',
                    type: 8,
                },
            ],
            // 主要矫治目标
            targetList: [
                {
                    text: '排齐牙齿',
                    type: 1,
                },
                {
                    text: '关闭牙列间隙',
                    type: 2,
                },
                {
                    text: '改善前突面型',
                    type: 3,
                },
                {
                    text: '改善笑线',
                    type: 4,
                },
                {
                    text: '纠正反𬌗',
                    type: 5,
                },
                {
                    text: '其他 ',
                    type: 6,
                },
            ],
            // 矢状关系一级
            sagittalFirst: [
                // {
                //     text: '维持',
                //     type: 1,
                // },
                {
                    text: '只改善尖牙关系',
                    type: 2,
                },
                {
                    text: '改善尖牙和磨牙关系关系',
                    type: 3,
                },
                {
                    text: '调整到中性关系',
                    type: 4,
                },
                // {
                //     text: '3D方案设计后再确定',
                //     type: 5,
                // },
            ],
            // 矢状关系二级
            sagittalSecond: [
                {
                    text: '远移磨牙（需配合颌间牵引/颌内牵引）',
                    type: 6,
                },
                {
                    text: '咬合跳跃（需配合颌间牵引）',
                    type: 7,
                },
                {
                    text: '邻面去釉',
                    type: 8,
                },
                {
                    text: '拔牙',
                    type: 9,
                },
                {
                    text: '3D方案设计后再确定',
                    type: 10,
                },
            ],
            // 覆𬌗/对刃𬌗一级
            coverToothFirst: [
                {
                    text: '维持',
                    type: 1,
                    secondType: null,
                },
                {
                    text: '纠正开𬌗',
                    type: 2,
                    secondType: 'coverToothSecond1',
                },
                {
                    text: '改善深覆𬌗',
                    type: 3,
                    secondType: 'coverToothSecond2',
                },
                {
                    text: '纠正对刃𬌗',
                    type: 4,
                    secondType: 'coverToothSecond3',
                },
                {
                    text: '3D方案设计后再确定',
                    type: 5,
                    secondType: null,
                },
            ],
            // 覆𬌗/对刃𬌗二级1
            coverToothSecond1: [
                {
                    text: '只伸长前牙',
                    type: 6,
                },
                {
                    text: '只压低后牙（可能需要配合支抗钉）',
                    type: 7,
                },
                {
                    text: '伸长前牙并压低后牙（可能需要配合支抗钉）',
                    type: 8,
                },
                // {
                //     text: '其他方式',
                //     type: 9,
                // },
            ],
            // 覆𬌗/对刃𬌗二级2
            coverToothSecond2: [
                {
                    text: '只压低前牙',
                    type: 10,
                },
                {
                    text: '压低前牙并升高后牙',
                    type: 11,
                },
                {
                    text: '平导辅助（覆盖大不适用）',
                    type: 12,
                },
                // {
                //     text: '其他方式',
                //     type: 9,
                // },
            ],
            // 覆𬌗/对刃𬌗二级3
            coverToothSecond3: [
                {
                    text: '只伸长上颌前牙',
                    type: 13,
                },
                {
                    text: '只伸长下颌前牙',
                    type: 14,
                },
                {
                    text: '上下前牙都伸长 ',
                    type: 15,
                },
                // {
                //     text: '其他方式',
                //     type: 9,
                // },
            ],
            // 前牙反𬌗一级
            frontToothFirst: [
                {
                    text: '维持',
                    type: 1,
                    secondType: null,
                },
                {
                    text: '纠正',
                    type: 2,
                    secondType: 'frontToothSecond',
                },
            ],
            // 前牙反𬌗二级
            frontToothSecond: [
                {
                    text: '只上前牙唇倾',
                    type: 3,
                },
                {
                    text: '只下前牙唇倾',
                    type: 4,
                },
                {
                    text: '上前牙唇倾下前牙内收 ',
                    type: 5,
                },
            ],
            // 后牙反𬌗/锁𬌗一级
            backToothFirst: [
                {
                    text: '维持',
                    type: 1,
                    secondType: null,
                },
                {
                    text: '纠正',
                    type: 2,
                    secondType: 'backToothSecond',
                },
            ],
            //后牙反𬌗/锁𬌗二级
            backToothSecond: [
                {
                    text: '只上颌颊倾/舌倾',
                    type: 3,
                },
                {
                    text: '只下颌颊倾/舌倾',
                    type: 4,
                },
                {
                    text: '上颌颊倾下颌舌倾/上颌舌倾下颌颊倾',
                    type: 5,
                },
            ],
            // 中线一级
            centerFirst: [
                {
                    text: '维持中线（可能需要邻面去釉）',
                    type: 1,
                    secondType: null,
                },
                {
                    text: '改善中线（可能需要邻面去釉）',
                    type: 2,
                    secondType: 'centerSecond',
                },
            ],
            // 中线二级上颌
            centerSecond1: [
                {
                    text: '维持',
                    type: 4,
                },
                {
                    text: '向患者左侧移动',
                    type: 5,
                },
                {
                    text: '向患者右侧移动 ',
                    type: 6,
                },
            ],
            // 中线二级下颌
            centerSecond2: [
                {
                    text: '维持',
                    type: 7,
                },
                {
                    text: '向患者左侧移动',
                    type: 8,
                },
                {
                    text: '向患者右侧移动 ',
                    type: 9,
                },
            ],
            // 间隙上颌
            clearance1: [
                {
                    text: '前牙内收',
                    type: 1,
                },
                {
                    text: '前牙内收、后牙近移',
                    type: 2,
                },
                {
                    text: '后牙近移',
                    type: 3,
                },
            ],
            // 间隙下颌
            clearance2: [
                {
                    text: '前牙内收',
                    type: 4,
                },
                {
                    text: '前牙内收、后牙近移',
                    type: 5,
                },
                {
                    text: '后牙近移',
                    type: 6,
                },
            ],
            // 间隙下颌
            clearance3: [
                {
                    text: '预留间隙',
                    type: 7,
                    secondType: 'clearanceSecond',
                },
                {
                    text: '3D方案设计后再确定',
                    type: 8,
                },
            ],
            // 拥挤的矫治一级
            crowded: [
                {
                    text: '扩弓',
                    type: 1,
                    secondType: null,
                },
                {
                    text: '唇展',
                    type: 2,
                    secondType: null,
                },
                // {
                //     text: '邻面去釉',
                //     type: 3,
                //     secondType1: 1,
                //     secondType2: 3,
                //     secondType3: 5,
                //     secondType4: 7,
                //     secondType5: 9,
                //     secondType6: 11,
                // },
                // {
                //     text: '磨牙远移',
                //     type: 4,
                //     secondType1: 2,
                //     secondType2: 4,
                //     secondType3: 6,
                //     secondType4: 8,
                //     secondType5: 10,
                //     secondType6: 12,
                // },
            ],
            // 拥挤的矫治二级1
            crowdedSecond1: [
                {
                    text: '首选左侧前牙',
                    type: 1,
                },
                {
                    text: '首选右侧前牙',
                    type: 2,
                },
                {
                    text: '首选左侧后牙',
                    type: 3,
                },
                {
                    text: '首选右侧后牙',
                    type: 4,
                },
            ],
            crowdedSecond3: [
                {
                    text: '可选左侧前牙',
                    type: 1,
                },
                {
                    text: '可选右侧前牙',
                    type: 2,
                },
                {
                    text: '可选左侧后牙',
                    type: 3,
                },
                {
                    text: '可选右侧后牙',
                    type: 4,
                },
            ],
            crowdedSecond4: [
                {
                    text: '不片左侧前牙',
                    type: 1,
                },
                {
                    text: '不片右侧前牙',
                    type: 2,
                },
                {
                    text: '不片左侧后牙',
                    type: 3,
                },
                {
                    text: '不片右侧后牙',
                    type: 4,
                },
            ],
            // 拥挤的矫治二级2
            crowdedSecond2: [
                {
                    text: '左侧',
                    type: 9,
                },
                {
                    text: '右侧',
                    type: 10,
                },
            ],
            // 拥挤的矫治拔牙
            exelcymosisList: [
                {
                    text: '不拔牙',
                    type: 1,
                },
                {
                    text: '拔除以下牙齿',
                    type: 2,
                },
                {
                    text: '3D方案设计后再确定',
                    type: 3,
                },
            ],
            // 支抗钉一级
            orthodonticImplantFirst: [
                {
                    text: '无',
                    type: 1,
                },
                {
                    text: '支抗钉辅助治疗',
                    type: 2,
                },
            ],
            // 支抗钉二级
            orthodonticImplantSecond: [
                {
                    text: '上颌前牙',
                    type: 3,
                },
                {
                    text: '上颌左侧',
                    type: 4,
                },
                {
                    text: '上颌右侧',
                    type: 5,
                },
                {
                    text: '下颌前牙',
                    type: 6,
                },
                {
                    text: '下颌左侧',
                    type: 7,
                },
                {
                    text: '下颌右侧',
                    type: 8,
                },
            ],
            // 锚点list
            anchorList: [
                {
                    before: true, // 是否展示必填的星号
                    text: '主诉',
                    id: 'anchor1',
                },
                {
                    before: true,
                    text: '主要矫治目标',
                    id: 'anchor2',
                },
                {
                    before: true,
                    text: '计划矫治牙颌',
                    id: 'anchor3',
                },
                {
                    before: true,
                    text: '牙齿信息',
                    id: 'anchor4 ',
                },
                {
                    before: false,
                    text: '不可移动牙齿',
                    id: 'anchor5',
                },
                {
                    before: false,
                    text: '不可设计附件牙齿',
                    id: 'anchor6',
                },
                {
                    before: true,
                    text: '面型',
                    id: 'anchor7',
                },
                {
                    before: true,
                    text: '矢状关系',
                    id: 'anchor8',
                },
                {
                    before: false,
                    text: '覆盖',
                    id: 'anchor9',
                },
                {
                    before: false,
                    text: '覆𬌗/对刃𬌗',
                    id: 'anchor10',
                },
                {
                    before: false,
                    text: '前牙反𬌗',
                    id: 'anchor11',
                },
                {
                    before: false,
                    text: '后牙反𬌗/锁𬌗',
                    id: 'anchor12',
                },
                {
                    before: true,
                    text: '中线',
                    id: 'anchor13',
                },
                {
                    before: true,
                    text: '间隙',
                    id: 'anchor14',
                },
                {
                    before: true,
                    text: '拥挤的矫治',
                    id: 'anchor15',
                },
                {
                    before: true,
                    text: '支抗钉',
                    id: 'anchor16',
                },
                {
                    before: false,
                    text: '颞下颌关节是否存在异常',
                    id: 'anchor17',
                },
                {
                    before: false,
                    text: '其他说明',
                    id: 'anchor18',
                },
            ],
        }
    )
    return {...useData}
}
