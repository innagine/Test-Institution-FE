<template>
  <div class="PRcontent">
    <el-steps :space="200" :active="3" finish-status="success" class="steps">
      <el-step title="待提交"></el-step>
      <el-step title="已提交"></el-step>
      <el-step title="审核中"></el-step>
      <el-step title="待操作"></el-step>
      <el-step title="待检测"></el-step>
      <el-step title="检测中"></el-step>
      <el-step title="已完成"></el-step>
    </el-steps>

    <div class="select">
      <span class="institution">请选择检测机构：</span>
      <el-select v-model="value" placeholder="请选择检测机构" class="options">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" plain>确认机构</el-button>
      <el-popover class="progressBtn"
        placement="top-start"
        title="提示"
        width="200"
        trigger="hover"
        content="可以申请更换推荐新一批的检测机构。">
        <el-button slot="reference" type="warning" plain>申请更换</el-button>
      </el-popover>
      <!-- <el-button type="warning" plain>申请更换</el-button> -->
    </div>

    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="机构A" name="1">
        <div>价格：168</div>
        <div>机构资质：高级检测机构</div>
        <div>机构地址：广东省江门市蓬江区五邑大学</div>
      </el-collapse-item>
      <el-collapse-item title="机构B" name="2">
        <div>价格：168</div>
        <div>机构资质：高级检测机构</div>
        <div>机构地址：广东省江门市蓬江区五邑大学</div>
      </el-collapse-item>
      <el-collapse-item title="机构C" name="3">
        <div>价格：168</div>
        <div>机构资质：高级检测机构</div>
        <div>机构地址：广东省江门市蓬江区五邑大学</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style>
.PRcontent {
  width: 96%;
  margin: 0 auto;
}

.steps {
  margin-top: 20px;
  margin-bottom: 20px;
}
.institution,
.options{
  margin-right: 20px;
}
.progressBtn{
    margin-left: 20px;
}
.select {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>

<script>
export default {
  name: "Progress",
  data() {
    return {
      activeName: "",
      options: [
        {
          value: "选项1",
          label: "机构A",
        },
        {
          value: "选项2",
          label: "机构B",
        },
        {
          value: "选项3",
          label: "机构C",
        },
      ],
      value: "",
    };
  },
};
</script>