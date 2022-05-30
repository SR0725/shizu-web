var startpageVue = new Vue({
    el: '#startpage',
    data: {
        show: true,
        change: false

    },
    methods: {
        changePage: function(){
            this.change = true;
            setTimeout(function() {
                indexpageVue.$set(indexpageVue, "show", true);
                startpageVue.$set(startpageVue, "show", false);
            }, 4000);
        }
    },
    computed: {

    }
})

var indexpageVue = new Vue({
    el: '#indexpage',
    data: {
        show: false,
        personPage: false

    },
    methods: {
        openPersonPage: function(){
            this.change = true;
        },
        openOtherPage: function(page){
            this.show = false;
            projectVue[page].$set(projectVue[page], "show", true);
        }
    },
    computed: {

    }
})
var projectVue = {};
projectVue['projectwork'] = new Vue({
    el: '#projectworkpage',
    data: {
        show: false,
        mainProjectlist: [
            {
                id: 0,
                title: "專題介紹",
                text: `
                <div>
                    醫療技術的進步，人類的壽命延長，使得老年人比例激增，成了世界各國的普遍現象。<br>台灣鄉村人口外流也非常嚴重，導致銀髮族變成獨居，而獨居可能會感到孤單、無聊，可能還會有隱藏的危險，這些種種讓我們想要為銀髮族的人們創作出一個能讓他們舒適的居住環境。<br>於是我們打算將永安街旁的廢棄停車場重新規劃，建置一棟不論功能還是環境，都能讓年長者感到舒適的建築。
                </div>
                `
            },
            {
                id: 1,
                title: "綠Young森林的建築主體",
                text: `
                <div>
                為了能夠有效利用空間，而採用了圓弧曲線作為造型，同時添加了一份律動感。主要為公共空間，此處有著完善的小型生活圈，能夠在此做到生活的大部分需求，休閒育樂也能夠包辦。
                </div>
                `
            },
            {
                id: 2,
                title: "居住空間的四棟建築，",
                text: `
                <div>
                採用了結構主義風格，特殊的造型能夠有效的增加太陽光照射的面積，達到採光的效果，大小適中的居住空間，無論什麼類型的家庭皆能居住於此。
                </div>
                `
            },
            {
                id: 3,
                title: "綠色建築",
                text: `
                <div>
                平緩的坡道能夠悠閒地散步上三樓。另外，有著一定的斜度能方便排水避免積水，草地也能夠進一步的吸收雨水，減少因積水滑倒的危險性。

                </div>
                `
            },
            {
                id: 4,
                title: "完善的保護機制",
                text: `
                <div>
                完善的保護圍欄，不用擔心長者獨自外出時發生危險，且這裡有著駐足的人員，能夠更進一步的保護長者的安全。
                </div>
                `
            },
            {
                id: 5,
                title: "無障礙機制",
                text: `
                <div>
                　　電梯特地設計成了醫院規格，不論輪椅、病床都能順利地搭上電梯，不用擔心因體積佔據了大部分位置。
                </div>
                `
            },
            {
                id: 6,
                title: "採光處理",
                text: `
                <div>
                此處為透光的毛玻璃，除了增加自然採光，也能在內部設置溫室，能讓喜歡從事種植的人在此種植花草作物。
                </div>
                `
            }
        ],
        mainProject: {
            id: 0,
            title: "專題介紹",
            text: `
            <div>
                醫療技術的進步，人類的壽命延長，使得老年人比例激增，成了世界各國的普遍現象。<br>台灣鄉村人口外流也非常嚴重，導致銀髮族變成獨居，而獨居可能會感到孤單、無聊，可能還會有隱藏的危險，這些種種讓我們想要為銀髮族的人們創作出一個能讓他們舒適的居住環境。<br>於是我們打算將永安街旁的廢棄停車場重新規劃，建置一棟不論功能還是環境，都能讓年長者感到舒適的建築。
            </div>
            `
        },
        projectlist: [
            "img/projectwork/01.jpg",
            "img/projectwork/02.jpg",
            "img/projectwork/03.jpg",
            "img/projectwork/04.jpg",
            "img/projectwork/05.jpg",
            "img/projectwork/06.jpg",
        ],
        mainProjectShow: true,
        projectImgShow: "img/projectwork/01.jpg"

    },
    methods: {
        openMainProjectlist: function(i){
            this.mainProject = this.mainProjectlist[i];
        },
        openProjectlist: function(i){
            this.projectImgShow = this.projectlist[i];
            i ? this.mainProjectShow=false : this.mainProjectShow=true;
        },
        closePage: function(){
            this.show = false;
            indexpageVue.$set(indexpageVue, "show", true);
        }
    },
    computed: {

    }
})
projectVue['draw'] = new Vue({
    el: '#projectdrawpage',
    data: {
        show: false,
        projectlist: [
            {
                img: "img/drawpage/1.jpg",
                title: "靜物素描練習",
                text: `
                <div>
                    使用工具:素描筆、軟橡皮
                </div>
                `
            },
            {
                img: "img/drawpage/2.jpg",
                title: "靜物素描練習",
                text: `
                <div>
                    使用工具:素描筆、軟橡皮
                </div>
                `
            },
            {
                img: "img/drawpage/3.jpg",
                title: "靜物素描練習",
                text: `
                <div>
                    使用工具:素描筆、軟橡皮
                </div>
                `
            },
            {
                img: "img/drawpage/4.jpg",
                title: "色鉛筆繪製練習-兔子",
                text: `
                <div>
                使用工具:色鉛筆
                </div>
                `
            },
            {
                img: "img/drawpage/5.jpg",
                title: "色鉛筆繪製練習-瓢蟲",
                text: `
                <div>
                使用工具:色鉛筆
                </div>
                `
            },
            {
                img: "img/drawpage/6.jpg",
                title: "色鉛筆繪製練習-紅鶴",
                text: `
                <div>
                使用工具:色鉛筆
                </div>
                `
            },
            {
                img: "img/drawpage/7.jpg",
                title: "麥克筆技法練習-草莓",
                text: `
                <div>
                使用工具:麥克筆、立可白
                </div>
                `
            },
            {
                img: "img/drawpage/8.jpg",
                title: "麥克筆技法練習-花",
                text: `
                <div>
                使用工具:麥克筆、炭精筆
                </div>
                `
            },
            {
                img: "img/drawpage/9.jpg",
                title: "麥克筆技法練習-植栽",
                text: `
                <div>
                使用工具:麥克筆、炭精筆
                </div>
                `
            },
            {
                img: "img/drawpage/10.jpg",
                title: "麥克筆技法練習-甜菜",
                text: `
                <div>
                使用工具:麥克筆、炭精筆
                </div>
                `
            },
            {
                img: "img/drawpage/11.jpg",
                title: "麥克筆技法練習-青蛙",
                text: `
                <div>
                使用工具:麥克筆、炭精筆
                </div>
                `
            },
            {
                img: "img/drawpage/12.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:にじさんじEN Ike Eveland<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/13.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:新楓之谷MapleStory 幻影俠盜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/14.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:原創角色 月音靜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/15.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:VISUAL PRISON 基爾提亞‧布里翁<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/16.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:新楓之谷MapleStory 幻影俠盜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/17.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:原創角色 月音靜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/18.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:原創角色 月音靜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/19.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:原創角色 月音靜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/20.jpg",
                title: "人物繪製練習",
                text: `
                <div>
                繪製人物:新楓之谷MapleStory 幻影俠盜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/21.jpg",
                title: "人物繪製-夕陽",
                text: `
                <div>
                繪製人物:原創角色 月音靜<br>
                使用MediBang Paint Pro繪製、Photoshop增加特效
                </div>
                `
            },
            {
                img: "img/drawpage/22.jpg",
                title: "人物繪製-訣別",
                text: `
                <div>
                繪製人物:新楓之谷MapleStory 亞克、埃伯爾<br>
                使用MediBang Paint Pro繪製

                </div>
                `
            },
            {
                img: "img/drawpage/23.jpg",
                title: "人物繪製-樹蔭休憩",
                text: `
                <div>
                繪製人物:新楓之谷MapleStory 幻影俠盜、原創角色 月音靜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/24.jpg",
                title: "人物繪製",
                text: `
                <div>
                繪製人物:VISUAL PRISON O★Z<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/25.jpg",
                title: "人物繪製",
                text: `
                <div>
                繪製人物:新楓之谷MapleStory 幻影俠盜、原創角色 月音靜、新楓之谷MapleStoryOC<br>
                使用Krita繪製

                </div>
                `
            },
            {
                img: "img/drawpage/26.jpg",
                title: "人物繪製-書籤",
                text: `
                <div>
                繪製人物:新楓之谷MapleStory 幻影俠盜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/27.jpg",
                title: "Q版人物練習",
                text: `
                <div>
                繪製人物:原創角色 KAT<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/28.jpg",
                title: "Q版人物練習",
                text: `
                <div>
                繪製人物:原創角色 KAT<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/29.jpg",
                title: "Q版人物繪製-星球繪",
                text: `
                <div>
                繪製人物:、新楓之谷MapleStory 幻影俠盜、新楓之谷MapleStoryOC<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/30.jpg",
                title: "Q版人物繪製-精靈之森 阿爾卡娜",
                text: `
                <div>
                Q版人物繪製-精靈之森 阿爾卡娜<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
            {
                img: "img/drawpage/31.jpg",
                title: "Q版人物繪製-愛爾達斯的步伐",
                text: `
                <div>
                繪製人物:新楓之谷MapleStoryOC<br>
                使用MediBang Paint Pro繪製
                </div>
                `
            },
        ],
        project: {
            img: "img/drawpage/1.jpg",
            title: "靜物素描練習",
            text: `
            <div>
                使用工具:素描筆、軟橡皮
            </div>
            `
        }
    },
    methods: {
        openProjectlist: function(i){
            this.project = this.projectlist[i];
        },
        closePage: function(){
            this.show = false;
            indexpageVue.$set(indexpageVue, "show", true);
        }
    },
    computed: {

    }
})
projectVue['interiordesign'] = new Vue({
    el: '#interiordesignpage',
    data: {
        show: false,
        projectlist: [
            {
                img: "img/interiordesign/1.jpg",
                title: "平面配置圖",
                text: `
                <div>
                使用工具:工程筆
                </div>
                `
            },{
                img: "img/interiordesign/2.jpg",
                title: "材質表現練習",
                text: `
                <div>
                使用工具:麥克筆、代針筆
                </div>
                `
            },{
                img: "img/interiordesign/3.jpg",
                title: "立體材質表現練習",
                text: `
                <div>
                使用工具:麥克筆、代針筆
                </div>
                `
            },{
                img: "img/interiordesign/4.jpg",
                title: "材質表現練習",
                text: `
                <div>
                使用工具:麥克筆、代針筆
                </div>
                `
            },{
                img: "img/interiordesign/5.jpg",
                title: "兩點透視-客廳配置",
                text: `
                <div>
                使用工具:色鉛筆、代針筆
                </div>
                `
            },{
                img: "img/interiordesign/6.jpg",
                title: "兩點透視-臥室配置",
                text: `
                <div>
                使用工具:色鉛筆、代針筆
                </div>
                `
            }
        ],
        project: {
            img: "img/interiordesign/1.jpg",
            title: "平面配置圖",
            text: `
            <div>
            使用工具:工程筆
            </div>
            `
        }
    },
    methods: {
        openProjectlist: function(i){
            this.project = this.projectlist[i];
        },
        closePage: function(){
            this.show = false;
            indexpageVue.$set(indexpageVue, "show", true);
        }
    },
    computed: {

    }
})
projectVue['animationwork'] = new Vue({
    el: '#animationworkpage',
    data: {
        show: false,
        projectlist: [
            {
                img: "img/animationwork/1.jpg",
                anim: "img/animationwork/1.gif",
                title: "Gif製作練習1-打瞌睡",
                text: `
                <div>
                使用MediBang Paint Pro繪製、GIFMaker製作gif<br>
                第一次製作的短編動畫，只使用了四張圖片完成。
                </div>
                `
            },{
                img: "img/animationwork/2.jpg",
                anim: "img/animationwork/2.gif",
                title: "Gif製作練習2-練習走路中",
                text: `
                <div>
                使用MediBang Paint Pro繪製、GIFMaker製作gif<br>
                GIF動畫練習，只使用了三張圖片完成。
                </div>
                `
            },{
                img: "img/animationwork/4.jpg",
                anim: "img/animationwork/4.gif",
                title: "Gif製作練習3-泡泡浴",
                text: `
                <div>
                使用MediBang Paint Pro繪製、GIFMaker製作gif<br>
                GIF動畫練習，只使用了兩張圖片完成。
                </div>
                `
            },{
                img: "img/animationwork/3.jpg",
                anim: "img/animationwork/3.gif",
                title: "Gif製作練習4-臉度動畫練習",
                text: `
                <div>
                使用Krita繪製以及製作<br>
                首張完成度較高的GIF動畫。第一次使用Krita製作較不熟悉，因此只有純粹線搞。Krita能夠使用影格繪製，不再只是一張張圖片播放，使得動畫更流暢。
                </div>
                `
            },{
                img: "img/animationwork/5.jpg",
                anim: "img/animationwork/5.gif",
                title: "Gif製作練習5-Follow with me",
                text: `
                <div>
                使用Krita繪製以及製作<br>
                目前完成度最高的GIF動畫。主要練習頭髮、外套以及裙子隨風擺動的樣子。

                </div>
                `
            }
        ],
        project: {
            img: "img/animationwork/1.jpg",
            anim: "img/animationwork/1.gif",
            title: "Gif製作練習1-打瞌睡",
            text: `
            <div>
            使用MediBang Paint Pro繪製、GIFMaker製作gif<br>
            第一次製作的短編動畫，只使用了四張圖片完成。
            </div>
            `
        }
    },
    methods: {
        openProjectlist: function(i){
            this.project = this.projectlist[i];
        },
        closePage: function(){
            this.show = false;
            indexpageVue.$set(indexpageVue, "show", true);
        }
    },
    computed: {

    }
})
projectVue['myprojects'] = new Vue({
    el: '#myprojectspage',
    data: {
        show: false,
        projectlist: [
            {
                imgList: [
                    "img/myprojects/1-1.jpg",
                    "img/myprojects/1-2.jpg",
                    "img/myprojects/1-3.jpg",
                    "img/myprojects/1-4.jpg"
                ],
                title: "系列商品-戀上月的貓",
                text: `
                <div>
                使用材料:不織布手提袋、記事本、矽藻土杯墊
                <br>使用工具:娟版印刷
                <br>-作品故事-
            　　<br>孤獨的黑貓被高高掛在天空的明月所吸引，深深愛上了那與自己的漆黑截然不同的皎白，祂總在深夜時眺望著夜空，期盼著有朝一日能觸碰到自己所深愛的月亮。
                <br>-設計說明-
            　　<br>主題發想以夜晚為出發點，黑貓作為夜晚常出沒的動物之一，月亮更是夜晚的代表，黑貓的漆黑與月亮的皎白，形成完美的對比，能藉此強調彼此的存在，即使月亮在畫面中佔據大面積，也不會過於搶眼，選擇了這兩個元素作為這系列作品的主角。
            　　<br>使用大面積的色塊和單一的色系，而不是增加豐富的色彩和精緻的畫面，保持畫面簡潔，集中視線於作品的重點。
                </div>
                `
            },{
                imgList: [
                    "img/myprojects/2.jpg"
                ],
                title: "木製擺盤-鳥",
                text: `
                <div>
                使用工具:木頭、鑿刀、刨刀、線鋸機、砂紙
                </div>
                `
            },{
                imgList: [
                    "img/myprojects/3.jpg"
                ],
                title: "木製手機架",
                text: `
                <div>
                使用材料:木料<br>
                使用工具:鑿刀、刨刀、線鋸機、鑽孔機、砂紙
                </div>
                `
            },{
                imgList: [
                    "img/myprojects/4.jpg"
                ],
                title: "「秀水高工2022室在畢行-青綠」周邊商品-杯套",
                text: `
                <div>
                使用材料:不織布<br>
                使用工具:網版印刷
                </div>
                `
            }
        ],
        project: {
            imgList: [
                "img/myprojects/1-1.jpg",
                "img/myprojects/1-2.jpg",
                "img/myprojects/1-3.jpg",
                "img/myprojects/1-4.jpg"
            ],
            title: "系列商品-戀上月的貓",
            text: `
            <div>
            使用材料:不織布手提袋、記事本、矽藻土杯墊
            <br>使用工具:娟版印刷
            <br>-作品故事-
        　　<br>孤獨的黑貓被高高掛在天空的明月所吸引，深深愛上了那與自己的漆黑截然不同的皎白，祂總在深夜時眺望著夜空，期盼著有朝一日能觸碰到自己所深愛的月亮。
            <br>-設計說明-
        　　<br>主題發想以夜晚為出發點，黑貓作為夜晚常出沒的動物之一，月亮更是夜晚的代表，黑貓的漆黑與月亮的皎白，形成完美的對比，能藉此強調彼此的存在，即使月亮在畫面中佔據大面積，也不會過於搶眼，選擇了這兩個元素作為這系列作品的主角。
        　　<br>使用大面積的色塊和單一的色系，而不是增加豐富的色彩和精緻的畫面，保持畫面簡潔，集中視線於作品的重點。
            </div>
            `
        }
    },
    methods: {
        openProjectlist: function(i){
            this.project = this.projectlist[i];
        },
        closePage: function(){
            this.show = false;
            indexpageVue.$set(indexpageVue, "show", true);
        }
    },
    computed: {

    }
})
