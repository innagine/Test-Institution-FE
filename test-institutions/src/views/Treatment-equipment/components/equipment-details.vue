<template>
    <div class="equipment-details-box">
        <div class="left-box">
            <div class="picture">
                <el-image :src="choiceEquipment.picture">
                    <div slot="error">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
            <div class="equipment-consult">
                <el-button @click="showContact">返回</el-button>
            </div>
        </div>
        <div class="right-box">
            <el-divider></el-divider>
            <div class="text-box">
                <div class="lable">设备名称：</div>
                <div class="text">{{choiceEquipment.name}}</div>
            </div>
            <el-divider></el-divider>
            <div class="text-box1">
                <div class="lable">设备介绍：</div>
                <div class="text">{{choiceEquipment.information}}</div>
            </div>
            <el-divider></el-divider>
            <div class="text-box">
                <div class="lable">设备价格：</div>
                <div class="text">{{choiceEquipment.price}}</div>
            </div>
            <el-divider></el-divider>
            <div class="text-box">
                <div class="lable">所属地区：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider>
            <div class="text-box">
                <div class="lable">具体地址：</div>
                <div class="text">{{choiceEquipment.address}}</div>
            </div>
            <el-divider></el-divider>
            <div class="text-box">
                <div class="lable">设备等级：</div>
                <div class="text">{{choiceEquipment.grade==1?'基础设备':'高级设备'}}</div>
            </div>
            <el-divider></el-divider>
            <!-- <div class="institution">
                <div class="lable">所属机构：</div>
                <div class="text"></div>
            </div>
            <el-divider></el-divider> -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'EquipmentDetsils',
    data(){
        return {
            contact:'',
            showContactValue:false,
        }
    },
    computed:{
      ...mapState(['choiceEquipment'])
    },
    methods:{
        showContact(){
            this.$router.push('/equipments');
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
        .text-box{
          display: flex;
          .lable{
            width: 80px;
          }
        }
    }
}
</style>