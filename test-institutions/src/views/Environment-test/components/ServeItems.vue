<template>
  <div class="serve-items-box">
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
      :stretch="true"
    >
      <el-tab-pane label="水" name="1">
        <h2 class="h2-padding">水</h2>
        <hr />
        <div class="tag-items">
          <el-tag class="tag-padding" type="blue">土壤</el-tag>
          <el-tag class="tag-padding" type="blue">固体废物</el-tag>
          <el-tag class="tag-padding" type="blue">底质</el-tag>
          <el-tag class="tag-padding" type="blue">沉积物</el-tag>
          <el-tag class="tag-padding" type="blue">污泥</el-tag>
          <el-tag class="tag-padding" type="blue">生活垃圾</el-tag>
          <el-tag class="tag-padding" type="blue">农林土壤</el-tag>
        </div>
        <div class="tag-qualifications">
          <el-tag class="tag-padding" type="yellow">国标</el-tag>
          <el-tag class="tag-padding" type="yellow">行标</el-tag>
          <el-tag class="tag-padding" type="yellow">CMA资质</el-tag>
        </div>
        <div class="e-passage">
          <p>溶解性总固体、叶绿素a、总有机碳、碱度、氨氮、总氮、凯氏氮、总磷、溶解氧、生化需氧量（BOD）、化学需氧量（COD)、硝酸盐、阴离子表面活性剂、亚硝酸盐（NO2-）、硝酸盐氮、碱解氮、硫酸盐（SO42-）、亚硫酸盐（SO32-）、亚氯酸盐、氯化物、磷酸盐（PO43-）、有机氯、总铬、六价铬、甲基汞、乙基汞、烷基汞、总汞、悬浮物、色度、浑浊度、臭和味、肉眼可见物、pH、总硬度、氧化还原电位、含沙量、水色、水温、各类金属含量、挥发性卤代烃、挥发性有机物、石油烃（C6-C9、C10-C40）、苯系物、硝基苯类化合物、三硝基苯（TNB）、多氯联苯、有机氯农药和氯苯类化合物、卤代乙酸类化合物、多环芳烃、五氯酚、酚类化合物、半挥发性有机化合物、六六六、滴滴涕、有机磷农药、细菌总数、总大肠菌群数、弧菌数量、粪大肠菌群、沉积物异养细菌总数、氟化物、挥发酚、鱼卵和子、稚鱼个体数、200项农残、抗生素56种（四环素类、磺胺类、氟喹诺酮类、大环内脂类、β酰胺类、氯霉素类、利奈唑胺、链霉素、马波沙星、甲砜霉素、苯氧乙酸、替米沙坦、2-氨基-5-（4-羧基-2-赛唑基）-戊酸、布洛芬、他唑巴坦/三唑巴坦）等。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="土" name="2">
         <h2 class="h2-padding">土</h2>
        <hr />
        <div class="tag-items">
          <el-tag class="tag-padding" type="blue">土壤</el-tag>
          <el-tag class="tag-padding" type="blue">固体废物</el-tag>
          <el-tag class="tag-padding" type="blue">底质</el-tag>
          <el-tag class="tag-padding" type="blue">沉积物</el-tag>
          <el-tag class="tag-padding" type="blue">污泥</el-tag>
          <el-tag class="tag-padding" type="blue">生活垃圾</el-tag>
          <el-tag class="tag-padding" type="blue">农林土壤</el-tag>
        </div>
        <div class="tag-qualifications">
          <el-tag class="tag-padding" type="yellow">国标</el-tag>
          <el-tag class="tag-padding" type="yellow">行标</el-tag>
          <el-tag class="tag-padding" type="yellow">CMA资质</el-tag>
        </div>
        <div class="e-passage">
          <p>渗滤率、烧失量、干物质、含水率、pH、阳离子交换量、碳氮比、有机质、有机碳、氨氮、亚硝酸盐氮、硝酸盐氮、全氮、水溶性硫酸盐、酸溶性硫酸盐、碳酸钙、可交换酸度、水溶性总盐量、氧化还原电位、水稳性大团聚体组成、土壤微团聚体组成、水解性氮（碱解氮）、氧化稀土总量、油类、粗灰分、腐殖质、富里酸、种子发芽指数、总汞、甲基汞、乙基汞、全磷、总磷、（总）氰化物、水溶性氟化物、硫化物、各种金属含量（总量，全量，有效态，速效态等）、有效硫、有效硅、有效磷、全盐量、碳酸根、重碳酸根、硫酸根、氯离子、钠离子、钾离子、钙离子、镁离子、全硅、全硫、六价铬、速效氮、速效磷、速效钾、交换性钙、交换性镁、交换性钾、交换性钠、交换性酸量、交换性盐基总量、土壤微生物量碳、土壤微生物量氮、土壤微生物量磷、矿质氮（NH4+-N, NO3--N）测定、真菌、细菌、放线菌、土壤机械组成/粒径分析、200项农残、多氯联苯、六六六和滴滴涕、半挥发性有机物、酚类化合物、多环芳烃、挥发性卤代烃、挥发性有机物、有机磷农药、石油烃（C6-C9、C10-C40）、苯系物、硝基苯类化合物、三硝基苯（TNB）、有机氯农药和氯苯类化合物、氯苯、氯苯类化合物、卤代乙酸类化合物、挥发酚、GB36600土壤45项、抗生素56种（四环素类、磺胺类、氟喹诺酮类、大环内脂类、β酰胺类、氯霉素类、利奈唑胺、链霉素、马波沙星、甲砜霉素、苯氧乙酸、替米沙坦、2-氨基-5-（4-羧基-2-赛唑基）-戊酸、布洛芬、他唑巴坦/三唑巴坦）等。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="气体" name="3">
         <h2 class="h2-padding">气体</h2>
        <hr />
        <div class="tag-items">
          <el-tag class="tag-padding" type="blue">土壤</el-tag>
          <el-tag class="tag-padding" type="blue">固体废物</el-tag>
          <el-tag class="tag-padding" type="blue">底质</el-tag>
          <el-tag class="tag-padding" type="blue">沉积物</el-tag>
          <el-tag class="tag-padding" type="blue">污泥</el-tag>
          <el-tag class="tag-padding" type="blue">生活垃圾</el-tag>
          <el-tag class="tag-padding" type="blue">农林土壤</el-tag>
        </div>
        <div class="tag-qualifications">
          <el-tag class="tag-padding" type="yellow">国标</el-tag>
          <el-tag class="tag-padding" type="yellow">行标</el-tag>
          <el-tag class="tag-padding" type="yellow">CMA资质</el-tag>
        </div>
        <div class="e-passage">
          <p>烟气黑度、烟温、湿度、流速、流量、氧气、烟（粉）尘（颗粒物）、低浓度颗粒物、饮食业油烟、油烟和油雾、恶、臭氧、光气、沥青烟、降尘、总悬浮颗粒物、风向、风速、气压、总云量、能见度、PM2.5、PM10、硫酸盐化速率、铅、气态汞、金属及其化合物、铬（六价）、锰、金属元素、水溶性阴离子、氯气、氯化氢、硫化氢、氰化氢、氟化氢、氟化物、气态总磷、硫酸雾、铬酸雾、二氧化硫、一氧化碳、二氧化碳、二氧化氮、氮氧化物、氨、挥发性有机物、挥发性卤代烃、甲烷、非甲烷总烃、总烃、苯系物、氯乙烯、多氯联苯、硝基苯类化合物、氯苯类化合物、甲醇、甲硫醇、甲硫醚、二甲二硫醚、苯酚类化合物、苯胺、三甲胺、甲醛、醛、酮类化合物、乙醛、丙烯腈、苯并（a）芘、多环芳烃、有机氯农药、酞酸酯类、甲酸、乙酸等。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="肥料" name="4">
         <h2 class="h2-padding">肥料</h2>
        <hr />
        <div class="tag-items">
          <el-tag class="tag-padding" type="blue">土壤</el-tag>
          <el-tag class="tag-padding" type="blue">固体废物</el-tag>
          <el-tag class="tag-padding" type="blue">底质</el-tag>
          <el-tag class="tag-padding" type="blue">沉积物</el-tag>
          <el-tag class="tag-padding" type="blue">污泥</el-tag>
          <el-tag class="tag-padding" type="blue">生活垃圾</el-tag>
          <el-tag class="tag-padding" type="blue">农林土壤</el-tag>
        </div>
        <div class="tag-qualifications">
          <el-tag class="tag-padding" type="yellow">国标</el-tag>
          <el-tag class="tag-padding" type="yellow">行标</el-tag>
          <el-tag class="tag-padding" type="yellow">CMA资质</el-tag>
        </div>
        <div class="e-passage">
          <p>磷酸二氢钾、水溶性五氧化二磷、水分、pH值、水不溶物、氯化物、氯离子以及各种元素含量、砷、汞、有机质、总养分（以N+P2O5+K2O计）、氮（N)、磷（P2O5）、钾（K2O）、微量元素、密度、金属及其化合物、总氮、有效磷、水溶性磷、水溶性磷占有效磷的质量分数、酸碱度、蛔虫卵死亡率、粪大肠菌群、土霉素、四环素、金霉素、强力霉素、总钙、总镁、总硫、肥料密度、游离氨基酸、粗灰分、铵态氮、硝态氮、缩二脲、硫酸盐、抗生素、总氮释放量、钾释放量、黄腐酸、总腐殖酸、可溶性腐殖酸、速效氮、速效钾、有效活菌数、细度、粒度、养分释放相关指标（养分释放率、养分释放期、初期养分释放率、28d累积养分释放率、养分释放期的累积养分释放率、控释养分量、控释养分释放期、控释养分28d的累积养分释放率、控释养分释放期的累积养分释放率）、氮的释放量、钾的释放量、氯离子、水溶性磷占有效磷百分率、水溶磷占有效磷百分率、微量元素单一养分质量分数、杂菌率、氯化铵（NH4Cl）的质量分数、水的质量分数、灼烧残渣的质量分数、铁（Fe）的质量分数、重金属的质量分数（以Pb计）、硫酸盐的质量分数、氮（N）的质量分数、钠盐的质量分数（以Na计）、砷及其化合物的质量分数（以As计）、镉及其化合物的质量分数（以Cd计）、铅及其化合物的质量分数（以Pb计）、铬及其化合物的质量分数（以Cr计）、汞及其化合物的质量分数（以Hg计）、氧化钾质量分数、硫的质量分数、氯离子(Cl-)、游离酸、游离水、挥发性有机化合物、三氯乙醛等。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="植物" name="5">
         <h2 class="h2-padding">植物</h2>
        <hr />
        <div class="tag-items">
          <el-tag class="tag-padding" type="blue">土壤</el-tag>
          <el-tag class="tag-padding" type="blue">固体废物</el-tag>
          <el-tag class="tag-padding" type="blue">底质</el-tag>
          <el-tag class="tag-padding" type="blue">沉积物</el-tag>
          <el-tag class="tag-padding" type="blue">污泥</el-tag>
          <el-tag class="tag-padding" type="blue">生活垃圾</el-tag>
          <el-tag class="tag-padding" type="blue">农林土壤</el-tag>
        </div>
        <div class="tag-qualifications">
          <el-tag class="tag-padding" type="yellow">国标</el-tag>
          <el-tag class="tag-padding" type="yellow">行标</el-tag>
          <el-tag class="tag-padding" type="yellow">CMA资质</el-tag>
        </div>
        <div class="e-passage">
          <p>全氮、全磷、全钾、有机碳、粗灰分、粗蛋白、可溶性蛋白、蛋白组分（清蛋白，球蛋白，醇蛋白，谷蛋白）、粗脂肪、无氮浸出物、水溶性糖、淀粉、可溶性淀粉、总淀粉、直链淀粉和支链淀粉、多糖、总糖、可溶性总糖、还原糖、糖组分（葡萄糖、果糖和蔗糖）、β-葡聚糖、半纤维素、纤维素及木质素、粗纤维、酸性洗涤纤维、中性洗涤纤维、总膳食/可溶性膳食/不可溶性膳食纤维、碳水化合物、植物激素类、短链脂肪酸类、中长链脂肪酸类、氨基酸类、维生素类、有机酸类、酚酸类、类黄酮类、单宁类、花青素类、矿质离子类、胆汁酸类、花生四烯酸类、能量代谢物（TCA）类、烯萜类、生物胺类、苯丙氨酸代谢通路、可溶性固形物、总游离氨基酸、赖氨酸、脯氨酸、维生素C（L+抗坏血酸）、维生素E、苯醇抽提物、可滴定酸/总酸、草酸、可溶性果胶/原果胶/总果胶、叶绿素总量、叶绿素a、叶绿素b、类胡萝卜素类及总量、β胡萝卜素、番茄红素、黄酮、异黄酮、花青素、花色苷、总酚、茶多酚、棉酚（棉花）、儿茶素、单宁、总生物碱、甜菜碱、咖啡碱、硝酸盐、亚硝酸盐、pH、根系活力、总三萜、三萜及甾醇、面筋、皂苷、灰分、各类金属含量、透明度、气味、滋味、相对密度等。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="食品" name="6">
         <h2 class="h2-padding">食品</h2>
        <hr />
        <div class="tag-items">
          <el-tag class="tag-padding" type="blue">土壤</el-tag>
          <el-tag class="tag-padding" type="blue">固体废物</el-tag>
          <el-tag class="tag-padding" type="blue">底质</el-tag>
          <el-tag class="tag-padding" type="blue">沉积物</el-tag>
          <el-tag class="tag-padding" type="blue">污泥</el-tag>
          <el-tag class="tag-padding" type="blue">生活垃圾</el-tag>
          <el-tag class="tag-padding" type="blue">农林土壤</el-tag>
        </div>
        <div class="tag-qualifications">
          <el-tag class="tag-padding" type="yellow">国标</el-tag>
          <el-tag class="tag-padding" type="yellow">行标</el-tag>
          <el-tag class="tag-padding" type="yellow">CMA资质</el-tag>
        </div>
        <div class="e-passage">
          <p>pH、水分、灰分、粗脂肪、粗蛋白、水溶性蛋白、水溶性还原糖、总黄酮、脂肪酸值、垩白度、碘值、皂化值、酸价、过氧化值、脂肪酸组成、丙二醛、多酚、全氮、铵盐、氯化物、挥发性盐基氮、不挥发酸、总糖、淀粉、食品多元素（金属、非金属）、食品微生物、食品合成着色剂、食品添加剂、农药及相关化学品残留、苯、甲酸、山梨酸和糖精钠、邻苯二甲酸酯含量、氨基酸态氮、总酸、总砷、菌落总数、大肠菌群、甜蜜素、维生素类、支链淀粉、直链淀粉、常见抗生素、合成着色剂、苏丹红、黄曲霉毒素、反式脂肪酸、环己基氨基磺酸钠、碱性橙染料、纳他霉素、动植物油脂水分及挥发物、苯甲酸、抗氧化剂、甜味剂、碱性、苯并(α)芘、维生素、多元素等。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="高端项目" name="7">
         <h2 class="h2-padding">高端项目</h2>
        <hr />
        <div class="tag-items">
          <el-tag class="tag-padding" type="blue">土壤</el-tag>
          <el-tag class="tag-padding" type="blue">固体废物</el-tag>
          <el-tag class="tag-padding" type="blue">底质</el-tag>
          <el-tag class="tag-padding" type="blue">沉积物</el-tag>
          <el-tag class="tag-padding" type="blue">污泥</el-tag>
          <el-tag class="tag-padding" type="blue">生活垃圾</el-tag>
          <el-tag class="tag-padding" type="blue">农林土壤</el-tag>
        </div>
        <div class="tag-qualifications">
          <el-tag class="tag-padding" type="yellow">国标</el-tag>
          <el-tag class="tag-padding" type="yellow">行标</el-tag>
          <el-tag class="tag-padding" type="yellow">CMA资质</el-tag>
        </div>
        <div class="e-passage">
          <p>土壤/植物酶活、同位素、放射性、固废、危废、水体微塑料、土壤水力特征曲线、土壤硝化速率、土壤反硝化速率、土壤厌氧氨氧化速率、土壤颗粒有机碳POC、土壤水溶性有机碳DOC、土壤易氧化有机碳ROC、土壤重组有机碳HFOC、土壤轻组碳LFOC、土壤13种元素BCR提取（残渣态、弱酸提取态、可还原态、可氧化态、水溶态）、土壤微生物磷脂脂肪酸（PLFA）、风味物质、成分分析等。</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>

.serve-items-box {
  width: 80%;
  margin: 0 auto;
}

.el-tag--blue{
  background-color: #d5eafc !important;
  color: rgb(91, 191, 248) !important;
}

.el-tag--yellow{
  background-color: #fadeb9 !important;
  color: rgb(247, 179, 78) !important;
}

/* 转换选项字体大小 */
.el-tabs__item {
  font-size: 18px !important;
}

.h2-padding {
  margin: 30px 30px;
}

.tag-padding {
  margin: 0 15px;
}

.tag-items{
  margin-top: 40px;
  margin-bottom: 30px;
}
.tag-qualifications{
  margin-bottom: 40px;
}
.e-passage{
  color: rgb(126, 126, 126);
}
</style>

<script>
export default {
  name: "ServeItems",
  data() {
    return {
      activeName: "1",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>