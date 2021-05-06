<template>
    <div class="equipment-details-box">
        <div class="left-box">
            <div class="picture">
                <el-image>
                    <div slot="error">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
            <div class="equipment-consult">
                <el-button @click="showContact">获取质询方式</el-button>
                <div class="information" v-show="showContactValue">
                    <el-input v-model="contact" placeholder="质询方式"></el-input>
                </div>
            </div>
        </div>
        <div class="right-box">
            <el-divider></el-divider>
            <div class="name">
                <div class="lable">设备名称：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
            <div class="information">
                <div class="lable">设备介绍：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
            <div class="price">
                <div class="lable">设备价格：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
            <div class="region">
                <div class="lable">所属地区：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
            <div class="address">
                <div class="lable">具体地址：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
            <div class="grade">
                <div class="lable">设备等级：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
            <div class="institution">
                <div class="lable">所属机构：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
        </div>
    </div>
</template>

<script>
export default {
    name:'EquipmentDetsils',
    data(){
        return {
            contact:'',
            showContactValue:false,
        }
    },
    methods:{
        showContact(){
            this.showContactValue = !this.showContactValue;
        }
    },
}
</script>

<style lang="scss" scoped>
.equipment-details-box{
    width: 80%;
    margin: 0 auto;
    display: flex;
    .left-box{
        width: 60%;
        .picture{
            .el-image{
                width: 90%;
                height: 400px;
                display: flex ;
                justify-content: center ;
                align-items: center ;
                background: #f5f7fa ;
                margin: 5px;
                i{
                    font-size: 30px;
                }
            }
        }
        .equipment-consult{
            width: 40%;
            .information{
                margin-top: 10px;
            }
        }
    }
    .right-box{
        width: 40%;
    }
}
</style>