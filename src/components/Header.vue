<!--
 * @Author: johnwang
 * @since: 2019-11-02 20:11:45
 * @lastTime: 2019-11-02 23:00:34
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 -->
<template>
  <div class="Header">
    <div class="header-container">
      <div class="flex header-left">
        <div style="display:flex;font-size:26px">
          <i class="el-icon-s-operation" style="margin:20px"></i>
          <el-input placeholder="搜索" suffix-icon="el-icon-search" v-model="search" style="margin-top:10px">
          </el-input>
        </div>
      </div>
      <div class="flex header-right">
        <div style="display:flex;font-size: 26px;">
            <i class="el-icon-chat-line-square" style="margin:20px;"></i>
          <el-dropdown style="margin-top:10px;">
            <el-button>
              <el-avatar :src="userImfor.userAvatarSrc" style="width:20px;height:20px;margin-right:6px;color:#606266">
              </el-avatar>
              {{userImfor.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的资料</el-dropdown-item>
              <el-dropdown-item>修改信息</el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .Header {
    width: 100%;
    height: 70px;
    background: #fff;
    position: absoulte;
    top: 0;
  }

  .header-container {
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .header-left {
    width: 30%;
  }

  .header-right {
    width: 20%;
  }
</style>

<script>
  export default {
    data() {
      return {
        search: ''
      };
    },

    props: ['userImfor'],

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }
</script>