<script>
import { ElButton, ElInput, ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/user';

const user = useUserStore();

export default {
  components: {
    ElInput,
  },
  data: () => {
    return {
      value: '',
    };
  },
  methods: {
    SignOut() {
      user.SignOut();
      ElMessage('Đăng xuất thành công');
      this.$router.push({
        path: '/loginmanager',
      });
    },
  },
};
</script>

<template>
  <div class="header">
    <div class="header-box container">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/img/logo1.png" class="logo" />
        </router-link>
      </div>
      <el-button @click="SignOut">Đăng xuất</el-button>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: sticky;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  background: #38be55;

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    .logo {
      max-width: 60px;
      max-height: 60px;
      border-radius: 9px;
    }
    .text {
      color: aqua;
    }
    .search-input {
      width: 300px;
      margin-left: 10px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      padding: 4px 8px;

      &:focus {
        outline: none;
        border: 2px solid rgba(61, 108, 185, 0.6);
        box-shadow: rgba(0, 224, 255, 0.1) 0px 6px 12px -2px,
          rgba(0, 224, 255, 0.1) 0px 3px 7px -3px;
      }
    }
    .menu-icon {
      font-size: 26px;
    }
    .action-link {
      text-decoration: none;
    }
  }
}
</style>
